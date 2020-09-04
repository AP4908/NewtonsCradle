class Bog{
    constructor(x, y, radius) {
         var options = {
             
           
           restitution:1,
             friction:0.01,
             density:1
         }
         this.body = Bodies.circle(x, y, radius, options);
         this.body.width = radius;
         this.body.height = radius;
 
         
         
         
         World.add(world, this.body);
       }
       display(){
 
        
 
        
         
         
         
         ellipseMode(RADIUS);
         ellipse(this.body.position.x, this.body.position.y, 40, 40);
 
         
         
       }
     }