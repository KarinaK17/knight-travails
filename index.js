function pushInSteps(a, steps, queue, board) {
  for (let i = 0; i < steps.length; i++) {
    if (steps[i][0] == a[0] && steps[i][1] == a[1]) {
      return;
    }
  }
  if (a[0] > -1 && a[0] < 8 && a[1] > -1 && a[1] < 8) {
    steps.push(a);
    queue.push(a);
    board[a[0]][a[1]].previous = queue[0];
  }
}

function knightMoves(a, b) {
  let board = [];
  let path = [];
  let steps = [];
  steps.push(a);
  let previous;

  class Square {
    constructor(row, column) {
      this.row = row;
      this.column = column;
      this.previous = null;
    }
  }

  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      let square = new Square(i, j);
      row.push(square);
    }
    board.push(row);
  }

  let queue = [];
  queue.push(a);

  while (queue.length != 0) {
    let m1 = [];
    let x1 = queue[0][0] + 1;
    let y1 = queue[0][1] + 2;
    m1.push(x1);
    m1.push(y1);
    // console.log(m1, "m1");

    pushInSteps(m1, steps, queue, board);
    if (x1 == b[0] && y1 == b[1]) {
      previous = m1;
      break;
    }
    //
    let m2 = [];
    let x2 = queue[0][0] + 2;
    let y2 = queue[0][1] + 1;
    m2.push(x2);
    m2.push(y2);
    // console.log(m2, "m2");

    pushInSteps(m2, steps, queue, board);
    if (x2 == b[0] && y2 == b[1]) {
      previous = m2;
      break;
    }
    //
    let m3 = [];
    let x3 = queue[0][0] + 2;
    let y3 = queue[0][1] - 1;
    m3.push(x3);
    m3.push(y3);
    // console.log(m3, "m3");

    pushInSteps(m3, steps, queue, board);
    if (x3 == b[0] && y3 == b[1]) {
      previous = m3;
      break;
    }
    //
    let m4 = [];
    let x4 = queue[0][0] + 1;
    let y4 = queue[0][1] - 2;
    m4.push(x4);
    m4.push(y4);
    // console.log(m4, "m4");

    pushInSteps(m4, steps, queue, board);
    if (x4 == b[0] && y4 == b[1]) {
      previous = m4;
      break;
    }
    //
    let m5 = [];
    let x5 = queue[0][0] - 1;
    let y5 = queue[0][1] - 2;
    m5.push(x5);
    m5.push(y5);
    // console.log(m5, "m5");

    pushInSteps(m5, steps, queue, board);
    if (x5 == b[0] && y5 == b[1]) {
      previous = m5;
      break;
    }
    //
    let m6 = [];
    let x6 = queue[0][0] - 2;
    let y6 = queue[0][1] - 1;
    m6.push(x6);
    m6.push(y6);
    // console.log(m6, "m6");

    pushInSteps(m6, steps, queue, board);
    if (x6 == b[0] && y6 == b[1]) {
      previous = m6;
      break;
    }
    //
    let m7 = [];
    let x7 = queue[0][0] - 2;
    let y7 = queue[0][1] + 1;
    m7.push(x7);
    m7.push(y7);
    // console.log(m7, "m7");

    pushInSteps(m7, steps, queue, board);
    if (x7 == b[0] && y7 == b[1]) {
      previous = m7;
      break;
    }
    //
    let m8 = [];
    let x8 = queue[0][0] - 1;
    let y8 = queue[0][1] + 2;
    m8.push(x8);
    m8.push(y8);
    // console.log(m8, "m8");

    pushInSteps(m8, steps, queue, board);
    if (x8 == b[0] && y8 == b[1]) {
      previous = m8;
      break;
    }
    //
    queue.shift();
  }

  while (previous != null) {
    path.unshift(previous);
    previous = board[previous[0]][previous[1]].previous;
  }

  console.log(`You made it in ${path.length - 1} moves. `);
  console.log("Here is your path:", path);
  return path;
}
