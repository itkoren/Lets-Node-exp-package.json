var merge = exports.merge = function(obj, other) {
  var keys = Object.keys(other); // How cool it is not to think about cross-browser support HA?
  for (var i = 0, len = keys.length; i < len; ++i) {
      var key = keys[i];
      obj[key] = other[key];
  }
  return obj;
};