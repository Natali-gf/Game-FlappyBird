import BaseEntity from "./baseEntity.js";

export default class Background extends BaseEntity{
	_backgroundFon = [];
	_backgroundGround = [];
	_step = 1;
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this._speed = props.speed;
		this.#create();
	}

	#create(){
		for(let i = 0; i < this._field.width; i += this._config.fon.w){
			this._backgroundFon.push({
				spriteSheet: this._spriteSheet,
				sourceX: this._config.fon.x,
				sourceY: this._config.fon.y,
				sourceWidth: this._config.fon.w,
				sourceHeight: this._config.fon.h,
				positionX: i,
				positionY: this._field.height - this._config.fon.h - this._config.ground.h,
				positionWidth: this._config.fon.w + 1,
				positionHeight: this._config.fon.h,
			});
		}
		for(let i = 0; i < this._field.width; i += this._config.ground.w){
			this._backgroundGround.push({
				spriteSheet: this._spriteSheet,
				sourceX: this._config.ground.x,
				sourceY: this._config.ground.y,
				sourceWidth: this._config.ground.w,
				sourceHeight: this._config.ground.h,
				positionX: i,
				positionY: this._field.height - this._config.ground.h,
				positionWidth: this._config.ground.w,
				positionHeight: this._config.ground.h,
			});
		}
	}

	drawFon(){
		this._backgroundFon.forEach(elem => {
			this._drawing.drawImage(elem)
		})
	}
	drawGround(){
		this._backgroundGround.forEach(elem => {
			this._drawing.drawImage(elem)
		})
	}

	updateFon(){
		this._backgroundFon.forEach(elem => {
			elem.positionX = elem.positionX - this._step;
			if(elem.positionX < -this._config.fon.w){
				this._backgroundFon.shift();
			}
			if((elem.positionX + this._config.fon.w) === this._field.width){
				this._backgroundFon.push({
					spriteSheet: this._spriteSheet,
					sourceX: this._config.fon.x,
					sourceY: this._config.fon.y,
					sourceWidth: this._config.fon.w,
					sourceHeight: this._config.fon.h,
					positionX: this._field.width,
					positionY: this._field.height - this._config.fon.h - this._config.ground.h,
					positionWidth: this._config.fon.w + 1,
					positionHeight: this._config.fon.h,
				})
			}
		})
	}
	updateGround(){
		this._backgroundGround.forEach(elem => {
			elem.positionX = elem.positionX - this._step;
			if(elem.positionX < -this._config.ground.w){
				this._backgroundGround.shift();
			}
			if((elem.positionX + this._config.ground.w) === this._field.width){
				this._backgroundGround.push({
					spriteSheet: this._spriteSheet,
					sourceX: this._config.ground.x,
					sourceY: this._config.ground.y,
					sourceWidth: this._config.ground.w,
					sourceHeight: this._config.ground.h,
					positionX: this._field.width,
					positionY: this._field.height - this._config.ground.h,
					positionWidth: this._config.ground.w,
					positionHeight: this._config.ground.h,
				})
			}
		})
	}

	get speed(){
		return this._speed
	}
	get step(){
		return this._step
	}
	get backgroundFon(){
		return this._backgroundFon
	}
	get backgroundGround(){
		return this._backgroundGround
	}
}