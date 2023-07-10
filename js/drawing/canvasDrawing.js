import Drawing from "./drawing.js"

export default class CanvasDrawing extends Drawing{
	constructor(canvas){
		super()
		this.canvas = canvas;
		this.degree = 0
	}

	drawImage(params){
		super.drawImage();
			if(params.degree > 0){
				this.rotateImage(params)
				return
			}
			this.canvas.context.drawImage( params.spriteSheet,
											params.sourceX, params.sourceY,
											params.sourceWidth, params.sourceHeight,
											params.positionX, params.positionY,
											params.positionWidth, params.positionHeight )
	}

	rotateImage(params){
		this.canvas.context.save();

		this.canvas.context.translate(params.positionX + params.positionWidth / 2,
										params.positionY + params.positionHeight / 2);
		this.canvas.context.rotate((params.degree || this.degree) * Math.PI/180);
		this.canvas.context.drawImage( params.spriteSheet,
										params.sourceX, params.sourceY,
										params.sourceWidth, params.sourceHeight,
										-params.positionWidth/2, -params.positionHeight/2,
										params.positionWidth, params.positionHeight )

		this.canvas.context.restore();
	}

	drawText(params){
		this.canvas.context.font = "40px FlappyBird";
		this.canvas.context.fillStyle = "white";
		this.canvas.context.lineWidth = 1.5;
		this.canvas.context.fillText(params.text, params.x, params.y);
		this.canvas.context.strokeText(params.text, params.x, params.y);
	}

	getTextWidth(text){
		return this.canvas.context.measureText(text).width;
	}

	clear(){
		super.clear()
		this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height)
	}
}