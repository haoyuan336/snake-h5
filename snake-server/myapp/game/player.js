/**
 * Created by chuhaoyuan on 2017/8/14.
 */
const Player = function (id , socket,event) {
  var that = {};
  var _uid = id;
  var _socket = socket;
  var _event = event;
  var _position = {
    x: Math.random() * 754,
    y: Math.random() * 480
  };

  _socket.on("disconnect", function () {
    console.log("玩家退出游戏");
    _event.fire("disconnect",_uid);

    // _event.removeListenerWithName('player_offline', playerOffLine);

  });



  _event.on("create_player", function (pl) {
    _socket.emit("create_player", {
      uid: pl.getUid(),
      position: pl.getPosition()
    })
  });

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
  return that;
};
module.exports = Player;