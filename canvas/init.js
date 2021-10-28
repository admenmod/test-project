'use strict';
let {
	codeShell, random, JSONcopy, loader, loadImage, loadScript, generateImage,
	EventEmitter, Scene, Child,
	Vector2, vec2, VectorN, vecN,
	CameraImitationCanvas, CanvasLayer
} = globalThis.Ver;


let cvs = document.querySelector('.canvas');
let { main, back } = cvs.cameraImitationCanvas;


(function() {
	(() => {
		function updata(dt) {
			Scene.updata(dt);
		};
		
		
		let prevTime = 0;
		
		function loop(time) {
			let dt = time - prevTime;
			prevTime = time;
			
			if(dt < 30) updata(dt);
			requestAnimationFrame(loop);
		};
		requestAnimationFrame(loop);
	})();
	
	let rootpath = 'canvas/';
	
	loadScript(rootpath+'ns_objects/global_ns.js');
	loadScript(rootpath+'ns_objects/nodes_ns.js');
	
	loadScript(rootpath+'scenes/main.js');
})();