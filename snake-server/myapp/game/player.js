/**
 * Created by chuhaoyuan on 2017/8/14.
 */
const Vec2 = require("./utility/vec2");
const Player = function (id , socket,event) {
  var that = {};
  var _uid = id;
  var _socket = socket;
  var _event = event;
  var _position = {
    x: Math.random() * 754,
    y: Math.random() * 480
  };
  var _direction = {
    x: Math.random(),
    y: Math.random()
  };
  _socket.on("disconnect", function () {
    console.log("玩家退出游戏");
    _event.fire("disconnect",_uid);
  });

  _socket.on("direction", function (direction) {
    //收到方向
    console.log("收到客户端发来的方向" + JSON.stringify(direction));
  });
  _event.on("create_player", function (pl) {
    _socket.emit("create_player", {
      uid: pl.getUid(),
      position: pl.getPosition()
    })
  });


  const sendPositionInfo = function (data) {
    _socket.emit("update_position_info", data);
  };
  _event.on("update_position_info", sendPositionInfo);

  const playerOffLine = function (uid) {
    _socket.emit("player_offline", uid);
  };
  _event.on("player_offline", playerOffLine);
  that.syncData = function (playerList) {
    var list = [];
    for (var i = 0 ; i < playerList.length ; i ++){
      list.push({
        uid: playerList[i].getUid(),
        position: playerList[i].getPosition()
      });
    }
    _socket.emit("sync_data",{
      uid: _uid,
      data: list
    })
  };
  that.getUid = function () {
    return _uid;
  };
  that.getPosition = function () {
    return _position;
  };
  that.update = function (dt) {

    _position = Vec2(_position.x, _position.y).add(Vec2(_direction.x, _direction.y));

  };
  return that;
};
module.exports = Player;