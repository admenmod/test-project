'use strict';
let global_ns = new function() {
	let screenSize = this.screenSize = vec2().set(cvs.size);
	cvs.on('resize', () => screenSize.set(cvs.size));
};
