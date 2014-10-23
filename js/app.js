;(function(exports) {
  var stage, renderer, player, world;
  function setupPixi() {
    stage = new PIXI.Stage(0x66FF99);
    renderer = PIXI.autoDetectRenderer($(window).width(), $(window).height());
    document.body.appendChild(renderer.view);

    world = new PIXI.DisplayObjectContainer();
    stage.addChild(world);

    player = new Player();
    player.position.x = 200;
    player.position.y = 150;

    world.addChild(new Player());
    world.addChild(new Block());
    exports.stage = stage;
    exports.renderer = renderer;
  }

  function animate() {
    requestAnimFrame(animate);
    renderer.render(stage);
    player.rotation += 0.1;
    world.position.x += 0.3;
    world.position.y += 0.3;
  }

  window.addEventListener('load', function() {
    setupPixi();
    requestAnimFrame(animate);
  });
})(this);