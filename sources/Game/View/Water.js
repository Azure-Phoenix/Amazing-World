import Game from '@/Game.js' 

import * as THREE from 'three'

class Water
{
    constructor()
    {
        this.engine = new Game.ENGINE.Engine()
        this.view = new Game.VIEW.View()
        this.engine = new Game.ENGINE.Engine()
        this.scene = this.view.scene

        this.mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1000, 1000),
            new THREE.MeshBasicMaterial({ color: '#1d3456' })
        )
        this.mesh.geometry.rotateX(- Math.PI * 0.5)
        // this.scene.add(this.mesh)
    }

    update()
    {
        const playerEngine = this.engine.player

        this.mesh.position.set(
            playerEngine.position.current[0],
            0,
            playerEngine.position.current[2]
        )
    }
}

Game.register('VIEW', 'Water', Water)
export default Water