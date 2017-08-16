/**
 * Created by chuhaoyuan on 2017/8/16.
 */
const Bezier = function (controllerPoints) {
  var that = {};
  var _controllerPoints = controllerPoints;
  that.getPoint = function (t) {
    let temp = 1 - t;
    let x ,y =undefined;
    if (t === 0){
       x = _controllerPoints[0].x * Math.pow(temp, (_controllerPoints.length - 1));
       y = _controllerPoints[0].x * Math.pow(temp, (_controllerPoints.length - 1));

    }else if (t != 0 && t != 1){}

    for (let i = 1 ; i < _controllerPoints.length - 1 ; i ++){
      let point = _controllerPoints[i];
      let tempX = point.x * (_controllerPoints.length - 1 ) * Math.pow(t, i) * Math.pow(temp, _controllerPoints.length - 1 - i);
      x += tempX;
      let tempY = point.y * (_controllerPoints.length - 1 ) * Math.pow(t, i) * Math.pow(temp, _controllerPoints.length - 1 - i);
      y += tempY;
    };
    x += _controllerPoints[_controllerPoints.length - 1].x * Math.pow(t , (_controllerPoints.length - 1));
    y += _controllerPoints[_controllerPoints.length - 1].y * Math.pow(t , (_controllerPoints.length - 1));
    return {
      x: x,
      y: y
    }
  };
  that.getStartPos = function () {
    return _controllerPoints[0];
  };
  that.getEndPos = function () {
    return _controllerPoints[_controllerPoints.length - 1];
  };
  return that;
};
export default Bezier;