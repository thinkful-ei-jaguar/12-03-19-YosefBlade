'use strict';

const collection = [
  {name: 'Emily', jobTitle: 'Chemist', boss: 'Fred'},
  {name: 'Dustin', jobTitle: 'Security guard'},
  {name: 'Jim', jobTitle: 'Restaurant manager', boss: 'some crazy guy'},
  {name: 'Bruce', jobTitle: 'Biochemist', boss: 'Angela'}
];

for (let i = 0; i < collection.length; i++) {
  if (collection[i].boss) {
    console.log(`${collection[i].jobTitle} ${collection[i].name} reports to ${collection[i].boss}.`);
  } else {
    console.log(`${collection[i].jobTitle} ${collection[i].name} doesn't report to anybody.`);
  }
}