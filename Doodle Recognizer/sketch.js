let shapeClassifier;
let canvas;
let resultsDiv;
let inputImage;
let clearButton;
let textBoxClearButton;
let resultButton;
let resultTextBox;
let letterButton1, letterButton2, letterButton3;
let wordSuggestionButton1, wordSuggestionButton2, wordSuggestionButton3;
let suggestions = [];
let wordlist = [
  'act', 'add', 'aid', 'apple', 'army', 'ask',
  'ball', 'bath', 'beg', 'burn', 'buy',
  'cat', 'coin', 'cook', 'corn', 'cry', 'cut',
  'dance', 'dead', 'dice', 'die', 'dig', 'dog', 'draw',
  'ear', 'earn', 'east', 'eat', 'edge', 'egg', 'end',
  'farm', 'fish', 'flag', 'flee', 'fly', 'food', 'fox', 
  'game', 'gift', 'girl', 'give', 'gold', 'grow',
  'hair', 'hand', 'hare', 'help', 'home', 'hunt',
  'ink', 'iron',
  'jade', 'jail', 'jump', 
  'kick', 'kill', 'king', 'knot', 
  'lake', 'lamp', 'live', 'leaf', 'leg',
  'mate', 'meet', 'mend', 'mist', 'moon', 'move',
  'nail', 'name', 'nest', 'note', 
  'obey', 'open', 'oven', 'own', 
  'pack', 'pain', 'park', 'pay', 'pull', 'push',
  'queen',
  'rain', 'read', 'ring', 'river', 'road', 'room', 'run',
  'sail', 'salt', 'sand', 'sell', 'ship', 'song', 
  'tar', 'time', 'tear', 'test', 'tide', 'tower', 'tree', 
  'under', 'undo', 'untie', 'use', 
  'vase', 'veil', 'vice', 'visit', 
  'wall', 'wave', 'wife', 'wind', 'work', 
  'yarn', 'yawn', 'yield',
  'zero'
];

function checkTextBox() {
  if (resultTextBox.value() == '')
    return;
  
  for (let word of wordlist) {
    if (word.startsWith(resultTextBox.value().toLowerCase())) {
      suggestions.push(word); 
    }
  }
  
  if (suggestions[0] != undefined)
    wordSuggestionButton1.html(suggestions[0]);
  else 
    wordSuggestionButton1.html('-');
  
  if (suggestions[1] != undefined)
    wordSuggestionButton2.html(suggestions[1]);
  else 
    wordSuggestionButton2.html('-');
  
  if (suggestions[2] != undefined)
    wordSuggestionButton3.html(suggestions[2]);
  else 
    wordSuggestionButton3.html('-');
  
  suggestions = [];
}

function setup() {
  mainTitle = createDiv('EGYPTIAN HIEROGLYPHS DOODLE RECOGNIZER');
  mainTitle.style('font-size', '59px');
  mainTitle.style('color', 'black');
  mainTitle.style('font-family', 'SanMarinoBeach');
  
  canvas = createCanvas(400, 400);
  
  let options = {
    task: 'imageClassification',
  };
  shapeClassifier = ml5.neuralNetwork(options);
  const modelDetails = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin',
  };
  shapeClassifier.load(modelDetails, modelLoaded);

  background(255);
  
  clearButton = createButton('Clear canvas');
  clearButton.position(windowWidth / 10, windowHeight / 3.5);
  clearButton.style('background-color', '#2D2D2D');
  clearButton.mousePressed(function() {
    background(255);
    checkTextBox();
  });
  
  textBoxClearButton = createButton('Clear');
  textBoxClearButton.position(windowWidth - windowWidth / 3.5, windowHeight / 2.5);
  textBoxClearButton.style('background-color', '#333');
  textBoxClearButton.mousePressed(function() {
    resultTextBox.value('');
    suggestions = [];
    wordSuggestionButton1.html('-');
    wordSuggestionButton2.html('-');
    wordSuggestionButton3.html('-');
  })
  
  resultTextBox = createInput('');
  resultTextBox.id('resultTextBox');
  resultTextBox.position(windowWidth - windowWidth / 2.5, windowHeight / 3.5);
  resultTextBox.size(390);
  
  wordSuggestionButton1 = createButton('-');
  wordSuggestionButton1.position(windowWidth - windowWidth / 2.5, windowHeight / 2.5);
  wordSuggestionButton1.style('background-color', '#000000');
  
  wordSuggestionButton2 = createButton('-');
  wordSuggestionButton2.position(windowWidth - windowWidth / 2.5, windowHeight / 1.8);
  wordSuggestionButton2.style('background-color', '#000000');
  
  wordSuggestionButton3 = createButton('-');
  wordSuggestionButton3.position(windowWidth - windowWidth / 2.5, windowHeight / 1.4);
  wordSuggestionButton3.style('background-color', '#000000');

  letterButton1 = createButton('Z');
  letterButton1.position(windowWidth / 10, windowHeight / 2.5);
  letterButton1.style('background-color', '#282612');
  letterButton1.style('font-size', '120px');
  
  // letterButton2 = createButton('?');
  // letterButton2.position(windowWidth / 10, windowHeight / 1.8);
  // letterButton2.style('background-color', '#282612');
  
  // letterButton3 = createButton('?');
  // letterButton3.position(windowWidth / 10, windowHeight / 1.4);
  // letterButton3.style('background-color', '#282612');
  
  letterButton1.mousePressed(function() {
    let val = resultTextBox.value();
    resultTextBox.value(val + letterButton1.html());
    background(255);
    checkTextBox();
  });

  // letterButton2.mousePressed(function() {
  //   let val = resultTextBox.value();
  //   resultTextBox.value(val + wordButton2.html());
  //   // console.log(val);
  //   background(255);
  //   checkTextBox();
  // });
  
  // letterButton3.mousePressed(function() {
  //   let val = resultTextBox.value();
  //   resultTextBox.value(val + wordButton3.html());
  //   // console.log(val);
  //   background(255);
  //   checkTextBox();
  // });
  
  inputImage = createGraphics(64, 64);
}

function modelLoaded() {
  console.log('Model ready!');
  classifyImage();
}

function classifyImage() {
  inputImage.copy(canvas, 0, 0, 400, 400, 0, 0, 64, 64);
  shapeClassifier.classify(
    {
      image: inputImage,
    },
    gotResults
  );
}

function gotResults(err, results) {
  if (err) {
    console.error(err);
    return;
  }

  letterButton1.html(results[0].label);
  
  classifyImage();
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(6);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
