import BaseEntity from "./baseEntity.js";

export class GetReadyImage extends BaseEntity{
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this._getReadyImage = this.entity;
		this._getReadyImage.positionY = props.field.height / 2.5;
	}
	get getReadyImage(){
		return this._getReadyImage
	}
}

export class GameOverImage extends BaseEntity{
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this._gameOverImage = this.entity
		this._gameOverImage.positionY = props.field.height / 4;
	}
	get gameOverImage(){
		return this._gameOverImage
	}
}

export class StartButton extends BaseEntity{
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this._startButton = this.entity;
		this._startButton.positionY = props.field.height / 1.8;
	}
	get startButton(){
		return this._startButton
	}
}