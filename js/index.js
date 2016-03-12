// i chose to keep the gears infinitely moving because everything can be re designed and remixed

(  function(){
  
  var gear1 =$('#g1');
  console.log();

  
  // Your Awesomeness
  TweenMax.to( gear1, 3.5, { 
    rotation: 360, 
    repeat: -1,
    transformOrigin:"50% 50%",
    ease:Power0.easeNone 
    })
}());

(  function(){
  
  var gear2 =$('#g2');
  console.log();

  
  // Your Awesomeness
  TweenMax.to( gear2, 3.5, { 
    rotation: -360,
    repeat: -1, 
    transformOrigin:"50% 50%",
    ease:Power0.easeNone 
  })
}());