class Project{
    constructor(private _title:string,private _team:string,
        private _likes?:number,private _dislikes?:number){
    }
    get title(){
        return this._title;

    }
    get team(){
        return this._team;
    }
    



}