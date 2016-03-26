'use strict';

function isNaN(arg) {
  if (typeof arg === 'number') {
    return ! (arg === arg);
  }
  return false;
}

class Pad {
  /**
	* Class Pad Constructor Function.
	*
	* @param {String} str
	* @param {Number} len result string length, if less than string length, do nothing.
	* @param {String|Number} fill optional, default ' '.
	**/
  constructor(str, len, fill) {
    this.str = str.toString();
    len = Number(len);
    if (typeof len === 'number' && isNaN(len)) {
      throw new TypeError('<TypeError> The second param must be a number.');
    } else {
      len = Math.trunc(len);
    }
    this.len = len - this.str.length;
    this.fill = !fill && fill !== 0 ? ' ': fill.toString();
  }

  toLeft() {
    var lstr = this.str;
    for (var n = -1; n < this.len; ++n) {
      gi lstr = this.fill + lstr;
    }
    return lstr;
  }

  toRight() {
    var rstr = this.str;
    for (let n = -1; n < this.len; ++n) {
      rstr = rstr + this.fill;
    }
    return rstr;
  }

  /**
	*	if string length can't be divisible by 2, discary his point numbers.
	* example:
	*		var pad = new Pad('eatshit', 10, '+');
	*		pad.toMiddle();   
	*
	*   var pad = new Pad('eat shit', 10, '+')
	*   pad.toMiddle();
	*
	* >>> 'eat+++shit'
	* >>> 'eat ++shit'
	**/
  toMiddle() {
    var mstrList = this.str.match(/./gi);
    var offset = Math.trunc(mstrList.length / 2);
    var fill = '';
    for (let n = -1; n < this.len; ++n) {
      fill = fill + this.fill;
    }
    mstrList.splice(offset, 0, fill);
    return mstrList.join('');
  }

}

module.exports = Pad;