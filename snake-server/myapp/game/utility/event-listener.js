/**
 * Created by chuhaoyuan on 2017/8/14.
 */
const EventListener = function (obj) {
  var register = {};

  obj.on = function (name, method) {
    if (!register.hasOwnProperty(name)){
       register[name] = [];
    }
    register[name].push(method);
  };
  obj.fire = function (name) {

    if (register.hasOwnProperty(name)){
      var handler = register[name];

      for (var i = 0 ; i < handler.length ; i ++){
        var args = [];
        for (var j = 1 ; j < arguments.length ; i ++){
          args.push(arguments[j]);
        }
        handler[name].call(this, args);
      }
    }
  };
  obj.removeAllListener = function () {
    register = [];
  };
  return obj;
};
module.exports = EventListener;