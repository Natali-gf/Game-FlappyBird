import BaseEntity from "./baseEntity.js";

export default class Score extends BaseEntity{
	_score = 0;
	_bestScore;
	_localBestScore = localStorage.getItem('FlappyBirdBestScore');
	_scoreWindow = this.entity;
	_bronzeMedal = {
		spriteSheet: this._spriteSheet,
		sourceX: this._config.bronzeMedal.x,
		sourceY: this._config.bronzeMedal.y,
		sourceWidth: this._config.bronzeMedal.w,
		sourceHeight: this._config.bronzeMedal.h,
		positionX: this._scoreWindow.positionX + 25,
		positionY: this._scoreWindow.positionY + 42,
		positionWidth: this._config.bronzeMedal.w,
		positionHeight: this._config.bronzeMedal.h,
	};
	_silverMedal = {
		spriteSheet: this._spriteSheet,
		sourceX: this._config.silverMedal.x,
		sourceY: this._config.silverMedal.y,
		sourceWidth: this._config.silverMedal.w,
		sourceHeight: this._config.silverMedal.h,
		positionX: this._scoreWindow.positionX + 25,
		positionY: this._scoreWindow.positionY + 42,
		positionWidth: this._config.silverMedal.w,
		positionHeight: this._config.silverMedal.h,
	};
	_goldenMedal = {
		spriteSheet: this._spriteSheet,
		sourceX: this._config.goldenMedal.x,
		sourceY: this._config.goldenMedal.y,
		sourceWidth: this._config.goldenMedal.w,
		sourceHeight: this._config.goldenMedal.h,
		positionX: this._scoreWindow.positionX + 25,
		positionY: this._scoreWindow.positionY + 42,
		positionWidth: this._config.goldenMedal.w,
		positionHeight: this._config.goldenMedal.h,
	};
	_platinumMedal = {
		spriteSheet: this._spriteSheet,
		sourceX: this._config.platinumMedal.x,
		sourceY: this._config.platinumMedal.y,
		sourceWidth: this._config.platinumMedal.w,
		sourceHeight: this._config.platinumMedal.h,
		positionX: this._scoreWindow.positionX + 25,
		positionY: this._scoreWindow.positionY + 42,
		positionWidth: this._config.platinumMedal.w,
		positionHeight: this._config.platinumMedal.h,
	}
	constructor(props){
		super({config: props.config,
			drawing: props.drawing,
			field: props.field,
			spriteSheet: props.spriteSheet})

		this.#checkLocalStorage()
	}

	#checkLocalStorage(){
		if(this._localBestScore){
			this._bestScore = this._localBestScore
		}
	}

	drawScore(){
		this._drawing.drawText({text:this._score, x:25, y:50})
	}

	drawScoreWindow(){
		this._drawing.drawImage(this._scoreWindow)

		this.scoreWidth = this._drawing.getTextWidth(this._score);
		this._drawing.drawText({ text: this._score,
					x: this._scoreWindow.positionX + this._config.w - this.scoreWidth - 22,
					y: this._scoreWindow.positionY + 54 });

		if(this._bestScore < this._score || !this._bestScore){
			this.#changeBestScore();
		}
		this.bestScoreWidth = this._drawing.getTextWidth(this._bestScore || '-');
		this._drawing.drawText({ text: this._bestScore || '-',
					x: this._scoreWindow.positionX + this._config.w - this.bestScoreWidth - 22,
					y: this._scoreWindow.positionY + 97 });

		this.#drawMedal();
	}

	#drawMedal(){
		if(this._score >= 100){
			this._drawing.drawImage(this._platinumMedal);
		}else if(this._score >= 50){
			this._drawing.drawImage(this._goldenMedal);
		}else if(this._score >= 25){
			this._drawing.drawImage(this._silverMedal);
		}else if(this._score >= 10){
			this._drawing.drawImage(this._bronzeMedal);
		}
	}

	incScore(){
		this._score++;
		this.drawScore();
	}

	#changeBestScore(){
		if(this._score > 0){
			this._bestScore = this._score;
			localStorage.setItem('FlappyBirdBestScore', this._score.toString());
		}
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
	get scoreWindow(){
		return this._scoreWindow
	}
	get bronzeMedal(){
		return this._bronzeMedal
	}
	get silverMedal(){
		return this._silverMedal
	}
	get goldenMedal(){
		return this._goldenMedal
	}
	get platinumMedal(){
		return this._platinumMedal
	}
}