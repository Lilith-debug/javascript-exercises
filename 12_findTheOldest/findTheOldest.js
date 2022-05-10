const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    for (let person of people) {
        if (!('yearOfDeath' in person)) {
            person.yearOfDeath = currentYear;
        }
    };
    people.sort((last, next) => {
    const lastPerson = last.yearOfDeath - last.yearOfBirth;
    const nextPerson = next.yearOfDeath - next.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
