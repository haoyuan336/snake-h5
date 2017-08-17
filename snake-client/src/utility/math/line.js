/**
 * Created by chuhaoyuan on 2017/8/17.
 */
const Line = function () {
  var that = {};
  var p1 = arguments[0];
  var p2 = arguments[1];

  var _k = undefined;
  var _b = undefined;

  const initWithKB = function (k , b) {
    _k = k;
    _b = b;
  };

  const initWithKPoint = function (k, point) {
    _k = k;
    _b = point.x * k - point.y;
  };

  const initWithPoints = function (p1, p2) {
    _k =( p1.y - p2.y ) / (p1.x - p2.x);
    _b = p1.x * _k - p1.y;
  };
  if (typeof (p1) === 'number' && typeof (p2) === 'number'){
    initWithKB(p1, p2);
  }else if (typeof (p1) === 'number' && typeof (p2) === 'object'){
    initWithKPoint(p1, p2);
  }else if (typeof (p1) === 'object' && typeof (p2) === 'object'){
    initWithPoints(p1, p2);
  }


  //
  // console.log("p1 = " + JSON.stringify(p1));
  // console.log("p2 = " + JSON.stringify(p2));
  // console.log("k = " + _k);
  // console.log("b = " + _b);



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



  that.getXWithY = function (y) {
    return (y - _b )/ _k;
  };
  that.getYWithX = function (x) {
    return _k * x + _b;
  };

  return that;
};
export default Line