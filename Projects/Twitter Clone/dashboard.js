/* 
let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
div.append(p);
div.prepend(span);

console.log(div.childNodes); 
for posting fn 



*/
//window onload-> create fn to grab location
//store coordinates in variables or object
//use local storage for persistent data across files

//DESKTOP 

//center

/*
1) create fn to accept value from the post event 4 input field  
2) store the value in a variable 
3a) create object contructor that will take in
user name, icons, and profile pic, ID # ,and method to get the 
current date and time. 
3b) create div element
3c) div setAttribute('class', 'compPost' ), 
3d) div innerHTML :
<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement"><h4>Fake User</h4> <i class="bi bi-hand-thumbs-up"></i><i class="bi bi-hand-thumbs-down"></i><i class="bi bi-person-plus"></i><i class="bi bi-flag"></i></span><p3>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p3></span>
3e) create event listeners for icons and alerts when theyre clicked 
4) create new instance of the object, attach edit and delete buttons
5) prepend to the body
6) include ID# in posts variable to update posts# in sync with 
firebase 
7) save posts



- create randomizer fn (math.floor(math.random() * arr.len) to 
select random index in both arrays
- add values to name field on posts

*/


//- create firstname and last name array







let postBox = document.getElementById('postBox');
let postBody = document.getElementById('postBody');
let alerts = document.getElementById('alerts');


let counter = 0;
let compCount = 0;

let firstName = ["Mike", "Tom", "Harry", "Pamela", "Alice", "Julie"];
let lastName = ["Green", "Thompson", "Jacobs", "Harris", "Ford", "Matthews"];



//computer post
const compPost = () => {
    let randOne = firstName[Math.floor(Math.random()* firstName.length)]
    let randTwo = lastName[Math.floor(Math.random()* lastName.length)]
    let botDiv = document.createElement('div');
    botDiv.setAttribute('class', 'compPost');
    let date = new Date().toLocaleDateString() + " " +  new Date().toLocaleTimeString()
    botDiv.innerHTML = `<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement"><h4>${"@"+randOne + randTwo}</h4><i class="bi bi-hand-thumbs-up"></i><i class="bi bi-hand-thumbs-down"></i><i class="bi bi-person-plus"></i><i class="bi bi-flag"></i><p3>${date}</p3></span><p3>Computer post</p3></span>`
    postBody.prepend(botDiv);
    compCount++;
    alerts.innerHTML = compCount;
}


setInterval(()=>{
compPost();
}, 20000);






//Human post
const createPost = (name, value) => {
let newPost = document.createElement('div');

newPost.setAttribute('class', 'compPost');

//add onclick attr
let time = new Date().toLocaleDateString() + " " +  new Date().toLocaleTimeString()
newPost.innerHTML = `<img width="40px" height="40px" style="margin-bottom: 2vh;" src="./icons8-name-50.png"/><span class="topDown"><span class="engagement"><h4>${name}</h4> <i class="bi bi-pencil-square"></i><i class="bi bi-x-square-fill"></i><p3>${time}</p3></span><p3>${value}</p3></span>`
newPost.setAttribute('id', `post${counter}`)
postBody.prepend(newPost);

}


postBox.addEventListener('submit', (e)=>{
    e.preventDefault();
    let val = e.path[0][0].value;
    createPost('mike', val)
    counter++;
})


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
5) setTimeout function to run every 20 secs 
*/









//MOBILE

/* 





*/



