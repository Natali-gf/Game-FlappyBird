import { getRandomNumber } from "./helpers.js";
import BaseEntity from "./BaseEntity.js";

export default class Pipes extends BaseEntity{
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this.pipes = [];
		this.pipesInterval = props.configBird.h * 100 / 20;
		this.pipeWidth = props.configBird.w * 2;
		this.pipeHeight = this.pipesInterval * 100 / 25;
		this.pipesDistance = this.pipeWidth * 4;
		this.groundHeight = props.groundHeight;

		this.gameOver = props.gameOver;
		this.score = props.score;
		this.speed = props.config.speed;
		this.pipeIndex = 0
		this.newPipes()
	}

	draw(){
		this.pipes.forEach(elem => {
			// super.draw(elem.pipeTop);
			// super.draw(elem.pipeBottom);
			this.drawing.drawImage(elem.pipeTop);
			this.drawing.drawImage(elem.pipeBottom);
		})
	}

	update(bird){
		this.pipes.forEach((elem, index, array) => {
			elem.pipeTop.positionX = elem.pipeTop.positionX - (this.speed)
			elem.pipeBottom.positionX = elem.pipeBottom.positionX - (this.speed)

			if( (bird.positionX + bird.positionWidth >= elem.pipeTop.positionX
				&& bird.positionX + bird.positionWidth <= elem.pipeTop.positionX + this.pipeWidth
				|| bird.positionX >= elem.pipeTop.positionX
				&& bird.positionX <= elem.pipeTop.positionX + this.pipeWidth)
				&& bird.positionY >= elem.pipeTop.positionY
				&& bird.positionY <= elem.pipeTop.positionY + (this.config.h - elem.pipeTop.sourceY)
					||
				(bird.positionX + bird.positionWidth >= elem.pipeBottom.positionX
				&& bird.positionX + bird.positionWidth <= elem.pipeBottom.positionX + this.pipeWidth
				|| bird.positionX >= elem.pipeBottom.positionX
				&& bird.positionX <= elem.pipeBottom.positionX + this.pipeWidth)
				&& bird.positionY + bird.positionHeight >= elem.pipeBottom.positionY ) {
					this.gameOver()
			}

			if(index === this.pipeIndex){
				if(elem.pipeTop.positionX + (this.pipeWidth / 2) < bird.positionX + bird.positionWidth){
					this.score.incScore()
					this.pipeIndex++
				}
			}
			if(index === this.pipes.length - 1){
				if(elem.pipeTop.positionX <= (this.field.width - this.pipesDistance)){
					this.newPipes();
				}
			}
			if(elem.pipeTop.positionX <= -this.pipeWidth){
				this.pipes.shift()
				this.pipeIndex--
			}
		})
	}

	newPipes(){
		this.maxPipePosition = this.field.height - this.groundHeight - this.pipesInterval - 10;
		// if (this.pipeHeight>this.field.height){
		// 	this.pipePositionY = getRandomNumber(this.groundHeight + (this.pipeHeight - this.field.height) + 10, this.maxPipePosition);
		// 	// this.maxPipePosition = this.maxPipePosition
		// } else {
		// 	this.pipePositionY = getRandomNumber(this.groundHeight, this.maxPipePosition);
		// }
		let pipePositionY = getRandomNumber(this.groundHeight, this.maxPipePosition);
		this.pipes.push({
			pipeTop: {
				spriteSheet: this.spriteSheet,
				sourceX: this.config.pipeTop.x,
				sourceY: this.config.pipeTop.y + pipePositionY,
				sourceWidth: this.config.w,
				sourceHeight: this.config.h,
				positionX: this.field.width,
				positionY: 0,
				positionWidth: this.pipeWidth,
				positionHeight: this.config.h,
			},
			pipeBottom: {
				spriteSheet: this.spriteSheet,
				sourceX: this.config.pipeBottom.x,
				sourceY: this.config.pipeBottom.y,
				sourceWidth: this.config.w,
				sourceHeight: this.config.h,
				positionX: this.field.width,
				positionY: this.config.h - pipePositionY + this.pipesInterval,
				positionWidth: this.pipeWidth,
				positionHeight: this.config.h,
			}
		})
	}
}