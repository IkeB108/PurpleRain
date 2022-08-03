function setup(){
  icursor = new MobileFriendlyCursor({
    minAspectRatio: 1,
    maxAspectRatio: 1,
  })
  
  rainSound = new Howl({
    src: ['rain.mp3'],
    autoplay: false,
    loop: true
  })
  
  raindrops = [];
  
  dropColor1 = color(221, 178, 235)
  dropColor2 = color(151, 15, 153)
  startSpeed = 3;
  
  for(let i = 0; i < 200; i++){
    let x = random(width);
    let y = random(height);
    let speed = startSpeed;
    let colorDistance = random(1);
    raindrops.push( {x, y, speed, colorDistance} )
  }
  stroke(105, 60, 120); strokeWeight( width * 0.005 );
}

function draw(){
  //Remember to use if(myLoader.complete)
  background(55,31,77)
  
  for(let i in raindrops){
    let drop = raindrops[i];
    drop.y += drop.speed;
    drop.speed += 1;
    if(drop.y > height){
      drop.y = random(-30,-200);
      drop.x = random(width);
      drop.speed = startSpeed;
    }
    stroke( lerpColor(dropColor1, dropColor2, drop.colorDistance) )
    line( drop.x, drop.y, drop.x, drop.y + 30 )
  }
  
}

function mouseClicked(){
  if( !rainSound.playing() )
  rainSound.play();
}
