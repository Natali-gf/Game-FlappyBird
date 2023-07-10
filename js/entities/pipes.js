import { getRandomNumber } from "../additional/helpers.js";
import BaseEntity from "./baseEntity.js";

export default class Pipes extends BaseEntity{
	_pipes = [];
	_pipeIndex = 0
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this._pipeHeight = props.field.height - props.groundHeight;
		this._pipesInterval = this._pipeHeight * 25 / 100;
		this._pipeWidth = props.configBird.w * 2;
		this._pipesDistance = this._pipeWidth * 4;
		this._groundHeight = props.groundHeight;

		this._gameOver = props.gameOver;
		this._score = props.score;
		this.newPipes()
	}

	draw(){
		this._pipes.forEach(elem => {
			this._drawing.drawImage(elem.pipeTop);
			this._drawing.drawImage(elem.pipeBottom);
		})
	}

	update(bird, speed, sounds){
		this._pipes.forEach((elem, index) => {
			elem.pipeTop.positionX = elem.pipeTop.positionX - (speed);
			elem.pipeBottom.positionX = elem.pipeBottom.positionX - (speed);

			if( (bird.positionX + bird.positionWidth >= elem.pipeTop.positionX
				&& bird.positionX + bird.positionWidth <= elem.pipeTop.positionX + this._pipeWidth
				|| bird.positionX >= elem.pipeTop.positionX
				&& bird.positionX <= elem.pipeTop.positionX + this._pipeWidth)
				&& bird.positionY >= elem.pipeTop.positionY
				&& bird.positionY <= elem.pipeTop.positionY + (this._config.h - elem.pipeTop.sourceY)
					||
				(bird.positionX + bird.positionWidth >= elem.pipeBottom.positionX
				&& bird.positionX + bird.positionWidth <= elem.pipeBottom.positionX + this._pipeWidth
				|| bird.positionX >= elem.pipeBottom.positionX
				&& bird.positionX <= elem.pipeBottom.positionX + this._pipeWidth)
				&& bird.positionY + bird.positionHeight >= elem.pipeBottom.positionY ) {
					sounds.squeak.play();
					this._gameOver()
			}

			if(index === this._pipeIndex){
				if(elem.pipeTop.positionX + (this._pipeWidth / 2) < bird.positionX + bird.positionWidth){
					this._score.incScore();
					this._pipeIndex++;
					sounds.scoreUp.play();
				}
			}
			if(index === this._pipes.length - 1){
				if(elem.pipeTop.positionX <= (this._field.width - this._pipesDistance)){
					this.newPipes();
				}
			}
			if(elem.pipeTop.positionX <= -this._pipeWidth){
				this._pipes.shift()
				this._pipeIndex--
			}
		})
	}

	newPipes(){
		this.maxPipePosition = this._field.height - this._pipesInterval - this._groundHeight;
		let pipePositionY = getRandomNumber(this._groundHeight, this.maxPipePosition);

		this._pipes.push({
			pipeTop: {
				spriteSheet: this._spriteSheet,
				sourceX: this._config.pipeTop.x,
				sourceY: this._config.pipeTop.y + pipePositionY,
				sourceWidth: this._config.w,
				sourceHeight: this._config.h,
				positionX: this._field.width,
				positionY: 0,
				positionWidth: this._pipeWidth,
				positionHeight: this._config.h,
			},
			pipeBottom: {
				spriteSheet: this._spriteSheet,
				sourceX: this._config.pipeBottom.x,
				sourceY: this._config.pipeBottom.y,
				sourceWidth: this._config.w,
				sourceHeight: this._config.h,
				positionX: this._field.width,
				positionY: this._config.h - pipePositionY + this._pipesInterval,
				positionWidth: this._pipeWidth,
				positionHeight: this._config.h,
			}
		})
	}

	get pipes(){
		return this._pipes
	}
	get pipeIndex(){
		return this._pipeIndex
	}
	get gameOver(){
		return this._gameOver
	}
	get score(){
		return this._score
	}
	get pipesInterval(){
		return this._pipesInterval
	}
	get pipeWidth(){
		return this._pipeWidth
	}
	get groundHeight(){
		return this._groundHeight
	}
	get pipeHeight(){
		return this._pipeHeight
	}
	get pipesDistance(){
		return this._pipesDistance
	}
}