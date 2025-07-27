player.onChat("sort", function () {
    agent.move(FORWARD, 4)
    agent.setSlot(1)
    agent.collect(ROTTEN_FLESH)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 3)
    agent.interact(FORWARD)
})
