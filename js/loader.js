export default class Loader {

	// async load()
	load = {
		spritesheet: ({src, width, height}) => {
			return new Promise((resolve, reject) => {
				const image = new Image(width, height)
				image.addEventListener('load', () => resolve(image));
				image.addEventListener('error', () => reject(error));
				image.src = src;
			})
		}
	}

	async loadSpriteSheet(config) {
		const loadImage = this.load.spritesheet
		return await loadImage(config)
	}
}