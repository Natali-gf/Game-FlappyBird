export function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min) + min)
}

export function checkCollision(x, y, obj){
	return x >= obj.positionX && x <= obj.positionX + obj.positionWidth &&
			y >= obj.positionY && y <= obj.positionY + obj.positionHeight ;
}
