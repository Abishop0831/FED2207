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




let link = 'https://sitter-1e900-default-rtdb.firebaseio.com/Users.json'

let postUrl = 'https://sitter-posts-default-rtdb.firebaseio.com/Posts.json'



alert(`signed in as ${username}`)


function postDb (user, post) {
    this.username = user;
    this.post = post;
}



const update = async (user, val) => {
    await fetch (postUrl, {
        method: "GET", 
        body: JSON.stringify(),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    }
).then(response => response.json())
.then(data => {
 
  for (const [key, value] of Object.entries(data)) {
    console.log(key, value)
 console.log(value.password)
    if (user === value.username) {

      //post function call here
//find name of object that contains this key val pair
//  const category = Object.entries(book).find(([, e]) => Object.keys(e).includes(section)); 
putRequest(key, val)

            return;
        }
    }
return
})

}





let putRequest = (key, val) => {
    // Sending PUT request with fetch API in javascript
    fetch(`https://sitter-posts-default-rtdb.firebaseio.com/Posts/${key}.json`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PUT",
   
      // Sending only the fields that to be updated
      body: JSON.stringify({      
      
        post: `${val}`
      })
    })
      .then(function (response) {
   
        // Console.log(response);
        return response.json();
      })
      .then( (data)=> {
        console.log(data);
      });
  };
   
  










const post = async (user, post) => {
    await fetch (postUrl, {
        method: "POST", 
     
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },   
        body: JSON.stringify(new postDb(username, post)),
        mode: 'cors',
    }
)

}

//find object value that equals val and delete that obj for
//delete



const del = async (user) => {
    await fetch (postUrl, {
        method: "DELETE", 
     
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },   
        body: JSON.stringify(user),
        mode: 'cors',
    }
)

}








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
let newsBody = document.getElementById('dashRight')
//mobile
let mobPostBody = document.getElementById('mobPostFeed');
let mobPostBox = document.getElementById('userPost');
let mobNewsBod = document.getElementById('mobNewsBod')


let alerts = document.getElementById('alerts');
let mobAlert = document.getElementById('notifyVal');

let counter = 0;
let compCount = 0;



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
 
   
    alerts.innerHTML = compCount;
    compCount++;
   // mobAlert.innerHTML = compCount;
}


setInterval(()=>{
compPost();
}, 30000);


// 



let icnMethds = {

    follow: ()=>{
        alert('Followed');
        //increment following count variable by 1
        // add disable
    },
    report: ()=> alert('Post has been reported'),

    edit: async function() {
        let val = prompt('Update Post')
        //fn to patch obj property vals in DB
        update(username, val)


}

}



/*

get icon
append icon with delete icon
add functionality to get the id of that post
create delete http method fn



*/




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

newPost.innerHTML = `<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement"><h4>${name}</h4><i id="edit" onclick="icnMethds.edit()" class="bi bi-pencil-square"></i><i id="del" class="bi bi-x-square-fill"></i><p3>${time}</p3></span><p spellcheck="false">${value}</p></span>`
newPost.setAttribute('id', `post${counter}`)
postBody.prepend(newPost);
posts++


post(localStorage.getItem('email'), value)

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
    
    newPost.innerHTML = `<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement"><h4>${name}</h4><i id="edit" class="bi bi-pencil-square"></i><i id='mobDel' class="bi bi-x-square-fill"></i><p3>${time}</p3></span><p spellcheck="false">${value}</p></span>`
    newPost.setAttribute('id', `post${counter}`)
    mobPostBody.prepend(newPost);
    posts++
    post(localStorage.getItem('email'), value)
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
    
    mobAlert.innerHTML = compCount;
   // mobAlert.innerHTML = compCount;
   
}   

setInterval(()=>{
mobCompPost();
},8000)

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
 await window.location.assign('loading.html')
 await window.localStorage.setItem('landing', 'landing')
 await alert(`Signed out from ${name}`) 
 //send updated values to firebase
 

  
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


let url = 'https://api.goperigon.com/v1/all?source=nbcnews.com&source=cnbc.com&source=bbc.co.uk&language=en&from=2022-09-11&apiKey=b31f1960-f024-4999-8fcb-056a4bcf7434'



const newsFetch = async ()=> {
 let randomNum = Math.floor(Math.random()*10) 
  await fetch(url)
   .then(response=>response.json())
    .then( async data=>{
        console.log(data.articles)
 let newsDiv = document.createElement('div');
 let url = data.articles[randomNum].url
let title = data.articles[randomNum].title
 let imageUrl = data.articles[randomNum].imageUrl 
let source = data.articles[randomNum].source.domain
 
 newsDiv.setAttribute('class', 'newsPost');
    newsDiv.innerHTML = `<span style="display: flex; gap: 1vw;"><a href="${data.articles[randomNum].url}"><p1>${data.articles[randomNum].title}</p1></a><img width="60px" height="60px" src="${ data.articles[randomNum].imageUrl}"/></span><p4>${data.articles[randomNum].source.domain}</p4>`
    newsBody.appendChild(newsDiv)
    mobAppend(url, title, imageUrl, source)

})

}


setInterval(()=>{
newsFetch();
},20000)






//MOBILE

const mobAppend = async (one,two,three,four) => {
    let newsDiv = document.createElement('div');
    newsDiv.setAttribute('class', 'newsPost');
    newsDiv.innerHTML = `<span style="display: flex; gap: 1vw;"><a href="${one}"><p1>${two}</p1></a><img width="60px" height="60px" src="${three}"/></span><p4>${four}</p4>`
    mobNewsBod.appendChild(newsDiv)
}

/* 

  let botDiv = document.createElement('div');
    botDiv.setAttribute('class', 'compPost');
    let date = new Date().toLocaleDateString() + " " +  new Date().toLocaleTimeString()
    botDiv.innerHTML = `<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement" id="iconsDiv"><h4>${"@"+randOne + randTwo + randNum}</h4><span style="display: flex; flex-direction: row; gap: .5vw;  " id="mobActions"><i id="like${compCount}" class="bi bi-hand-thumbs-up"></i><i id="dislike${compCount}" class="bi bi-hand-thumbs-down"></i></span><i onclick="icnMethds.follow()" id="follow${compCount}" class="bi bi-person-plus"></i><i onclick="icnMethds.report()" id="report${compCount}" class="bi bi-flag"></i><p3>${date}</p3></span><p3>Computer post</p3></span>`
    mobPostBody.prepend(botDiv);
    let icons = document.getElementById('mobActions');




*/



