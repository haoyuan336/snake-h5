/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {BaseLayer, Inherited, Eventuality} from './../utility/imports'
const MapLayer = function (spec) {
  let that = Inherited(BaseLayer());

  let _event = spec.event;
  return that;
};
export default MapLayer;