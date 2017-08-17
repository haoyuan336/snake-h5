/**
 * Created by chuhaoyuan on 2017/8/16.
 */
const Bezier = function (controllerPoints, count) {
  var that = {};
  var _controllerPoints = controllerPoints;

  // var _pots = {};
  // for (var i = 0 ; i < _controllerPoints.length ; i ++){
  //   _pots.push(Point(_controllerPoints[i].x, _controllerPoints[i].y));
  // }

  function bezier(pots, amount){
    var pot;
    var lines;
    var ret = [];
    var points;
    for(var i = 0; i <= amount; i++){
      points = pots.slice(0);
      lines = [];
      while(pot = points.shift()){
        if(points.length){
          lines.push( pointLine([pot, points[0]], i / amount) );
        }else if(lines.length > 1){
          points = lines;
          lines = [];
        }else{
          break;
        }
      }
      ret.push(lines[0]);
    }
    function pointLine(points, rate){
      var pointA, pointB, pointDistance, xDistance, yDistance, tan,radian, tmpPointDistance;
      var ret = [];
      pointA = points[0];
      pointB = points[1];
      xDistance = pointB.x - pointA.x;
      yDistance = pointB.y - pointA.y;
      pointDistance = Math.pow(Math.pow(xDistance, 2) + Math.pow(yDistance, 2), 1/2);
      tan = yDistance / xDistance;
      radian = Math.atan(tan);
      tmpPointDistance = pointDistance * rate;
      ret = {
        x: pointA.x + tmpPointDistance * Math.cos(radian),
        y: pointA.y + tmpPointDistance * Math.sin(radian)
      };
      return ret;
    }
    return ret;
  }
  return bezier(_controllerPoints, count);
};
export default Bezier;