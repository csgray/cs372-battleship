var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'gameDiv');

//States
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('pre', preState);
/*game.state.add('mainGame', mainState);
game.state.add('win', winState);*/

game.state.start('boot');
