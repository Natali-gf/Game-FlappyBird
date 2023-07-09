import BaseEntity from "./BaseEntity.js";

export default class Score extends BaseEntity{

	_score = 0;
	_bestScore;
	_localBestScore = localStorage.getItem('bestScop');

	constructor(props){
		super({config: props.config,
			drawing: props.drawing,
			field: props.field,
			spriteSheet: props.spriteSheet})

		this.scoreWindow = this.entity;
		this.bronzeMedal = {
			spriteSheet: this.spriteSheet,
			sourceX: this.config.bronzeMedal.x,
			sourceY: this.config.bronzeMedal.y,
			sourceWidth: this.config.bronzeMedal.w,
			sourceHeight: this.config.bronzeMedal.h,
			positionX: this.scoreWindow.positionX + 25,
			positionY: this.scoreWindow.positionY + 42,
			positionWidth: this.config.bronzeMedal.w,
			positionHeight: this.config.bronzeMedal.h,
		}
		this.silverMedal = {
			spriteSheet: this.spriteSheet,
			sourceX: this.config.silverMedal.x,
			sourceY: this.config.silverMedal.y,
			sourceWidth: this.config.silverMedal.w,
			sourceHeight: this.config.silverMedal.h,
			positionX: this.scoreWindow.positionX + 25,
			positionY: this.scoreWindow.positionY + 42,
			positionWidth: this.config.silverMedal.w,
			positionHeight: this.config.silverMedal.h,
		}
		this.goldenMedal = {
			spriteSheet: this.spriteSheet,
			sourceX: this.config.goldenMedal.x,
			sourceY: this.config.goldenMedal.y,
			sourceWidth: this.config.goldenMedal.w,
			sourceHeight: this.config.goldenMedal.h,
			positionX: this.scoreWindow.positionX + 25,
			positionY: this.scoreWindow.positionY + 42,
			positionWidth: this.config.goldenMedal.w,
			positionHeight: this.config.goldenMedal.h,
		}
		this.platinumMedal = {
			spriteSheet: this.spriteSheet,
			sourceX: this.config.platinumMedal.x,
			sourceY: this.config.platinumMedal.y,
			sourceWidth: this.config.platinumMedal.w,
			sourceHeight: this.config.platinumMedal.h,
			positionX: this.scoreWindow.positionX + 25,
			positionY: this.scoreWindow.positionY + 42,
			positionWidth: this.config.platinumMedal.w,
			positionHeight: this.config.platinumMedal.h,
		}
		this.drawScore();
		this.#checkLocalStorage()
	}

	#checkLocalStorage(){
		if(this._localBestScore){
			this._bestScore = this._localBestScore
		}
	}

	drawScore(){
		this.drawing.drawText(this._score, 25, 50)
	}

	drawScoreWindow(){
		this.drawing.drawImage(this.scoreWindow)

		this.scoreWidth = this.drawing.getTextWidth(this._score);
		this.drawing.drawText(this._score, this.scoreWindow.positionX + this.config.w - this.scoreWidth - 22, this.scoreWindow.positionY + 54);

		if(this._bestScore < this._score || !this._bestScore){
			this.#changeBestScore()
		}
		this.bestScoreWidth = this.drawing.getTextWidth(this._bestScore || '-');
		this.drawing.drawText(this._bestScore || '-', this.scoreWindow.positionX + this.config.w - this.bestScoreWidth - 22, this.scoreWindow.positionY + 97);
		this.#drawMedal();
	}

	#drawMedal(){
		if(this._score > 100){
			this.drawing.drawImage(this.platinumMedal)
		}else if(this._score > 50){
			this.drawing.drawImage(this.goldenMedal)
		}else if(this._score > 25){
			this.drawing.drawImage(this.silverMedal)
		}else if(this._score > 10){
			this.drawing.drawImage(this.bronzeMedal)
		}
	}

	incScore(){
		this._score++;
		this.drawScore();
	}

	#changeBestScore(){
		if(this._score > 0){
			this._bestScore = this._score;
			localStorage.setItem('bestScop', this._score.toString())
		}
	}

	resetScore(){
		this._score = 0;
		this.drawScore();
	}

	get score(){
		return this._score
	}
	get bestScore(){
		return this._bestScore
	}
	get localBestScore(){
		return this._localBestScore
	}
}