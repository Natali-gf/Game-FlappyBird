class Bird {
	constructor({x, y, width, height, frames, spriteSheet, flapSpeed, physicsEngine, drawEngine, game}){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.frames = frames;
		this.frameIdx = 0
		this.spriteSheet = spriteSheet;
		this.flapSpeed = flapSpeed;
		this.physicsEngine = physicsEngine;
		this.drawEngine = drawEngine;
		this.game = game;
	}

	draw(){
		this.drawEngine.drawImage(this.spriteSheet, this.frames(this.frameIdx), this.x, this.y, this.width, this.height);
	}

	update(){
		this.physicsEngine.update(this)
		if(this.y < 0){
			this.y = 0
		}
		if(this.y + this.height >= this.game.height){
			this.game.gameOver()
		}
		this.frames = (this.frameIdx + 1) % this.frames.lenght
	}

	flap(){
		this.speed = -this.flapSpeed
	}
}