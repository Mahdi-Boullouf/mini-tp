let loginTries = 0 ;
  const   usersTable = "myUsers";
    function signup(username,email,password){
  
        
            var newUser = {username:username, email:email,password:password}
            if(typeof localStorage.myUsers== "undefined"){
                localStorage.setItem(usersTable,JSON.stringify([newUser]));
        
            }else{
                var usersList = JSON.parse(localStorage.getItem(usersTable))
                usersList.push(newUser)
               
                localStorage.setItem(usersTable,JSON.stringify(usersList));
            }
        
            
            
        }
        
         function login(email,password) {
        
        
            loginTries++;
            
            if(loginTries == 2){
                alert("you cannot log in");
            }
            var usersList = JSON.parse(localStorage.getItem(usersTable))
            for(const user in usersList ){
                if(user.email == email && user.password== password){
        window.location.pathname = "/view/home.html";
                }
            }
            alert("password incorrect");
        }




