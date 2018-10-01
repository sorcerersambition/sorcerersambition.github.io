import shapes from "./../drawing/shapes.js";
import fps from "./../utilities/fps.js";
import statbar from "./statbar.js";
import Animation from "./../utilities/animate.js";
import Dialogue from "./dialogue";
export default class {
	constructor() {}
	start(player, enemy) {
        console.log(battle.children); 
        player.mana = player.maxMana
        //Establish statbars for both the player and the enemy. If the player is allied (NPC) use a pure healthbar
		let playerHealth = new statbar(player.health, player.maxHealth, PIXI.loader.resources["./assets/hpstart.png"].texture, PIXI.loader.resources["./assets/hpbodyfill.png"].texture, PIXI.loader.resources["./assets/goldbody.png"].texture, PIXI.loader.resources["./assets/goldend.png"].texture)
		let playerMana = new statbar(player.mana, player.maxMana, PIXI.loader.resources["./assets/mpstart.png"].texture, PIXI.loader.resources["./assets/mpbodyfill.png"].texture, PIXI.loader.resources["./assets/goldbody.png"].texture, PIXI.loader.resources["./assets/goldend.png"].texture)
		if (enemy.pure) {
			var enemyHealth = new statbar(enemy.health, enemy.maxHealth, PIXI.loader.resources["./assets/hpblue.png"].texture, PIXI.loader.resources["./assets/mpbodyfill.png"].texture, PIXI.loader.resources["./assets/goldbody.png"].texture, PIXI.loader.resources["./assets/goldend.png"].texture)
		} else {
			var enemyHealth = new statbar(enemy.health, enemy.maxHealth, PIXI.loader.resources["./assets/evstart.png"].texture, PIXI.loader.resources["./assets/evbodyfill.png"].texture, PIXI.loader.resources["./assets/evbody.png"].texture, PIXI.loader.resources["./assets/evend.png"].texture)
		}
		playerMana.sprite.y = 32;
		playerHealth.sprite.y = 318;
		playerMana.sprite.y = 350;
		enemyHealth.sprite.x = 698 - enemyHealth.sprite.width;
		battle.addChild(playerHealth.sprite);
		battle.addChild(playerMana.sprite);
        battle.addChild(enemyHealth.sprite);
        //other various global declarations
        let obj = this;
		let active = "";
        let casting = function() {};
        let spellContainer = new PIXI.Container();
		window.animate = new Animation();

		function turn() {
			animate.addBreak(function(cb) { //Bring up spell casting menu and handle spellcasting. TODO: Add animation syntax.
					player.spells.forEach(function(spl, index) {
                        //Declare various pixijs elements and add them to the stage, position them
						let spellHold = new PIXI.Container();
						let spell = new PIXI.Sprite(shapes.rectangle(160, 64, "#ddd"))
						let text = new PIXI.Text(spl.name, {
							fontFamily: 'Mono',
							fontSize: 16,
							fill: 0x000,
							wordWrap: true,
							wordWrapWidth: 140
						})
						text.x = 10;
						text.y = 10;
						spellHold.addChild(spell);
						spellHold.addChild(text);
						spellHold.x = (index % 3) * 248 + 24;
						spell.buttonMode = true;
						spell.interactive = true;
                        spellHold.y = 410 + Math.floor(index / 3) * 72;
                        //Whenever a spell is clicked spend mana / hp and initiate spell power
						spell.on("click", function() {
							active = spl;
							if (player.mana < spl.cost) {
								player.health -= Math.ceil((spl.cost - player.mana) / 5)
								player.mana = 0;
							} else {
								player.mana -= spl.cost;
							}
							playerHealth.fill.width = player.health;
							if (player.health <= 0) {
								playerHealth.fill.width = 0;
							}
							playerMana.fill.width = player.mana
							if (player.mana <= 0) {
								playerMana.fill.width = 0;
							}
							casting = spl.initiate();
							cb()
						})
						spellContainer.addChild(spellHold)
					})
					battle.addChild(spellContainer);
				})
				.addBreak(function(cb) { //Get rid of spellcasting menu
					spellContainer.children = ""
					spellContainer = new PIXI.Container();
					cb()
				})
				.addLoopingBreak(function(cb) { //Handle spellcasting and spellcasting animations
					casting(function() {
						if (enemy.health <= 0) {
							casting(function() {}, function() {}, true);
							enemyHealth.fill.width = 0;
							cb()
						} else {
							enemyHealth.fill.width = enemy.health
							let slash = new PIXI.Sprite(PIXI.loader.resources["./assets/" + active.anim + "/1.png"].texture);
							slash.x = 702 / 2 + Math.random() * 100 - 50;
							slash.anchor.x = 0.5;
							slash.y = 64 + enemy.sprite.height / 2 + Math.random() * 100 - 50;
							slash.anchor.y = 0.5;
							battle.addChild(slash);
							animate.addAsync(active.animFrames, function(x) {
								slash.texture = PIXI.loader.resources["./assets/" + active.anim + "/" + x + ".png"].texture;
							}, function() {
								battle.removeChild(slash);
							})
						}
					}, cb, false, enemy, player)
				})
				.addLoopingBreak(function(cb) { //If enemy is dying, end the loop.
					if (enemy.health <= 0) {
						enemy.sprite.alpha -= 0.05;
						if (enemy.sprite.alpha <= 0) {
							console.log("end encounter, give gold");
							battle.alpha = 1;
							map.alpha = 0;
							animate.addFrame(20, function() {
									battle.alpha -= 0.05;
									map.alpha += 0.05;
								}, function() {
									stage.addChild(map);
									stage.removeChild(battle);
									map.removeChild(enemy);
                                    enemies.splice(enemies.indexOf(enemy), 1)
                                    battle.children.forEach(function(child) {
										battle.removeChild(child);
									})
									loop.start();
									obj.timer.stop();
								})
								.addBreak();
							cb()
						}
					} else {
						cb()
					}
				})
				.addBreak(function(cb) {
					player.health -= enemy.attack();
					playerHealth.fill.width = player.health;
					if (player.health <= 0) {
						casting(function() {}, function() {}, true);

						function end() {
							enemy.x = enemy.coord.x * 64 + 32;
							enemy.y = enemy.coord.y * 64 - 78;
							enemy.valid = false;
							stage.addChild(map);
							stage.removeChild(battle);
							map.alpha = 1;
							if (!enemy.pure) {
								map.removeChild(enemy);
								enemies.splice(enemies.indexOf(enemy), 1)
							} else {
                                map.addChild(enemy.sprite);
                                enemy.block = true;
                            }
                            battle.children.forEach(function(child) {
								battle.removeChild(child);
							})
							loop.start();
							obj.timer.stop();
							cb()
						}
						if (enemy.dialogue) {
							new Dialogue(enemy.dialogue.end, end);
						} else {
							end();
						}
					} else {
						turn()
						cb()
					}
				})
		}
		//
		animate.addFrame(20, function() {
				map.alpha -= 0.05
			})
			.addBreak(function(cb) { //Initialize the battle with a frameless frame
				stage.removeChild(map);
				stage.addChild(battle);
				map.removeChild(enemy.sprite);
				battle.addChild(enemy.sprite);
				battle.alpha = 0;
				enemy.sprite.texture = enemy.bigTex
				enemy.x = 702 / 2;
				enemy.y = 64;
				obj.counter += 1;
				let wrapper = new PIXI.Sprite(PIXI.loader.resources["./assets/dialoguebox.png"].texture);
				wrapper.y = 384;
				battle.addChild(wrapper);
				cb()
			})
			.addFrame(20, function() { //Fade in the battle
				battle.alpha += 0.05;
			})
		animate.addBreak(function(cb) { //Check if there is dialogue for the encounter, otherwise skip
			if (enemy.dialogue) {
				new Dialogue(enemy.dialogue.start, cb)
			} else {
				console.log("JESUS")
				cb()
			}
		})
		turn()
		obj.timer = new fps(function() {
			animate.tick()
		})
	}
}