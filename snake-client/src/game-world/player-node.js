/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {Inherited, BaseLayer, Vec2} from './../utility/imports'
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


  var _debugHead = PIXI.Sprite.fromImage(imageStr);
  that.node.addChild(_debugHead);
  _debugHead.position = spec.position;
  _debugHead.anchor.set(0.5);
  _debugHead.alpha = 0;

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
        _targetPos = Vec2(position.x, position.y).add(Vec2(direction.x, direction.y).multValue(disTime * 0.2));
        _debugHead.position = _targetPos;
      }
    }
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
  return that;
};
export default PlayerNode;