import { getRandomNumber } from "../try/helpers.js";

export default class Pipes {
	constructor(configPipes, configBird, configGround, field, drawing){
		this.configPipes = configPipes;
		this.pipeWidth = configBird.w * 2;
		this.pipesInterval = configPipes.h * 25 / 100;
		this.pipesDistance = this.pipeWidth * 3 + this.pipeWidth;
		this.groundHeight = configGround.h;
		this.drawing = drawing;
		this.field = field;
		this.speed = configPipes.speed;

		this.pipes = []
		this.newPipes()
		this.step = 0

	}

	draw(){
		this.pipes.forEach(elem => {
			this.drawing.drawImage(elem.pipeTop);
			this.drawing.drawImage(elem.pipeBottom)
		})
	}

	update(){
		this.pipes.forEach((elem) => {
			elem.pipeTop.positionX = elem.pipeTop.positionX - (this.speed)
			elem.pipeBottom.positionX = elem.pipeBottom.positionX - (this.speed)
		})
		this.step += this.speed;
		// console.log(this.step, this.pipesDistance, this.step % (this.pipesDistance) === 0);

		if(this.step % (this.pipesDistance) === 0){
			this.newPipes()

		}
	}

	newPipes(){
		this.maxPipePosition = this.field.height - this.groundHeight - this.pipesInterval;
		let pipePositionY = getRandomNumber(this.groundHeight, this.maxPipePosition);

		this.pipes.push({
			pipeTop: {
				sourceX: this.configPipes.pipeTop.x,
				sourceY: this.configPipes.pipeTop.y + pipePositionY,
				sourceWidth: this.configPipes.w,
				sourceHeight: this.configPipes.h,
				positionX: this.field.width,
				positionY: 0,
				positionWidth: this.pipeWidth,
				positionHeight: this.configPipes.h,
			},
			pipeBottom: {
				sourceX: this.configPipes.pipeBottom.x,
				sourceY: this.configPipes.pipeBottom.y,
				sourceWidth: this.configPipes.w,
				sourceHeight: this.configPipes.h,
				positionX: this.field.width,
				positionY: this.configPipes.h - pipePositionY + this.pipesInterval,
				positionWidth: this.pipeWidth,
				positionHeight: this.configPipes.h,
			}
		})
	}
}