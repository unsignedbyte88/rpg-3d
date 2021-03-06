class ObjectPlatform extends c3.Object {
   mesh() {
      const geo = new THREE.BoxBufferGeometry(10, 0.5, 10)
      const mat = c3.models.materialFind('BOX')
      const mes = new THREE.Mesh(geo, mat)
      mes.receiveShadow = true
      mes.castShadow = true
      
      return mes
   }
   
   physics() {
      return {
         meshes: [this.mesh],
         material: 'BOX',
         mass: 0
      }
   }
   
   create({ pos }) {
      this.setPosition(pos)
   }
} 

c3.objectTypes.Platform = ObjectPlatform
