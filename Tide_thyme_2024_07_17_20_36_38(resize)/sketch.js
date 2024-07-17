var C = 729;
var ID=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //resizeCanvas();
  colorMode(HSB);
  C=width/3;
frameRate(25);
}

var N = []; //JSON.parse(localStorage.getItem("saveGoogol"));
 N.push(new Number([0],C/6,C/6,C));
  N.push(new Number([0],C+C/6,C/6,C/6));
  N.push(new Number([0],C+C/6,2*C/6,C/6));
  N.push(new Number([0],C+C/6,3*C/6,C/6));
  N.push(new Number([0],C+C/6,4*C/6,C/6));
  N.push(new Number([0],C+C/6,5*C/6,C/6));
  N.push(new Number([0],C+C/6,6*C/6,C/6));
  N.push(new Number([0],C+C/6,7*C/6,C/6));
  N.push(new Number([0],C+0*C/6,7*C/6,C/6));
  N.push(new Number([0],C-1*C/6,7*C/6,C/6));
  N.push(new Number([0],C-2*C/6,7*C/6,C/6));
  N.push(new Number([0],C-3*C/6,7*C/6,C/6));
  N.push(new Number([0],C-4*C/6,7*C/6,C/6));
   N.push(new Number([0],C-5*C/6,7*C/6,C/6));
   N.push(new Number([0],0,7*C/6,C/6));
   N.push(new Number([0],0,6*C/6,C/6));
   N.push(new Number([0],0,5*C/6,C/6));
   N.push(new Number([0],0,4*C/6,C/6));
   N.push(new Number([0],0,3*C/6,C/6));
   N.push(new Number([0],0,2*C/6,C/6));
   N.push(new Number([0],0,1*C/6,C/6));
   N.push(new Number([0],0,0,C/6));
   N.push(new Number([0],C/6,0,C/6));
   N.push(new Number([0],2*C/6,0,C/6));
   N.push(new Number([0],3*C/6,0,C/6));
   N.push(new Number([0],4*C/6,0,C/6));
   N.push(new Number([0],5*C/6,0,C/6));
   N.push(new Number([0],6*C/6,0,C/6));
   N.push(new Number([0],7*C/6,0,C/6));

  
function draw() {
  background(50,0,75);
  for(var i=0;i<N.length-1;i++)
    {
     if(N[i].id<=sqrt(N[0].num.length)) {
          N[i].show();
          N[i].add(N[i+1].num);}
    }
  if(N[28].id<=sqrt(N[0].num.length)) N[28].show();
  localStorage.setItem("saveGoogol", JSON.stringify(N));
}
function mousePressed(){
  for(var n of N){
    if(n.over()){
                if(n.id<=sqrt(N[0].num.length)){
                  n.add([1]);
                }                              
    }
  }
}

var col = (0);
function Number(num, x,y,w) 
{
  this.id = ID++;
  this.num =num;
  this.show= function(){
  
   var W=w+x; //value of right side
   var H=w+y; //value of bottom
   D = ceil(pow(num.length,0.5));
   S = w/D;
    strokeWeight(5);
    stroke(0,0,100);
    noFill();
    square(x,y,w);
   
fill(0);
    strokeWeight(S/100);
    square(x,y,w,S/5);
    //stroke(0);
   textSize(S);
   var i=0;
   for( var I of num)
   {
     noFill();
     fill(360/10*I,50,75);
     rect(W-(i%D)*S-S,H-floor(i/D)*S-S,S,S,S/10);
    // fill(360/10*I,C/9,C/9);
     fill(0,0,0);
     text(I,W-(i%D)*S-S*0.80,H-floor(i/D)*S-S*0.10);
     i++;
   }
 }
  
this.add = function(in_) {
  while (in_.length > num.length) {
    num.push(0);
  }
  for (let i = 0; i < in_.length; i++) {
    let A = in_[i] + num[i];
    num[i] = A;
  }
  for (let i = 0; i < num.length; i++) {
    let A = num[i];
    if (A > 9) {
      if (i === num.length - 1) {
        num.push(0);
      }
      num[i] = A - 10;
      num[i + 1] += 1;
    }
  }
}
  this.over = function(){
    
    if(mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+w)
      return true;
      return false;
    
  }
}