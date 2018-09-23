/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _shapes = __webpack_require__(1);
	
	var _shapes2 = _interopRequireDefault(_shapes);
	
	var _keypress = __webpack_require__(2);
	
	var _keypress2 = _interopRequireDefault(_keypress);
	
	var _spell = __webpack_require__(3);
	
	var _spell2 = _interopRequireDefault(_spell);
	
	var _enemy = __webpack_require__(4);
	
	var _enemy2 = _interopRequireDefault(_enemy);
	
	var _player = __webpack_require__(5);
	
	var _player2 = _interopRequireDefault(_player);
	
	var _encounter = __webpack_require__(6);
	
	var _encounter2 = _interopRequireDefault(_encounter);
	
	var _fps = __webpack_require__(7);
	
	var _fps2 = _interopRequireDefault(_fps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.worlds = ["11111111\n1p000001\n10000001\n10000001\n10000z01\n10000011\n100000s1\n11111111".split("\n"), "11111111\n1p010001\n10e1e1e1\n100001s1\n11111111".split("\n"), "111111111\n1p0rF0s1\n11111111".split("\n"), "1111111111111111111111111111\n1p00000000000000000000000001\n1eee00rrr0000000000000rrr001\n1e00e0r000000e000e0000r0r001\n1e00e0rrr000ee00e0e000r0r001\n1e00e0r0000e0e0e000e00r0r001\n1eee00rrr0e00ee00000e0rrr001\n1111111111111111111111111111".split("\n")]; //Create a Pixi Application
	
	worlds = worlds.map(function (arr) {
	  return arr.map(function (val) {
	    return val.split("");
	  });
	});
	window.world = window.worlds[0];
	window.key = _keypress2.default;
	_keypress2.default.listen();
	window.g = {};
	window.app = new PIXI.Application(702, 576, {
	  backgroundColor: 0x000000,
	  antialias: true
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
	PIXI.loader.add("./assets/hpblue.png").add("./assets/firerat.png").add("./assets/fireratbig.png").add("./assets/dialoguebox.png").add("./assets/gold.png").add("./assets/stair.png").add("./assets/zeegas.png").add("./assets/slash/1.png").add("./assets/slash/2.png").add("./assets/slash/3.png").add("./assets/slash/4.png").add("./assets/slash/5.png").add("./assets/slash/6.png").add("./assets/slash/7.png").add("./assets/slash/8.png").add("./assets/slash/9.png").add("./assets/slash/10.png").add("./assets/slash/11.png").add("./assets/slash/12.png").add("./assets/slash/13.png").add("./assets/slash/14.png").add("./assets/flame/1.png").add("./assets/flame/2.png").add("./assets/flame/3.png").add("./assets/flame/4.png").add("./assets/flame/5.png").add("./assets/flame/6.png").add("./assets/flame/7.png").add("./assets/flame/8.png").add("./assets/flame/9.png").add("./assets/flame/10.png").add("./assets/flame/11.png").add("./assets/flame/12.png").add("./assets/flame/13.png").add("./assets/flame/14.png").add("./assets/flame/15.png").add("./assets/water/1.png").add("./assets/water/2.png").add("./assets/water/3.png").add("./assets/water/4.png").add("./assets/water/5.png").add("./assets/water/6.png").add("./assets/water/7.png").add("./assets/slimebig.png").add("./assets/evstart.png").add("./assets/evbodyfill.png").add("./assets/evbody.png").add("./assets/evend.png").add("./assets/mpbodyfill.png").add("./assets/mpstart.png").add("./assets/hpbodyfill.png").add("./assets/hpstart.png").add("./assets/goldend.png").add("./assets/goldbody.png").add("./assets/tile.png").add("./assets/slime.png").add("./assets/qg.png").add("./assets/qw.png").add("./assets/ag.png").add("./assets/aw.png").add("./assets/steve.png").add("./assets/steve-2.png").add("./assets/menu.png").add("./assets/runes/A.png").add("./assets/runes/F.png").add("./assets/runes/Q.png").add("./assets/runes/R.png").add("./assets/runes/W.png").add("./assets/steve-stand.png").load(fonts);
	
	function fonts() {
	  WebFont.load({
	    custom: {
	      families: ['Mono'],
	      urls: ["stylesheet.css"]
	    },
	    active: function active(e) {
	      console.log("font loaded!");
	      // now start setting up your PixiJS (or canvas) stuff!
	      setup();
	    }
	  });
	}
	document.body.appendChild(app.view);
	function setup() {
	  function build(wrld) {
	    window.map = new PIXI.Container();
	    window.barriers = [];
	    window.battle = new PIXI.Container();
	    window.enemies = [];
	    stage.addChild(window.map);
	    var barriers = new PIXI.Container();
	    map.addChild(barriers);
	    world = wrld;
	    window.player = new _player2.default();
	    window.tall = [];
	    window.tall.sort(function (a, b) {
	      return a.y - b.y;
	    });
	    window.tall.forEach(function (val) {
	      map.removeChild(val);
	      map.addChild(val);
	    });
	    function bg(i, j) {
	      var tile = new PIXI.Sprite(PIXI.loader.resources["./assets/tile.png"].texture);
	      tile.anchor.x = 0.5;
	      tile.x = j * 64 + 32 + 1;
	      tile.y = i * 64;
	      tile.coord = { "x": i, "y": j };
	      barriers.addChild(tile);
	    }
	    for (var i = 0; i < wrld.length; i++) {
	      for (var j = 0; j < wrld[i].length; j++) {
	        if (wrld[i][j] === "1") {
	          var wall = new PIXI.Sprite(_shapes2.default.rectangle(64, 64, "#000"));
	          wall.anchor.x = 0.5;
	          wall.x = j * 64 + 32 + 1;
	          wall.y = i * 64;
	          wall.coord = { "x": i, "y": j };
	          barriers.addChild(wall);
	        }
	        if (wrld[i][j] === "F") {
	          bg(i, j);
	          var fire = new PIXI.Sprite(PIXI.loader.resources["./assets/runes/F.png"].texture);
	          fire.anchor.x = 0.5;
	          fire.scale.x = 0.25;
	          fire.scale.y = 0.25;
	          fire.x = j * 64 + 32 + 1;
	          fire.y = i * 64;
	          fire.coord = { "x": i, "y": j };
	          barriers.addChild(fire);
	        }
	        if (wrld[i][j] === "0") {
	          bg(i, j);
	        }
	        if (wrld[i][j] === "p") {
	          map.x -= j * 64 - 351;
	          map.y -= i * 64 - 576 / 2;
	          player.x += j * 64 - 351 + 32;
	          player.y += i * 64 - 576 / 2 - 32;
	          player.coord.x = j;
	          player.coord.y = i;
	          tall.push(player.sprite);
	          bg(i, j);
	        }
	        if (wrld[i][j] === "s") {
	          var stair = new PIXI.Sprite(PIXI.loader.resources["./assets/stair.png"].texture);
	          stair.anchor.x = 0.5;
	          stair.x = j * 64 + 32 + 1;
	          stair.y = i * 64;
	          stair.coord = { "x": i, "y": j };
	          map.addChild(stair);
	        }
	        if (wrld[i][j] === "e") {
	          var slime = new _enemy2.default(50, function () {
	            return 5;
	          }, PIXI.loader.resources["./assets/slimebig.png"].texture, PIXI.loader.resources["./assets/slime.png"].texture);
	          slime.x += j * 64;
	          slime.y += i * 64;
	          slime.coord.x = j;
	          slime.coord.y = i;
	          enemies.push(slime);
	          bg(i, j);
	        }
	        if (wrld[i][j] === "r") {
	          var firerat = new _enemy2.default(150, function () {
	            return 10;
	          }, PIXI.loader.resources["./assets/fireratbig.png"].texture, PIXI.loader.resources["./assets/firerat.png"].texture);
	          firerat.x += j * 64;
	          firerat.y += i * 64 - 78;
	          firerat.coord.x = j;
	          firerat.coord.y = i;
	          enemies.push(firerat);
	          tall.push(firerat.sprite);
	          bg(i, j);
	        }
	        if (wrld[i][j] === "z") {
	          var zig = new _enemy2.default(500, function () {
	            return 25;
	          }, PIXI.loader.resources["./assets/zeegas.png"].texture, PIXI.loader.resources["./assets/zeegas.png"].texture);
	          zig.x += j * 64;
	          zig.y += i * 64 - 78;
	          zig.pure = true;
	          zig.coord.x = j;
	          zig.coord.y = i;
	          console.log(zig);
	          enemies.push(zig);
	          tall.push(zig.sprite);
	          bg(i, j);
	        }
	      }
	    }
	  }
	  build(worlds[0]);
	  window.loop = new _fps2.default(function () {
	    //console.log(slime.x,",",slime.y)
	    //console.log(player.x,",",player.y)
	    player.move();
	    if (world[player.coord.y][player.coord.x] === "s") {
	      while (stage.children[0]) {
	        stage.removeChild(stage.children[0]);
	      }
	      build(worlds[worlds.indexOf(world) + 1]);
	    }
	    enemies.forEach(function (val) {
	      if (val.coord.x === player.coord.x && val.coord.y === player.coord.y && val.valid !== false) {
	        loop.stop();
	        var battle = new _encounter2.default();
	        battle.start(player, val);
	      }
	    });
	    app.render(map);
	  });
	}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = new function () {
	    var a = this;
	    this.renderer = "";
	    this.canvas = function (width, height) {
	        var canvas = document.createElement('canvas');
	        canvas.width = width;
	        canvas.height = height;
	        var ctx = canvas.getContext("2d");
	        return {
	            "canvas": canvas,
	            "ctx": ctx
	        };
	    };
	    this.rectangle = function (width, height, color) {
	        var b = a.canvas(width, height);
	        b.ctx.fillStyle = color;
	        b.ctx.fillRect(0, 0, width, height);
	        return PIXI.Texture.fromCanvas(b.canvas);
	    };
	    this.circle = function (radius, color) {
	        var b = a.canvas(radius * 2, radius * 2);
	        b.ctx.fillStyle = color;
	        b.ctx.beginPath();
	        b.ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
	        b.ctx.fill();
	        return PIXI.Texture.fromCanvas(b.canvas);
	    };
	}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = new function () {
	    var a = this;
	    this.map = [];
	    this.tethers = [];
	    this.listen = function () {
	        document.onkeydown = function (e) {
	            e = e || window.event;
	            e = e.which || e.keyCode || 0;
	            if (a.map.indexOf(e) == -1) {
	                a.map.push(e);
	            }
	            a.tethers.forEach(function (tether, index) {
	                if (tether.type == "down") {
	                    if (e === tether.key) {
	                        tether.func();
	                        if (!tether.perma) a.tethers.splice(index, 1);
	                    }
	                }
	            });
	        };
	        document.onkeyup = function (e) {
	            e = e || window.event;
	            e = e.which || e.keyCode || 0;
	            // use e.keyCode
	            if (a.map.indexOf(e) != -1) {
	                a.map.splice(a.map.indexOf(e), 1);
	            }
	            a.tethers.forEach(function (tether, index) {
	                if (tether.type == "up") {
	                    if (e === tether.key) {
	                        tether.func();
	                        if (!tether.perma) a.tethers.splice(index, 1);
	                    }
	                }
	            });
	        };
	    };
	    this.check = function (key, callback, not) {
	        if ((typeof key === "undefined" ? "undefined" : _typeof(key)) != "object") {
	            key = [key];
	        }
	        for (var i = 0; i < key.length; i++) {
	            if (a.map.indexOf(key[i]) != -1) {
	                callback();
	                i = key.length;
	                return true;
	            }
	        }
	        if (not !== undefined) {
	            not();
	        }
	        return false;
	    };
	    this.waitUp = function (key, func, perma) {
	        if (perma === undefined) {
	            perma = false;
	        }
	        a.tethers.push({
	            "key": key,
	            "func": func,
	            "type": "up",
	            "perma": perma
	        });
	    };
	    this.waitDown = function (key, func, perma, strictless) {
	        if (perma === undefined) {
	            perma = false;
	        }
	        if (a.tethers.every(function (val) {
	            return key !== val.key;
	        }) || strictless) {
	            console.log("veritable beans");
	            a.tethers.push({
	                "key": key,
	                "func": func,
	                "type": "down",
	                "perma": perma
	            });
	        }
	    };
	}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _keypress = __webpack_require__(2);
	
	var _keypress2 = _interopRequireDefault(_keypress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var runeMap = {
	    "Q": 81,
	    "A": 65,
	    "R": 82,
	    "W": 87,
	    "F": 70
	};
	
	var _class = function () {
	    function _class(name, runes, effect, duration, amount, cost, anim, animFrames) {
	        _classCallCheck(this, _class);
	
	        this.name = name;
	        this.runes = runes;
	        this.effect = effect;
	        this.duration = duration;
	        this.amount = amount;
	        this.cost = cost;
	        this.anim = anim;
	        this.animFrames = animFrames;
	    }
	
	    _createClass(_class, [{
	        key: "cast",
	        value: function cast() {
	            this.scroll = "";
	            for (var i = 0; i < this.amount; i++) {
	                this.scroll += this.runes[Math.floor(Math.random() * this.runes.length)];
	            }
	        }
	    }, {
	        key: "initiate",
	        value: function initiate() {
	            var started = false;
	            document.addEventListener('keydown', function () {
	                started = true;
	            }, false);
	            _keypress2.default.tethers = [];
	            var spell = this;
	            var scrollContainer = new PIXI.Container();
	            this.cast();
	            var duration = this.duration * 60;
	            var lock = 0;
	            var index = 0;
	            spell.scroll.split("").forEach(function (val, index) {
	                var rune = new PIXI.Text(val, { fontFamily: 'Mono', fontSize: 24, fill: 0xffffff });
	                rune.x = index % 20 * 32 + 24;
	                rune.y = 64 * 6 + Math.floor(index / 20) * 32 + 32;
	                scrollContainer.addChild(rune);
	            });
	            battle.addChild(scrollContainer);
	            return function (cb, end, quinter, enemy, player) {
	                if (quinter === true) {
	                    battle.removeChild(scrollContainer);
	                }
	                if (duration <= 0) {
	                    battle.removeChild(scrollContainer);
	                    end();
	                    return 0;
	                } else {
	                    if (started) {
	                        duration--;
	                    }
	                    if (lock <= 0) {
	                        var _loop = function _loop(_i) {
	                            _keypress2.default.waitDown(runeMap[spell.runes[_i]], function () {
	                                if (spell.runes[_i] === spell.scroll[index]) {
	                                    scrollContainer.children[index].style.fill = 0x00ff00;
	                                    index += 1;
	                                    //Success!
	                                    _i = spell.runes.length;
	                                    spell.effect(enemy, player);
	                                    if (index === spell.scroll.length) {
	                                        duration = 0;
	                                    }
	                                    cb();
	                                    return 1;
	                                } else {
	                                    lock = spell.duration * 60 / 10;
	                                    return 0;
	                                }
	                            });
	                            i = _i;
	                        };
	
	                        for (var i = 0; i < spell.runes.length; i++) {
	                            _loop(i);
	                        }
	                    } else {
	                        lock--;
	                    }
	                }
	                return 0;
	            };
	        }
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	    function _class(health, attack, big, small) {
	        _classCallCheck(this, _class);
	
	        this.health = health;
	        this.attack = attack;
	        this.bigTex = big;
	        this.smallTex = small;
	        this.sprite = new PIXI.Sprite(this.smallTex);
	        this.sprite.anchor.x = 0.5;
	        this.sprite.x = 32;
	
	        this.maxHealth = health;
	        this.health = health;
	        this.coord = { "x": 0, "y": 0 };
	        map.addChild(this.sprite);
	    }
	
	    _createClass(_class, [{
	        key: "x",
	        get: function get() {
	            return this.sprite.x;
	        },
	        set: function set(x) {
	            this.sprite.x = x;
	        }
	    }, {
	        key: "y",
	        get: function get() {
	            return this.sprite.y;
	        },
	        set: function set(y) {
	            this.sprite.y = y;
	        }
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _shapes = __webpack_require__(1);
	
	var _shapes2 = _interopRequireDefault(_shapes);
	
	var _spell = __webpack_require__(3);
	
	var _spell2 = _interopRequireDefault(_spell);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	
	        this.sprite = new PIXI.Sprite(PIXI.loader.resources["./assets/steve-stand.png"].texture);
	        this.sprite.x = 702 / 2 + 2;
	        this.sprite.y = 578 / 2 - 32;
	        this.counter = 0;
	        this.mode = "";
	        this.sprite.anchor.x = 0.5;
	        this.coord = { "x": 0, "y": 0 };
	        this.maxHealth = 50;
	        this.health = 50;
	        this.maxMana = 50;
	        this.mana = 50;
	        map.addChild(this.sprite);
	        this.spells = [new _spell2.default("Attack", ["A"], function (e, p) {
	            e.health -= 10;
	        }, 5, 3, 5, "slash", 14), new _spell2.default("Multiattack", ["Q", "A"], function (e, p) {
	            e.health -= 5;
	        }, 5, 25, 10, "slash", 14), new _spell2.default("Life Steal", ["R", "A"], function (e, p) {
	            e.health -= 5;p.health += 5;
	        }, 6, 30, 20, "slash", 14), new _spell2.default("Fire Strike", ["Q", "A", "F"], function (e, p, t) {
	            e.health -= 10;t = "flame";
	        }, 8, 30, 20, "flame", 15), new _spell2.default("Aqua Heal", ["Q", "R", "W"], function (e, p) {
	            p += 5;
	        }, 3, 5, 25, "none", 0), new _spell2.default("Scalding Water", ["Q", "A", "W", "F"], function (e) {
	            e.health -= 5;
	        }, 15, 50, 50, "water", 7)];
	    }
	
	    _createClass(_class, [{
	        key: "move",
	        value: function move() {
	            var player = this;
	
	            if (player.mode !== "") {
	                var testcheck = world[player.coord.y + player.mode[1] / 4][player.coord.x + player.mode[0] / 4] === "1"; //||
	                //world[player.coord.y + player.mode[1] / 4][player.coord.x + player.mode[0] / 4] === "z";
	                if (!testcheck) {
	                    tall.sort(function (a, b) {
	                        return a.y - b.y;
	                    });
	                    tall.forEach(function (val) {
	                        map.removeChild(val);
	                        map.addChild(val);
	                    });
	                    //Begin animation loop
	                    player.counter += 1;
	                    if (player.counter % 24 < 8) {
	                        player.sprite.texture = PIXI.loader.resources["./assets/steve-2.png"].texture;
	                    } else if (player.counter % 24 < 16) {
	                        player.sprite.texture = PIXI.loader.resources["./assets/steve-stand.png"].texture;
	                    } else {
	                        player.sprite.texture = PIXI.loader.resources["./assets/steve.png"].texture;
	                    }
	                    map.x -= player.mode[0] * 2 / 3;
	                    map.y -= player.mode[1] * 2 / 3;
	                    player.x += player.mode[0] * 2 / 3;
	                    player.y += player.mode[1] * 2 / 3;
	
	                    if (player.counter === 24) {
	                        player.coord.y += player.mode[1] / 4;
	                        player.coord.x += player.mode[0] / 4;
	                        player.x = Math.round(player.x);
	                        player.y = Math.round(player.y);
	                        player.mode = "";
	                        if (key.check([87, 38, 65, 37, 40, 83, 68, 39], function () {})) {
	                            player.sprite.texture = PIXI.loader.resources["./assets/steve-2.png"].texture;
	                        } else {
	                            player.sprite.texture = PIXI.loader.resources["./assets/steve-stand.png"].texture;
	                        }
	                    }
	                } else {
	                    player.mode = "";
	                }
	            }
	            key.check([87, 38], function () {
	                if (player.mode === "") {
	                    //up
	                    player.mode = [0, -4];
	                    player.counter = 0;
	                }
	            });
	            key.check([65, 37], function () {
	                if (player.mode === "") {
	                    //left
	                    player.mode = [-4, 0];
	                    player.counter = 0;
	                    player.sprite.scale.x = 1;
	                }
	            });
	            key.check([83, 40], function () {
	                if (player.mode === "") {
	                    //down
	                    player.mode = [0, 4];
	                    player.counter = 0;
	                }
	            });
	            key.check([68, 39], function () {
	                if (player.mode === "") {
	                    //right
	                    player.mode = [4, 0];
	                    player.counter = 0;
	                    player.sprite.scale.x = -1;
	                }
	            });
	        }
	    }, {
	        key: "x",
	        get: function get() {
	            return this.sprite.x;
	        },
	        set: function set(x) {
	            this.sprite.x = x;
	        }
	    }, {
	        key: "y",
	        get: function get() {
	            return this.sprite.y;
	        },
	        set: function set(y) {
	            this.sprite.y = y;
	        }
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _shapes = __webpack_require__(1);
	
	var _shapes2 = _interopRequireDefault(_shapes);
	
	var _fps = __webpack_require__(7);
	
	var _fps2 = _interopRequireDefault(_fps);
	
	var _statbar = __webpack_require__(8);
	
	var _statbar2 = _interopRequireDefault(_statbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    _createClass(_class, [{
	        key: "start",
	        value: function start(player, enemy) {
	            player.mana = player.maxMana;
	            var playerHealth = new _statbar2.default(player.health, player.maxHealth, PIXI.loader.resources["./assets/hpstart.png"].texture, PIXI.loader.resources["./assets/hpbodyfill.png"].texture, PIXI.loader.resources["./assets/goldbody.png"].texture, PIXI.loader.resources["./assets/goldend.png"].texture);
	            var playerMana = new _statbar2.default(player.mana, player.maxMana, PIXI.loader.resources["./assets/mpstart.png"].texture, PIXI.loader.resources["./assets/mpbodyfill.png"].texture, PIXI.loader.resources["./assets/goldbody.png"].texture, PIXI.loader.resources["./assets/goldend.png"].texture);
	            if (enemy.pure) {
	                var enemyHealth = new _statbar2.default(enemy.health, enemy.maxHealth, PIXI.loader.resources["./assets/hpblue.png"].texture, PIXI.loader.resources["./assets/mpbodyfill.png"].texture, PIXI.loader.resources["./assets/goldbody.png"].texture, PIXI.loader.resources["./assets/goldend.png"].texture);
	            } else {
	                var enemyHealth = new _statbar2.default(enemy.health, enemy.maxHealth, PIXI.loader.resources["./assets/evstart.png"].texture, PIXI.loader.resources["./assets/evbodyfill.png"].texture, PIXI.loader.resources["./assets/evbody.png"].texture, PIXI.loader.resources["./assets/evend.png"].texture);
	            }
	            playerMana.sprite.y = 32;
	            playerHealth.sprite.y = 318;
	            playerMana.sprite.y = 350;
	            enemyHealth.sprite.x = 698 - enemyHealth.sprite.width;
	            battle.addChild(playerHealth.sprite);
	            battle.addChild(playerMana.sprite);
	            battle.addChild(enemyHealth.sprite);
	            var obj = this;
	            var slashes = [];
	            obj.counter = 0;
	            var active = "";
	            var casting = function casting() {};
	            var spellContainer = new PIXI.Container();
	            obj.timer = new _fps2.default(function () {
	                slashes.forEach(function (val, i) {
	                    val.increment += 1;
	                    if (val.increment >= active.animFrames) {
	                        battle.removeChild(val);
	                        slashes.splice(i, 1);
	                    } else {
	                        val.texture = PIXI.loader.resources["./assets/" + active.anim + "/" + val.increment + ".png"].texture;
	                    }
	                });
	                if (obj.counter < 20) {
	                    map.alpha -= 0.05;
	                    obj.counter += 1;
	                }
	                if (obj.counter === 20) {
	                    stage.removeChild(map);
	                    stage.addChild(battle);
	                    map.removeChild(enemy.sprite);
	                    battle.addChild(enemy.sprite);
	                    battle.alpha = 0;
	                    enemy.sprite.texture = enemy.bigTex;
	                    enemy.x = 702 / 2;
	                    enemy.y = 64;
	                    obj.counter += 1;
	                    var wrapper = new PIXI.Sprite(PIXI.loader.resources["./assets/dialoguebox.png"].texture);
	                    wrapper.y = 384;
	                    battle.addChild(wrapper);
	                }
	                if (obj.counter > 20 && obj.counter < 40) {
	
	                    if (enemy.pure && obj.counter === 38 && worlds.indexOf(world) === 0) {
	                        var _juice = function _juice() {
	                            dialogue++;
	                            txt.text = crunch[dialogue];
	                            if (dialogue === crunch.length) {
	                                obj.counter += 1;
	                            } else {
	                                key.waitDown(13, _juice, false, true);
	                            }
	                        };
	
	                        var dialogue = -1;
	                        var txt = new PIXI.Text("", { fontFamily: 'Mono', fontSize: 24, fill: 0xffffff, wordWrap: true, wordWrapWidth: 666 });
	                        txt.x = 26;
	                        txt.y = 412;
	                        battle.addChild(txt);
	
	                        var crunch = ["Jaysun: Hello!", "Jaysun: My name’s Jaysun, what’s yours?", "???: You’re awfully young to be wandering here, any reason?", "Jaysun: Someone told me, there’s great powers hidden here!!", "???: Hmph, we have our dreams.", "???: I’d suggest your turn back now.", "Jaysun: What! Why?!", "???: A child like you doesn’t belong in this cave.", "Jaysun: I am strong!", "???: You’re a sorcerer, yes?", "Jaysun: Mhm, I’ve been practicing.", "???: How about, we duel. See how strong you really are.", "???: I’ll go easy."];
	                        txt.text = crunch[0];
	
	                        _juice();
	                        obj.counter += 1;
	                    } else if (enemy.pure && obj.counter === 39) {} else {
	                        obj.counter += 1;
	                        battle.alpha += 0.05;
	                    }
	                } else if (obj.counter === 40) {
	                    player.spells.forEach(function (spl, index) {
	                        var spellHold = new PIXI.Container();
	                        var spell = new PIXI.Sprite(_shapes2.default.rectangle(160, 64, "#ddd"));
	                        var text = new PIXI.Text(spl.name, { fontFamily: 'Mono', fontSize: 16, fill: 0x000, wordWrap: true, wordWrapWidth: 140 });
	                        text.x = 10;
	                        text.y = 10;
	                        spellHold.addChild(spell);
	                        spellHold.addChild(text);
	                        spellHold.x = index % 3 * 248 + 24;
	                        spell.buttonMode = true;
	                        spell.interactive = true;
	                        spellHold.y = 410 + Math.floor(index / 3) * 72;
	                        spell.on("click", function () {
	                            if (player.mana < spl.cost) {
	                                player.health -= Math.ceil((spl.cost - player.mana) / 5);
	                                player.mana = 0;
	                            } else {
	                                player.mana -= spl.cost;
	                            }
	                            playerHealth.fill.width = player.health;
	                            if (player.health <= 0) {
	                                playerHealth.fill.width = 0;
	                            }
	                            playerMana.fill.width = player.mana;
	                            if (player.mana <= 0) {
	                                playerMana.fill.width = 0;
	                            }
	                            active = spl;
	                            casting = spl.initiate();
	                            console.log("hey");
	                            obj.counter += 1;
	                        });
	                        spellContainer.addChild(spellHold);
	                    });
	                    battle.addChild(spellContainer);
	                    obj.counter += 1;
	                } else if (obj.counter === 41) {} else if (obj.counter === 42) {
	                    console.log("");
	                    obj.counter += 1;
	                    spellContainer.children = "";
	                    spellContainer = new PIXI.Container();
	                } else if (obj.counter === 43) {
	                    casting(function () {
	                        if (enemy.health <= 0) {
	                            casting(function () {}, function () {}, true);
	                            enemy.sprite.alpha -= 0.01;
	                            enemyHealth.fill.width = 0;
	                            obj.counter += 1;
	                        } else {
	                            enemyHealth.fill.width = enemy.health;
	                            var slash = new PIXI.Sprite(PIXI.loader.resources["./assets/" + active.anim + "/1.png"].texture);
	                            slash.x = 702 / 2 + Math.random() * 100 - 50;
	                            slash.anchor.x = 0.5;
	                            slash.y = 64 + enemy.sprite.height / 2 + Math.random() * 100 - 50;
	                            slash.anchor.y = 0.5;
	                            slash.increment = 1;
	                            slashes.push(slash);
	                            battle.addChild(slash);
	                        }
	                    }, function () {
	                        obj.counter += 1;
	                    }, false, enemy, player);
	                } else if (obj.counter < 121) {
	                    obj.counter += 1;
	                    if (enemy.sprite.alpha <= 0.99) {
	                        enemy.sprite.alpha -= 0.05;
	                    }
	                    if (enemy.sprite.alpha <= 0) {
	                        obj.counter = 200;
	                        map.alpha = 0;
	                    }
	                } else if (obj.counter >= 200) {
	                    console.log("end encounter, give gold");
	                    obj.counter += 1;
	                    if (obj.counter > 250) {
	                        stage.addChild(map);
	                        battle.alpha -= 0.05;
	                        map.alpha += 0.05;
	                    }
	                    if (map.alpha >= 1) {
	                        stage.removeChild(battle);
	                        map.removeChild(enemy);
	                        enemies.splice(enemies.indexOf(enemy), 1);
	                        loop.start();
	                        obj.timer.stop();
	                        battle.children.forEach(function (child) {
	                            battle.removeChild(child);
	                        });
	                    }
	                } else {
	
	                    player.health -= enemy.attack();
	                    playerHealth.fill.width = player.health;
	                    obj.counter = 40;
	                    if (player.health <= 0) {
	                        var _juice2 = function _juice2() {
	                            _dialogue++;
	                            _txt.text = _crunch[_dialogue];
	                            if (_dialogue === _crunch.length) {
	                                enemy.valid = false;
	                                stage.addChild(map);
	                                stage.removeChild(battle);
	                                map.alpha = 1;
	                                if (!enemy.pure) {
	                                    map.removeChild(enemy);
	                                    enemies.splice(enemies.indexOf(enemy), 1);
	                                } else {
	                                    map.addChild(enemy.sprite);
	                                }
	                                loop.start();
	                                obj.timer.stop();
	                                battle.children.forEach(function (child) {
	                                    battle.removeChild(child);
	                                });
	                            } else {
	                                key.waitDown(13, _juice2, false, true);
	                            }
	                        };
	
	                        obj.timer.stop();
	                        casting(function () {}, function () {}, true);
	                        var _dialogue = -1;
	                        var _crunch = ["???: You should turn back.", "Jaysun: No!", "*??? sighs*", "Zygas: The name’s Zygas. Good luck in the dungeon."];
	                        var _txt = new PIXI.Text("", { fontFamily: 'Mono', fontSize: 24, fill: 0xffffff, wordWrap: true, wordWrapWidth: 666 });
	                        _txt.x = 26;
	                        _txt.y = 412;
	                        battle.addChild(_txt);
	                        _txt.text = _crunch[0];
	
	                        _juice2();
	                    }
	                }
	            });
	        }
	    }]);

	    return _class;
	}();

	exports.default = _class;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (cb) {
	    this.going = true;
	    this.start = function () {
	        this.going = true;
	        requestAnimationFrame(draw);
	    };
	    this.resume = this.start;
	    this.stop = function () {
	        this.going = false;
	    };
	    this.pause = this.stop;
	    this.toggle = function () {
	        this.going = !this.going;
	    };
	    this.restart = function () {
	        ct = 0;
	    };
	    var a = this;
	    var ct = 0;
	
	    function draw() {
	        if (a.going) {
	            requestAnimationFrame(draw);
	            ct++;
	            cb(ct, a);
	            ct %= 64;
	        }
	    }
	    draw();
	    return this;
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function _class(fills, max, starts, shades, bodys, ends) {
	        _classCallCheck(this, _class);
	
	        this.sprite = new PIXI.Container();
	
	        var body = new PIXI.Sprite(bodys);
	        body.x = 28;
	        body.width = max + 2;
	        this.sprite.addChild(body);
	
	        this.fill = new PIXI.Sprite(shades);
	        this.fill.x = 28;
	        this.fill.y = 10;
	        this.fill.width = fills + 4;
	        this.sprite.addChild(this.fill);
	
	        var end = new PIXI.Sprite(ends);
	        end.x = max - 2 + 30;
	        this.sprite.addChild(end);
	
	        this.sprite.addChild(new PIXI.Sprite(starts));
	};
	
	exports.default = _class;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map