/**
 * Created by chuhaoyuan on 2017/8/14.
 */
var EventListener = require("./utility/event-listener");
var Player  = require("./player");
const Room = function () {
  var that = {};
  var _playerList = [];
  var _event = EventListener({});
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
    _event.fire("player_offline", uid);
  });


  return that;
};
module.exports = Room;