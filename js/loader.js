export const RESOURCE_TYPE = {
	IMAGE: 'image'
}

export default class Loader {
	// typeLoader = {
	// 	[RESOURCE_TYPE.IMAGE]: async ({src, width, height}) => {
	// 	return new Promise((resolve, reject) => {
	// 		const image = new Image(width, height)
	// 		image.addEventListener('load', () => resolve(image));
	// 		image.addEventListener('error', () => reject(console.log(error)));
	// 		image.src = src;
	// 	})}
	// }

	async loadImage(img){
		console.log(this.imageLoader);
		const loaded = this.imageLoader[img.type];
		return await loaded(img)
	}

	async imageLoad ({src, width, height}){
		return new Promise((resolve, reject) => {
			const image = new Image(width, height)
			image.addEventListener('load', () => resolve(image));
			image.addEventListener('error', () => reject(console.log(error)));
			image.src = src;
		})}
}
