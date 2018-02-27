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
            //sprite.angle+=90;
            battleship.angleHandler +=1;
            if ((battleship.angleHandler %4) ==0) {
                //Regular Sprite
                battleship.loadTexture(battleship.name);
            }
            else if ((battleship.angleHandler %4) ==1) {
                battleship.loadTexture(battleship.name + '1');
            }
            else if ((battleship.angleHandler %4) ==2) {
                battleship.loadTexture(battleship.name + '2');
            }
            else if ((battleship.angleHandler %4) ==3) {
                battleship.loadTexture(battleship.name + '3');
            }
            //battleship.loadTexture('battleship_rotated');
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

        carrier = ships.create(705, 157, 'carrier'),
        battleship = ships.create(750, 157, 'battleship'),
        cruiser = ships.create(795, 157, 'cruiser'),
        submarine = ships.create(840, 157, 'submarine'),
        destroyer = ships.create(885, 157, 'destroyer')

        shipBounds = new Phaser.Rectangle(705, 157, 450, 450);
        ships.forEach(function(element) {
            element.inputEnabled = true;
            element.input.enableDrag();
            element.input.enableSnap(45,45,false,true, 30, 22);
            element.events.onInputDown.add(preState.doubleTap, this);
            element.input.boundsRect = shipBounds;
            element.angleHandler = 0;
            element.name = element.key;
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