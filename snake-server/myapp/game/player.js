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
  _event.on("create_player", function (data) {
    console.log("create player data " + JSON.stringify(data));
  });

  that.syncData = function (playerList) {
    var list = [];
    for (var i = 0 ; i < playerList.length ; i ++){
      list.push({
        id: playerList[i].getUid(),
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
  }
  return that;
};
module.exports = Player;