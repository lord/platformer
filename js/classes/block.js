;(function(exports) {
  var Block = function() {
    PIXI.DisplayObjectContainer.call(this);
    var texture = PIXI.Texture.fromImage("/img/cat.png");
    var sprite = new PIXI.Sprite(texture);
    this.addChild(sprite);
    this.w = 50;
    this.h = 50;
  };
  Block.prototype = new PIXI.DisplayObjectContainer();
  exports.Block = Block;
})(this);
