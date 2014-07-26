;(function(exports) {
  var stage, renderer, cat, world;
  function setupPixi() {
    stage = new PIXI.Stage(0x66FF99);
    renderer = PIXI.autoDetectRenderer(400, 300);
    document.body.appendChild(renderer.view);

    var texture = PIXI.Texture.fromImage("/img/cat.png");
    world = new PIXI.DisplayObjectContainer();
    stage.addChild(world);
    cat = new PIXI.Sprite(texture);

    cat.anchor.x = 0.5;
    cat.anchor.y = 0.5;

    cat.position.x = 200;
    cat.position.y = 150;

    world.addChild(cat);

    world.addChild(new Block());
    exports.stage = stage;
    exports.renderer = renderer;
  }

  function animate() {
    requestAnimFrame(animate);
    renderer.render(stage);
    cat.rotation += 0.1;
    world.position.x += 0.3;
    world.position.y += 0.3;
  }

  window.addEventListener('load', function() {
    setupPixi();
    requestAnimFrame(animate);
  });
})(this);