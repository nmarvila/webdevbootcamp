// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
// } else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!");
// }
// console.log(random);


// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log('UGHHH I HATE MONDAYS!');
// } else if (dayOfWeek === 'saturday') {
//     console.log('YAY I LOVE SATURDAYS!');
// } else if (dayOfWeek === 'friday') {
//     console.log('FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!');
// } else {
//     console.log('MEH');
// }


// 0-5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 890;

if (age < 5) {
    console.log("You are a baby. You get in from free!");
} else if (age < 10) {
    console.log("You are a child. You pay $10");
} else if (age < 65) {
    console.log("You are an adult. You pay $20");
} else {
    console.log("You are a senior. You pay $10");
}