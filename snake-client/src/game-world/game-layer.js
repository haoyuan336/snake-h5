/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {BaseLayer, Inherited, Eventuality} from './../utility/imports'
import MapLayer from './map-layer'
import PlayerNode from './player-node'
const GameLayer  = function () {
  var that = Inherited(BaseLayer());
  that.inheritOn('init', ()=>{
    return true;
  });
  var _event = Eventuality({});
  var _playerList = [];
  var _mapLayer = MapLayer({event: _event});
  _mapLayer.init();
  that.node.addChild(_mapLayer.node);


  that.syncData = function (data) {
   //同步数据
    for (var i = 0 ; i < data.length ; i ++){
      createPlayer(data[i]);
    }

  };

  const createPlayer = function (data) {
    data.event = _event;
    var player = PlayerNode(data);
    player.init();
    _mapLayer.node.addChild(player.node);
    _playerList.push(player);
  };


  that.inheritOn('update', function (dt) {
    for (let i in _playerList){
      _playerList[i].update(dt);
    }
  });
  that.addPlayer = function (data) {
    createPlayer(data);
  };

  return that;
};
export default GameLayer;