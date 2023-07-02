class PhysicsEngine{
	constructor({gravity}){
		this.gravity = gravity
	}
	update(entity, delta){
		if (entity.falling){
			entity.speed = this.gravity * delta
			entity.y =+ entity.speed * delta
		}
	}
}