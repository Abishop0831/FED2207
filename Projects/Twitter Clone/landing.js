//grab element vals
let signUpPc = document.getElementById('signUp')
let signInPc = document.getElementById('signIn')

let signUpMob = document.getElementById('mobSignUp')
let signInMob = document.getElementById('mobSignIn')









window.localStorage.clear();

//routes
signInPc.addEventListener('click', async ()=>{
window.location.assign('loading.html')
window.localStorage.setItem('login', 'login')
})

//if getItem('login') !== null {
// window.location.assign(login.html)}

//for login and sign up and index.html

/*
1) login/signup click will create local storage 
item titled respectively. 
2) load even listener for loading.js
3) set timeout 

*/
    //after lazy load 


signUpPc.addEventListener('click', ()=>{
window.location.assign('loading.html') 
window.localStorage.setItem('signUp', 'signUp')
})



signInMob.addEventListener('click', ()=>{
window.location.assign('loading.html')
window.localStorage.setItem('login', 'login')
})



signUpMob.addEventListener('click', ()=>{
    window.location.assign('loading.html')
    window.localStorage.setItem('signUp', 'signUp')
})
