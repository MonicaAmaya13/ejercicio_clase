function setup(){
    createCanvas(500,500);
    background(200);
}
function draw(){
    
    i = 50; 
    x = 50; 

    fill(color('green'));

    while(x < height-25){
        while(i < width - 25){
            ellipse(i,x,25,25);
            i = i + 50; 

        }
        x= x+50;
        i = 50; 

    }

}


    

