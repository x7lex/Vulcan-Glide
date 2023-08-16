var module = rise.registerModule(
  "Vulcan Glide",
  "Ported from Nerbles1 Liquidbounce glide."
);
script.handle("onUnload", function () {
  module.unregister();
});

 {
  module.handle("onTick", function () {
    if (!player.isOnGround() && player.getFallDistance() > 0) {
      if (player.getTicksExisted() % 2 === 0) {
        player.setMotionY(-0.155);
      } else {
        player.setMotionY(-0.1);
      }
    }
  });
}

