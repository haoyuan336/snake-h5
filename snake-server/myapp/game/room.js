/**
 * Created by chuhaoyuan on 2017/8/14.
 */
var EventListener = require("./utility/event-listener");
var Player  = require("./player");
const Room = function () {
  var that = {};
  var _playerList = [];
  var _event = EventListener(that);
  that.getPlayerCount = function () {
    return _playerList.length;
  };
  that.createPlayer = function (uid, socket) {
    var player = Player(uid, socket, _event);
    _playerList.push(player);
    _event.fire(player);
    player.syncData(_playerList);
  };
  return that;
};
module.exports = Room;