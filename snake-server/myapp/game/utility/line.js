/**
 * Created by chuhaoyuan on 2017/8/16.
 */
const Line = function () {
  var that = {};
  var _k = undefined;
  var _b = undefined;

  var p1 = arguments[0];
  var p2 = arguments[1];

  const initWithKB = function (k , b) {

  };
  const initWithKPoint = function (k, point) {

  };
  const initWithPoints = function (p1, p2) {

  };

  if (typeof (p1) === 'number' && typeof (p2) === 'nubmer'){
    _k = p1;
    _b = p2;
  }else if(typeof (p1) === "number" && typeof (p2) === "object"){
    _k = p1;
    _b = p2.x * k - p2.y;
  }else if(typeof (p1) === 'object' && typeof (p2) === "object"){
    _k = (p1.y - p2.y) / (p1.x - p2.x);
    console.log("k = " + _k);
    _b = p2.x * _k - p1.y;
    console.log("b = " + _b);
  }



  that.getCrossPoint = function (line) {

    var o = line.getKB();
    return {
      x: (o.b - _b ) / (_k - o.k),
      y: (o.b - _b ) / (_k - o.k) * _k + _b
    }

  };

  that.getKB = function () {
    return {
      k: _k,
      b: _b
    }
  };
  Object.defineProperty(that, "k", {
    get: function () {
      return _k;
    }
  });
  Object.defineProperty(that, "b", {
    get: function () {
      return _b;
    }
  });




  return that;
};
module.exports = Line;