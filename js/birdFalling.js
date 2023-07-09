export default class BirdFalling {
	constructor(){
		this.accelerationFall = .1
	}
	falling(configBird, birdPositionY){
		this.birdPositionY = birdPositionY
		this.accelerationFall += configBird.gravity * .5
		return this.birdPositionY += this.accelerationFall;
	}

	cancelAcceleration(){
		this.accelerationFall = .1
	}
}