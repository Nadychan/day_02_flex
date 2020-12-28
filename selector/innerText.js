let h2 = document.querySelectorAll('h2')
console.log(h2)//h2=[h2,h2]

//Overwrite (Assign) Text by using innerText
h2[0].innerText= "Noti :"

//Edit (Access) Text by using innerText
let gettext = h2[0].innerText
console.log(gettext)
h2[0].innerText = gettext + 34