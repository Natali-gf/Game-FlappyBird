export default class Bird{
	constructor(configBird, field, drawing){
		this.configBird = configBird;
		this.drawing = drawing;
		this.fieldWidth = field.width;
		this.sourceY;
		this.index = 0
	}

	draw(){
		this.drawing.drawImage({
			sourceX: this.configBird.frame.x,
			sourceY: this.sourceY,
			sourceWidth: this.configBird.w,
			sourceHeight: this.configBird.h,
			positionX: this.fieldWidth / 2 - this.configBird.w / 2,
			positionY: this.configBird.y,
			positionWidth: this.configBird.w,
			positionHeight: this.configBird.h,
		})
	}

	update(){
		this.sourceY = Math.floor((this.index % 9) / 3) * this.configBird.h + this.configBird.frame.y,
		this.index += 0.3;
	}

	rules(){

	}
}