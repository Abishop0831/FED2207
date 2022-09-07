

//mobile
let signUpForm = document.getElementById("mobileForm");



 function User (name, email, username, password) {
 this.name = name;
 this.email = email;
 this.username = username;
 this.password = password;
 this.age = "above 13";   
}


let arr = [];


signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = signUpForm.querySelector('input[name="name"]').value
    let email = signUpForm.querySelector('input[name="email"]').value
    let password = signUpForm.querySelector('input[name="password"]').value
    let username = signUpForm.querySelector('input[name="username"]').value
    arr.push(new User(name, email, username, password))
    console.log(arr);
})



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