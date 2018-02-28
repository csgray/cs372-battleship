var loadState = {
	preload: function () {
                game.load.image('grid', './assets/grid2.png');
                game.load.image('carrier', './assets/carrier - 5.png');
                game.load.image('carrier1', './assets/carrier - 5-90.png');
                game.load.image('battleship', './assets/battleship - 4.png');
                game.load.image('battleship1', './assets/battleship - 4-90.png');
                game.load.image('battleship2', './assets/battleship - 4-180.png');
                game.load.image('battleship3', './assets/battleship - 4-270.png');
                game.load.image('cruiser', './assets/cruiser - 3.png');
                game.load.image('cruiser1', './assets/cruiser - 3-90.png');
                game.load.image('submarine', './assets/submarine - 3.png');
                game.load.image('submarine1', './assets/submarine - 3-90.png');
                game.load.image('destroyer', './assets/destroyer - 2.png');
                game.load.image('destroyer1', './assets/destroyer - 2-90.png');
                game.load.image('damage', './assets/x-graphic.png');
                game.load.image('hit', './assets/hit-token.png');
                game.load.image('miss', './assets/miss-token.png');
                game.load.image('startButton', './assets/startButton.png');
                game.load.image('startButtonInvalid', './assets/startButtonInvalid.png');
            },

    create: function() {
    	game.state.start('pre');
    }
};