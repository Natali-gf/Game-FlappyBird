import BaseEntity from "../baseEntity.js";
import BirdFalling from "./birdFalling.js";

export default class Bird extends BaseEntity{
	_bird = this.entity;
	_step = 0;
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this._birdFalling = new BirdFalling;
		this._bird.sourceX = this._config.frame.x;
		this._bird.positionHeight = props.pipesInterval * 20 / 100;
		this._pipesInterval = props.pipesInterval;
		this._ground = props.field.height - props.groundHeight - props.config.h;
		this._gameOver = props.gameOver;
	}

	update(play, sounds){
		this._bird.sourceY = Math.floor((this._step % 9) / 3) * this._config.h + this._config.frame.y,
		this._step += 0.3;
		if(play){
			this._bird.positionY = this._birdFalling.falling(this._config, this._bird.positionY)
		}

		if(this._bird.degree && this._bird.degree < 450){
			this._bird.degree += 3
			this._bird.degree >= 450 ? 450 : null;
		}

		this.#rules(sounds);
	}

	#rules(sounds){
		if(this._bird.positionY <= 0){
			this._bird.positionY = 0
		}
		if(this._bird.positionY >= this._ground){
			sounds.crash.play()
			this._gameOver();
		}
	}

	flappyUp(){
		this._bird.positionY -= this._pipesInterval / 2
		this._bird.degree = 315
		this._birdFalling.cancelAcceleration()
	}

	get birdFalling(){
		return this._birdFalling
	}
	get bird(){
		return this._bird
	}
	get pipesInterval(){
		return this._pipesInterval
	}
	get ground(){
		return this._ground
	}
	get gameOver(){
		return this._gameOver
	}
}