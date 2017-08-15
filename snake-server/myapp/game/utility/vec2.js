/**
 * Created by chuhaoyuan on 2017/8/15.
 */
const Vec2 = function(x, y) {
  var that = {x: x, y: y};
  that.getDistance = function (object)  {
    //两点之间距离
    var a = ( that.x - object.x ) * (that.x - object.x) + (that.y - object.y) * (that.y - object.y);
    var l = Math.sqrt(a);
    var w = parseInt(l);
    if (l - w < 0.00001) {
      return w;
    }

    return l;
  };
  that.getNormal = function() {
    //获取单位向量
    var n = that.x * that.x + that.y * that.y;
    if (n === 1) {
      return that;
    }
    n = Math.sqrt(n);
    if (n < Number.MIN_VALUE) {
      return that;
    }
    n = 1 / n;
    var x = that.x * n;
    var y = that.y * n;
    return Vec2(x, y);
  };
  that.normal = function() {
    //转换成单位向量
    return that.getNormal();
  };
  that.add = function (object) {
    //向量加

    var x = that.x + object.x;
    var y = that.y + object.y;
    return Vec2(x, y);
  };
  that.sub = function(object)  {
    //向量减

    var x = that.x - object.x;
    var y = that.y - object.y;
    return Vec2(x, y);
  };
  that.multValue = function(value)  {
    var x = that.x * value;
    var y = that.y * value;
    return Vec2(x, y);
  };
  that.addValue = function(value)  {
    var x = that.x + value;
    var y = that.y + value;
    return Vec2(x, y);
  };
  that.cross = function(object)  {
    //向量积
    return that.x * object.y - that.y * object.x;
  };
  that.dot = function(object)  {
    //点积
    return that.x * object.x + that.y * object.y;
  };
  that.getRadians = function(object) {
    //得到向量弧度
    var a = that.getNormal();
    var b = object.getNormal();

    var angle = Math.atan2(a.cross(b), a.dot(b));
    // console.log('angle = ' + angle);
    if (Math.abs(angle) < Number.MIN_VALUE) {
      return 0
    }
    return angle;
  };

  that.equals = function(object) {
    //判断向量是否绝对相等
    return (Math.abs(that.x - object.x) < Number.MIN_VALUE) && (Math.abs(that.y - object.y) < Number.MIN_VALUE);
  };

  that.getAngle = function(object)  {
    //得到向量角度
    return that.getRadians(object) * 180 / Math.PI;
  };


  that.isZero = function() {
    return (Math.abs(that.x) < Number.MIN_VALUE) && (Math.abs(that.y) < Number.MIN_VALUE);
  };

  that.rotateByAngle = function(object, angle)  {
    //向量转一个角度
    var sinAngle = Math.sin(angle);
    var cosAngle = Math.cos(angle);
    var x = 0;
    var y = 0;
    if (object.isZero()) {
      //console.log('旋转点是0');
      var tempX = that.x * cosAngle - that.y * sinAngle;
      y = that.y * cosAngle + that.x * sinAngle;
      x = tempX;
    } else {
      var tempX = that.x - object.x;
      var tempY = that.y - object.y;
      x = tempX * cosAngle - tempY * sinAngle + object.x;
      y = tempY * cosAngle + tempX * sinAngle + object.y;
    }

    return Vec2(x, y);

  };


  return that;
};
module.exports = Vec2;