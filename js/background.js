import BaseEntity from "./BaseEntity.js";

export default class Background extends BaseEntity{
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this.speed = props.speed;
		this.step = 1
		this.backgroundFon = []
		this.backgroundGround = []
		this.create()
	}

	create(){
		for(let i = 0; i < this.field.width; i += this.config.fon.w){
			this.backgroundFon.push({
				spriteSheet: this.spriteSheet,
				sourceX: this.config.fon.x,
				sourceY: this.config.fon.y,
				sourceWidth: this.config.fon.w,
				sourceHeight: this.config.fon.h,
				positionX: i,
				positionY: this.field.height - this.config.fon.h - this.config.ground.h,
				positionWidth: this.config.fon.w + 1,
				positionHeight: this.config.fon.h,
			});
		}
		for(let i = 0; i < this.field.width; i += this.config.ground.w){
			this.backgroundGround.push({
				spriteSheet: this.spriteSheet,
				sourceX: this.config.ground.x,
				sourceY: this.config.ground.y,
				sourceWidth: this.config.ground.w,
				sourceHeight: this.config.ground.h,
				positionX: i,
				positionY: this.field.height - this.config.ground.h,
				positionWidth: this.config.ground.w,
				positionHeight: this.config.ground.h,
			});
		}
	}

	drawFon(){
		this.backgroundFon.forEach(elem => {
			// super.draw(elem)
			this.drawing.drawImage(elem)
		})
	}
	drawGround(){
		this.backgroundGround.forEach(elem => {
			// super.draw(elem)
			this.drawing.drawImage(elem)
		})
	}

	updateFon(){
		this.backgroundFon.forEach(elem => {
			elem.positionX = elem.positionX - this.step;
			if(elem.positionX < -this.config.fon.w){
				this.backgroundFon.shift();
			}
			if((elem.positionX + this.config.fon.w) === this.field.width){
				this.backgroundFon.push({
					spriteSheet: this.spriteSheet,
					sourceX: this.config.fon.x,
					sourceY: this.config.fon.y,
					sourceWidth: this.config.fon.w,
					sourceHeight: this.config.fon.h,
					positionX: this.field.width,
					positionY: this.field.height - this.config.fon.h - this.config.ground.h,
					positionWidth: this.config.fon.w + 1,
					positionHeight: this.config.fon.h,
				})
			}
		})
	}

	updateGround(){
		this.backgroundGround.forEach(elem => {
			elem.positionX = elem.positionX - this.step;
			if(elem.positionX < -this.config.ground.w){
				this.backgroundGround.shift();
			}
			if((elem.positionX + this.config.ground.w) === this.field.width){
				this.backgroundGround.push({
					spriteSheet: this.spriteSheet,
					sourceX: this.config.ground.x,
					sourceY: this.config.ground.y,
					sourceWidth: this.config.ground.w,
					sourceHeight: this.config.ground.h,
					positionX: this.field.width,
					positionY: this.field.height - this.config.ground.h,
					positionWidth: this.config.ground.w,
					positionHeight: this.config.ground.h,
				})
			}
		})
	}
}