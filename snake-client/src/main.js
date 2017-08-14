/**
 * Created by chuhaoyuan on 2017/8/14.
 */
import {ResourceManager, Director, Helper} from './utility/imports'
import resources from './resources'
import global from './global'
import gameController from './game-controller'
import defines from './game-defines'
window.onload = function () {
  const _getResolution = ()=> {
    let resolutionStr = Helper.getQueryString('resolution');
    let resolution = 2;
    if(resolutionStr) {
      resolution = parseInt(resolutionStr);
    }
    resolution = 2;

    return resolution >= 2 ? 2 : 1;
  };


  let resList = [];
  for (let  index in resources){
    resList.push(resources[index]);
  }
  ResourceManager.init(resources);
  (async()=>{
    await ResourceManager.loadList(resList);
    await ResourceManager.loadFontList(defines.fontList);
    // await ConfigManager.loadConfigs(defines.gameConfigs);
    await Director.create(defines.Canvas.width,defines.Canvas.height,_getResolution(),defines.direction.portrait);

    gameController.enterGameWorld();

  })();



};