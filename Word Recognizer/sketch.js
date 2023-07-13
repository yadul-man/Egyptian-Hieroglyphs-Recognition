// The model is able to recognize the words : bull, pregnant, bread, chair, cook, destroy, fly, house, pray, rain
let shapeClassifier;
let canvas;
let resultsDiv;
let video;
let mainTitle;

function setup() {
  mainTitle = createDiv('EGYPTIAN HIEROGLYPHS WORD RECOGNIZER');
  mainTitle.style('font-size', '70px');
  mainTitle.style('color', 'black');
  mainTitle.style('font-family', 'BoiledHedgehog');
  
  canvas = createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.size(64, 64);
  video.hide();
  
  let options = {
    task: 'imageClassification',
  };
  shapeClassifier = ml5.neuralNetwork(options);
  const modelDetails = {
    model: 'model4/model.json',
    metadata: 'model4/model_meta.json',
    weights: 'model4/model.weights.bin',
  };
  shapeClassifier.load(modelDetails, modelLoaded);

  background(255);

  
  resultsDiv = createDiv('Loading model...');
  resultsDiv.style('font-family', 'Garamond');
  resultsDiv.style('font-size', '60px');
  resultsDiv.position(width / 3, height / 2);
}

function modelLoaded() {
  console.log('Model ready!');
  classifyImage();
}

function classifyImage() {
  shapeClassifier.classify(
    {
      image: video,
    },
    gotResults
  );
}

function gotResults(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  let label = results[0].label;
  let confidence = nf(100 * results[0].confidence, 2,1);
  resultsDiv.position(width / 2, height / 1.5);
  resultsDiv.html(`Recognized word:<br> ${label}`);
  
  classifyImage();
}

function draw() {
  image(video, 0, 0, width, height); 
}
