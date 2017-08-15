/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {Inherited, BaseLayer} from './../utility/imports'
import global from './../global'
import resources from './../resources'
const PlayerNode = function (spec) {
  console.log("spec = " + JSON.stringify(spec));
  var that = Inherited(BaseLayer());
  var _uid = spec.uid;
  console.log("uid = " + _uid);
  console.log("player uid = " + global.playerData.uid);
  var _event = spec.event;
  let imageStr = "";
  if (global.playerData.uid === spec.uid){
    imageStr = resources.bq04;
  }else {
    imageStr = resources.bq05;
  };
  var _head = PIXI.Sprite.fromImage(imageStr);
  that.node.addChild(_head);
  _head.position = spec.position;
  _head.anchor.set(0.5);

  that.inheritOn("init", ()=>{
    return true;
  });


  that.update = function (dt) {
    if (_uid === global.playerData.uid){
      // console.log("更新地图位置");
      _event.fire("update_player_position", _head.position);
    }
  };



  return that;
};
export default PlayerNode;