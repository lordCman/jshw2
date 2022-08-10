
// number 1
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
const getFood=(obj)=>{
    return Object.entries(obj)
}
console.log(getFood(person3))


// number 2

function Person (name1,age,birthday) {
    this.name = name1
    this.age = age
    this.birthday = birthday



    this.printInfo = function(){
        return(`this is ${name1}, and he is ${age} years old`)
        
    }

    this.birthdayYear = function(){
        if (this.birthday==true){
            return (this.age ++, "happy bday")
        }
        else{
            return "bday coming soon"
        }
    }
};
const p1 = new Person('Charlie', 21, true)
const p2 = new Person('Carlos', 19, false)
console.log(p1.printInfo())
console.log(p1.birthdayYear())
console.log(p1.birthdayYear())
console.log(p1.birthdayYear())
console.log(p1.age)

// number 3

const isLong = (string1) => {
    return new Promise((resolve, reject) => {
        if (string1.length > 10){
            resolve('Big Word')
        }
        else {
            reject('Small World')
        }
    })
}

console.log(isLong('Hellofdsfsefefes'))



// code wars 1 

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.


function switchItUp(number){
    switch(number) {
      case 0:
        return 'Zero';
      case 1:
        return 'One';
      case 2:
        return 'Two';
      case 3:
        return 'Three';
      case 4:
        return  'Four';
      case 5:
        return 'Five';
      case 6:
        return 'Six';
      case 7:
        return 'Seven';
      case 8:
        return 'Eight';
      case 9:
        return 'Nine';
    }
  }
console.log(switchItUp(3))

//  code wars 2

// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help 
// pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th 
// column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box
//  of cubes might look like before and after switching gravity.


const flip=(d, a)=>{
    if(d === 'R') return a.sort((a,b)=>a-b);
    if(d === 'L') return a.sort((a,b)=>b-a);
  }

console.log(flip('L', [2,6,2,42,3]))