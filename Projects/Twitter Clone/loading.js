window.addEventListener('load', ()=>{

    
if (window.localStorage.getItem('login') === 'login') {
   setTimeout(async ()=>{
window.location.assign('login.html')
window.localStorage.removeItem('login')  
},5000) 

}    

if (window.localStorage.getItem('signUp') === 'signUp') {
    setTimeout(async ()=>{
        window.location.assign('signup.html')
        window.localStorage.removeItem('signUp')  
        },5000) 



}    

if (window.localStorage.getItem('landing') === 'landing') {
    setTimeout(async ()=>{
        window.location.assign('index.html')
        window.localStorage.removeItem('landing')  
        },5000) 


}    


if (window.localStorage.getItem('dashboard') === 'dashboard') {
    setTimeout(async ()=>{
        window.location.assign('dashboard.html')
        window.localStorage.removeItem('dashboard')  
        },5000) 


}   



})