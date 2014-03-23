Coquette.Collider.prototype.check_collision_offset = function(entity, x, y) {
  var collisions = [];

  // get all entity pairs to test for collision
  var ents = this.c.entities.all();
  // TODO HACKISH SOLUTION
  // this just moves the center over, checks for collisions, and then moves
  // it back
  entity.center.x += x;
  entity.center.y += y;
  for (var i = 0, len = ents.length; i < len; i++) {
    if (ents[i] !== entity && this.isColliding(entity, ents[i])) {
      collisions.push(ents[i]);
    }
  }
  entity.center.x -= x;
  entity.center.y -= y;

  return collisions;
}
