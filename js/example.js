let config=
{
	type: Phaser.WEBLG,
	width: 800,
	height: 600,
	backgroundColor: '#2d2d2d',
	parent: 'phaser-example',
	scene:{
		preload: preload,
		create: create
	}
};

let game= new Phaser.Game(config);
function preload(){
	this.load.image('bg','../img/escenario.jpg');
	this.load.image('ovni','../img/ovni.png',{
		frameWidth: 136, frameHeight:80});
}
function create(){
	this.add.image(400,300,'bg');
}