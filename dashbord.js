const gotologinpage =document.getElementById('main-page-login-btn');
const addbtn =document.getElementById('Institude-name-btn')
let titleinput = document.querySelector('.input-div')
let titleName = document.getElementById('title-name')
let titlemainbox = document.getElementsByClassName('div-t-box')

titleName.classList.add('hide')

gotologinpage.addEventListener('click',()=>{
    window.location.href ='/pages/signin/signin.html'
    
})
addbtn.addEventListener('click',()=>{
let InstitdueName=document.getElementById('ins-name');
titleinput.classList.add('hide')
titleName.classList.remove('hide')

titleName.innerHTML = InstitdueName.value
console.log(123);


})