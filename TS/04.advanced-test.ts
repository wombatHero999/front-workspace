class Person {
    constructor(public name:string , private age:number, 
        private readonly addreses:string){
    }
    introduction(){
        console.log(`안녕 난 ${this.name}이라고해.${this.addreses}에 살고 나이는 ${this.age}야`);
    }
}
const mkm:Person = new Person('mkm',1234,'서울'); 
mkm.introduction(); // 안녕 난 mkm이라고해.서울에 살고 나이는 1234야

// 
abstract class Pet{
    constructor(public kind:string, public name:string){

    }
    abstract info();
}
class Hamster extends Pet{
    constructor(public kind:string,public name:string, public food?:string, ){
        super(kind,name);        
    }
    info(){
        //이 햄스터는 페디그리 햄스터종이며, 이름은 햄찌입니다.
        //주식은 해바라기씨를 먹습니다.
        console.log(`이 햄스터는 ${this.kind}종이며, 이름은 ${this.name}입니다.`);
        this.food && console.log(`주식은 ${this.food}를 먹습니다.`)
    }
}
const hamzzi:Hamster = new Hamster('페디그리 햄스터', '햄찌', '해바라기씨');
hamzzi.info();
//이 햄스터는 페디그리 햄스터종이며, 이름은 햄찌입니다.
//주식은 해바라기씨를 먹습니다.

const podong:Hamster = new Hamster('골든 햄스터', '포동');
podong.info();
//이 햄스터는 골든 햄스터종이며, 이름은 포동입니다.

//type MustLength = {length:number};
function print<T extends {length:number} = {length:0}>(item?: T): void {
    const value:T = item ?? {length : 0} as T;
    console.log(value.length);
}
print("hello"); // 5
print([1, 2, 3]); // 3
print({length : 100}); // 100
print(); // 0
//print(123); // 컴파일에러발생.

export default print;