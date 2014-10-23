;(function(exports) {
  var World = function() {
    PIXI.DisplayObjectContainer.call(this);
  }

  // constructor
  World.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
  World.prototype.constructor = World;

  exports.World = World;
})(this);