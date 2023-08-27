// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
]
module.exports = contacts
const lookUpProfile = (name, prop) => {
  // Only change code below this line

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name && prop in contacts[i]) {
      return contacts[i][prop]
    } else if (contacts[i].firstName === name) {
      return "No such property"
    } else if (i === contacts.length - 1 && contacts[i].firstName != name) {
      return "No such contact"
    }
  }
  // Only change code above this line
}
module.exports = lookUpProfile
// console.log(lookUpProfile("Kristian", "lastName"))
// console.log(lookUpProfile("Sherlock", "likes"))
// console.log(lookUpProfile("Harry", "likes"))
console.log(lookUpProfile("Bob", "number"))
