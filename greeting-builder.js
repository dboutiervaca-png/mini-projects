
function formatName(firstName, lastName){
    return firstName + " " + lastName + " " ;
}

function getGreeting(timeOfDay){
   if(timeOfDay=="morning") {
    return "Good morning"+ " ";
   }
    if(timeOfDay=="afternoon") {
    return "Good afternoon" + " ";
   }
    if(timeOfDay=="evening") {
    return "Good evening"+ " ";
   }
}

function createGreeting(firstName, lastName, timeOfDay){
   return getGreeting(timeOfDay) + formatName(firstName, lastName);
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));

