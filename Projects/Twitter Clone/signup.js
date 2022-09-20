let url = 'https://sitter-1e900-default-rtdb.firebaseio.com/Users.json'

const post = async (user) => {
    await fetch (url, {
        method: "POST", 
     
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },   
        body: JSON.stringify(user),
        mode: 'cors',
    }
)

}


const get = async (name, email, password, username) => {
    await fetch (url, {
        method: "GET", 
        body: JSON.stringify(),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    }
).then(response => response.json())
.then( async (data) => {
 let res;
  for (const [key, value] of Object.entries(data)) {
    console.log(key, value)
 console.log(value.password)
    if (email === value.email) {
        alert("An account with this email already exists")
           res = false;   
           return res 
          
        }
        console.log('no account exists')
    } 

    if ( res === false ) {
        alert('An account with this email already exists')  
        return;
    }

    post(new User(name, email, username, password))
    
    return accepted(username)

})

}













//mobile
let signUpForm = document.getElementById("mobileForm");
let deskForm = document.getElementById('desktop');
let counter = 0;
//constructor to create user instance
 function User (name, email, username, password) {
 this.name = name;
 this.email = email;
 this.username = username;
 this.password = password;
 this.age = "above 13";
}




 let accepted = (username) => {
        window.location.assign('loading.html')
        window.localStorage.setItem('username', `${username}`)
        window.localStorage.setItem('dashboard', 'dashboard')
    }





signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = signUpForm.querySelector('input[name="name"]').value
    let email = signUpForm.querySelector('input[name="email"]').value
    let password = signUpForm.querySelector('input[name="password"]').value
    let username = signUpForm.querySelector('input[name="username"]').value
   get(name, email, username, password)
})
    //grab posts count, followers count, and following
    //store them in window when firebase
    
    
   

//let $username = window.localStorage.getItem('username');




//desktop

 deskForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = deskForm.querySelector('input[name="name"]').value
    let email = deskForm.querySelector('input[name="email"]').value
    let password = deskForm.querySelector('input[name="password"]').value
    let username = deskForm.querySelector('input[name="username"]').value
    get(name, email, username, password)
    
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