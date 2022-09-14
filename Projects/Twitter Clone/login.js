
/*make sure that username and email get sent to 
the same place and handeled the same way*/


//DESKTOP
/*
1) get email/ username input element by Id and 
store value in a variable
2) get password/username input el by ID and 
store value in variable
3) create fn to find (GET) both of these values (.includes()) in firebase 
4) if values dont exist or are incorrect, alert
user. return
5) if info matches, 
localStorage.setItem('Username', `${value}`)
6) redirect to dashboard   
*/

//change local storage items to new vals

//grab posts count, followers count, and following
//store them in window when firebase 


let url = 'https://sitter-1e900-default-rtdb.firebaseio.com/Users.json'



const load = async (email, password) => {
    await fetch (url, {
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
    if (email === value.email && password === value.password) {
        window.localStorage.setItem('username', value.username)   
        accepted(value.username);
            return;
        }
    }
 alert('incorrect login')
})

}




//[Object.keys(data)[0]]

//mobile
let loginMobile = document.getElementById('loginForm')
let loginDesk = document.getElementById('deskForm')





loginMobile.addEventListener('submit', async (e)=> {
    e.preventDefault();
    
    let password = loginMobile.querySelector('input[name="password"]').value;
    let email = loginMobile.querySelector('input[name="email"]').value;
   
    
    load(email, password);

  

  
  
     

  //get username from storage store in var and
  //initiate with val


    
  
    })



const accepted = (name) => {
    window.location.assign('dashboard.html')
    alert(`signed in as ${name}`)  
    
}
 

//desktop



loginDesk.addEventListener("submit", async (e)=>{
  e.preventDefault();
    let password = loginDesk.querySelector('input[name="password"]').value;
    let email = loginDesk.querySelector('input[name="email"]').value;
    
   load(email, password)

  //get username from storage store in var and
  //initiate with val


    
})
  


    
    
