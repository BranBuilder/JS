// Lecture variables
/*

var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);

*/

/*



/////////////////////////////////////////////////////
//Lecture Variables 2

var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a '+ age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a '+ age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('what is the last name?');
console.log(lastName);

alert(name + ' is a '+ age + ' years old ' + job + '. Is he married? ' + isMarried + '.')

*/



//////////////////////////////////////////
//Lecture 3: Operators

/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964 

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);

*/



////////////////////////////////////////
// Lecture 4 : If Else statements

/*

var name =  'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes')
{
    console.log(name + ' is married!');
}
else
{
    console.log(name + ' will hopefully marry soon :)');
}


isMarried = true;


if(isMarried)
{
    console.log('YES!');
}
else
{
    console.log('NO!');
}


if(isMarried)
{
    console.log('YES!');
}

if (23 == "23")
{
    console.log('Somethig to print..');
}

if (23 === "23")
{
    console.log('Somethig to print..');
}

*/

///////////////////////////////////
// Lecture : boolean logic and switch
/*
var age = 25;

if(age < 20)
{
    console.log('John is a teenager');
}
else if(age > 20 && age < 30)
{
    console.log('John is a young man.')
}
else
{
    console.log('John is a man.');
}


var job = 'teacher';
job = prompt('What does john do?');

switch(job)
{
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.')
        break;
    case 'cop':
        console.log('John helps fight crime.')
        break;
    default:
        console.log('John whatever')
        break;
}

*/

///////// CODING CHALLENAGE 1/////

var ageJohn = 30;
var ageMark = 30;
var ageDavid = 27;

var heightJohn = 165;
var heightMark = 165;
var heightDavid = 165;

var winner = 'no One';

var johnScore = (heightJohn + 5 * ageJohn);
console.log('John has a score of ' + johnScore);

var markScore = (heightMark + 5 * ageMark);
console.log('Mark has a score of ' + markScore);

var davidScore = (heightDavid + 5 * ageDavid);
console.log('David has a score of ' + davidScore);




if (johnScore > markScore  && johnScore > davidScore)
{
    console.log('John is the winner' + johnScore);
}
if (markScore > johnScore  && markScore > davidScore)
{
    console.log('Mark is the winner' + markScore);
}
if (davidScore > johnScore  && davidScore > davidScore)
{
    console.log('David is the winner' + davidScore);
}
if (johnScore === markScore === davidScore)
{
    console.log('John, Mark and David have the same score of ' + johnScore);
}
