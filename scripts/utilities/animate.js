class Frame {
	constructor(duration, func, callback) {
		this.progress = 0;
		this.duration = duration;
		this.func = func;
		this.callback = callback;
	}
	tick(animation) {
		if((this.duration === 0 && this.progress === 0) || this.duration === -1){
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
			this.func(this.progress);
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
		this.async = [];
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
		this.frames.push(new Frame(duration, func, callback));
		return this;
	}
	addAsync(duration,func,callback){
		this.async.push(new Frame(duration, func, callback));
		return this;
	}
	tick() {
		let a = this;
		//Sloppy way to get every synchronous way, how fun.
		if (!a.frames[0].tick(a)) {
			a.frames.shift();
		}
		for(let i = this.async.length - 1;i >= 0;i--){
			if (!this.async[i].tick(a)) {
				this.async.splice(i,1)
			}
		}
		return this;
	}
}
