/**
 * Created by chuhaoyuan on 2017/8/16.
 */
const Bezire = function (startPoint, endPoint, lines) {
  var that = {};
  var _pointList = [startPoint];
  // //根据点的列表，得到贝塞尔曲线的关键点
  // if (lines.length > 1){
  //   for (var i = 0 ; i < lines.length - 1; i ++){
  //     var line1 = lines[i];
  //     var line2 = lines[i + 1];
  //     _pointList.push(line1.getCrossPoint(line2));
  //   }
  // }
  _pointList.push(endPoint);
  return _pointList;
};
module.exports = Bezire;