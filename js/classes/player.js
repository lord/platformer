;(function(exports) {
  var Player = function() {
    PIXI.DisplayObjectContainer.call(this);
    var texture = PIXI.Texture.fromImage("/img/block.png");
    var sprite = new PIXI.Sprite(texture);
    this.addChild(sprite);
    this.w = 16;
    this.h = 16;
  };
  Player.prototype = new PIXI.DisplayObjectContainer();
  exports.Player = Player;
})(this);
