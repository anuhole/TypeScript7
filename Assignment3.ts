class Movie{
    private _movieId: number;
    private _movieName: string;
    private _producedBy: string;
    private _directedBy: string;
    private _duration: string;
    private _year: number;
    private _category: string;

    constructor(id:number,name:string,producedBy:string,directedby:string,duration:string,year:number,category:string){
        this._movieId=id;
        this._movieName=name;
        this._producedBy=producedBy;
        this._directedBy=directedby;
        this._duration=duration;
        this._year=year;
        this._category=category
    }
    
    get movieId():number{
        return this._movieId;
    }

    set movieId(id:number){
        this._movieId=id;
    }
    get movieName():string{
        return this._movieName;
    }
    set movieName(name:string){
        this._movieName=name;
    }   
    get producedBy():string{    
        return this._producedBy;
    }
    set producedBy(producedBy:string){
        this._producedBy=producedBy;
    }
    get directedBy():string{
        return this._directedBy;
    }   
    set directedBy(directedBy:string){
        this._directedBy=directedBy;
    }   
    get duration():string{
        return this._duration;
    }   
    set duration(duration:string){      
        this._duration=duration;
    }
    get year():number{  
        return this._year;
    }
    set year(year:number){
        this._year=year;
    }

    get category():string{
        return this._category;
    }
    set category(category:string){
        this._category=category;
    }

    showDetails(){
        console.log(`Movie Id: ${this._movieId}, Movie Name: ${this._movieName}, Produced By: ${this._producedBy}, Directed By: ${this._directedBy}, Duration: ${this._duration}, Year: ${this._year}, Category: ${this._category}`);
    }
}

class SpecialMovie extends Movie{
    private _soundEffects: string;
    private _visualEffects: string;

    constructor(id:number,name:string,producedBy:string,directedby:string,duration:string,year:number,category:string,soundEffects:string,visualEffects:string){
        super(id,name,producedBy,directedby,duration,year,category);
        this._soundEffects=soundEffects;
        this._visualEffects=visualEffects;
    }
   
    get soundEffects():string{
        return this.soundEffects;
    }
    set soundEffects(soundEffects:string){
        this._soundEffects=soundEffects;
    }   
    get visualEffects():string{
        return this._visualEffects;
    }
    set visualEffects(visualEffects:string){
        this._visualEffects=visualEffects;
    }
        override showDetails(){
        super.showDetails();
        console.log(`Sound Effects: ${this._soundEffects}, Visual Effects: ${this._visualEffects}`);
    }  
  
}

class InternationalMovie extends Movie{
    private _language: string;
    private _country: string;

    constructor(id:number,name:string,producedBy:string,directedby:string,duration:string,year:number,category:string,language:string,country:string){
        super(id,name,producedBy,directedby,duration,year,category);
        this._language=language;
        this._country=country;
    }

    get language():string{
        return this._language;
    }   
    set language(language:string){
        this._language=language;
    }
    get country():string{
        return this._country;
    }   
    set country(country:string){
        this._country=country;
    }
    override showDetails(){
        super.showDetails();
        console.log(`Language: ${this._language}, Country: ${this._country}`);
    }   


}

const movie1:Movie=new Movie(1,"Inception","Emma Thomas","Christopher Nolan","2h 28m",2010,"Sci-Fi");
const specialMovie1:SpecialMovie=new SpecialMovie(2,"Avatar","James Cameron","James Cameron","2h 42m",2009,"Action","Dolby Atmos","CGI");
const internationalMovie1:InternationalMovie=new InternationalMovie(3,"Parasite","Kwak Sin-ae","Bong Joon-ho","2h 12m",2019,"Thriller","Korean","South Korea"); 

console.log("Movie Details:");
movie1.showDetails();

console.log("\nSpecial Movie Details:");    
specialMovie1.showDetails();

console.log("\nInternational Movie Details:");
internationalMovie1.showDetails();
