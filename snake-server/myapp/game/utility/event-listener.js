/**
 * Created by chuhaoyuan on 2017/8/14.
 */
const EventListener = function () {
  var register = {};
  var that = {};

  that.on = function (name, method) {
    if (!register.hasOwnProperty(name)){
       register[name] = [];
    }
    register[name].push(method);
    return this;
  };
  that.fire = function (name) {

    if (register.hasOwnProperty(name)){
      var handlerList = register[name];
      for (var i = 0 ; i < handlerList.length ; i ++){
        var handler = handlerList[i];
        var args = [];
        for (var j = 1 ; j < arguments.length ; j ++){
          args.push(arguments[j]);
        }
        handler.apply(this,args);
      }
    }
    return this;
  };
  that.removeListenerWithName = function (name, method) {

    if (register.hasOwnProperty(name)){
      var handlerList = register[name];
      for (var i = 0 ; i < handlerList.length ; i ++){
        if (handlerList[i] === method){
          handlerList.splice(i ,1);
        }
      }
    }
  };
  that.removeAllListener = function () {
    register = [];
  };
  return that;
};
module.exports = EventListener;