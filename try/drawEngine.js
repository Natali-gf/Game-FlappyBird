class DrawEngine {
	drawImage({spriteSheet, image, x, y, width, height}){}
	clear(){

	}
}

class CanvasDrawEngine extends DrawEngine{
	constructor(canvas){
		super()
		this.canvas = canvas
		this.context = canvas.getContext('2d')
	}
	drawImage({spriteSheet, image, x, y, width, height}){
		super.drawImage({spriteSheet, image, x, y, width, height})
		this.context.drawImage(spriteSheet, image.x, image.y, image.w, image.h, x, y, width, height)
	}
	clear(){
		super.clear()
		// console.log(this.canvas.clearRect);
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
	}
}