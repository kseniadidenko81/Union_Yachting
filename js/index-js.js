var thumbnails = document.getElementById("thumbnails")
var imgs = thumbnails.getElementsByTagName("img")
var main = document.getElementById("main-img")
var counter=0;

for(let i=0;i<imgs.length;i++){
  let img=imgs[i]


  img.addEventListener("click",function(){
    main.src=this.src
  })

<<<<<<< HEAD
}
=======
}
>>>>>>> 02e7d8354cf46d1d32ac3ae0ab6c20e1d6569677
