$(document).ready(function () {
var items = [
    {
      "image": "img/Optimized-newyork.png",
      "name": "Newyork.png",
      "alt" : "Newyork",
      "id" : "newyork",
      "time" : "41 minutes ago"
    },{
      "image": "img/Optimized-lower-east-side.png",
      "name": "Lower East Side.png",
      "alt" : "Lower East Side",
      "id" : "lower-east-side",
      "time" : "1 hour ago"
    },{
      "image": "img/Optimized-heaven.png",
      "name": "Heaven.png",
      "alt" : "Heaven",
      "id" : "lower-east-side",
      "time" : "1 hour ago"
    },{
      "image": "img/Optimized-august.png",
      "name": "August.png",
      "alt" : "Heaven",
      "id" : "lower-east-side",
      "time" : "2 hours ago"
    },{
      "image": "img/Optimized-stina.png",
      "name": "Stina.png",
      "alt" : "Stina",
      "id" : "lower-east-side",
      "time" : "2 hours ago"
    },{
      "image": "img/Optimized-small-icons.png",
      "name": "Small Icons.psd",
      "alt" : "Small Icons",
      "id" : "small-icons",
      "time" : "3 hours ago"
    },{
      "image": "img/Optimized-mochila-email.png",
      "name": "Mochila Email.psd",
      "alt" : "Mochila Email",
      "id" : "mochila-email",
      "time" : "3 hours ago"
    },{
      "image": "img/Optimized-skyline.png",
      "name": "Skyline.jpg",
      "alt" : "Skyline",
      "id" : "skyline",
      "time" : "3 hours ago"
    },{
      "image": "img/Optimized-bbt.png",
      "name": "BBT.mov",
      "alt" : "BBT",
      "id" : "bbt",
      "time" : "4 hours ago"
    },{
      "image": "img/Optimized-castle.png",
      "name": "Castle.png",
      "alt" : "Castle",
      "id" : "castle",
      "time" : "4 hours ago"
    },{
      "image": "img/Optimized-image1.png",
      "name": "Image1.png",
      "alt" : "Image1",
      "id" : "image1",
      "time" : "4 hours ago"
    },{
      "image": "img/Optimized-image2.png",
      "name": "Image2.png",
      "alt" : "Image2",
      "id" : "image2",
      "time" : "4 hours ago"
    },{
      "image": "img/Optimized-image3.png",
      "name": "Image3.png",
      "alt" : "Image3",
      "id" : "image3",
      "time" : "4 hours ago"
    },{
      "image": "img/Optimized-image4.png",
      "name": "Image4.png",
      "alt" : "Image4",
      "id" : "image4",
      "time" : "5 hours ago"
    },{
      "image": "img/Optimized-image5.png",
      "name": "Image5.png",
      "alt" : "Image5",
      "id" : "image5",
      "time" : "5 hours ago"
    }

  ]
  var html='';
  for (var i = 0; i < items.length; i++) {
  	console.log (items[i].name+items[i].time);
  	html +='<div class="post_1" id="'+items[i].id+'"><img src="'+items[i].image+'" alt="'+items[i].alt+'" class="profile"><div style="margin-top:10px;"><span>'+items[i].name+'</span></div><span class="time">'+items[i].time+'</span></div>';
  }
  $(".post").append(html);
  });
