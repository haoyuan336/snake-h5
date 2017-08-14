/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {BaseWorld, Inherited,Eventuality} from './../utility/imports'
import global from './../global'
const GameWorld = function () {
  let that = Inherited(BaseWorld());
  that.inheritOn("init", ()=>{
    return true;
  });

  global.socket = io("localhost:3000");

  global.socket.on("sync_data", function (data) {
    console.log("同步消息" + JSON.stringify(data));
  });

  that.inheritOn('destroy', function () {
    //
  });


  return that;
};
export default GameWorld;