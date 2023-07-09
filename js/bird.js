import BaseEntity from "./BaseEntity.js";
import BirdFalling from "./birdFalling.js";

export default class Bird extends BaseEntity{
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this.birdFalling = new BirdFalling;
		this.bird = this.entity;
		this.bird.sourceX = this.config.frame.x;

		this.pipesInterval = props.pipesInterval;
		this.ground = props.field.height - props.groundHeight - props.config.h;
		this.gameOver = props.gameOver;
		this.step = 0;
		this.startMove = props.startMove;
	}

	draw(){
		super.draw(this.bird)
		// this.drawing.drawImage(this.bird)
		//? есть ли разница какой метод тут вызывать? 'super.draw' или 'this.drawing.drawImage' из родительского конструктора?
	}

	update(play){
		this.bird.sourceY = Math.floor((this.step % 9) / 3) * this.config.h + this.config.frame.y,
		this.step += 0.3;
		if(play){
			this.bird.positionY = this.birdFalling.falling(this.config, this.bird.positionY)
		}
		this.rules()
	}

	rules(){
		if(this.bird.positionY <= 0){
			this.bird.positionY = 0
		}
		if(this.bird.positionY >= this.ground){
			this.gameOver();
		}
	}

	flappyUp(){
		this.bird.positionY -= this.pipesInterval / 2
		this.birdFalling.cancelAcceleration()
	}
}