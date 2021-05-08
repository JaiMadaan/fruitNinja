//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife,fruit1,fruit2,fruit3,fruit4,monster;
var knifeImage,fruit1Image,fruit2Image,fruit3Image,fruit4Image,monsterImage,monsterImage1;



function preload(){
  
  monsterImage = loadImage("alien1.png")
    monsterImage1 = loadImage("alien2.png")
  knifeImage = loadImage("knife.png");
  fruit1Image = loadImage("fruit1.png")
    fruit2Image = loadImage("fruit2.png")
  fruit3Image = loadImage("fruit3.png")
    //fruit4Image = loadImage("fruit4.png")
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //creating sword
   knife=createSprite(width,height);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
 
  
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  fruit1Group= new Group() 
  alienGroup = new Group()
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
   knife.x=World.mouseX 
    knife.y=World.mouseY
    
     fruit()
    if(touches.length > 0 || knife.x===World.mouseX ){
     touches = [];  
       
       }
   if(touches.length > 0 || knife.y===World.mouseY ){
     touches = [];  
       
       }    
      

   if (fruit1Group.isTouching(knife)){  fruit1Group.destroyEach();
        
  score=score+60
  }
    else{
    if(alienGroup.isTouching(knife)){  alienGroup.destroyEach()  
     score=score-200 
                                     
    }
    
  }
  }   
drawSprites()
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);


}


function fruit() {
  if(frameCount%60 === 0){
  var fruit1 = createSprite(width,height)
  
  var position=Math.round(random(1,2))
  fruit1.scale=0.3;
  if(position == 1){
    fruit1.x= 20;
    fruit1.velocityX= +(6+3*score/200)
    }
    else{
      fruit1.x= 600;
    fruit1.velocityX= -(6+3*score/200)
      
    }
  var ran=Math.round(random(1,3))
  switch(ran){
    case 1: fruit1.addImage(fruit1Image) 
      break;
      case 2: fruit1.addImage(fruit2Image) 
      break;
      case 3: fruit1.addImage(fruit3Image) 
      break;
      default: break;
      }
 fruit1.y = Math.round(random(10,580));
  fruit1.lifetime=150;
     
 fruit1Group.add(fruit1)
 
  }
}
function monster(){
    var monster = createSprite(width,height);
  monster.addImage(monsterImage);
  monster.addImage (monsterImage1);
  monster.velocityX=-(8+2*score/40);
  monster.y = Math.round(random(10,580));
  monster.lifetime=150;
alien1.add(monster)
  alien2.add(monster)
  
}


