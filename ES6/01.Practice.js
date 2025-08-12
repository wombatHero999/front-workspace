// Q1.배열에서 첫 번째, 두 번째 요소를 각각 변수 a, b에 저장하세요.
//    나머지 값들은 rest에 저장하세요.
const nums = [10, 20, 30, 40];

const [a , b , ...rest] = nums;

console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30,40]

// Q2. user 객체에서 id, age 값을 꺼내어 변수로 저장하고 출력하세요.
//      그 외 나머지 값은 otherInfo에 할당하세요.
const user = {
    id: '수달',
    age: 4,
    job: '개발자',
    favorite: '물장난',
    location: '강가'
};

const {id, age, ...otherInfo} = user; // id, age, otherInfo변수 선언 및 초기화
console.log(id); // '수달'
console.log(age); // 4
console.log(otherInfo); // { job: '개발자', favorite: '물장난', location: '강가' }

// Q3. user 객체를 인자로 받아 이름과 나이를 출력하는 함수를 작성하세요.
function printUser({name, age}) {
    console.log(`이름: ${name}, 나이: ${age}`);// 여기는 수정하지 말것.
}

printUser({ name: "mkm", age: 25 });

// Q4. 아래 객체배열의 두 번째 상품의 이름과 가격을 각각 name2, price2에 저장하세요.
// - 구조분해할당을이용 
const products = [
    { name: "Pen", price: 500 },
    { name2: "Notebook", price2: 1500 }
];
const [first, {name2, price2}] = products;

console.log(name2); // "Notebook"
console.log(price2); // 1500

// Q5. 전달된 모든 숫자의 합계를 구하는 함수 sumAll을 작성하세요.
console.log(sumAll(1, 2, 3, 4)); // 전달한인자 : 4, 총 합 : 10
console.log(sumAll(1, 2, 3, 4, 5 , 6)); // 전달한인자 : 6, 총 합 : 21

function sumAll(...numbers){
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    return `전달한 인자 : ${numbers.length} , 총 합 : ${sum}`; 
}

// Q6. 첫 번째 인자는 name, 나머지는 interests로 모아 출력하는 함수showProfile을 작성하세요.
showProfile("Jane", "coding", "traveling", "music");
// 출력 예시: 이름: Jane / 관심사: ["coding", "traveling", "music"]
function showProfile(name, ...interests){
    console.log(`이름: ${name} / 관심사: `, interests)
}

// Q7. 매개변수로 전달받은 배열의 값을 복사하여 새로운 값을 추가한 배열을 반환하는 함수를 작성하시오
console.log(getNewList([1,2,3])); // [a,1,2,3,b]
console.log(getNewList([1,2,3,4,5])); // [a,1,2,3,4,5,b]

function getNewList(list){
    return ['a', ...list , 'b']
}

// Q8. 매개변수로 전달된 두 객체의 값을 하나의 객체로 병합하여 반환하는 함수를 작성하시오
const userInfo = { name: "Tom", age: 28};
const jobInfo = { job: "engineer", location: "Seoul" };

console.log(getMergeObj(userInfo, jobInfo));
// { name: "Tom", age: 28, job: "engineer", location: "Seoul" }

function getMergeObj(obj1, obj2){
    return {...obj1, ...obj2, age: 30};
}

// Q9. 매개변수로 전달된 배열의 데이터중 가장 큰 값을 반환하는 메서드를 작성하시오 
const numbers1 = [3, 5, 7];
const numbers2 = [13, 55, 71, 12, 99, 64];

console.log(getMaxValue(numbers1)); // 7
console.log(getMaxValue(numbers2)); // 99

function getMaxValue(numbers){
    // Math.max
    return Math.max(...numbers);
}
