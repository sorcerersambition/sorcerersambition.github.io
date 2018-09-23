export default class{
    constructor(health,attack,big,small){
        this.health = health
        this.attack = attack
        this.bigTex = big
        this.smallTex = small
        this.sprite = new PIXI.Sprite(this.smallTex);
        this.sprite.anchor.x = 0.5;
        this.sprite.x = 32;

        this.maxHealth = health;
        this.health = health;
        this.coord = {"x":0,"y":0}
        map.addChild(this.sprite)
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