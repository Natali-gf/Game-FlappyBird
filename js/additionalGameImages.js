import BaseEntity from "./BaseEntity.js";

export class GetReadyImage extends BaseEntity{
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this.getReadyImage = this.entity;
		this.getReadyImage.positionY = props.field.height / 2.5;
	}
}

export class GameOverImage extends BaseEntity{
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this.gameOverImage = this.entity
		this.gameOverImage.positionY = props.field.height / 4;
	}
}

export class StartButton extends BaseEntity{
	constructor(props){
		super({config: props.config,
			spriteSheet: props.spriteSheet,
			drawing: props.drawing,
			field: props.field })

		this.startButton = this.entity;
		this.startButton.positionY = props.field.height / 1.8;
	}
}