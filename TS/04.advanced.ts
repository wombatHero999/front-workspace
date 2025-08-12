/* 
    1. Class
     - javascript의 class문법을 보다 확장하여, 좀 더 객체지향적인
       프로그래밍이 가능하도록 만들었다.
     - 접근제한자, 추상클래스, 인터페이스 구현등의 기능을 제공
*/
abstract class Animal{
    abstract bark():void;
}
class Tiger extends Animal{
    //필드
    public name:string;
    protected age:number;
    private location:string;

    // 생성자
    constructor(name:string, age:number, location:string){
        super();
        this.name = name;
        this.age = age;
        this.location = location;
    }

    bark(): void{
        console.log('어흥!');
    }
}
const khTiger = new Tiger('mkm',25, '서울');
khTiger.bark();

// 2. Constructor Parameter Properties
//  - class생성시의 반복되는 코드를 줄일 수 있는 단축문법
class Product {
    //필드 선언 생략, 초기화 코드 생략
    constructor(public id:number,
        protected name:string,
        private price:number,
        readonly brand:string
    ){}

    printInfo(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.price);
        console.log(this.brand);
    }
}
new Product(1, '로봇청소기',700000,'samsung').printInfo();

/* 
    3. Generics
     - Type을 변수처럼 외부에서 주입받아 사용하는 기능으로
       타입변수라고 불린다.
     - Type에 유연성을 제공하면서 확장성과 타입안정성을 추가할 
       수 있다.
     * Generics의 주요기능
        - extends 키워드를 통한 상한경계 설정(super는 지원하지 않음)
        - Default Type
*/

// 1) 제네릭과 타입추론
function returnGeneric<T>(value :T) : T{
    return value;
}
// 매개변수로 전달된 데이터를 통해 타입추론
const result = returnGeneric("hello");

/*
    2) 제네릭의 extends
     - 제네릭에 들어갈 타입의 상한타입을 설정
     - super(하한경계)는 지원하지 않는다.
*/
// Animal을 상속받았거나 하위 타입만 받는 함수를 작성
function func<T extends Animal>(animal:T){
    animal.bark();
}
type Timer = {
    bark(): void;
}
// TypeScrip는 구조중심의 타입검사 시스템을 사용하기때문에
// 다음과같이 작성가능
function func2<T extends {bark(): void}>(animal:T){
    animal.bark();
}
func2(khTiger);

// 3) 제네릭의 기본타입
//  - 제네릭이 사용되지 않는 경우 타입변수에 대입될 기본값 지정
function defValue<T = string>(value?:T) :T[] {
    return value ? [value] : [];
}
const arr1 = defValue("hi");
const arr2 = defValue(45);
const arr3 = defValue();

/*
    기본타입과 extends의 혼합사용
*/
type Options = {theme:string};
function config<T extends Options = {theme:"dark"}>(option?:T):T{
    //return option ? option: {theme : "dark"} as T;
    //return option || {theme:"dark"} as T;
    // falsy? 값이 비어있으면 false

    // 널병합연산자 ??
    //  - a ?? b -> a가 null또는 undefiend인 경우 B반환, 아닌경우 A
    return option ?? {theme:"dark"} as T;
}





