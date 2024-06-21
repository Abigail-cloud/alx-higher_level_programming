#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print (c = 'X') {
    const row = new Array(this.width);
    row.fill(c);
    for (let j = 0; j < this.height; j++) console.log(row.join(''));
  }

  rotate () {
    [this.width, this.height] = [this.height, this.width];
  }

  double () {
    [this.width, this.height] = [this.width * 2, this.height * 2];
  }
}

module.exports = Rectangle;
