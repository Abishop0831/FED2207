let username = window.localStorage.getItem('username');
let posts = Number(window.localStorage.getItem('posts'))
let followers = window.localStorage.getItem('followers')
let following = Number(window.localStorage.getItem('following'))
//Desktop Divs
let userDiv = document.getElementById('username')
let postDiv = document.getElementById('posts')
let followerDiv = document.getElementById('followers') 
let followingDiv = document.getElementById('following')
// Mobile Divs
let mobUsername = document.getElementById('mobUsername');
let mobPosts = document.getElementById('mobPosts');
let mobFollowers = document.getElementById('mobFollowers');
let mobFollowing = document.getElementById('mobFollowing');


const loggedIn = ((username, posts, followers, following) => {
//DESKTOP 
userDiv.innerText = username;
postDiv.innerText = posts;
followerDiv.innerText = followers;
followingDiv.innerText = following;
//Mobile
mobUsername.innerText = username;
mobPosts.innerText = posts;
mobFollowers.innerText =followers;
mobFollowing.innerText =following;

})
loggedIn(username, posts, followers, following)




/* 
next steps... 

icon functionality
logout functionality
news api calls


*/


let postBox = document.getElementById('postBox');
let postBody = document.getElementById('postBody');
//mobile
let mobPostBody = document.getElementById('mobPostFeed');
let mobPostBox = document.getElementById('userPost');



let alerts = document.getElementById('alerts');
let mobAlert = document.getElementById('notifyVal');

let counter = 0;
let compCount = 0;

let followed = 0;

let firstName = ["Mike", "Tom", "Harry", "Pam", "Sam", "Julie"];
let lastName = ["P", "R", "P", "Carr", "F", "W", 'A'];



//Computer post
const compPost = () => {
    let randOne = firstName[Math.floor(Math.random()* firstName.length)]
    let randTwo = lastName[Math.floor(Math.random()* lastName.length)]
    let randNum = Math.floor(Math.random()* 999);
    let botDiv = document.createElement('div');
    botDiv.setAttribute('class', 'compPost');
    let date = new Date().toLocaleDateString() + " " +  new Date().toLocaleTimeString()
    botDiv.innerHTML = `<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement" id="iconsDiv"><h4>${"@"+randOne + randTwo + randNum}</h4><span style="display: flex; flex-direction: row; gap: .5vw;  " id="actions"><i id="like${compCount}" class="bi bi-hand-thumbs-up"></i><i id="dislike${compCount}" class="bi bi-hand-thumbs-down"></i></span><i onclick="icnMethds.follow()" id="follow${compCount}" class="bi bi-person-plus"></i><i onclick="icnMethds.report()" id="report${compCount}" class="bi bi-flag"></i><p3>${date}</p3></span><p3>Computer post</p3></span>`
    postBody.prepend(botDiv);
    //mobPostBody.prepend(botDiv);
    let icons = document.getElementById('actions');

    let actionCount = 0;


   icons.addEventListener('click', (e)=>{
    let id = e.target.getAttribute('id')
    let num =  document.createElement('p5');

if (actionCount === 0) {
    actionCount++;
    console.log(actionCount)
    num.innerHTML = actionCount;
    document.getElementById(id).appendChild(num)
    return
} 

return
})
 
    compCount++;
    alerts.innerHTML = compCount;
   // mobAlert.innerHTML = compCount;
}


setInterval(()=>{
compPost();
}, 20000);


// 



let icnMethds = {

    follow: ()=>{
        alert('Followed');
        //increment following count variable by 1
        // add disable
    },
    report: ()=> alert('Post has been reported'),
}




//Human post
const createPost = (name, value) => {
//exit condition
if (value === "") {
    alert('Unable to create empty posts');
    return
}    

let newPost = document.createElement('div');
newPost.setAttribute('class', 'compPost');


//add onclick attr
let time = new Date().toLocaleDateString() + " " +  new Date().toLocaleTimeString()

newPost.innerHTML = `<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement"><h4>${name}</h4><i id="del" class="bi bi-x-square-fill"></i><p3>${time}</p3></span><p spellcheck="false"  contenteditable="true">${value}</p></span>`
newPost.setAttribute('id', `post${counter}`)
postBody.prepend(newPost);
posts++

let del = document.getElementById('del');
del.addEventListener('click', (e)=>{

    e.preventDefault();
    let el = e.target.parentNode;
    let relative = el.parentNode; 
    let oldest = relative.parentNode;
    let id = oldest.id;
    let removal = document.getElementById(id);
    console.log(removal)
    let confirm = window.confirm('Are you sure you want to delete?');
    if (confirm) {
         removal.remove();
         posts--
         postDiv.innerText = posts;
         window.localStorage.setItem('posts', posts)
    return
}
   return

})

postDiv.innerText = posts
window.localStorage.setItem('posts', posts);
//send posts value to firebase

}

let createMobPost = (name, value)=>{
    if (value === "") {
        alert('Unable to create empty posts');
        return
    }    
    
    let newPost = document.createElement('div');
    newPost.setAttribute('class', 'compPost');
    
    
    //add onclick attr
    let time = new Date().toLocaleDateString() + " " +  new Date().toLocaleTimeString()
    
    newPost.innerHTML = `<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement"><h4>${name}</h4><i id='mobDel' class="bi bi-x-square-fill"></i><p3>${time}</p3></span><p spellcheck="false"  contenteditable="true">${value}</p></span>`
    newPost.setAttribute('id', `post${counter}`)
    mobPostBody.prepend(newPost);
    posts++
    let del = document.getElementById('mobDel');
    del.addEventListener('click', (e)=>{
    
        e.preventDefault();
        let el = e.target.parentNode;
        let relative = el.parentNode; 
        let oldest = relative.parentNode;
        let id = oldest.id;
        let removal = document.getElementById(id);
        console.log(removal)
        let confirm = window.confirm('Are you sure you want to delete?');
        if (confirm) {
             removal.remove();
             posts--
             mobPosts.innerText = posts;
             window.localStorage.setItem('posts', posts)
        return
    }
       return
    
    })

    mobPosts.innerText = posts;

    window.localStorage.setItem('posts', posts)
}



let mobCompPost = () => {
    let randOne = firstName[Math.floor(Math.random()* firstName.length)]
    let randTwo = lastName[Math.floor(Math.random()* lastName.length)]
    let randNum = Math.floor(Math.random()* 999);
    let botDiv = document.createElement('div');
    botDiv.setAttribute('class', 'compPost');
    let date = new Date().toLocaleDateString() + " " +  new Date().toLocaleTimeString()
    botDiv.innerHTML = `<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement" id="iconsDiv"><h4>${"@"+randOne + randTwo + randNum}</h4><span style="display: flex; flex-direction: row; gap: .5vw;  " id="mobActions"><i id="like${compCount}" class="bi bi-hand-thumbs-up"></i><i id="dislike${compCount}" class="bi bi-hand-thumbs-down"></i></span><i onclick="icnMethds.follow()" id="follow${compCount}" class="bi bi-person-plus"></i><i onclick="icnMethds.report()" id="report${compCount}" class="bi bi-flag"></i><p3>${date}</p3></span><p3>Computer post</p3></span>`
    mobPostBody.prepend(botDiv);
    let icons = document.getElementById('mobActions');

    let actionCount = 0;


   icons.addEventListener('click', (e)=>{
    let id = e.target.getAttribute('id')
    let num =  document.createElement('p5');

if (actionCount === 0) {
    actionCount++;
    console.log(actionCount)
    num.innerHTML = actionCount;
    document.getElementById(id).appendChild(num)
    return
} 

return
})
    compCount++;
    mobAlert.innerHTML = compCount;
   // mobAlert.innerHTML = compCount;
}

setInterval(()=>{
mobCompPost();
},20000)

mobPostBox.addEventListener('submit', (e)=>{
    e.preventDefault();
    let val = e.path[0][0].value;
    createMobPost(`${username}`, val)
   console.log(posts);
    counter++;
})

    
postBox.addEventListener('submit', (e)=>{
    e.preventDefault();
    let val = e.path[0][0].value;
    createPost(`${username}`, val)
   console.log(posts);
    counter++;
})


let logoutDiv = document.getElementById('logOut');
let mobLogoutDiv = document.getElementById('mobLogout')


logoutDiv.addEventListener('click', ()=>{
logOut(username);
})

mobLogoutDiv.addEventListener('click', ()=> {
    logOut(username)
})


const logOut = async (name) => {
  
  
  let confirm =  window.confirm('Are you sure?');
  
if (confirm) {
 await window.location.assign('index.html')
 await alert(`Signed out from ${name}`) 
 //send updated values to firebase
 
 
 window.localStorage.clear();
  
}

  return;
}
//left

/* 
1) For notifications button, get the span id and update the value 
according to posts appended to center body
2) get id of "posts" value and update it with an iterating variable
3) do the same for followers and following and profile photo
6) create button for log out 
7) logout fn: window.confirm. localStorage.clear().
redirect to sign in page
*/

//right
/*
1) create async function to fetch news api
2) store data in an object
3) create object constructor for news api box instances
with id, date, time, and value args
4) update innerhtml of value
5) setInterval function to run every 20 secs 
*/

const newsFetch = async ()=> {
    await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-08-09&sortBy=publishedAt&apiKey=API_KEY')
    .then(()=>{

    })
}








//MOBILE

/* 





*/



