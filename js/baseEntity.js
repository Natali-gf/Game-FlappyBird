export default class BaseEntity{

	constructor({config, spriteSheet, drawing, field}){
		this.field = field;
		this.config = config;
		this.spriteSheet = spriteSheet;
		this.drawing = drawing;

		this.entity = {
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

	draw(entity){
		this.drawing.drawImage(this.entity)
	}

	update(){
	}
}