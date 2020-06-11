class C3_GameObject {
   constructor({ attr, type }) {
      this.attr = attr
      this.type = type
      
      this.rotation = c3.vector.create(0, 0, 0)
      this.mesh = this.mesh ? this.mesh() : new THREE.Object3D()
      this.physics = this.physics ? this.physics() : { meshes: [] }
      this.body = undefined
      
      this.create(this.attr)
      
      c3.scene.add(this.mesh)
      
      if (this.physics.meshes.length) {
         this.body = c3.physics.addObject(this)
      }
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
      this.rotateUpdate()
   }
   
   rotateX(degrees) {
      this.rotation.x += Math.PI/180 * degrees
      this.rotateUpdate()
   }
   
   rotateY(degrees) {
      this.rotation.y += Math.PI/180 * degrees
      this.rotateUpdate()
   }
   
   rotateZ(degrees) {
      this.rotation.z += Math.PI/180 * degrees
      this.rotateUpdate()
   }
   
   rotateUpdate() {
      if (this.body) {
         this.body.quaternion.setFromEuler(this.rotation.x, this.rotation.y, this.rotation.z, 'XYZ')
      } else {
         this.mesh.rotation.x = this.rotation.x
         this.mesh.rotation.y = this.rotation.y
         this.mesh.rotation.z = this.rotation.z
         console.log('updating rotation', this.mesh.rotation)
      }
   }
   
   create() {}
   step() {}
   
   handleResize(width, height) {}
}

c3.GameObject = C3_GameObject