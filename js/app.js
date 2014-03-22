;(function(exports) {
  var Game = function() {
    var width = window.innerWidth ||
                html.clientWidth  ||
                body.clientWidth  ||
                screen.availWidth;

    var height = window.innerHeight ||
                 html.clientHeight  ||
                 body.clientHeight  ||
                 screen.availHeight;
    this.c = new Coquette(this, "canvas", width, height, "#000");

    // player
    this.c.entities.create(Person, { center: { x:256, y:310 }, color:"#f07"});
    this.c.entities.create(Block, { center: { x:256, y:330 }});
    this.c.entities.create(Block, { center: { x:330, y:280 }});
    this.c.entities.create(Block, { center: { x:330, y:290 }});
    this.c.entities.create(Block, { center: { x:330, y:300 }});
    this.c.entities.create(Block, { center: { x:320, y:300 }});
    this.c.entities.create(Block, { center: { x:310, y:300 }});
    this.c.entities.create(Block, { center: { x:300, y:300 }});
  };

  window.addEventListener('load', function() {
    new Game();
    var meter = new FPSMeter({
      heat: 1,
      graph: 1,
      history: 40,
      interval: 500
    });
    exports.meter = meter;
  });
  exports.Game = Game;
})(this);