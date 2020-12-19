import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three'

const geometry = new BoxGeometry()
const material = new MeshBasicMaterial()
const cube = new Mesh(geometry, material)

export default cube
