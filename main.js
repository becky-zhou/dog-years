// my age 
var myAge = 24; 

//this value will change later 
var earlyYears = 2; 

earlyYears *=  10.5; 

//since the early 2 years are accounted for, subtract 2 years from my age
laterYears = myAge - 2; 

//later years in dog years 
laterYears *= 4; 

//my age in dog years 
var myAgeInDogYears = earlyYears + laterYears; 

var myName = "BECKY".toLowerCase(); 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
