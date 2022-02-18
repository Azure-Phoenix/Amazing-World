import Game from '@/Game.js'
import PlayerViewThirdPerson from '@/State/PlayerViewThirdPerson.js'
import PlayerViewFly from '@/State/PlayerViewFly.js'
import { vec3, quat2 } from 'gl-matrix'

export default class PlayerView
{
    constructor(player)
    {
        this.game = new Game()
        this.viewport = this.game.viewport
        this.controls = this.game.controls

        this.player = player

        this.position = vec3.create()
        this.quaternion = quat2.create()
        this.mode = PlayerView.MODE_FLY

        this.thirdPerson = new PlayerViewThirdPerson(this.player)
        this.fly = new PlayerViewFly(this.player)
        
        // Activate
        if(this.mode === PlayerView.MODE_THIRDPERSON)
            this.thirdPerson.activate()
        
        else if(this.mode === PlayerView.MODE_FLY)
            this.fly.activate()
    }

    update()
    {
        this.thirdPerson.update()
        this.fly.update()

        if(this.mode === PlayerView.MODE_THIRDPERSON)
        {
            vec3.copy(this.position, this.thirdPerson.position)
            quat2.copy(this.quaternion, this.thirdPerson.quaternion)
        }

        else if(this.mode === PlayerView.MODE_FLY)
        {
            vec3.copy(this.position, this.fly.position)
            quat2.copy(this.quaternion, this.fly.quaternion)
        }
    }
}

PlayerView.MODE_THIRDPERSON = 1
PlayerView.MODE_FLY = 2