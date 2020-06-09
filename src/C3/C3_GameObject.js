class C3_GameObject {
   constructor({ c3, attr }) {
      this.attr = attr
      this.mesh = this.mesh ? this.mesh() : new THREE.Object3D()
      this.create(this.attr)
   }
   
   setPosition({ x, y, z }) {
      this.mesh.position.x = x
      this.mesh.position.y = y
      this.mesh.position.z = z
   }
   
   rotate(x, y, z) {
      this.mesh.rotation.x += x
      this.mesh.rotation.y += y
      this.mesh.rotation.z += z
   }
   
   rotateX(degrees) {
      
   }
   
   rotateY(degrees) {
      
   }
   
   rotateZ(degrees) {
      
   }
   
   create() {}
   step() {}
   
   handleResize(width, height) {}
}

c3.GameObject = C3_GameObject
