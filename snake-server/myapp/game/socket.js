/**
 * Created by chuhaoyuan on 2017/8/14.
 */
const socket = require("socket.io");
const Player = require("./player");
const Room = require("./room");
const GameServer = function (http) {
  var  that = socket(http);
  var _roomList = [];
  that.on("connection", function (socket) {

    var id = new Date().getTime() + '';
    console.log("a user connection");
    if (_roomList.length === 0){
      var room = Room();
      _roomList.push(room);
    }else {
      if (_roomList[_roomList.length - 1].getPlayerCount() > 10){
        _roomList.push(Room());
      }
    }
    _roomList[_roomList.length - 1].createPlayer(id, socket);


  });
  return that;
};
module.exports = GameServer;