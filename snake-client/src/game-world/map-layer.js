/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {BaseLayer, Inherited, Eventuality, Director} from './../utility/imports'
const MapLayer = function (spec) {
  let that = Inherited(BaseLayer());

  let _event = spec.event;
  _event.on("update_player_position", function (position) {
    // console.log("更新地图位置");
    that.node.position = {
      x: Director.sharedDirector().width * 0.5 - position.x,
      y: Director.sharedDirector().height * 0.5 - position.y
    }
  });
  return that;
};
export default MapLayer;