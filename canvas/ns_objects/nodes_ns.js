'use strict';
let nodes_ns = new function() {
	let { screenSize } = global_ns;
	
	
	let Point = this.Point = class {
		constructor(p = {}) {
			this.pos = p.pos||vec2();
			this.vel = vec2();
			
			this.radius = p.radius||1;
			this.color = p.color||'#eeeeee';
		}
		
		updata() {
			this.vel.plus(random(-1, 1)/100, random(-1, 1)/100);
			
			this.vel.x = Math.min(this.vel.x, 1);
			this.vel.y = Math.min(this.vel.y, 1);
			
			this.pos.plus(this.vel);
			
			if(this.pos.x+this.radius < 0) this.pos.x = screenSize.x+this.radius;
			if(this.pos.y+this.radius < 0) this.pos.y = screenSize.y+this.radius;
			if(this.pos.x-this.radius > screenSize.x) this.pos.x = -this.radius;
			if(this.pos.y-this.radius > screenSize.y) this.pos.y = -this.radius;
		}
		
		draw(ctx, pos = this.pos) {
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.arc(pos.x, pos.y, this.radius, 0, Math.PI*2);
			ctx.fill();
			ctx.restore();
		}
	};
};
