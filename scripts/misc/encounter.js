import shapes from "./../drawing/shapes.js";
import fps from "./../utilities/fps.js";
import statbar from "./statbar.js";
export default class{
    constructor(){
    }
    start(player,enemy){
        player.mana = player.maxMana
        let playerHealth = new statbar(player.health,player.maxHealth,
            PIXI.loader.resources["./assets/hpstart.png"].texture,
            PIXI.loader.resources["./assets/hpbodyfill.png"].texture,
            PIXI.loader.resources["./assets/goldbody.png"].texture,
            PIXI.loader.resources["./assets/goldend.png"].texture)
        let playerMana = new statbar(player.mana,player.maxMana,
            PIXI.loader.resources["./assets/mpstart.png"].texture,
            PIXI.loader.resources["./assets/mpbodyfill.png"].texture,
            PIXI.loader.resources["./assets/goldbody.png"].texture,
            PIXI.loader.resources["./assets/goldend.png"].texture)
        if(enemy.pure){
            var enemyHealth = new statbar(enemy.health,enemy.maxHealth,
                PIXI.loader.resources["./assets/hpblue.png"].texture,
                PIXI.loader.resources["./assets/mpbodyfill.png"].texture,
                PIXI.loader.resources["./assets/goldbody.png"].texture,
                PIXI.loader.resources["./assets/goldend.png"].texture)
        } else{
        var enemyHealth = new statbar(enemy.health,enemy.maxHealth,
            PIXI.loader.resources["./assets/evstart.png"].texture,
            PIXI.loader.resources["./assets/evbodyfill.png"].texture,
            PIXI.loader.resources["./assets/evbody.png"].texture,
            PIXI.loader.resources["./assets/evend.png"].texture)
        }
        playerMana.sprite.y = 32;
        playerHealth.sprite.y = 318;
        playerMana.sprite.y = 350;
        enemyHealth.sprite.x = 698 - enemyHealth.sprite.width;
        battle.addChild(playerHealth.sprite);
        battle.addChild(playerMana.sprite);
        battle.addChild(enemyHealth.sprite);
        let obj = this;
        let slashes = [];
        obj.counter = 0;
        let active = "";
        let casting = function(){};
        let spellContainer = new PIXI.Container();
        obj.timer = new fps(function(){
            slashes.forEach(function(val,i){
                val.increment += 1;
                if(val.increment >= active.animFrames){
                    battle.removeChild(val);
                    slashes.splice(i,1);

                } else{
                    val.texture = PIXI.loader.resources["./assets/"+active.anim+"/"+val.increment+".png"].texture;
                }
            })
            if(obj.counter < 20){
                map.alpha -= 0.05
                obj.counter += 1;
            }
            if(obj.counter === 20){
                stage.removeChild(map);
                stage.addChild(battle);
                map.removeChild(enemy.sprite);
                battle.addChild(enemy.sprite);
                battle.alpha = 0;
                enemy.sprite.texture = enemy.bigTex
                enemy.x = 702/2;
                enemy.y = 64;
                obj.counter += 1;
                let wrapper = new PIXI.Sprite(PIXI.loader.resources["./assets/dialoguebox.png"].texture);
                wrapper.y = 384;
                battle.addChild(wrapper);
            }
            if(obj.counter > 20 && obj.counter < 40){
                
                if(enemy.pure && obj.counter === 38 && worlds.indexOf(world) === 0){
                    let dialogue = -1;
                    let txt = new PIXI.Text("",{fontFamily : 'Mono', fontSize: 24, fill : 0xffffff,wordWrap:true,wordWrapWidth:666});
                    txt.x = 26;
                    txt.y = 412;
                    battle.addChild(txt);

                    let crunch = [
                        "Jaysun: Hello!",
                        "Jaysun: My name’s Jaysun, what’s yours?" ,
                        "???: You’re awfully young to be wandering here, any reason?" ,
                        "Jaysun: Someone told me, there’s great powers hidden here!!" ,
                        "???: Hmph, we have our dreams." ,
                        "???: I’d suggest your turn back now." ,
                        "Jaysun: What! Why?!",
                        "???: A child like you doesn’t belong in this cave." ,
                        "Jaysun: I am strong!",
                        "???: You’re a sorcerer, yes?",
                        "Jaysun: Mhm, I’ve been practicing." ,
                        "???: How about, we duel. See how strong you really are.",
                        "???: I’ll go easy."
                        
                        ]
                    txt.text = crunch[0]
                    function juice(){
                        dialogue ++;
                        txt.text = crunch[dialogue]
                        if(dialogue === crunch.length){
                            obj.counter += 1;
                        } else{
                            key.waitDown(13,juice,false,true)
                        }
                    }
                    juice()
                    obj.counter +=1;
                    
                } else if(enemy.pure && obj.counter === 39){

                } else{
                    obj.counter+= 1;
                    battle.alpha += 0.05;
                }
            } else if(obj.counter === 40){
                player.spells.forEach(function(spl,index){
                    let spellHold = new PIXI.Container();
                    let spell = new PIXI.Sprite(shapes.rectangle(160,64,"#ddd"))
                    let text = new PIXI.Text(spl.name,{fontFamily : 'Mono', fontSize: 16, fill : 0x000,wordWrap:true,wordWrapWidth:140})
                    text.x = 10;
                    text.y = 10;
                    spellHold.addChild(spell);
                    spellHold.addChild(text);
                    spellHold.x = (index % 3) * 248 + 24;
                    spell.buttonMode = true;
                    spell.interactive = true;
                    spellHold.y = 410 + Math.floor(index /3) * 72;
                    spell.on("click",function(){
                        if(player.mana < spl.cost){
                            player.health -= Math.ceil((spl.cost - player.mana) / 5)
                            player.mana = 0;
                        } else{
                            player.mana -= spl.cost;
                        }
                        playerHealth.fill.width = player.health;
                        if(player.health <= 0){
                            playerHealth.fill.width = 0;
                        }
                        playerMana.fill.width = player.mana
                        if(player.mana <= 0){
                            playerMana.fill.width = 0;
                        }
                        active = spl;
                        casting = spl.initiate();
                        console.log("hey")
                        obj.counter += 1;
                    })
                    spellContainer.addChild(spellHold)
                    
                })
                battle.addChild(spellContainer);
                obj.counter += 1;
            } else if(obj.counter === 41){} else if (obj.counter === 42){
                console.log("")
                obj.counter += 1;
                spellContainer.children = ""
                spellContainer = new PIXI.Container();
            } else if(obj.counter === 43){
                casting(function(){
                    if(enemy.health <= 0){
                        casting(function(){},function(){},true);
                        enemy.sprite.alpha -= 0.01;
                        enemyHealth.fill.width = 0;
                        obj.counter += 1;
                    } else{
                        enemyHealth.fill.width = enemy.health
                            let slash = new PIXI.Sprite(PIXI.loader.resources["./assets/"+active.anim+"/1.png"].texture);
                            slash.x = 702/2 + Math.random()*100 -50;
                            slash.anchor.x = 0.5;
                            slash.y = 64 + enemy.sprite.height / 2 + Math.random()*100 -50;
                            slash.anchor.y = 0.5;
                            slash.increment = 1;
                            slashes.push(slash);
                            battle.addChild(slash);
                    }
                },function(){
                    obj.counter+=1;
                },false,enemy,player)
            } else if(obj.counter < 121){
                obj.counter+=1;
                if(enemy.sprite.alpha <= 0.99){
                    enemy.sprite.alpha -= 0.05;
                }
                if(enemy.sprite.alpha <= 0){
                    obj.counter = 200
                    map.alpha = 0;
                }
            } else if(obj.counter >= 200){
                console.log("end encounter, give gold");
                obj.counter+= 1;
                if(obj.counter > 250){
                    stage.addChild(map);
                    battle.alpha -= 0.05;
                    map.alpha += 0.05;
                }
                if(map.alpha >= 1){
                    stage.removeChild(battle);
                    map.removeChild(enemy);
                    enemies.splice(enemies.indexOf(enemy),1)
                    loop.start();
                    obj.timer.stop();
                    battle.children.forEach(function(child){
                        battle.removeChild(child);
                    })
                }
            } else{
                
                    player.health -= enemy.attack();
                    playerHealth.fill.width = player.health;
                    obj.counter = 40;
                    if(player.health <= 0){
                        obj.timer.stop()
                        casting(function(){},function(){},true);
                        let dialogue = -1;
                        let crunch = [
                            "???: You should turn back.",
                            "Jaysun: No!",
                            "*??? sighs*",
                            "Zygas: The name’s Zygas. Good luck in the dungeon."
        
                        ]
                        let txt = new PIXI.Text("",{fontFamily : 'Mono', fontSize: 24, fill : 0xffffff,wordWrap:true,wordWrapWidth:666});
                        txt.x = 26;
                        txt.y = 412;
                        battle.addChild(txt);
                        txt.text = crunch[0]
                        function juice(){
                            dialogue ++;
                            txt.text = crunch[dialogue]
                            if(dialogue === crunch.length){
                                enemy.valid = false;
                                stage.addChild(map);
                                stage.removeChild(battle);
                                map.alpha = 1;
                                if(!enemy.pure){map.removeChild(enemy);
                                enemies.splice(enemies.indexOf(enemy),1)
                                } else{
                                    map.addChild(enemy.sprite);
                                }
                                loop.start();
                                obj.timer.stop();
                                battle.children.forEach(function(child){
                                    battle.removeChild(child);
                                })
                            } else{
                                key.waitDown(13,juice,false,true)
                            }
                        }
                        juice()
                    }
            }
        })
    }

}