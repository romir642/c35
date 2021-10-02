var hypnoticball,position,database

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";
    var hypnoticballPosition=database.ref('ball/position') 
    hypnoticballPosition.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();
}

function WritePosition(x,y){
    database.ref('ball/position').set({
    'x': position.x + x,
      'y':position.y + y
    })
  
}
function readPosition(data){
position=data.val();
 hypnoticball.x=position.x
 hypnoticball.y=position.y






}
