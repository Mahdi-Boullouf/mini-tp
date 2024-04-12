let loginTries = 0 ;
if(sessionStorage.getItem("userId")){
    window.location.pathname="../view/home.html"
    
}
document.getElementById('form').addEventListener('submit',(event)=>{
    console.log("prevented");
    event.preventDefault();
    

})
const usersTable = "myUsers";

    
    function signup(){
        var username = document.querySelector("#username").value ; 

        var email = document.querySelector("#email").value ; 
        var password = document.querySelector("#password").value ; 
        if(password.length < 6){
            console.log("Password is too weak");
            return ; 
        }
            var newUser = {id:Date.now(), username:username, email:email,password:password}
            if( localStorage.getItem(usersTable) == null){
                localStorage.setItem(usersTable,JSON.stringify([newUser]));
        
            }else{
                
                var usersList = JSON.parse(localStorage.getItem(usersTable))
                for (const user of usersList) {
                    if(user.email == email){
                        alert("Email already exists");
                        return ; 
                    }

                }

                console.log(usersList)
                usersList.push(newUser)
               
                localStorage.setItem(usersTable,JSON.stringify(usersList));
            }

            alert("You're signed up.")
            window.location.pathname = "../view/login.html"
        
            
            
        }
        
         function login() {
        // console.log(localStorage.getItem(usersTable))
            loginTries++;
            var email = document.querySelector("#email").value ; 
            var password = document.querySelector("#password").value ; 

            if(loginTries > 2){
                alert("you cannot log in");
                window.location = "/";
                return ; 
            }
            var usersList = JSON.parse(localStorage.getItem(usersTable))
            for(const user of usersList ){
                // console.log(user.email);
                if(user.email == email && user.password== password){
                    // console.log("Loged in");
                    sessionStorage.setItem('userId',user.id)
        window.location.pathname = "/view/home.html";
        return ;
                }
            }
            alert("password incorrect");
        }



       function logout(){
            sessionStorage.clear()
            window.location.pathname="/view/login.html";
        }