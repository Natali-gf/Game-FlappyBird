import Drawing from "./drawing.js"

export default class CanvasDrawing extends Drawing{
	constructor(canvas){
		super()
		this.canvas = canvas;
		this.degree = 0
	}

	drawImage({spriteSheet, sourceX, sourceY, sourceWidth, sourceHeight,
				positionX, positionY, positionWidth, positionHeight, degree}){
		super.drawImage();
			if(degree > 0){
				this.rotateImage({spriteSheet, sourceX, sourceY, sourceWidth, sourceHeight,
					positionX, positionY, positionWidth, positionHeight, degree})
				return
			}
			this.canvas.context.drawImage(spriteSheet, sourceX, sourceY, sourceWidth, sourceHeight, positionX, positionY, positionWidth, positionHeight)
	}

	rotateImage({spriteSheet, sourceX, sourceY, sourceWidth, sourceHeight,
		positionX, positionY, positionWidth, positionHeight, degree}){
		this.canvas.context.save();

		this.canvas.context.translate(positionX + positionWidth / 2, positionY + positionHeight / 2);
		this.canvas.context.rotate((degree || this.degree) * Math.PI/180);
		this.canvas.context.drawImage(spriteSheet, sourceX, sourceY, sourceWidth, sourceHeight, -positionWidth/2, -positionHeight/2, positionWidth, positionHeight)

		this.canvas.context.restore();
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
		this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height)
	}
}