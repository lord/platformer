;(function(exports) {
  window.addEventListener('load', function() {
    var meter = new FPSMeter({
      heat: 1,
      graph: 1,
      history: 40,
      interval: 500
    });
    exports.meter = meter;
  });
})(this);