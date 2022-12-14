PImage A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z;

void setup() {
  size(64, 64);
  A = loadImage("characters/A.jpg");
  B = loadImage("characters/B.jpg");
  C = loadImage("characters/C.jpg");
  D = loadImage("characters/D.jpg");
  E = loadImage("characters/E.jpg");
  F = loadImage("characters/F.jpg");
  G = loadImage("characters/G.jpg");
  H = loadImage("characters/H.jpg");
  I = loadImage("characters/I.jpg");
  J = loadImage("characters/J.jpg");
  K = loadImage("characters/K.jpg");
  L = loadImage("characters/L.jpg");
  M = loadImage("characters/M.jpg");
  N = loadImage("characters/N.jpg");
  O = loadImage("characters/O.jpg");
  P = loadImage("characters/P.jpg");
  Q = loadImage("characters/Q.jpg");
  R = loadImage("characters/R.jpg");
  S = loadImage("characters/S.jpg");
  T = loadImage("characters/T.jpg");
  U = loadImage("characters/U.jpg");
  V = loadImage("characters/V.jpg");
  W = loadImage("characters/W.jpg");
  X = loadImage("characters/X.jpg");
  Y = loadImage("characters/Y.jpg");
  Z = loadImage("characters/Z.jpg");
}

void draw() {
  float x, y;
  float scalefactor = random(0.5, 0.7);
  float rotateangle = random(-0.1, 0.1);
  scale(scalefactor);
  rotate(rotateangle);
  
  background(255);

  x = random(10, width - A.width * scalefactor);
  y = random(10, height - A.height * scalefactor);
  image(A, x, y);
  saveFrame("dataset/A####.png");

  background(255);

  x = random(10, width - B.width * scalefactor);
  y = random(10, height - B.height * scalefactor);
  image(B, x, y);
  saveFrame("dataset/B####.png");

  background(255);

  x = random(10, width - C.width * scalefactor);
  y = random(10, height - C.height * scalefactor);
  image(C, x, y);
  saveFrame("dataset/C####.png");

  background(255);

  x = random(10, width - D.width * scalefactor);
  y = random(10, height - D.height * scalefactor);
  image(D, x, y);
  saveFrame("dataset/D####.png");

  background(255);

  x = random(10, width - E.width * scalefactor);
  y = random(10, height - E.height * scalefactor);
  image(E, x, y);
  saveFrame("dataset/E####.png");

  background(255);

  x = random(10, width - F.width * scalefactor);
  y = random(10, height - F.height * scalefactor);
  image(F, x, y);
  saveFrame("dataset/F####.png");

  background(255);

  x = random(10, width - G.width * scalefactor);
  y = random(10, height - G.height * scalefactor);
  image(G, x, y);
  saveFrame("dataset/G####.png");

  background(255);

  x = random(10, width - H.width * scalefactor);
  y = random(10, height - H.height * scalefactor);
  image(H, x, y);
  saveFrame("dataset/H####.png");

  background(255);

  x = random(10, width - I.width * scalefactor);
  y = random(10, height - I.height * scalefactor);
  image(I, x, y);
  saveFrame("dataset/I####.png");

  background(255);

  x = random(10, width - J.width * scalefactor);
  y = random(10, height - J.height * scalefactor);
  image(J, x, y);
  saveFrame("dataset/J####.png");

  background(255);

  x = random(10, width - K.width * scalefactor);
  y = random(10, height - K.height * scalefactor);
  image(K, x, y);
  saveFrame("dataset/K####.png");

  background(255);

  x = random(10, width - L.width * scalefactor);
  y = random(10, height - L.height * scalefactor);
  image(L, x, y);
  saveFrame("dataset/L####.png");

  background(255);

  x = random(10, width - M.width * scalefactor);
  y = random(10, height - M.height * scalefactor);
  image(M, x, y);
  saveFrame("dataset/M####.png");

  background(255);

  x = random(10, width - N.width * scalefactor);
  y = random(10, height - N.height * scalefactor);
  image(N, x, y);
  saveFrame("dataset/N####.png");

  background(255);

  x = random(10, width - O.width * scalefactor);
  y = random(10, height - O.height * scalefactor);
  image(O, x, y);
  saveFrame("dataset/O####.png");

  background(255);

  x = random(10, width - P.width * scalefactor);
  y = random(10, height - P.height * scalefactor);
  image(P, x, y);
  saveFrame("dataset/P####.png");

  background(255);

  x = random(10, width - Q.width * scalefactor);
  y = random(10, height - Q.height * scalefactor);
  image(Q, x, y);
  saveFrame("dataset/Q####.png");

  background(255);

  x = random(10, width - R.width * scalefactor);
  y = random(10, height - R.height * scalefactor);
  image(R, x, y);
  saveFrame("dataset/R####.png");

  background(255);

  x = random(10, width - S.width * scalefactor);
  y = random(10, height - S.height * scalefactor);
  image(S, x, y);
  saveFrame("dataset/S####.png");

  background(255);

  x = random(10, width - T.width * scalefactor);
  y = random(10, height - T.height * scalefactor);
  image(T, x, y);
  saveFrame("dataset/T####.png");

  background(255);

  x = random(10, width - U.width * scalefactor);
  y = random(10, height - U.height * scalefactor);
  image(U, x, y);
  saveFrame("dataset/U####.png");

  background(255);

  x = random(10, width - V.width * scalefactor);
  y = random(10, height - V.height * scalefactor);
  image(V, x, y);
  saveFrame("dataset/V####.png");

  background(255);

  x = random(10, width - W.width * scalefactor);
  y = random(10, height - W.height * scalefactor);
  image(W, x, y);
  saveFrame("dataset/W####.png");

  background(255);

  x = random(10, width - X.width * scalefactor);
  y = random(10, height - X.height * scalefactor);
  image(X, x, y);
  saveFrame("dataset/X####.png");

  background(255);

  x = random(10, width - Y.width * scalefactor);
  y = random(10, height - Y.height * scalefactor);
  image(Y, x, y);
  saveFrame("dataset/Y####.png");

  background(255);

  x = random(10, width - Z.width * scalefactor);
  y = random(10, height - Z.height * scalefactor);
  image(Z, x, y);
  saveFrame("dataset/Z####.png");

  if (frameCount == 100)
    exit();
}
