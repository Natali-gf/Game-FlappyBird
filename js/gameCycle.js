export default class GameCycle {
	constructor(update, draw){
		this.update = update;
		this.draw = draw;

		// this.accelerateCycle = this.accelerateCycle.bind(this);
		this.movement = this.#movement.bind(this);
		// this.setIntervalId;
	}

	start(){
		// this.setIntervalId = setInterval(this.movement, this.speed);
		requestAnimationFrame(this.movement)
	}

	stop(){
		// clearInterval(this.setIntervalId)
	}

	// accelerateCycle(){
	// 	this.speed -= 20
	// 	this.stop();
	// 	this.start();
	// }

	#movement() {
		this.update();
		this.draw();
	}
};
