// 1.
const apply: (a:number ,b:number) => number  = (a,b) => a+b;

// 2.
type PrintType = (name:string, favorite:'돈까스'|'제육'|'치킨') => void;
const print2:PrintType = (name, favorite) => {
    console.log(`안녕하세요 . 제 이름은 ${name}입니다. 제 최애 음식은 ${favorite}입니다,
    하나만 사주세요`);
}

// 3.
let data:string; 
data = racoonInfo('podong' , 10, 'male', true );
console.log(data);//이름 : podong , 무게 : 10 , 성별 : male, 중성화 : true
data = racoonInfo('coco',4, 'female' );
console.log(data);//이름 : coco , 무게 : 4 , 성별 : female

function racoonInfo(name:string, weight:number, gender:string, jh?:boolean) {
    return `이름 : ${name} , 무게 : ${weight} , 성별 : ${gender}`
    + (jh ?`, 중성화 : ${jh}`:'');
}

//4 
const array2:(string|number|number[])[] = ['1',2,3,4,'5',[1,2,3,4,5]];
function sum(array2: (string|number|number[])[]) : number{
    // 매개변수로 들어온 배열을 반복문을 통해 모두 더한 후 더한 값을 반환
    let count = 0;
    for(let num of array2){
        if(typeof num === 'string'){
            count += Number(num);
        }else if(typeof num === 'number'){
            count += num;
        }else if(typeof num === 'object' && Array.isArray(num)){
            count += num.reduce( (prev, curr) => prev+curr);
        }else{
            const check:never = num;
        }
    }
    return count;
}
const total = sum(array2);
console.log(total); // 30



export default total;