import Drawing from "./drawing.js"

export default class CanvasDrawing extends Drawing{
	constructor(canvas){
		super()
		this.canvas = canvas;
		console.log(this.canvas.field.width);
	}

	drawImage({sourceX, sourceY, sourceWidth, sourceHeight, positionX, positionY, positionWidth, positionHeight}){
		super.drawImage()
		const image = new Image();
		image.src = 'images/sprite.png';

		// const render = () => {
			this.canvas.context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, positionX, positionY, positionWidth, positionHeight)
		// }

		// image.onload = render;
		// console.log(image.onload);
	}

	clear(){
		super.clear()
		this.canvas.context.clearRect(0, 0, this.canvas.field.width, this.canvas.field.height)
	}
}