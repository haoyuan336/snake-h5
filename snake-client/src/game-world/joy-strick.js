/**
 * Created by chuhaoyuan on 2017/8/15.
 */
import {BaseLayer, Inherited, Vec2} from './../utility/imports'
import resources from './../resources'
const JoyStrick = function () {
  var that = Inherited(BaseLayer());
  var _direction = {
    x: 0,
    y: 0
  };
  that.inheritOn('init', ()=>{
    return true;
  });
  that.update = function (dt) {

  };


  var _bg = PIXI.Sprite.fromImage(resources.direction_1);
  that.node.addChild(_bg);
  _bg.anchor.set(0.5);
  _bg.scale = {
    x: 2,
    y: 2
  };
  _bg.alpha = 0;
  _bg.interactive = true;


  var _joyStrickBg = PIXI.Sprite.fromImage(resources.direction_1);
  that.node.addChild(_joyStrickBg);
  _joyStrickBg.anchor.set(0.5);
  var _joyStrick = PIXI.Sprite.fromImage(resources.direction_2);
  that.node.addChild(_joyStrick);
  _joyStrick.anchor.set(0.5);

  const touchBegan = function (event) {
    moveToCurrentPos(event.data.getLocalPosition(that.node));
  };
  const touchMove = function (event) {
    moveToCurrentPos(event.data.getLocalPosition(that.node));
  };
  const touchEnd = function (event) {
    moveToCurrentPos(_joyStrickBg.position);
  };

  const moveToCurrentPos = function (pos) {
    // _joyStrick.position = pos;
    var touchPos = Vec2(pos.x, pos.y);
    var bgPos = Vec2(_joyStrickBg.position.x, _joyStrickBg.position.y);
    if (touchPos.getDistance(bgPos) > _joyStrickBg.width * 0.5){
      _joyStrick.position = touchPos.sub(bgPos).getNormal().multValue(_joyStrickBg.width * 0.5);
    }else {
      _joyStrick.position = pos;
    }
    _direction = touchPos.sub(bgPos).getNormal();

  };

  _bg.on('pointerdown', touchBegan)
    .on('pointerup', touchEnd)
    .on('pointerupoutside', touchEnd)
    .on('pointermove', touchMove);




  that.getDirection = function () {

    return _direction;
  };


  return that;
};
export default JoyStrick;