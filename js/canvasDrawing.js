import Drawing from "./drawing.js"

export default class CanvasDrawing extends Drawing{
	constructor(canvas){
		super()
		this.canvas = canvas;
		this.degree = 0
	}

	drawImage({spriteSheet, sourceX, sourceY, sourceWidth, sourceHeight,
				positionX, positionY, positionWidth, positionHeight, degree}){
		super.drawImage()
		// console.log(degree);
			// this.canvas.context.rotate((degree || this.degree) * Math.PI / 180)
			this.canvas.context.drawImage(spriteSheet, sourceX, sourceY, sourceWidth, sourceHeight, positionX, positionY, positionWidth, positionHeight)
	}

	drawText(text, x, y){
		this.canvas.context.font = "40px FlappyBird";
		this.canvas.context.fillStyle = "white";
		this.canvas.context.lineWidth = 1.5;
		this.canvas.context.fillText(text, x, y);
		this.canvas.context.strokeText(text, x, y);
	}

	getTextWidth(text){
		return this.canvas.context.measureText(text).width;
	}
	// rotate(degree){
	// 	this.canvas.context.rotate(degree * Math.PI / 180)
	// 	// this.drawImage()
	// }

	clear(){
		super.clear()
		this.canvas.context.clearRect(0, 0, this.canvas.field.width, this.canvas.field.height)
	}
}