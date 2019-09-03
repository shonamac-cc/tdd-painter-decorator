const PaintCan = function (litres) {
  this.litres = litres
}

PaintCan.prototype.checkIfEmpty = function () {
  if (this.litres === 0) {return true;
  } else {return false;
  } 
}

module.exports = PaintCan
