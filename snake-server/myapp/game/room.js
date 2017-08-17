/**
 * Created by chuhaoyuan on 2017/8/14.
 */
var EventListener = require("./utility/event-listener");
var Player  = require("./player");
const Room = function () {
  var that = {};
  var _playerList = [];
  var _event = EventListener({});
  var _sendPosInfoTime = 0;
  that.getPlayerCount = function () {
    return _playerList.length;
  };
  that.createPlayer = function (uid, socket) {
    var player = Player(uid, socket, _event);
    _playerList.push(player);
    _event.fire("create_player",player);
    player.syncData(_playerList);
  };

  _event.on("disconnect", function (uid) {
    console.log("有玩家退出了游戏 " + uid);
    for (var i = 0 ; i < _playerList.length ; i ++){
      if (_playerList[i].getUid() === uid){
        _playerList.splice(i ,1)
      }
    }
    console.log("当前的玩家个数" + _playerList.length);
    _event.fire("player_offline", uid);
  });

  that.update = function (dt) {

    for (var i in _playerList){
      _playerList[i].update(dt);
    }

    if (_sendPosInfoTime > dt * 2){
      _sendPosInfoTime = 0;
      //每2帧发送一次位置信息
      sendPositionInfo();
    }else {
      _sendPosInfoTime += dt;
    }

  };


  const sendPositionInfo = function () {
    var posList = [];
    for (var i = 0 ; i < _playerList.length ; i ++){
      posList.push({
        uid: _playerList[i].getUid(),
        position: _playerList[i].getPosition(),
        direction: _playerList[i].getDirection(),
        bezier: _playerList[i].getBezier(),
        pointList: _playerList[i].getPointList(),
        lineList: _playerList[i].getLineKBList()
      })
    }
    _event.fire("update_position_info", {
      time: new Date().getTime(),
      data: posList
    })
  };

  return that;
};
module.exports = Room;