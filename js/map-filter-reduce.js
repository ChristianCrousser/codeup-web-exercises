const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let atLeastThree = users.filter((user) => user.languages.length >= 3);

console.log(atLeastThree);

let emails = users.map(user => user.email);

console.log(emails);

let totalYearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

let averageExp = totalYearsOfExperience / users.length;

console.log(totalYearsOfExperience);
console.log(averageExp);

let longestEmail = emails.reduce((longest, email) => {
    if (email.length > longest.length) {
        return email;
    } else {
        return longest;
    }
}, "");

longestEmail.log();

let instructors = users.reduce((str, user) => {
    return `${str}${user.name}, `
},  "Your instructors are: david sophie, vivan, trant, ");

console.log(instructors);

let listOfLanguages = Array.from(users.reduce((accumulator, user) => {
    user.languages.forEach(language => accumulator.add(language));
    return accumulator;
}, Set()));

console.log(listOfLanguages);