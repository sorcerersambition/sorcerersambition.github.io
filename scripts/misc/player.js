import shapes from "./../drawing/shapes.js";
import Spell from "./spell.js";
export default class{
    constructor(){
        this.sprite = new PIXI.Sprite(PIXI.loader.resources["./assets/steve-stand.png"].texture);
        this.sprite.x = 702/2 + 2
        this.sprite.y = 578/2 - 32
        this.counter = 0
        this.mode = ""
        this.sprite.anchor.x = 0.5;
        this.coord = {"x":0,"y":0};
        this.maxHealth = 50;
        this.health = 50;
        this.maxMana = 50;
        this.mana = 50;
        map.addChild(this.sprite);
        this.spells = [
            new Spell("Attack",["A"],function(e,p){e.health-=10},5,3,5,"slash",14),
            new Spell("Multiattack",["Q","A"],function(e,p){e.health -= 5;},5,25,10,"slash",14),
            new Spell("Life Steal",["R","A"],function(e,p){e.health -= 5; p.health += 5;},6,30,20,"slash",14),
            new Spell("Fire Strike",["Q","A","F"],function(e,p,t){e.health -= 10; t = "flame";},8,30,20,"flame",15),
            new Spell("Aqua Heal",["Q","R","W"],function(e,p){p += 5},3,5,25,"none",0),
            new Spell("Scalding Water",["Q","A","W","F"],function(e){e.health -= 5},15,50,50,"water",7)
        ]
    }
    move(){
        let player = this

        if(player.mode !== ""){
            let testcheck = world[player.coord.y + player.mode[1] / 4][player.coord.x + player.mode[0] / 4] === "1" //||
            //world[player.coord.y + player.mode[1] / 4][player.coord.x + player.mode[0] / 4] === "z";
            if(!testcheck){
                tall.sort(function(a,b){
                    return a.y-b.y
                })
                tall.forEach(function(val){
                    map.removeChild(val)
                    map.addChild(val)
                })
                //Begin animation loop
                player.counter += 1;
                if(player.counter % 24 < 8){
                    player.sprite.texture = PIXI.loader.resources["./assets/steve-2.png"].texture;
                } else if(player.counter % 24 < 16){
                    player.sprite.texture = PIXI.loader.resources["./assets/steve-stand.png"].texture;
                }
                else{
                    player.sprite.texture = PIXI.loader.resources["./assets/steve.png"].texture;
                }
                map.x -= player.mode[0] * 2/3;
                map.y -= player.mode[1] * 2/3;
                player.x += player.mode[0] * 2/3;
                player.y += player.mode[1] * 2/3;

                if(player.counter === 24){
                    player.coord.y += player.mode[1] / 4;
                    player.coord.x += player.mode[0] / 4;
                    player.x = Math.round(player.x);
                    player.y = Math.round(player.y);
                player.mode = ""
                if(key.check([87,38,65,37,40,83,68,39],function(){})){
                    player.sprite.texture = PIXI.loader.resources["./assets/steve-2.png"].texture;
                } else{
                    player.sprite.texture = PIXI.loader.resources["./assets/steve-stand.png"].texture;
                }
                }
            } else{
                player.mode = ""
            }
          }
          key.check([87,38], function() {
            if (player.mode === ""){
              //up
              player.mode = [0,-4]
              player.counter = 0
            }
          })
          key.check([65,37], function() {
            if (player.mode === ""){
              //left
              player.mode = [-4,0]
              player.counter = 0
              player.sprite.scale.x = 1;
            }
          })
          key.check([83,40], function() {
            if (player.mode === ""){
              //down
              player.mode = [0,4]
              player.counter = 0
            }
          })
          key.check([68,39], function() {
            if (player.mode === ""){
              //right
              player.mode = [4,0]
              player.counter = 0
              player.sprite.scale.x = -1;
            }
          })
    }
    get x(){
        return this.sprite.x
    }
    set x(x){
        this.sprite.x = x
    }
    get y(){
        return this.sprite.y
    }
    set y(y){
        this.sprite.y = y
    }
}