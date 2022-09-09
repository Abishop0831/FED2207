




//mobile
let signUpForm = document.getElementById("mobileForm");



 function User (name, email, username, password) {
 this.name = name;
 this.email = email;
 this.username = username;
 this.password = password;
 this.age = "above 13";
 this.posts = 0;
 this.followers = 0;
 this.following = 0;   
}






signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = signUpForm.querySelector('input[name="name"]').value
    let email = signUpForm.querySelector('input[name="email"]').value
    let password = signUpForm.querySelector('input[name="password"]').value
    let username = signUpForm.querySelector('input[name="username"]').value
    window.localStorage.setItem('name', `${name}`)
    window.localStorage.setItem('email', `${email}`)
    window.localStorage.setItem('password', `${password}`)
    window.localStorage.setItem('username', `@${username}`) 
    window.localStorage.setItem('posts', 0);
    window.localStorage.setItem('followers', 0)
    window.localStorage.setItem('following', 0)
    accepted(username);

    //grab posts count, followers count, and following
    //store them in window when firebase




})


const accepted = (name) => {
    window.location.assign('dashboard.html')
    alert(`signed in as ${name}`)
}
 










/* 
users = {
name: e.name,
password: e.password,
 email: e.email,
 age:e.age,
 username: e.username, 
}
 
}
*/
 
 // let create = new user(e.target.name, e.target.password,)
  



// Desktop

/* 

WINDOW ONLOAD SPINNER
1) take in values from input fields
2) create new user object containing values
3 create fn to check if username or email already
exists on firebase
4) if username or email exists, alert user
and return
5) if username or email or email doesnt exist, 
store on firebase


*/