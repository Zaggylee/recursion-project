//function to check whether a given year is a leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(1998));

//function that prompts user to enter age to get a ticket
function getTicketPrice() {
  let age = 0;
  let TicketPrice;

  if (age <= 12) {
    TicketPrice = 10;
  } else if (age >= 13 && age <= 17) {
    TicketPrice = 15;
  } else if (age >= 18) {
    TicketPrice = 20;
  } else {
    alert("invalid age");
    return getTicketPrice();
  }
  alert(`your movie ticket price is $${TicketPrice}.`);
}
console.log(getTicketPrice(20));
