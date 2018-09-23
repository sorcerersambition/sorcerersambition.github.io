//Create a Pixi Application
import shapes from "./drawing/shapes.js";
import key from "./utilities/keypress.js";
import Spell from "./misc/spell.js";
import Enemy from "./misc/enemy.js";
import Player from "./misc/player.js";
import Encounter from "./misc/encounter.js";
import fps from "./utilities/fps.js";
window.worlds = [`11111111
1p000001
10000001
10000001
10000z01
10000011
100000s1
11111111`.split("\n"),
`11111111
1p010001
10e1e1e1
100001s1
11111111`.split("\n"),
`111111111
1p0rF0s1
11111111`.split("\n"),
`1111111111111111111111111111
1p00000000000000000000000001
1eee00rrr0000000000000rrr001
1e00e0r000000e000e0000r0r001
1e00e0rrr000ee00e0e000r0r001
1e00e0r0000e0e0e000e00r0r001
1eee00rrr0e00ee00000e0rrr001
1111111111111111111111111111`.split("\n")
];
worlds = worlds.map(function(arr){return arr.map(function(val){
    return val.split("");
  })
})
window.world = window.worlds[0];
window.key = key;
key.listen()
window.g = {};
window.app = new PIXI.Application(702, 576, {
  backgroundColor: 0x000000,
  antialias:true
});
window.stage = app.stage;

/*
<3<3<3
flashback to sensitive rectangle moving along grid
proud parents
- artist + dev
for(let i = 0; i < 18;i++){
  let gridline = new PIXI.Sprite(shapes.rectangle(1,640,"#000000"));
  gridline.x = i * 64;
  map.addChild(gridline)

}
for(let i = 0; i < 18;i++){
  let gridline = new PIXI.Sprite(shapes.rectangle(768,1,"#000000"));
  gridline.y = i * 64;
  map.addChild(gridline)

}*/
PIXI.loader
.add("./assets/hpblue.png")
.add("./assets/firerat.png")
.add("./assets/fireratbig.png")
.add("./assets/dialoguebox.png")
.add("./assets/gold.png")
.add("./assets/stair.png")
.add("./assets/zeegas.png") 
.add("./assets/slash/1.png") 
.add("./assets/slash/2.png") 
.add("./assets/slash/3.png") 
.add("./assets/slash/4.png") 
.add("./assets/slash/5.png") 
.add("./assets/slash/6.png") 
.add("./assets/slash/7.png") 
.add("./assets/slash/8.png") 
.add("./assets/slash/9.png") 
.add("./assets/slash/10.png") 
.add("./assets/slash/11.png") 
.add("./assets/slash/12.png") 
.add("./assets/slash/13.png")
.add("./assets/slash/14.png")  
.add("./assets/flame/1.png") 
.add("./assets/flame/2.png") 
.add("./assets/flame/3.png") 
.add("./assets/flame/4.png") 
.add("./assets/flame/5.png") 
.add("./assets/flame/6.png") 
.add("./assets/flame/7.png") 
.add("./assets/flame/8.png") 
.add("./assets/flame/9.png") 
.add("./assets/flame/10.png") 
.add("./assets/flame/11.png") 
.add("./assets/flame/12.png") 
.add("./assets/flame/13.png")
.add("./assets/flame/14.png")  
.add("./assets/flame/15.png")
.add("./assets/water/1.png") 
.add("./assets/water/2.png") 
.add("./assets/water/3.png") 
.add("./assets/water/4.png") 
.add("./assets/water/5.png") 
.add("./assets/water/6.png") 
.add("./assets/water/7.png")   
.add("./assets/slimebig.png") 
.add("./assets/evstart.png")
.add("./assets/evbodyfill.png")
.add("./assets/evbody.png")
.add("./assets/evend.png")
.add("./assets/mpbodyfill.png")
.add("./assets/mpstart.png")
.add("./assets/hpbodyfill.png")
.add("./assets/hpstart.png")
.add("./assets/goldend.png")
.add("./assets/goldbody.png")
.add("./assets/tile.png")
.add("./assets/slime.png")
.add("./assets/qg.png")
.add("./assets/qw.png")
.add("./assets/ag.png")
.add("./assets/aw.png")
.add("./assets/steve.png")
.add("./assets/steve-2.png")
.add("./assets/menu.png")
.add("./assets/runes/A.png")
.add("./assets/runes/F.png")
.add("./assets/runes/Q.png")
.add("./assets/runes/R.png")
.add("./assets/runes/W.png")
.add("./assets/steve-stand.png").load(fonts);

function fonts() {
  WebFont.load({
      custom: {
          families: ['Mono'],
          urls: ["stylesheet.css"]
      },
      active: e => {
          console.log("font loaded!");
          // now start setting up your PixiJS (or canvas) stuff!
          setup()
      }
  })
}
document.body.appendChild(app.view);
function setup() {
  function build(wrld){
    window.map = new PIXI.Container();
  window.barriers = [];
  window.battle = new PIXI.Container();
  window.enemies = [];
  stage.addChild(window.map)
  let barriers = new PIXI.Container();
  map.addChild(barriers);
  world = wrld;
  window.player = new Player();
      window.tall = [];
    window.tall.sort(function(a,b){
      return a.y-b.y
    })
    window.tall.forEach(function(val){
      map.removeChild(val)
      map.addChild(val)
    })
  function bg(i,j){
    let tile = new PIXI.Sprite(PIXI.loader.resources["./assets/tile.png"].texture)
    tile.anchor.x = 0.5;
    tile.x = j*64 + 32 + 1;
    tile.y = i*64;
    tile.coord = {"x":i,"y":j};
    barriers.addChild(tile);
  }
  for(let i = 0;i< wrld.length;i++){
    for(let j =0;j<wrld[i].length;j++){
      if(wrld[i][j] === "1"){
        let wall = new PIXI.Sprite(shapes.rectangle(64,64,"#000"))
        wall.anchor.x = 0.5;
        wall.x = j*64 + 32 + 1;
        wall.y = i*64;
        wall.coord = {"x":i,"y":j};
        barriers.addChild(wall);
      }
      if(wrld[i][j] === "F"){
        bg(i,j)
        let fire = new PIXI.Sprite(PIXI.loader.resources["./assets/runes/F.png"].texture)
        fire.anchor.x = 0.5;
        fire.scale.x = 0.25;
        fire.scale.y = 0.25;
        fire.x = j*64 + 32 + 1;
        fire.y = i*64;
        fire.coord = {"x":i,"y":j};
        barriers.addChild(fire);
      }
      if(wrld[i][j] === "0"){
        bg(i,j)
      }
      if(wrld[i][j] === "p"){
        map.x -= j * 64 - 351;
        map.y -= i * 64 - 576/2;
        player.x += j * 64 - 351 +32;
        player.y += i * 64 - 576/2 - 32;
        player.coord.x = j;
        player.coord.y = i;
        tall.push(player.sprite);
        bg(i,j)
      }
      if(wrld[i][j] === "s"){
        let stair = new PIXI.Sprite(PIXI.loader.resources["./assets/stair.png"].texture)
        stair.anchor.x = 0.5;
        stair.x = j*64 + 32 + 1;
        stair.y = i*64;
        stair.coord = {"x":i,"y":j};
        map.addChild(stair);
      }
      if(wrld[i][j] === "e"){
        let slime = new Enemy(50,function(){return 5},PIXI.loader.resources["./assets/slimebig.png"].texture,PIXI.loader.resources["./assets/slime.png"].texture); 
        slime.x += j*64;
        slime.y += i*64;
        slime.coord.x = j;
        slime.coord.y = i;
        enemies.push(slime);
        bg(i,j)
      }
      if(wrld[i][j] === "r"){
        let firerat = new Enemy(150,function(){return 10},PIXI.loader.resources["./assets/fireratbig.png"].texture,PIXI.loader.resources["./assets/firerat.png"].texture); 
        firerat.x += j*64;
        firerat.y += i*64 - 78;
        firerat.coord.x = j;
        firerat.coord.y = i;
        enemies.push(firerat);
        tall.push(firerat.sprite);
        bg(i,j)
      }
      if(wrld[i][j] === "z"){
        let zig = new Enemy(500,function(){return 25},PIXI.loader.resources["./assets/zeegas.png"].texture,PIXI.loader.resources["./assets/zeegas.png"].texture)
        zig.x += j * 64;
        zig.y += i * 64 - 78;
        zig.pure = true;
        zig.coord.x = j;
        zig.coord.y = i;
        console.log(zig)
        enemies.push(zig)
        tall.push(zig.sprite);
        bg(i,j)

      }
    }
    }
  }
  build(worlds[0])
  window.loop = new fps(function(){
    //console.log(slime.x,",",slime.y)
    //console.log(player.x,",",player.y)
    player.move()
    if(world[player.coord.y][player.coord.x] === "s"){
      while(stage.children[0]) { stage.removeChild(stage.children[0]); }
      build(worlds[worlds.indexOf(world)+1]);
    }
    enemies.forEach(function(val){
      if(val.coord.x === player.coord.x && val.coord.y === player.coord.y && val.valid !== false){
        loop.stop();
        let battle = new Encounter()
        battle.start(player,val)
      }
    })
    app.render(map)
    })
  }
