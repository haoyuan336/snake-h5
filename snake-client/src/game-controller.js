/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {Director} from './utility/imports'
import GameWorld from './game-world/game-world'

const GameController = function () {
  var that = {};

  that.enterGameWorld = function () {
    //进入游戏界面
    let gameWorld = GameWorld();
    gameWorld.init();
    Director.sharedDirector().replaceWorld(gameWorld);
  };


  return that;
};
let gameController = GameController();
export default gameController;