import key from "./../utilities/keypress.js";
let runeMap = {
    "Q":81,
    "A":65,
    "R":82,
    "W":87,
    "F":70
}
export default class{
    constructor(name,runes,effect,duration,amount,cost,anim,animFrames){
        this.name = name
        this.runes = runes
        this.effect = effect
        this.duration = duration
        this.amount = amount
        this.cost = cost
        this.anim = anim;
        this.animFrames = animFrames;
    }
    cast(){
        this.scroll = ""
        for(let i = 0; i < this.amount;i++){
            this.scroll += this.runes[Math.floor(Math.random()*this.runes.length)]
        }
    }
    initiate(){
        let started = false;
        document.addEventListener('keydown', function(){started = true}, false);
        key.tethers = []
        let spell = this;
        let scrollContainer = new PIXI.Container();
        this.cast();
        let duration = this.duration * 60;
        let lock = 0;
        let index = 0;
        spell.scroll.split("").forEach(function(val,index){
            let rune = new PIXI.Text(val,{fontFamily : 'Mono', fontSize: 24, fill : 0xffffff});
            rune.x = (index % 20) * 32 + 24;
            rune.y = 64 * 6 + Math.floor(index/20) * 32 + 32;
            scrollContainer.addChild(rune);
        })
        battle.addChild(scrollContainer);
        return function(cb,end,quinter,enemy,player){
            if(quinter === true){
                battle.removeChild(scrollContainer);
            }
            if(duration <= 0){
                battle.removeChild(scrollContainer);
                end();
                return 0;
            } else{
                if(started){
                    duration--;
                }
                if(lock <= 0){
                        for(let i = 0;i < spell.runes.length;i++){
                            key.waitDown(runeMap[spell.runes[i]],function(){
                            if(spell.runes[i] === spell.scroll[index]){
                                scrollContainer.children[index].style.fill = 0x00ff00
                                index += 1;
                                //Success!
                                i = spell.runes.length
                                spell.effect(enemy,player)
                                if(index === spell.scroll.length){
                                    duration = 0;
                                }
                                cb();
                                return 1;
                            } else{
                                lock = spell.duration * 60 / 10
                                return 0;
                            }
                        })
                        }
                }
                else{
                    lock--;
                }
            }
            return 0;
        }
    }

}