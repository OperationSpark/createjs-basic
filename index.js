(function(window, createjs, opspark, _) {
  const
    draw = opspark.draw,
    physikz = opspark.racket.physikz,
    engine = opspark.V6().activateResize(),
    canvas = engine.getCanvas(),
    stage = engine.getStage();

  engine
    .addTickHandlers(update)
    .activateTick();

  function update(event) {
    
  }


}(window, window.createjs, window.opspark, window._));
