;(function(exports) {
  var Person = function(game, settings) {
    this.c = game.c;
    this.vx = 0;
    this.vy = 0;
    for (var i in settings) {
      this[i] = settings[i];
    }

    this.size = { x:10, y:10 };
  };
  Person.prototype = {
    update: function() {
      if (this.c.inputter.isDown(this.c.inputter.LEFT_ARROW)) {
        this.vx = -1;
      }
      else if (this.c.inputter.isDown(this.c.inputter.RIGHT_ARROW)) {
        this.vx = 1;
      }
      else {
        this.vx = 0;
      }

      this.vy += 0.1;
      if (this.c.inputter.isDown(this.c.inputter.UP_ARROW) && this.c.collider.check_collision_offset(this, 0, 1).length > 0) {
        this.vy = -5;
      } else if (this.c.collider.check_collision_offset(this, 0, 1).length > 0) {
        this.vy = 0;
      }

      var xdir, ydir;
      if (this.vx > 0) {
        xdir = 1;
      } else {
        xdir = -1;
      }
      if (this.vy > 0) {
        ydir = 1;
      } else {
        ydir = -1;
      }

      for (var i=0; i<Math.abs(this.vx); i++) {
        if (this.c.collider.check_collision_offset(this, xdir, 0).length === 0) {
          this.center.x += xdir;
        }
      }
      if (this.c.collider.check_collision_offset(this, 0, xdir * (Math.abs(this.vx) % 1)).length === 0) {
        this.center.x += xdir * (Math.abs(this.vx) % 1);
      }
      for (var j=1; j<Math.abs(this.vy); j++) {
        if (this.c.collider.check_collision_offset(this, 0, ydir).length === 0) {
          this.center.y += ydir;
        }
      }
      if (this.c.collider.check_collision_offset(this, 0, ydir * (Math.abs(this.vy) % 1)).length === 0) {
        this.center.y += ydir * (Math.abs(this.vy) % 1);
      }
    },
    collision: function(other) {
      other.center.y = this.center.y; // follow the player
    },
    draw: function(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.center.x - this.size.x / 2,
                   this.center.y - this.size.y / 2,
                   this.size.x,
                   this.size.y);
    }
  };
  exports.Person = Person;
})(this);
