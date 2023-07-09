export default class BaseEntity{

	constructor({config, spriteSheet, drawing, field}){
		this._field = field;
		this._config = config;
		this._spriteSheet = spriteSheet;
		this._drawing = drawing;

		this._entity = {
			spriteSheet: spriteSheet,
			sourceX: config.x,
			sourceY: config.y,
			sourceWidth: config.w,
			sourceHeight: config.h,
			positionY: Math.floor(field.height / 3),
			positionX: field.width / 2 - config.w / 2,
			positionWidth: config.w,
			positionHeight: config.h,
			degree: 0,
		}
	}

	draw(){
		this._drawing.drawImage(this.entity)
	}

	update(){
	}

	get field(){
		return this._field
	}
	get config(){
		return this._config
	}
	get spriteSheet(){
		return this._spriteSheet
	}
	get drawing(){
		return this._drawing
	}
	get entity(){
		return this._entity
	}
}