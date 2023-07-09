export default class BirdFalling {
	_accelerationFall = .1

	falling(configBird, birdPositionY){
		this.birdPositionY = birdPositionY
		this._accelerationFall += configBird.gravity * .5
		return this.birdPositionY += this._accelerationFall;
	}

	cancelAcceleration(){
		this._accelerationFall = .1
	}

	get accelerationFall(){
		return this._accelerationFall
	}
}