class Boat {

    constructor(x, y, width, height, boatPos){

        var boatOptions = {

            friction : 1.0,
            restitution : 0.8,
            density : 1.0

        };

        this.body = Bodies.rectangle(x, y, width, height, boatOptions);
        this.width = width;
        this.height =  height;
        this.boatPos = boatPos;
        this.image = loadImage("assets/boat.png");
        World.add(world, this.body);

    }

    display(){

        var angle = this.body.angle;
        var pos = this.body.position;

        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image, 0, 0, this.width, this.height);
        pop ();

    }

}