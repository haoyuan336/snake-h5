/**
 * Created by chuhaoyuan on 2017/8/16.
 */
const Line = function () {
  console.log("argumen =" + JSON.stringify(arguments));
  var that = {};
  var _k = undefined;
  var _b = undefined;

  //判断是由斜率加点的形式创建的曲线还是直接两个点创建的曲线公式
  var p1 = arguments[0];
  var p2 = arguments[1];
  console.log("type = " + typeof (p1));
  console.log("type = " + typeof (p2));
  if (typeof (p1) === "number"){
    console.log("是由斜率创建的");
    _k = p1;
    // y = k * x + b;
  }
  if (typeof (p1) === "object"){
    _k = (p2.y - p1.y) / (p2.x - p1.x); // 斜率
    console.log("是由两点创建的" + _k);

  }

  _b = _k * p2.x - p2.y;

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