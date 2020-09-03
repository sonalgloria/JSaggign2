//Dog -> name, breed, age
const dog={
    dogName:"Tommy",
    breed:"German Shepherd",
    age:3,
    color:["black","brown"]
}
console.log(dog);
console.log(dog.breed);
console.log(dog.color[1]);
console.table(dog);


const students = [
    {
        name:"Adle",
        regNo:191901,
        course:["Physics","Computer Science","Maths"]
    },
    {
        name:"Adriel",
        regNo:191902,
        course:["Physics","Statistics","Maths"]
    },
    {
        name:"Caren",
        regNo:191903,
        course:["Electronics","Computer Science","Maths"]   
    },
    {
        name:"Lenora",
        regNo:191904,
        course:["Physics","Chemistry","Maths"]
    },
    {
        name:"Lenon",
        regNo:191905,
        course:["Physics","Computer Science","Animation"]
    },
    {
        name:"Laren",
        regNo:191906,
        course:["Statistics","Computer Science","Maths"]
    }
]

console.log(students);
console.table(students);
console.log(students[2]);


var displayBtn = document.getElementById("display");
var displayText = document.getElementById("displaytext");
var displayText1 = document.getElementById("displaytext1");

displayBtn.addEventListener('click',function(){

    displayText.innerText = "\n\n Dog \n Name : "+ dog.dogName + "\n Breed : " + dog.breed + "\n Age : " +dog.age+ "\n Color : " +dog.color[0]+","+dog.color[1];


    displayText1.innerText = "\n\n Students \n Name : "+ students[0].name + "\n Regno : " + students[0].regNo + "\n Subjects : " + students[0].course[0]+"," + students[0].course[1] + ","+ students[0].course[2];

})



const displayText2 = document.getElementById("displaytext2");


for(var i=0; i<students.length; i++){ 
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card','mt-3');
    const nameElem = document.createElement('h6');
    const regNo = document.createElement('h6');

    nameElem.innerText = students[i].name;
    regNo.innerText = students[i].regNo;

    mainDiv.appendChild(nameElem);
    mainDiv.appendChild(regNo);
    displayText2.appendChild(mainDiv);

    const course = students[i].course;
    const ulElem = document.createElement('ul');
    for(var j=0; j<course.length; j++){
        const liElem = document.createElement('li');
        liElem.innerText = course[j];
        ulElem.appendChild(liElem);
    }
    mainDiv.appendChild(ulElem);
}