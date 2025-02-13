// creating the business name generator by combining list of adjectives and shop name and another word

let first , second , third;
let rand = Math.random();

if(rand<0.33){
    first = "crazy";
}
else if(rand < 0.66 && rand > 0.33){
    first = "Amazing";
}
else{
    first = "Fire"
}
let rand1 = Math.random();

if(rand1<0.33){
    second = "Engine";
}
else if(rand1 < 0.66 && rand1 > 0.33){
    second = "Foods";
}
else{
    second = "Garments"
}

let rand2 = Math.random();
if(rand2<0.33){
    third = "Bros";
}
else if(rand2 < 0.66 && rand2 > 0.33){
    third = "Limited";
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)
