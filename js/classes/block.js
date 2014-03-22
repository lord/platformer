;(function(exports) {
  var Block = function(game, settings) {
    this.c = game.c;
    for (var i in settings) {
      this[i] = settings[i];
    }

    this.size = { x: 10, y: 10 };

    this.draw = function(ctx) {
      ctx.fillStyle = '#fff';
      ctx.fillRect(this.center.x - this.size.x / 2,
                   this.center.y - this.size.y / 2,
                   this.size.x,
                   this.size.y);
    };
  };
  exports.Block = Block;
})(this);
