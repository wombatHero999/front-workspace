/* 
    1. Destructuring(비구조화) 문법
     - 객체나 배열의 내부 구조를 분해하여 각각의 값을 변수에
       쉽게 할당하는 문법
     - 주로 변수 선언시 많이 사용되며, 함수의 매개변수에서도 사용
*/
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr.length;

// 배열 비구조화 문법
// 배열의 인덱스 순서에 맞게 변수를 준비해두면, 각 배열에 담긴
// 값이 순서에 맞춰서 저장.
const [d,e,f] = arr;
console.log(d, e, f);

// 객체 비구조화 문법
const obj = {
    foo : 1, bao : 2
};
//const foo = obj.foo;
//const bao = obj["bao"];
// 객체의 속성명과 동일한 변수에 객체의 속성값을 할당
const {bao ="z", option = ""} = obj;
console.log(bao , option); // option에는 undefiend

// 2. Spread Operator
// - 배열이나 객체에 담겨있는 값들을 꺼내어 전개해주는 연산자
// - 배열 및 객체에 값을 대입하는 경우, 함수 호출시 자주 사용
const arr2 = [1,2,3,4];
console.log(...arr2); // ... 전개연산자

// spread연산자를 활용한 배열/객체 복사
const copy_arr = [0, ...arr2, 5]; // [1,2,3,4]
console.log(copy_arr);


// 객체 전개
const person = {name: 'mkm', job : 'teacher'};
const mkm = {...person , location:'seoul'};
console.log(mkm);

// 3. Rest Parameter
// - 함수 선언 및 비구조화문법에서 나머지 값들을 하나로 모아주는 역할
function testRest(first, ...rest){
    console.log(first);
    console.log(rest);
}

testRest('m','k','m',1,2,3,4);
testRest(...arr2);

// 비구조화 할당과, Rest Paramter
function testRest2({name, age, ...rest}){
    console.log(name, age, rest);
}
const person2 = {name : 'mkm', age:25, hobby:['game','movie'], location:'seoul'};
testRest2(person2);

// 배열 비구조화 할당과 Rest Parameter
const array3 = [1,2,3,4];
const [first, ...rest] = array3;

const {age, ...rest2} = person2;
console.log(age, rest2);


