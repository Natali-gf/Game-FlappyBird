import { getRandomNumber } from "../helpers.js";
import BaseEntity from "./baseEntity.js";

export default class Pipes extends BaseEntity{
	_pipes = [];
	_pipeIndex = 0
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this._pipesInterval = props.configBird.h * 100 / 20;
		this._pipeWidth = props.configBird.w * 2;
		this._pipeHeight = this._pipesInterval * 100 / 25;
		this._pipesDistance = this._pipeWidth * 4;
		this._groundHeight = props.groundHeight;

		this._gameOver = props.gameOver;
		this._score = props.score;
		this._speed = props.config.speed;
		this.newPipes()
	}

	draw(){
		this._pipes.forEach(elem => {
			this._drawing.drawImage(elem.pipeTop);
			this._drawing.drawImage(elem.pipeBottom);
		})
	}

	update(bird){
		this._pipes.forEach((elem, index, array) => {
			elem.pipeTop.positionX = elem.pipeTop.positionX - (this._speed)
			elem.pipeBottom.positionX = elem.pipeBottom.positionX - (this._speed)

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
					this._gameOver()
			}

			if(index === this._pipeIndex){
				if(elem.pipeTop.positionX + (this._pipeWidth / 2) < bird.positionX + bird.positionWidth){
					this._score.incScore()
					this._pipeIndex++
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
		this.maxPipePosition = this._field.height - this._groundHeight - this._pipesInterval - 10;
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
	get speed(){
		return this._speed
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