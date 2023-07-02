class Bird extends Entity{
	constructor(params){
		super(params)
		// const {x, y, width, height, frames, spriteSheet, flapSpeed, physicsEngine, drawEngine, game} = params

		this.flapSpeed = params.flapSpeed;
		this.physicsEngine = params.physicsEngine;
		this.falling = true
	}


	update(delta){
		super.update(delta)
		this.physicsEngine.update(this, delta)
		if(this.y < 0){
			this.y = 0
		}
		if(this.y + this.height >= this.game.height){
			this.game.gameOver()
		}

	}

	flap(){
		this.speed = -this.flapSpeed
	}
}