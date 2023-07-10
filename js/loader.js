export default class Loader {

	// async load()
	_load = {
		spritesheet: ({src, width, height}) => {
			return new Promise((resolve, reject) => {
				const image = new Image(width, height)
				image.addEventListener('load', () => resolve(image));
				image.addEventListener('error', () => reject(error));
				image.src = src;
			})
		},
		audio: ({src}) => {
			return new Promise((resolve) => {
				const audio = new Audio(src)
				resolve(audio);
			})
		}
	}

	async loadSpriteSheet(config) {
		const loadImage = this._load.spritesheet
		return await loadImage(config)
	}

	async loadAudio(config) {
		const loadSound = this._load.audio
		return await loadSound(config)
	}

	get load(){
		return this._load
	}
}