class Frame {
	constructor(duration, func, callback) {
		this.progress = 0;
		this.duration = duration;
		this.func = func;
		this.callback = callback;
	}
	tick(animation) {
		if(this.duration === 0 && this.progress === 0){
			let a = this;
			this.progress++;
			//don't pass progress, pass callback
			this.func(
				function(){
					animation.frames.shift();
					animation.tick();
				});
			return true;
		}
		else if (this.progress < this.duration) {
			this.progress++;
			//Passes the progress based on 0
			this.func(this.progress / this.duration);
			return true;
		} else if(this.duration === 0){
			return true;
		} else{
			if (typeof this.callback == "function") {
				this.callback();
			}
			return false;
		}
		return false;
	}
}
export default class{
	constructor() {
		this.frames = [];
	}
	/*
	addFrame
	  - name:
	    * Set to a name to add to a specific chain of animations
		* Leave blank (null, 0, "", false, etc.) to be executed in the loop until completion as soon as declared.
	  - duration:
	    * How many ticks the animation will last for
	  - func:
	    * The code to be run in the animation sequence
	  - callback (optional):
	    * A function to be run after the completion of the animation
	*/
	addFrame(duration, func, callback) {
			if (this.frames === undefined) {
				this.frames = [new Frame(duration, func, callback)];
			} else {
				this.frames.push(new Frame(duration, func, callback));
			}
		return this;
	}
	tick() {
		let a = this;
		//Sloppy way to get every synchronous way, how fun.
		if (!a.frames[0].tick(a)) {
			a.frames.shift();
		}
		return this;
	}
}
