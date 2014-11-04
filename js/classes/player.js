;(function(exports) {
  var Player = function() {
    PIXI.DisplayObjectContainer.call(this);
    var texture = PIXI.Texture.fromImage("/img/block.png");
    var sprite = new PIXI.Sprite(texture);
    this.addChild(sprite);
    this.w = 16;
    this.h = 16;
    this.vx = 0;
    this.vy = 0;
  };
  Player.prototype = new PIXI.DisplayObjectContainer();
  Player.prototype.step = function() {
    this.x += this.vx;
    this.y += this.vy;
  };
  exports.Player = Player;
})(this);
