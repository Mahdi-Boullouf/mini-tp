class Task{
    id;
    title ;
    deadline ; 
    userId;

    toJson(){
        return {id:this.id,title:this.title,deadline:this.deadline,userId:this.userId};

    }

    toString(){
        return JSON.stringify(this.toJson())
    }


}