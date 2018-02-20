var preState = {
    create: function() {
        var sprite;
        var text;
        targetText = game.add.text(90, 60, 'Target Grid', { fontSize: '36px', fill: '#FFF' });
        targetGrid = game.add.sprite(90, 112, 'grid');
        shipText = game.add.text(660, 60, 'Your Ships', { fontSize: '36px', fill: '#FFF' });
        shipGrid = game.add.sprite(660, 112, 'grid');
        damage = game.add.sprite(705,157, 'damage');
        text = game.add.text(16, 16, 'Drag the sprites. Overlapping: false', { fill: '#ffffff' });
        hit = game.add.sprite(135, 157, 'hit');
        miss = game.add.sprite(180, 157, 'miss');
        
        ships =[carrier = game.add.sprite(705, 157, 'carrier'),
                battleship = game.add.sprite(750, 157, 'battleship'),
                cruiser = game.add.sprite(795, 157, 'cruiser'),
                submarine = game.add.sprite(840, 157, 'submarine'),
                destroyer = game.add.sprite(885, 157, 'destroyer')
                ];

        shipBounds = new Phaser.Rectangle(705, 157, 450, 450);
        ships.forEach(function(element) {
            element.inputEnabled = true;
            element.input.enableDrag();
            element.input.enableSnap(45,45,false,true, 30, 22);
            element.input.boundsRect = shipBounds;
            element.events.onInputDown.add(doubleTap, this);
        });
    },

    update: function() {
        if (checkOverlap(cruiser, battleship)){
            text.text = 'Ships overlapping'
        }
        else {
            text.text = 'Not overlapping'
        }
    },

    doubleTap: function(sprite, pointer) {
        if (pointer.msSinceLastClick < game.input.doubleTapRate) {
            sprite.angle+=90;
        }
    },

    checkOverlap: function(spriteA, spriteB) {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    }
};