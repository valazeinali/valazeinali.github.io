
var freshid = 0;
var color = 1;
var linecolor = 1;
var prevX = 0;
var prevY = 0;
var currentX = 0;
var currentY = 0;
var html = "";
var total_nodes = 1000;
var color_incrament = 0.001;
var browserwidth = $(window).width();
var browserheight = $(window).height();
var posx = browserwidth / 2;
var posy = browserheight / 2;
var colors = [
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#99b1d4',
  '#59b2ff',
  '#fff',
  '#999',
];
var borderRadius = [
  '100%',
  '0'
];

$(window).resize(function() {
  browserwidth = $(window).width();
  browserheight = $(window).height();
});

var getNewID = function () {
  freshid++;
  return freshid;
}

function getRandomInt() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

var drawDot = function () {
  var id = getNewID();
  var addX = getRandomInt();
  var addY = getRandomInt();
  var addX = addX - 50;
  var addY = addY - 50;
  var randColor = colors[Math.floor(Math.random() * colors.length)];
  var randRadius = borderRadius[Math.floor(Math.random() * borderRadius.length)];
  var randRotation = Math.floor(Math.random() * 360);
  var randSize = Math.floor(Math.random() * 32) + 4;
  
  posx = posx + addX;
  posy = posy + addY;
  
  if (posx <= 0){
    posx = posx * -1;
  }
  
  console.log('posy'+posy);
  
  if (posy <= 0){
    posy = posy * -1;
  }
  
  currentX = posx;
  currentY = posy;
  color = color - color_incrament;
  
  
  var width = randSize+'px';
  var height = randSize+'px';
  
  var style = 'left:'+posx+'px; top:'+posy+'px; background-color: '+randColor+'; transform: rotate('+randRotation+'deg); border-radius: '+randRadius+'; width:'+width+'; height:'+height+';';
  
  $('body').append('<div class="snake-dot id-'+id+'" style="'+style+'">');
  
} 

var drawLine = function () {
  
  if (prevX == 0 && prevY == 0 ) {
    
  } else {
  
    var Cx = prevX;
    var Cy = prevY;
    var Dx = currentX;
    var Dy = currentY;

    var deltaX = parseInt(Dx) - parseInt(Cx);
    var deltaY = parseInt(Dy) - parseInt(Cy);

    var length = Math.sqrt(deltaX*deltaX + deltaY*deltaY);

    var angle = Math.atan2(deltaY,deltaX) * 180 / Math.PI;
    
    linecolor = linecolor - color_incrament;
    
    var style = 'left:'+Cx+'px;top:'+Cy+'px;width:'+length+'px;transform:rotate('+angle+'deg);background-color:rgba(90,90,90,0);';

    // Draw line
    $('body').append('<div class="snake-line" style="'+style+'"></div>');
    
  }
}

var time = 0;
for (var i=0;i<total_nodes;i++){
    setTimeout(function(){
      drawDot();
      drawLine();
      prevX = currentX;
      prevY = currentY;
    }, time);
  time = time + 50;
}
