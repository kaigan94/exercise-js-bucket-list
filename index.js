const list = document.querySelector(".list");

// #1.
const p = document.createElement("p");
p.innerText = "Travel to Hobbiton, New Zeeland";
list.appendChild(p);

// #2.
const p2 = document.createElement("p");
p2.innerText = "Become a master in JavaScript";
list.insertAdjacentElement("beforeend", p2);

// #3.
const innerHTMLOfList = list.innerHTML;
console.log(innerHTMLOfList);

// #4/#5.
const p3 = `<p>Land a good tech job</p>`;
// list.innerHTML = p3;

// #6.
list.insertAdjacentHTML("beforeend", p3);

// #7.
const bucketListItems = [
  "Cover most of myself with tattoos",
  "Learn barista skills",
  "Learn C++",
];

// Alt 1 - Create a p tag for each element and then use it forEach
// bucketListItems.forEach((item) => {
//     const p = document.createElement("p");
//     p.innerText = item;
//   list.insertAdjacentElement("beforeend", p);
// });

// Alt 2 - Map the array to contain html strings and then use a forEach to insert (preferred method. array methods is the way to go in JS)
bucketListItemsAsHTML = bucketListItems
  .map((item) => `<p>${item}</p>`)
  .forEach((item) => {
    list.insertAdjacentHTML("beforeend", item);
  });

// #8.
const numberOfChildren = list.children;
console.log(numberOfChildren.length);

// #9.
const owner = document.querySelector(".owner");
owner.innerText = "Nicholas'";

// #10.
const p4 = document.createElement("p");
p4.innerText = "Get a job in game development";
list.replaceChild(p4, list.firstElementChild);

// #11.
// Create a variable from children HTML collections and use replaceChild
const children = list.children;
const item2 = children[2];

const becomeMasterInCoding = document.createElement("p");
becomeMasterInCoding.innerText = "Become a master in coding";

list.replaceChild(becomeMasterInCoding, item2);

// #12.
list.removeChild(list.lastElementChild);
