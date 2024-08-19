class shape {
  draw() {
    return ` drawing shape`;
  }
}

class rectangle extends shape {
  draw() {
    return ` drawing rectangle`;
  }
}

let rectangle1 = new rectangle();
console.log(rectangle1.draw());
