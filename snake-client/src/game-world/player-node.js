/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {Inherited, BaseLayer, Vec2, Bezier, Line} from './../utility/imports'
import global from './../global'
import resources from './../resources'
const PlayerNode = function (spec) {
  console.log("spec = " + JSON.stringify(spec));
  var that = Inherited(BaseLayer());
  var _uid = spec.uid;
  // var _parent = spec.parent;
  var _event = spec.event;
  let imageStr = "";
  let _targetPos = undefined;
  if (global.playerData.uid === spec.uid){
    imageStr = resources.bq04;
  }else {
    imageStr = resources.bq05;
  };
  var _head = PIXI.Sprite.fromImage(imageStr);
  that.node.addChild(_head);
  _head.position = spec.position;
  _head.anchor.set(0.5);
  _head.alpha = 0;


  var _debugHead = PIXI.Sprite.fromImage(imageStr);
  that.node.addChild(_debugHead);
  _debugHead.position = spec.position;
  _debugHead.anchor.set(0.5);
  _debugHead.alpha = 1;

  that.inheritOn("init", ()=>{
    return true;
  });


  that.update = function (dt) {
    if (_uid === global.playerData.uid){
      // console.log("更新地图位置" + _uid);
      _event.fire("update_player_position", _head.position);
    }
    if (_targetPos !== undefined){
      var dis = Vec2(_head.position.x, _head.position.y).getDistance(Vec2(_targetPos.x, _targetPos.y));
      var direction = Vec2(_targetPos.x, _targetPos.y).sub(Vec2(_head.position.x, _head.position.y)).getNormal();
      _head.position = Vec2(_head.position.x, _head.position.y).add(direction.multValue(dis * 0.05));
      _head.rotation = - direction.getRadians(Vec2(0, -1));
    }
  };




  const updatePositionInfo = function (data) {
    // console.log("data = " + JSON.stringify(data));
    let time = data.time;
    let list = data.data;
    let nowTime = new Date().getTime();
    let disTime = nowTime - time;

    for (var i = 0 ; i < list.length ; i ++){
      var playerData = list[i];
      if (playerData.uid === _uid){
        var position = playerData.position;
        var direction = playerData.direction;
        var bezier = playerData.bezier;
        var lineList = playerData.lineList;
        var pointList = playerData.pointList;
        _targetPos = Vec2(position.x, position.y).add(Vec2(direction.x, direction.y).multValue(disTime * 0.2));
        _debugHead.position = position;
        renderBezier(bezier);
        renderList(lineList);
      }
    }


    //渲染贝塞尔曲线


  };

  _event.on("update_position_info", updatePositionInfo);


  const playerOffline = function (uid) {
    if (_uid === uid){
      that.removeFromParent();

    }
  };
  _event.on("player_offline", playerOffline);

  that.removeFromParent = function () {
    _head.parent.removeChild(_head);
    _debugHead.parent.removeChild(_debugHead);
    _event.removeListener("player_offline", playerOffline);
    _event.removeListener("update_position_info", updatePositionInfo);
  };

  that.getUid = function () {
    return _uid;
  };


  var graphics =new PIXI.Graphics();

  that.node.addChild(graphics);

  var debugGra = new PIXI.Graphics();
  that.node.addChild(debugGra);
  debugGra.lineStyle(20, 0xFF00FF, 0.8);


  const renderList = function (list) {
    // console.log("render list = " + JSON.stringify(list));
    for (let i = 0 ; i < list.length ; i ++){
      var line = Line(list[i].k, list[i].b);
      // console.log("line k = " + line.k);
      // console.log("line b = " + line.b);
      for (var i = 0 ; i < 40 ; i ++){
        var x = i * 10;
        var y = line.getYWithX(x);
        if ( i === 0){
          debugGra.moveTo(x, y);
        }else {
          debugGra.lineTo(x, y);
        }
      }
    }

  };
  const renderBezier = function (data) {
    // console.log("bezier = " + JSON.stringify(data));

    graphics.clear();
    graphics.lineStyle(10, 0xFF0000, 0.8);
    let bezierPoints = Bezier(data,100);

    for (var i = 0 ; i < bezierPoints.length ; i ++){
      if (i === 0){
        graphics.moveTo(bezierPoints[i].x, bezierPoints[i].y);
      }else {
        graphics.lineTo(bezierPoints[i].x, bezierPoints[i].y);
      }
    }
    // console.log("bezier = " + JSON.stringify(bezier));
    // console.log("bezier")
    // for (var i = 0 ; i < 100 ; i ++){
    //   let point = bezier.getPoint(i  * 0.01);
    //   console.log("point = " + JSON.stringify(point));
    //   if (i === 0){
    //     graphics.moveTo(point.x, point.y);
    //
    //   }
    //   graphics.lineTo(point.x, point.y);
    //   // console.log("point = " + JSON.stringify(point));
    // }
  };





  return that;
};
export default PlayerNode;