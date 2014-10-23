// todo - I think this should really extend the stage, a GameStage maybe?
// all objects contain references to the stage.
;(function(exports) {
  var checkIfObjectsColliding = function(obj1, obj2) {
    return (obj1.w && obj2.w && obj1.h && obj2.h &&
            obj1.x < obj2.x + obj2.w &&
            obj1.x + obj1.w > obj2.x &&
            obj1.y < obj2.y + obj2.h &&
            obj1.h + obj1.y > obj2.y);
  };

  var World = function() {
    PIXI.DisplayObjectContainer.call(this);
  };

  // constructor
  World.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
  World.prototype.constructor = World;

  World.prototype.getCollidingObjects = function(obj, callback) {
    for (var i in this.children) {
      if (this.children[i] !== obj && checkIfObjectsColliding(this.children[i], obj)) {
        callback(this.children[i]);
      }
    }
  };

  exports.World = World;
})(this);