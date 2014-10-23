;(function(exports) {
  var Player = function() {
    PIXI.DisplayObjectContainer.call(this);
    var texture = PIXI.Texture.fromImage("/img/cat.png");
    var sprite = new PIXI.Sprite(texture);
    this.addChild(sprite);
  };
  Player.prototype = new PIXI.DisplayObjectContainer();
  exports.Player = Player;
})(this);
