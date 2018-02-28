function gameStart(button) {
    if (!game.physics.arcade.collide(ships,ships)){
            button.visible = false;
            ships.forEach(function(element) {
                element.inputEnabled = false;
            });
            // Game start logic goes here
        }
}
function over() {
    if (!game.physics.arcade.collide(ships,ships)){
        startButton.tint = 0x1E8449;
    }
}
function out() {
    startButton.tint = 0xffffff;
}
var preState = {

    doubleTap: function(sprite, pointer) {
        if (pointer.msSinceLastClick < game.input.doubleTapRate) {
            var index;
            if (ships.getIndex(sprite) <5) {
                index = ships.getIndex(sprite);
            }
            else {
                index = ships.getIndex(sprite)-5;
            }
            ships.getAt(index).angleHandler +=1;
            if ((ships.getAt(index).angleHandler %2) ==0) {
                //Regular Sprite
                ships.getAt(index+5).kill();
                ships.getAt(index).revive();
                ships.getAt(index).x = ships.getAt(index+5).x;
                ships.getAt(index).y = ships.getAt(index+5).y;
                ships.getAt(index).loadTexture(ships.getAt(index).key.slice(0,-1) + (ships.getAt(index).angleHandler % 4));
            }
            else if ((ships.getAt(index).angleHandler %2) ==1) {
                ships.getAt(index).kill();
                ships.getAt(index+5).revive();
                ships.getAt(index+5).x = ships.getAt(index).x;
                ships.getAt(index+5).y = ships.getAt(index).y;
                ships.getAt(index+5).loadTexture(ships.getAt(index).key.slice(0,-1) + (ships.getAt(index).angleHandler % 4));
            }

        }
    },

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
        startButton.onInputOver.add(over, this);
        startButton.onInputOut.add(out, this);

        ships = game.add.group();
        ships.enableBody = true;
        ships.physicsBodyType = Phaser.Physics.ARCADE;

        carrier = ships.create(705, 157, 'carrier0'),
        battleship = ships.create(750, 157, 'battleship0'),
        cruiser = ships.create(795, 157, 'cruiser0'),
        submarine = ships.create(840, 157, 'submarine0'),
        destroyer = ships.create(885, 157, 'destroyer0'),
        carrierhorizontal = ships.create(705, 157, 'carrier1'),
        battleshiphorizontal = ships.create(750, 157, 'battleship1'),
        cruiserhorizontal = ships.create(795, 157, 'cruiser1'),
        submarinehorizontal = ships.create(840, 157, 'submarine1'),
        destroyerhorizontal = ships.create(885, 157, 'destroyer1'),


        shipBounds = new Phaser.Rectangle(705, 157, 450, 450);
        ships.forEach(function(element) {
            element.inputEnabled = true;
            element.input.enableDrag();
            element.input.enableSnap(45,45,false,true, 30, 22);
            element.events.onInputDown.add(preState.doubleTap, this);
            element.input.boundsRect = shipBounds;
            element.angleHandler = 0;
        });
        carrierhorizontal.kill();
        battleshiphorizontal.kill();
        cruiserhorizontal.kill();
        submarinehorizontal.kill();
        destroyerhorizontal.kill();
    },

    update: function() {
        if (game.physics.arcade.collide(ships,ships)) {
            startButton.loadTexture('startButtonInvalid');
        }
        else {
            startButton.loadTexture('startButton');
        }
    }
};