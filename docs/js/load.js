var loadState = {
	preload: function () {
                game.load.image('grid', './assets/grid2.png');
                game.load.image('carrier', './assets/carrier - 5.png');
                game.load.image('battleship', './assets/battleship - 4.png');
                game.load.image('cruiser', './assets/cruiser - 3.png');
                game.load.image('submarine', './assets/submarine - 3.png');
                game.load.image('destroyer', './assets/destroyer - 2.png');
                game.load.image('damage', './assets/x-graphic.png');
                game.load.image('hit', './assets/hit-token.png');
                game.load.image('miss', './assets/miss-token.png');
            },

    create: function() {
    	game.state.start('pre');
    }
};