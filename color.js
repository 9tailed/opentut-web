var links = {
  setColor:function(color){
    var links = document.querySelectorAll('a');
    var i=0
    while(i<links.length-4){
    links[i].style.color=color;
    i=i+1;
    }
  }
}
var body = {
  setColor:function(color) {
      document.querySelector('body').style.color=color;
  },
  setbackgroundColor:function(color) {
      document.querySelector('body').style.backgroundColor=color;
  }
}
function nightdayHandler(self){
    var target = document.querySelector('body');
    if(self.value==='night'){
      body.setbackgroundColor('black')
      body.setColor('white')
      self.value='day'
      links.setColor('powderblue')
    } else{
      body.setbackgroundColor('white')
      body.setColor('black')
      self.value='night'
      links.setColor('blue')
    }
  }
