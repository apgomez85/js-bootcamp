let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
};

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
};

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//Challenge Area
//Create function - take fahrenheit in - return object with all three

let convertFahrenheitToCelsius = function(temp) {
  let celsius = (temp - 32) * (5 / 9);
  let kelvin = celsius + 273.15;
  return {
    fahrenheit: temp,
    celsius,
    kelvin
  };
};

let conversion = convertFahrenheitToCelsius(68);
console.log(conversion);
