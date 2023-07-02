export default class Background{
	constructor(configBackground, field, drawing, speed){
		this.configBackground = configBackground;
		this.drawing = drawing;
		this.field = field;
		this.speed = speed;
		this.step = 1
		this.backgroundFon = []
		this.backgroundGround = []
		this.create()
	}

	create(){
		for(let i = 0; i < this.field.width;){
			this.backgroundFon.push({
				sourceX: this.configBackground.fon.x,
				sourceY: this.configBackground.fon.y,
				sourceWidth: this.configBackground.fon.w,
				sourceHeight: this.configBackground.fon.h,
				positionX: i,
				positionY: this.field.height - this.configBackground.fon.h - this.configBackground.ground.h,
				positionWidth: this.configBackground.fon.w + 1,
				positionHeight: this.configBackground.fon.h,
			})
			i += this.configBackground.fon.w;
		}
		for(let i = 0; i < this.field.width;){
			this.backgroundGround.push({
				sourceX: this.configBackground.ground.x,
				sourceY: this.configBackground.ground.y,
				sourceWidth: this.configBackground.ground.w,
				sourceHeight: this.configBackground.ground.h,
				positionX: i,
				positionY: this.field.height - this.configBackground.ground.h,
				positionWidth: this.configBackground.ground.w,
				positionHeight: this.configBackground.ground.h,
			})
			i += this.configBackground.ground.w;
		}
	}

	draw(){
		this.backgroundFon.forEach(elem => {
			this.drawing.drawImage(elem)
		})
		this.backgroundGround.forEach(elem => {
			this.drawing.drawImage(elem)
		})
	}

	update(){
		this.backgroundFon.forEach(elem => {
			elem.positionX = elem.positionX - this.step;
			if(elem.positionX < -this.configBackground.fon.w){
				this.backgroundFon.shift();
			}
			if((elem.positionX + this.configBackground.fon.w) === this.field.width){
				this.backgroundFon.push({
					sourceX: this.configBackground.fon.x,
					sourceY: this.configBackground.fon.y,
					sourceWidth: this.configBackground.fon.w,
					sourceHeight: this.configBackground.fon.h,
					positionX: this.field.width,
					positionY: this.field.height - this.configBackground.fon.h - this.configBackground.ground.h,
					positionWidth: this.configBackground.fon.w + 1,
					positionHeight: this.configBackground.fon.h,
				})
			}
		})

		this.backgroundGround.forEach(elem => {
			elem.positionX = elem.positionX - this.step;
			if(elem.positionX < -this.configBackground.ground.w){
				this.backgroundGround.shift();
			}
			if((elem.positionX + this.configBackground.ground.w) === this.field.width){
				this.backgroundGround.push({
					sourceX: this.configBackground.ground.x,
					sourceY: this.configBackground.ground.y,
					sourceWidth: this.configBackground.ground.w,
					sourceHeight: this.configBackground.ground.h,
					positionX: this.field.width,
					positionY: this.field.height - this.configBackground.ground.h,
					positionWidth: this.configBackground.ground.w,
					positionHeight: this.configBackground.ground.h,
				})
			}
		})
	}

	rules(){

	}
}