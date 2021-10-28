Scene.create('main', function() {
	let { screenSize } = global_ns;
	
	
	let points = [];
	
	for(let i = 0; i < 200; i++) {
		points.push(new nodes_ns.Point({
			pos: vec2(random(0, screenSize.x), random(0, screenSize.y)),
			radius: random(2, 5),
			color: `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, ${random(10, 100)/100})`
		}));
	};
	
	
//==========-updata-==========//
	this.updata = function() {
		for(let i = 0; i < points.length; i++) points[i].updata();
		
		
	//==========-draw-==========//
		main.clearRect(0, 0, screenSize.x, screenSize.y);
		
	//	obj.draw(main);
		
		for(let i = 0; i < points.length; i++) points[i].draw(main);
	};
});

Scene.run('main');

console.log(ver);

