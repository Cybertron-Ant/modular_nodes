import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from './mod/three.module.js'

var geometry = new BoxGeometry(5, 5, 5)
var material = new MeshNormalMaterial({color: 'red'})
var cube = new Mesh(geometry, material)

export {cube};
