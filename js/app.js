;(function(exports) {
  var stage, renderer, cat;
  function setupPixi() {
    stage = new PIXI.Stage(0x66FF99);
    renderer = PIXI.autoDetectRenderer(400, 300);
    document.body.appendChild(renderer.view);

    var texture = PIXI.Texture.fromImage("/cat.png");
    cat = new PIXI.Sprite(texture);

    cat.anchor.x = 0.5;
    cat.anchor.y = 0.5;

    cat.position.x = 200;
    cat.position.y = 150;

    stage.addChild(cat);
  }

  function animate() {
    requestAnimFrame(animate);
    renderer.render(stage);
    cat.rotation += 0.1;
  }

  window.addEventListener('load', function() {
    setupPixi();
    requestAnimFrame(animate);
  });
})(this);