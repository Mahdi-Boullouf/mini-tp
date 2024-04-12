class Note{
constructor(id,title,body,userId) {
    this.id = id; 
    this.title= title;
    this.body = body;
    this.userId = userId;
}
    toJson(){
        return {id:this.id,title:this.title,body:this.body,userId:this.userId};
    }

    toString(){
        return JSON.stringify(this.toJson())
    }
}
