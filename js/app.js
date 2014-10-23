;(function(exports) {
  var stage, renderer, player, world;
  function setupPixi() {
    stage = new PIXI.Stage(0x66FF99);
    renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());
    document.body.appendChild(renderer.view);

    world = new World();
    stage.addChild(world);

    player = new Player();
    player.position.x = 200;
    player.position.y = 150;

    world.addChild(player);
    world.addChild(new Block());
    exports.stage = stage;
    exports.renderer = renderer;
  }

  function animate() {
    requestAnimFrame(animate);
    renderer.render(stage);
    player.rotation += 0.01;
    world.getCollidingObjects(player, function(other) {
      console.log(other);
    });
    // world.position.x += 0.3;
    // world.position.y += 0.3;
  }

  window.addEventListener('load', function() {
    setupPixi();
    requestAnimFrame(animate);
  });
})(this);