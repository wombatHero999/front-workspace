/* 
   
*/

function User(name) {
    this.name = name;
    setTimeout(() => {
        console.log("Hello, " + this.name);
    }, 1000);
}

new User("찰스"); // "Hello, undefined"

// global의 this속성에 값 추가
this.tag = "Error";

function print() {
  console.log(this); 
}
const obj = { tag: "OK" };

const boundPrint = print.bind(obj);

print(); 
boundPrint(); 