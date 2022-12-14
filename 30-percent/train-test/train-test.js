let A = [];
let B = [];
let C = [];
let D = [];
let E = [];
let F = [];
let G = [];
let H = [];
let I = [];
let J = [];
let K = [];
let L = [];
let M = [];
let N = [];
let O = [];
let P = [];
let Q = [];
let R = [];
let S = [];
let T = [];
let U = [];
let V = [];
let W = [];
let X = [];
let Y = [];
let Z = [];

function preload() {
  for (let i = 0; i < 100; i++) {
    let index = nf(i + 1, 4, 0);
    A[i] = loadImage(`dataset/A${index}.png`);
    B[i] = loadImage(`dataset/B${index}.png`);
    C[i] = loadImage(`dataset/C${index}.png`);
    D[i] = loadImage(`dataset/D${index}.png`);
    // E[i] = loadImage(`dataset/E${index}.png`);
    // F[i] = loadImage(`dataset/F${index}.png`);
    // G[i] = loadImage(`dataset/G${index}.png`);
    // H[i] = loadImage(`dataset/H${index}.png`);
    // I[i] = loadImage(`dataset/I${index}.png`);
    // J[i] = loadImage(`dataset/J${index}.png`);
    // K[i] = loadImage(`dataset/K${index}.png`);
    // L[i] = loadImage(`dataset/L${index}.png`);
    // M[i] = loadImage(`dataset/M${index}.png`);
    // N[i] = loadImage(`dataset/N${index}.png`);
    // O[i] = loadImage(`dataset/O${index}.png`);
    // P[i] = loadImage(`dataset/P${index}.png`);
    // Q[i] = loadImage(`dataset/Q${index}.png`);
    // R[i] = loadImage(`dataset/R${index}.png`);
    // S[i] = loadImage(`dataset/S${index}.png`);
    // T[i] = loadImage(`dataset/T${index}.png`);
    // U[i] = loadImage(`dataset/U${index}.png`);
    // V[i] = loadImage(`dataset/V${index}.png`);
    // W[i] = loadImage(`dataset/W${index}.png`);
    // X[i] = loadImage(`dataset/X${index}.png`);
    // Y[i] = loadImage(`dataset/Y${index}.png`);
    // Z[i] = loadImage(`dataset/Z${index}.png`);
  }
}

let shapeClassifier;

function setup() {
  createCanvas(400, 400);
  //background(0);
  //image(squares[0], 0, 0, width, height);

  let options = {
    inputs: [64, 64, 4],
    task: 'imageClassification',
    debug: true
  };
  shapeClassifier = ml5.neuralNetwork(options);

  for (let i = 0; i < A.length; i++) {
    shapeClassifier.addData({ image: A[i] }, { label: 'A' });
    shapeClassifier.addData({ image: B[i] }, { label: 'B' });
    shapeClassifier.addData({ image: C[i] }, { label: 'C' });
    shapeClassifier.addData({ image: D[i] }, { label: 'D' });
    // shapeClassifier.addData({ image: E[i] }, { label: 'E' });
    // shapeClassifier.addData({ image: F[i] }, { label: 'F' });
    // shapeClassifier.addData({ image: G[i] }, { label: 'G' });
    // shapeClassifier.addData({ image: H[i] }, { label: 'H' });
    // shapeClassifier.addData({ image: I[i] }, { label: 'I' });
    // shapeClassifier.addData({ image: J[i] }, { label: 'J' });
    // shapeClassifier.addData({ image: K[i] }, { label: 'K' });
    // shapeClassifier.addData({ image: L[i] }, { label: 'L' });
    // shapeClassifier.addData({ image: M[i] }, { label: 'M' });
    // shapeClassifier.addData({ image: N[i] }, { label: 'N' });
    // shapeClassifier.addData({ image: O[i] }, { label: 'O' });
    // shapeClassifier.addData({ image: P[i] }, { label: 'P' });
    // shapeClassifier.addData({ image: Q[i] }, { label: 'Q' });
    // shapeClassifier.addData({ image: R[i] }, { label: 'R' });
    // shapeClassifier.addData({ image: S[i] }, { label: 'S' });
    // shapeClassifier.addData({ image: T[i] }, { label: 'T' });
    // shapeClassifier.addData({ image: U[i] }, { label: 'U' });
    // shapeClassifier.addData({ image: V[i] }, { label: 'V' });
    // shapeClassifier.addData({ image: W[i] }, { label: 'W' });
    // shapeClassifier.addData({ image: X[i] }, { label: 'X' });
    // shapeClassifier.addData({ image: Y[i] }, { label: 'Y' });
    // shapeClassifier.addData({ image: Z[i] }, { label: 'Z' });
  }

  shapeClassifier.normalizeData();
  shapeClassifier.train({ epochs: 50 }, finishedTraining);
}

function finishedTraining() {
  console.log('finished training!');
  shapeClassifier.save();
}
