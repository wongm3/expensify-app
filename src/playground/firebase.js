// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//
//     console.log(expenses);
//   });

// const expenses = [{
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// }, {
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: moment(0).subtract(4, 'days').valueOf()
// }, {
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: moment(0).add(4, 'days').valueOf()
// }];
//
//
// expenses.forEach((expense) => {
//   database.ref('expenses').push(expense);
// });

// database.ref('notes/-L0uYFPw-uz-_eUkmn6Z').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body:  'React Native, Angular, Python'
// });

// database.ref()
//   .on('value', (snapshot) => {
//     const {
//       name,
//       job: {
//         title,
//         company
//       }
//     } = snapshot.val();
//
//     console.log(`${name} is a ${title} at ${company}`);
//   });

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val();
//
//     console.log(val);
//   }, (error) => {
//     console.log('Error with data fetching', error);
//   });
//
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error fetching data', error)
//   });

// database.ref().set({
//   name: 'Matt Wong',
//   age: 27,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Nashua',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed.', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//   console.log('Data was removed');
//   })
//   .catch((error) => {
//     console.error('Did not remove data.', e);
//   });