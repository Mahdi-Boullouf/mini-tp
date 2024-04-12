class User{
    constructor(id,username,email,password){
        this.userId = id;this.username = username;
        this.email = email, this.password = password;this.email = email;
    };
    toJson(){
        return {id:this.userId,username:this.username,email:this.email,password:this.password}
    }
    toString(){
       return JSON.stringify(this.toJson());
    }
}


modules.export = User