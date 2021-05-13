
console.log(leaders);

console.log(`There are ${leaders.length} leaders available`);

function displayLeader () {
 const display = document.getElementById("display");

for (let i = 0; i < leaders.length; ++i) {
display.innerHTML +=  `<ul>
 ${leaders[i].officialTitle} 
 ${leaders[i].firstName}
 ${leaders[i].lastName}
<li>Country: ${leaders[i].country}</li>
<li>Date Birth: ${leaders[i].dateAppointed}</li>
</ul>`;
}
}

displayLeader ();