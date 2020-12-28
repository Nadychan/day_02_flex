//EvenListener
//load
//click
//keydown , keyup
//mouseEnter , mouseOut


window.addEventListener('load',function() {
    let getTag = document.getElementsByTagName('h2') //select tag name
    console.log(getTag , "Collection Tag")

    let getId = document.getElementById('test-id');
    console.log(getId , "Collection ID") //select ID

    let getClass = document.getElementsByClassName('test-class');
    console.log(getClass , "Collection Class") //select class name

    let querySelector = document.querySelector('h2');
    console.log(querySelector , "Collection of query selector tag") //select one tag
    
    let getquerySeclectorAll = document.querySelectorAll('h2');
    console.log(getquerySeclectorAll , "Collection of query selector all tag") //select all tag
})

window.addEventListener('click' , function () {
    let elementBtn = document.getElementById('btn');
    alert("clicked through function ")
})

// window.addEventListener('click', {
//     handleEvent: function () {
//       let elementBtn = document.getElementById('btn')
//       alert('Element clicked through handleEvent property!');
//     }
//   });