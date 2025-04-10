/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr2= [
  { id: 4, name: "joh", age: "22", profession: "developer" },
  { id: 5, name: "jac", age: "23", profession: "developer" },
  { id: 6, name: "kare", age: "24", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developer=arr.filter((ele)=>{
    return ele.profession.toLowerCase()=="developer"
  })

  developer.map((ele)=>console.log(ele))
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let dev1= arr.filter((ele)=>{
    return ele.profession.toLowerCase()=="developer"
  })

  dev1.map((ele)=>{console.log(ele)})
}

function addData(arr) {
 
  arr.push({id:5,name:"salman", age: 25, profession:"Intern"})
  console.log(arr)

}

function removeAdmin() {
  //Write your code here, just console.log
  let wihoutAdmin=arr.filter((ele)=>{
    return ele.profession.toLowerCase()!="developer"
  })
  wihoutAdmin.map((ele)=>{
    console.log(ele)
  })
}

function concatenateArray() {
  //Write your code here, just console.log
let con=arr.concat(arr2)
console.log(con)
}
