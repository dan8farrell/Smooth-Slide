    //<div class = "image-scale translatinator">
    //  <img src="../../imgs/mario-1-1 [www.imagesplitter.net]-0-0.jpeg">
  //  </div>
//
var toAdd = document.createDocumentFragment();
for(var i=0; i < 20; i++){
   var newDiv = document.createElement('div');
   var image = `<div class = "image-scale translatinator">
      <img src="../../imgs/mario-1-1 [www.imagesplitter.net]-0-`+i+`.jpeg">
    </div>`
console.log(image);
   //newDiv.className = 'ansbox';
   //toAdd.appendChild(newDiv);
}