function gameStart(button) {
    if (!game.physics.arcade.collide(ships,ships)){
            button.visible = false;
            // Game start logic goes here
        }
}

var preState = {

    doubleTap: function(sprite, pointer) {
        if (pointer.msSinceLastClick < game.input.doubleTapRate) {
            sprite.angle+=90;
        }
    },
    //gameStart: function(button) {
        //if (!game.physics.arcade.collide(ships,ships)){
        //    button.visible = false;
            // Game start logic goes here
        //}
    //},

    create: function() {
        targetText = game.add.text(90, 60, 'Target Grid', { fontSize: '36px', fill: '#FFF' });
        targetGrid = game.add.sprite(90, 112, 'grid');
        shipText = game.add.text(660, 60, 'Your Ships', { fontSize: '36px', fill: '#FFF' });
        shipGrid = game.add.sprite(660, 112, 'grid');
        damage = game.add.sprite(705,157, 'damage');
        hit = game.add.sprite(135, 157, 'hit');
        miss = game.add.sprite(180, 157, 'miss');

        startButton = game.add.button(shipGrid.centerX, 45, 'startButton', gameStart, this, 2, 1, 0);
        startButton.scale.setTo(0.25, 0.25);

        ships = game.add.group();
        ships.enableBody = true;
        ships.physicsBodyType = Phaser.Physics.ARCADE;

        carrier = ships.create(705, 157, 'carrier'),
        battleship = ships.create(750, 157, 'battleship'),
        cruiser = ships.create(795, 157, 'cruiser'),
        submarine = ships.create(840, 157, 'submarine'),
        destroyer = ships.create(885, 157, 'destroyer')

        ships.forEach(function(element) {
            element.inputEnabled = true;
            element.input.enableDrag();
            element.input.enableSnap(45,45,false,true, 30, 22);
            element.events.onInputDown.add(preState.doubleTap, this);
        });
    },

    update: function() {
        if (game.physics.arcade.collide(ships,ships)){
            startButton.loadTexture('startButtonInvalid');
        }
        else {
            startButton.loadTexture('startButton');
        }
    }
};