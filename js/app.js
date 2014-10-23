;(function(exports) {
  var stage, renderer, player, world;
  function setupPixi() {
    stage = new PIXI.Stage(0x66FF99);
    renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());
    document.body.appendChild(renderer.view);

    world = new World();
    stage.addChild(world);

    player = new Player();
    player.position.x = 450;
    player.position.y = 450;

    var block = new Block();
    block.position.x = 450;
    block.position.y = 450;

    world.addChild(block);
    world.addChild(player);
    exports.stage = stage;
    exports.renderer = renderer;
  }

  var time = 0;
  function animate() {
    time++;
    requestAnimFrame(animate);
    renderer.render(stage);
    player.x = Math.cos(time / 20) * 50 + 450;
    player.y = Math.sin(time / 60) * 75 + 450;
    player.alpha = 0.2;
    world.getCollidingObjects(player, function(other) {
      player.alpha = 1;
    });
    // world.position.x += 0.3;
    // world.position.y += 0.3;
  }

  window.addEventListener('load', function() {
    setupPixi();
    requestAnimFrame(animate);
  });
})(this);