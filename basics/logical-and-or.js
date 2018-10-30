let temp = 55;

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice outside.');
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside.');
} else {
  console.log('Eh. Do what you want.');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Offer up vegan dishes only.');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Offer up some vegan dishes.');
} else {
  console.log('Offer up anything on the menu.');
}
