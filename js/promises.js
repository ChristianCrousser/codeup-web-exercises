"use strict";


// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



function getPush(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token 537260f323362c6193a8f83eb107303081461933'}})
    .then(response => response.json())
    .then(response => response[0].created_at)
}

const filterData = data => data.filter(d => d.type === "PushEvent");

console.log(getPush('ChristianCrousser'));

function getCommits(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token 537260f323362c6193a8f83eb107303081461933'}})
        .then(response => response.json())
        .then(response => console.log(response))
}


console.log(getCommits('ChristianCrousser'));