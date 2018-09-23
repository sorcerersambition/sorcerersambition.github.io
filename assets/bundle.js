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
	
	window.world = "111111111111111111111111111111111111111111111\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100pe0000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n100000000000000000000000000000000000000000001\n111111111111111111111111111111111111111111111".split("\n"); //Create a Pixi Application
	
	world = world.map(function (val) {
	  return val.split("");
	});
	window.key = _keypress2.default;
	_keypress2.default.listen();
	window.g = {};
	var app = new PIXI.Application(702, 576, {
	  backgroundColor: 0xecf0f1,
	  antialias: true
	});
	window.stage = app.stage;
	window.map = new PIXI.Container();
	window.barriers = [];
	window.battle = new PIXI.Container();
	stage.addChild(map);
	
	for (var i = 0; i < 18; i++) {
	  var gridline = new PIXI.Sprite(_shapes2.default.rectangle(1, 640, "#000000"));
	  gridline.x = i * 64;
	  map.addChild(gridline);
	}
	for (var _i = 0; _i < 18; _i++) {
	  var _gridline = new PIXI.Sprite(_shapes2.default.rectangle(768, 1, "#000000"));
	  _gridline.y = _i * 64;
	  map.addChild(_gridline);
	}
	PIXI.loader.add("./slimebig.png").add("./evstart.png").add("./evbodyfill.png").add("./evbody.png").add("./evend.png").add("./mpbodyfill.png").add("./mpstart.png").add("./hpbodyfill.png").add("./hpstart.png").add("./goldend.png").add("./goldbody.png").add("./tile.png").add("./slime.png").add("./qg.png").add("./qw.png").add("./ag.png").add("./aw.png").add("./steve.png").add("./steve-2.png").add("./steve-stand.png").load(setup);
	document.body.appendChild(app.view);
	function setup() {
	  var barriers = new PIXI.Container();
	  map.addChild(barriers);
	  var slime = new _enemy2.default(500, function () {
	    return 5;
	  });
	  var player = new _player2.default();
	  function bg(i, j) {
	    var tile = new PIXI.Sprite(PIXI.loader.resources["./tile.png"].texture);
	    tile.anchor.x = 0.5;
	    tile.x = j * 64 + 32 + 1;
	    tile.y = i * 64;
	    tile.coord = { "x": i, "y": j };
	    barriers.addChild(tile);
	  }
	  for (var _i2 = 0; _i2 < world.length; _i2++) {
	    for (var j = 0; j < world[_i2].length; j++) {
	      if (world[_i2][j] === "1") {
	        var wall = new PIXI.Sprite(_shapes2.default.rectangle(64, 64, "#000"));
	        wall.anchor.x = 0.5;
	        wall.x = j * 64 + 32 + 1;
	        wall.y = _i2 * 64;
	        wall.coord = { "x": _i2, "y": j };
	        barriers.addChild(wall);
	      }
	      if (world[_i2][j] === "0") {
	        bg(_i2, j);
	      }
	      if (world[_i2][j] === "p") {
	        map.x -= j * 64 - 351;
	        map.y -= _i2 * 64 - 576 / 2;
	        player.x += j * 64 - 351 + 32;
	        player.y += _i2 * 64 - 576 / 2 - 32;
	        console.log(player);
	        player.coord.x = j;
	        player.coord.y = _i2;
	        bg(_i2, j);
	      }
	      if (world[_i2][j] === "e") {
	        slime.x += _i2 * 64;
	        slime.y += j * 64;
	        slime.coord.x = j;
	        slime.coord.y = j;
	        bg(_i2, j);
	      }
	    }
	  }
	  var loop = new _fps2.default(function () {
	    //console.log(slime.x,",",slime.y)
	    //console.log(player.x,",",player.y)
	    player.move();
	    if (slime.coord.x === player.coord.x && slime.coord.y === player.coord.y) {
	      loop.stop();
	      _encounter2.default.start(player, slime);
	    }
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
	    this.waitDown = function (key, func, perma) {
	        if (perma === undefined) {
	            perma = false;
	        }
	        if (a.tethers.every(function (val) {
	            return key !== val.key;
	        })) {
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
	    "A": 65
	};
	
	var _class = function () {
	    function _class(name, runes, effect, duration, amount, cost) {
	        _classCallCheck(this, _class);
	
	        this.name = name;
	        this.runes = runes;
	        this.effect = effect;
	        this.duration = duration;
	        this.amount = amount;
	        this.cost = cost;
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
	            _keypress2.default.tethers = [];
	            var spell = this;
	            var scrollContainer = new PIXI.Container();
	            this.cast();
	            var duration = this.duration * 60;
	            var lock = 0;
	            var index = 0;
	            spell.scroll.split("").forEach(function (val, index) {
	                var rune = new PIXI.Sprite(PIXI.loader.resources["./" + val.toLowerCase() + "w.png"].texture);
	                rune.x = index % 11 * 64;
	                rune.y = 64 * 6 + Math.floor(index / 11) * 64;
	                scrollContainer.addChild(rune);
	            });
	            battle.addChild(scrollContainer);
	            return function (cb, end) {
	                if (duration <= 0) {
	                    end();
	                    return 0;
	                } else {
	                    duration--;
	                    if (lock <= 0) {
	                        var _loop = function _loop(_i) {
	                            _keypress2.default.waitDown(runeMap[spell.runes[_i]], function () {
	                                if (spell.runes[_i] === spell.scroll[index]) {
	                                    scrollContainer.children[index].setTexture(PIXI.loader.resources["./" + spell.runes[_i].toLowerCase() + "g.png"].texture);
	                                    index += 1;
	                                    //Success!
	                                    _i = spell.runes.length;
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
	    function _class(health, attack) {
	        _classCallCheck(this, _class);
	
	        this.health = health;
	        this.attack = attack;
	        this.bigTex = PIXI.loader.resources["./slimebig.png"].texture;
	        this.smallTex = PIXI.loader.resources["./slime.png"].texture;
	        this.sprite = new PIXI.Sprite(this.smallTex);
	        this.sprite.anchor.x = 0.5;
	        this.sprite.x = 32;
	
	        this.maxHealth = 50;
	        this.health = 50;
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
	
	        this.sprite = new PIXI.Sprite(PIXI.loader.resources["./steve-stand.png"].texture);
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
	        this.spells = [new _spell2.default("Multiattack", ["Q", "A"], function (e) {
	            return 5;
	        }, 5, 25, 5)];
	    }
	
	    _createClass(_class, [{
	        key: "move",
	        value: function move() {
	            var player = this;
	
	            if (player.mode !== "") {
	                var testcheck = world[player.coord.y + player.mode[1] / 4][player.coord.x + player.mode[0] / 4] === "1";
	                console.log(player.coord.y + player.mode[1] / 4);
	                console.log(player.coord.x + player.mode[0] / 4);
	                console.log(world[player.coord.y + player.mode[1] / 4], player.coord.x + player.mode[0] / 4);
	                if (!testcheck) {
	                    //Begin animation loop
	                    player.counter += 1;
	                    if (player.counter % 24 < 8) {
	                        player.sprite.texture = PIXI.loader.resources["./steve-2.png"].texture;
	                    } else if (player.counter % 24 < 16) {
	                        player.sprite.texture = PIXI.loader.resources["./steve-stand.png"].texture;
	                    } else {
	                        player.sprite.texture = PIXI.loader.resources["./steve.png"].texture;
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
	                            player.sprite.texture = PIXI.loader.resources["./steve-2.png"].texture;
	                        } else {
	                            player.sprite.texture = PIXI.loader.resources["./steve-stand.png"].texture;
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
	
	exports.default = new (function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    _createClass(_class, [{
	        key: "start",
	        value: function start(player, enemy) {
	            var playerHealth = new _statbar2.default(player.health, player.maxHealth, PIXI.loader.resources["./hpstart.png"].texture, PIXI.loader.resources["./hpbodyfill.png"].texture, PIXI.loader.resources["./goldbody.png"].texture, PIXI.loader.resources["./goldend.png"].texture);
	            var playerMana = new _statbar2.default(player.mana, player.maxMana, PIXI.loader.resources["./mpstart.png"].texture, PIXI.loader.resources["./mpbodyfill.png"].texture, PIXI.loader.resources["./goldbody.png"].texture, PIXI.loader.resources["./goldend.png"].texture);
	            var enemyHealth = new _statbar2.default(enemy.health, enemy.maxHealth, PIXI.loader.resources["./evstart.png"].texture, PIXI.loader.resources["./evbodyfill.png"].texture, PIXI.loader.resources["./evbody.png"].texture, PIXI.loader.resources["./evend.png"].texture);
	            playerMana.sprite.y = 32;
	            playerHealth.sprite.y = 318;
	            playerMana.sprite.y = 350;
	            enemyHealth.sprite.x = 698 - enemyHealth.sprite.width;
	            battle.addChild(playerHealth.sprite);
	            battle.addChild(playerMana.sprite);
	            battle.addChild(enemyHealth.sprite);
	            var obj = this;
	            obj.counter = 0;
	            var active = "";
	            var casting = function casting() {};
	            var spellContainer = new PIXI.Container();
	            obj.timer = new _fps2.default(function () {
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
	                }
	                if (obj.counter > 20 && obj.counter < 40) {
	                    obj.counter += 1;
	                    battle.alpha += 0.05;
	                } else if (obj.counter === 40) {
	                    player.spells.forEach(function (spl) {
	
	                        var spell = new PIXI.Sprite(_shapes2.default.rectangle(64, 64, "#000"));
	                        spell.buttonMode = true;
	                        spell.interactive = true;
	                        spell.y = 384;
	                        spell.on("click", function () {
	                            player.mana -= spl.cost;
	                            playerMana.fill.width = player.mana;
	                            active = spl;
	                            casting = spl.initiate();
	                            console.log("hey");
	                            obj.counter += 1;
	                        });
	                        spellContainer.addChild(spell);
	                    });
	                    battle.addChild(spellContainer);
	                    obj.counter += 1;
	                } else if (obj.counter === 41) {} else if (obj.counter === 42) {
	                    console.log("");
	                    obj.counter += 1;
	                    spellContainer.children.forEach(function (val) {
	                        spellContainer.removeChild(val);
	                    });
	                } else if (obj.counter === 43) {
	                    casting(function () {
	                        enemy.health -= active.effect();
	                        if (enemy.health < 0) {
	                            enemyHealth.fill.width = 0;
	                        } else {
	                            enemyHealth.fill.width = enemy.health;
	                        }
	                    }, function () {});
	                } else {
	                    if (obj.counter === 121) {} else {
	                        obj.counter += 1;
	                    }
	                }
	            });
	        }
	    }]);
	
	    return _class;
	}())();

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