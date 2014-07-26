;(function(exports) {
  var Block = function() {
    PIXI.DisplayObjectContainer.call(this);
    var texture = PIXI.Texture.fromImage("/img/block.png");
    var sprite = new PIXI.Sprite(texture);
    this.addChild(sprite);
  };
  Block.prototype = new PIXI.DisplayObjectContainer();
  exports.Block = Block;
})(this);
