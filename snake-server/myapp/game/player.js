/**
 * Created by chuhaoyuan on 2017/8/14.
 */
const Vec2 = require("./utility/vec2");
const Bezier = require("./utility/bezier-line");
const Line = require("./utility/line");
const Player = function (id , socket,event) {
  var that = {};
  var _uid = id;
  var _socket = socket;
  var _event = event;
  var _length = 100;
  var _lineList = [];
  var _position = {
    x: Math.random() * 200 ,
    y: Math.random() * 200
  };
  var _direction = Vec2(Math.random() * 100, Math.random() * 100).getNormal();

  var startPos = {x: 0, y : 0};
  var endPos = {x: 100, y: 100};

  _position = startPos;

  var _pointList = [startPos, endPos];


  that.getLineList = function () {
    return _lineList;
  };
  that.getLineKBList = function () {
    var list = [];
    for (var i = 0 ; i < _lineList.length ; i ++){
      list.push({
        k: _lineList[i].k,
        b: _lineList[i].b
      })
    }
    return list;
  };

  that.getPointList = function () {
    return _pointList;
  };


  _lineList.push(Line(Vec2(startPos.x, startPos.y), Vec2(endPos.x, endPos.y)));

  that.getBezier = function () {
    var bezier = Bezier(startPos, endPos, _lineList);
    return bezier;
  };
  _socket.on("disconnect", function () {
    console.log("玩家退出游戏");
    _event.fire("disconnect",_uid);
  });

  _socket.on("direction", function (direction) {
    //收到方向
    // console.log("收到客户端发来的方向" + JSON.stringify(direction));
    _direction = direction;
    // //更改变一定的角度 ，增加一个直线
    // // console.log("_lineList length = " + JSON.stringify(_lineList.length));
    // // 如果当前的斜率与直线列表里面最后一根直线的斜率有一定的偏差，就直接创建一根新的直线
    // //先取出直线列表中的最后一根直线
    // var line = _lineList[_lineList.length - 1];
    // var k = line.k;
    // console.log("k = " + k);
    // var dk = _direction.y / _direction.x;
    // console.log("dk = " + dk);
    // if (Math.abs(k - dk) > 1){
    //   //创建一个直线
    //   console.log("创建一条直线");
    //   // _lineList.push(Line(dk, _position));
    // }


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
    // return {
    //   x: 300  ,
    //   y: 240
    // };

  };
  that.getDirection = function () {
    return _direction;
  };
  that.getLendth = function () {
    return _length;
  };
  that.update = function (dt) {

    // _position = Vec2(_position.x, _position.y).add(Vec2(_direction.x, _direction.y).multValue(dt * 0.2));
    //先不要加


  };

  return that;
};
module.exports = Player;