//
// Object destructuring
//

/*
const person = {
  name: 'Matt',
  age: '27',
  location: {
    city: 'Nashua',
    temp: 27
  }
};

const { name = 'Anonymous', age, location: { city, temp } } = person;


console.log(`${name} is ${age}.`);


if (city && temp) {
  console.log(`It's ${temp} in ${city}`);
}*/


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { publisher: { name: publisherName = 'Self Published' } } = book;

console.log(publisherName);

//
// Array destructuring
//


const address = ['1200 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ , city, state = 'New York' ] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ name, , price] = item;

console.log(`A medium ${name} costs ${price}`);