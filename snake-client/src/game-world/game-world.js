/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {BaseWorld, Inherited,Eventuality} from './../utility/imports'
import global from './../global'
import GameLayer from './game-layer'
const GameWorld = function () {
  let that = Inherited(BaseWorld());
  that.inheritOn("init", ()=>{
    return true;
  });

  global.socket = io("localhost:3000");

  var _gameLayer = GameLayer();
  _gameLayer.init(_gameLayer);
  _gameLayer.add2World(that);

  global.socket.on("sync_data", function (data) {
    console.log("同步消息" + JSON.stringify(data));
    global.playerData.uid = data.uid;
    _gameLayer.syncData(data.data);
  });

  that.inheritOn('destroy', function () {
    //
  });









  return that;
};
export default GameWorld;