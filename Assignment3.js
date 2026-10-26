"use strict";
class Movie {
    _movieId;
    _movieName;
    _producedBy;
    _directedBy;
    _duration;
    _year;
    _category;
    constructor(id, name, producedBy, directedby, duration, year, category) {
        this._movieId = id;
        this._movieName = name;
        this._producedBy = producedBy;
        this._directedBy = directedby;
        this._duration = duration;
        this._year = year;
        this._category = category;
    }
    get movieId() {
        return this._movieId;
    }
    set movieId(id) {
        this._movieId = id;
    }
    get movieName() {
        return this._movieName;
    }
    set movieName(name) {
        this._movieName = name;
    }
    get producedBy() {
        return this._producedBy;
    }
    set producedBy(producedBy) {
        this._producedBy = producedBy;
    }
    get directedBy() {
        return this._directedBy;
    }
    set directedBy(directedBy) {
        this._directedBy = directedBy;
    }
    get duration() {
        return this._duration;
    }
    set duration(duration) {
        this._duration = duration;
    }
    get year() {
        return this._year;
    }
    set year(year) {
        this._year = year;
    }
    get category() {
        return this._category;
    }
    set category(category) {
        this._category = category;
    }
    showDetails() {
        console.log(`Movie Id: ${this._movieId}, Movie Name: ${this._movieName}, Produced By: ${this._producedBy}, Directed By: ${this._directedBy}, Duration: ${this._duration}, Year: ${this._year}, Category: ${this._category}`);
    }
}
class SpecialMovie extends Movie {
    _soundEffects;
    _visualEffects;
    constructor(id, name, producedBy, directedby, duration, year, category, soundEffects, visualEffects) {
        super(id, name, producedBy, directedby, duration, year, category);
        this._soundEffects = soundEffects;
        this._visualEffects = visualEffects;
    }
    get soundEffects() {
        return this.soundEffects;
    }
    set soundEffects(soundEffects) {
        this._soundEffects = soundEffects;
    }
    get visualEffects() {
        return this._visualEffects;
    }
    set visualEffects(visualEffects) {
        this._visualEffects = visualEffects;
    }
    showDetails() {
        super.showDetails();
        console.log(`Sound Effects: ${this._soundEffects}, Visual Effects: ${this._visualEffects}`);
    }
}
class InternationalMovie extends Movie {
    _language;
    _country;
    constructor(id, name, producedBy, directedby, duration, year, category, language, country) {
        super(id, name, producedBy, directedby, duration, year, category);
        this._language = language;
        this._country = country;
    }
    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
    }
    get country() {
        return this._country;
    }
    set country(country) {
        this._country = country;
    }
    showDetails() {
        super.showDetails();
        console.log(`Language: ${this._language}, Country: ${this._country}`);
    }
}
const movie1 = new Movie(1, "Inception", "Emma Thomas", "Christopher Nolan", "2h 28m", 2010, "Sci-Fi");
const specialMovie1 = new SpecialMovie(2, "Avatar", "James Cameron", "James Cameron", "2h 42m", 2009, "Action", "Dolby Atmos", "CGI");
const internationalMovie1 = new InternationalMovie(3, "Parasite", "Kwak Sin-ae", "Bong Joon-ho", "2h 12m", 2019, "Thriller", "Korean", "South Korea");
console.log("Movie Details:");
movie1.showDetails();
console.log("\nSpecial Movie Details:");
specialMovie1.showDetails();
console.log("\nInternational Movie Details:");
internationalMovie1.showDetails();
