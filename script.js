
// // n is number of stars required
// @function multiple-box-shadow ($n) 
//   $value: '#{random(2000)}px #{random(2000)}px #FFF'
//   @for $i from 2 through $n
//     $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF'

//   @return unquote($value)

// $shadows-small:  multiple-box-shadow(700)
// $shadows-medium: multiple-box-shadow(200)
// $shadows-big:    multiple-box-shadow(100)

$(document).ready(function(){
  
    function freshDot(){
      this.images = document.createElement("div");
      this.images.classList.add("box");
      this.images.style.top = (window.innerHeight * Math.random()) + 'px';
      this.images.style.left = (window.innerWidth * Math.random()) + 'px';
      this.size = Math.floor(5 * Math.random()) + 3;
      this.images.style.height =  this.size + 'px';
      this.images.style.width = this.size + 'px';
      
      document.body.appendChild(this.images);
    }
    var dot = [];
    for(var i = 0 ; i < 300; i++ ){
      dot.push(new freshDot());
    }
    
  });