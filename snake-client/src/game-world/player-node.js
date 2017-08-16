/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {Inherited, BaseLayer, Vec2, Bezier} from './../utility/imports'
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
  let _reciveMessageTime = 0;
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
    _reciveMessageTime = 0 ; //一旦收到服务器数据， 这个值就是0；
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
        var pointList = playerData.pointList;
        _targetPos = Vec2(position.x, position.y).add(Vec2(direction.x, direction.y).multValue(disTime * 0.2));
        _debugHead.position = position;
        renderBezier(bezier);
        renderDebugLine(pointList);
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


  const renderBezier = function (data) {
    // console.log("bezier = " + JSON.stringify(data));

    graphics.clear();
    graphics.lineStyle(10, 0xFF0000, 0.8);
    let bezier = Bezier(data);

    // console.log("bezier")
    for (var i = 0 ; i < 100 ; i ++){
      let point = bezier.getPoint(i  * 0.01);
      console.log("point = " + JSON.stringify(point));
      if (i === 0){
        graphics.moveTo(point.x, point.y);

      }
      graphics.lineTo(point.x, point.y);
      // console.log("point = " + JSON.stringify(point));
    }
    // graphics.lineTo(_targetPos.x, _targetPos.y);
    // var p1 = bezier.getPoint(0);
    // var p2 = bezier.getPoint(1);
    // console.log("p1 = " + JSON.stringify(p1));
    // console.log("p2 = " + JSON.stringify(p2));
    // graphics.moveTo(bezier.getStartPos().x, bezier.getStartPos().y);
    // graphics.lineTo(bezier.getEndPos().x, bezier.getEndPos().y);
    //
    // debugGra.moveTo(p1.x, p1.y);
    // debugGra.lineTo(p2.x, p2.y);
  };




  const renderDebugLine = function (pointList) {
    // debugGra.moveTo(pointList[0].x, pointList[0].y);
    // debugGra.lineTo(pointList[1].x, pointList[1].y);
  };

  return that;
};
export default PlayerNode;