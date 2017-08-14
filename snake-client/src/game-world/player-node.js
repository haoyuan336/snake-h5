/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {Inherited, BaseLayer} from './../utility/imports'
import global from './../global'
import resources from './../resources'
const PlayerNode = function (spec) {
  var that = Inherited(BaseLayer());
  var _uid = spec.uid;
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

  that.inheritOn("init", ()=>{
    return true;
  });


  that.update = function (dt) {
    if (_uid === global.playerData.uid){
      _event.fire("update_player_position", _head.position);
    }
  };



  return that;
};
export default PlayerNode;