/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {BaseLayer, Inherited, Eventuality, Director} from './../utility/imports'
import MapLayer from './map-layer'
import PlayerNode from './player-node'
import JoyStrick from './joy-strick'
import global from './../global'
const GameLayer  = function () {
  var that = Inherited(BaseLayer());
  that.inheritOn('init', ()=>{
    return true;
  });
  var _event = Eventuality({});
  var _playerList = [];
  var _mapLayer = MapLayer({event: _event});
  var _sendDirectionTime = 0;
  _mapLayer.init();
  that.node.addChild(_mapLayer.node);


  var _joyStrick = JoyStrick();
  _joyStrick.node.position = {
    x: Director.sharedDirector().width - 100,
    y: Director.sharedDirector().height - 100
  };
  _joyStrick.init();
  that.node.addChild(_joyStrick.node);


  that.syncData = function (data) {
   //同步数据
    for (var i = 0 ; i < data.length ; i ++){
      createPlayer(data[i]);
    }
  };

  const createPlayer = function (data) {
    data.event = _event;
    var player = PlayerNode(data);
    player.init();
    _mapLayer.node.addChild(player.node);
    _playerList.push(player);
  };


  that.inheritOn('update', function (dt) {
    for (let i in _playerList){
      _playerList[i].update(dt);
    }
    if (_sendDirectionTime > dt * 10){
      // console.log("发送 方向 的 时间");
      _sendDirectionTime = 0;

      if (_joyStrick.getDirection().x !== 0 || _joyStrick.getDirection().y !== 0){
        global.socket.emit("direction", _joyStrick.getDirection());
      }
    }else {
      _sendDirectionTime += dt;
    }
  });

  that.playerOffLine = function (uid) {

    for (var i = 0 ; i < _playerList.length ; i ++){
      if (_playerList[i].getUid() === uid){
        _playerList.splice(i, 1);
      }
    }

    _event.fire("player_offline", uid);
  };


  that.addPlayer = function (data) {
    createPlayer(data);
  };


  that.updatePositionInfo = function (data) {
    //更新玩家的位置信息
    // console.log("update position info = " + JSON.stringify(data));
    _event.fire("update_position_info", data);
  };

  return that;
};
export default GameLayer;