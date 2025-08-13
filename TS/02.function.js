"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
    1. 함수타입
     - 함수의 매개변수와 반환값에 타입을 저장할 수 있다.
     - 지정된 타입과 다른 값이 전달되거나, 반환되면 컴파일에러가 발생한다.
*/
function greet(name) {
    console.log('안녕하세요 : ' + name);
}
greet('mkm');
function returnNumber() {
    return 1;
}
var a = returnNumber();
/*
    2. void
     - 함수가 값을 반환하지 않을 때 사용되는 타입
     - 반환값이 없는 함수의 기본 반환 타입으로 사용됨.
     - 계층구조상 undefined의 super타입
*/
function fnVoid(x) {
    //return x;
    //return;
    return undefined;
}
/*
    3. Optional Parameter
     - 선택적인 속성을 표현할 때 사용하는 속성
     - 변수명?:type
     - 옵셔녈 파라미터는 type | undefined와 동일하다.
*/
function fnOptional(a, b) {
    console.log(b);
    /*
        b는 선택적 파라미터이므로 타입스크리는 b에 값이 올 수도 있고 안 올수도
        있으므로 type | undefiend로 추론한다.
        따라서 b를 그대로 반환시키고자 한다면 컴파일 에러가 발생할 수 잇으며
        조건문을 통해 타입을 좁히는 작업이 필요하다.
    */
    if (b != undefined) {
        return b;
    }
    return 0;
}
//fnOptional();
fnOptional(1);
fnOptional(1, 2);
/*
    4. restParameter
     - 함수의 매개변수에 들어갈 인자의 수가 정해지지 않는 경우 사용하는 문법
     - 매개변수로 전달되는 값들을 하나의 배열로 관리한다.
*/
function restParameter() {
    var m = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        m[_i] = arguments[_i];
    }
    console.log(m);
}
restParameter();
restParameter(1);
restParameter(1, 2, 3, 4, 5);
/*
    5. spread 연산자
     - 배열이나 객체의 값을 쭉 펼쳐서 깊은복사나, 함수의 매개인자로 전달하는 문법
*/
var spreadArr = [1, 2, 3, 4, 5];
restParameter.apply(void 0, spreadArr);
function normalFn(a, b) {
    console.log(a, b);
}
//normalFn(...spreadArr);
/*
    배열은 크기가 정해지지 않은 타입이기 때문에, 매개변수의 갯수가 고정된
    일반 함수에서 스프레드문법을 통해 인자를 전달할 수 없다.
    하지만 , 배열을 크기가 정해진 튜플로 변경시 문법을 사용할 수 있다.
*/
var arr2 = [1, 2];
normalFn.apply(void 0, arr2);
/*
    6. Destructuring
     - 배열이나 객체의 구조를 분해하여 개별 변수로 할당하는 문법
*/
// 객체 구조분해할당시 타입주석
function objectDesFn(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
}
objectDesFn({ a: 1, b: "mkm", c: true });
function arrayDesFn(_a) {
    var first = _a[0], second = _a[1], third = _a[2];
}
// rest문법과 함께 사용시
function arrayDesFn2(_a) {
    var first = _a[0], rest = _a.slice(1);
    console.log(first, rest);
}
arrayDesFn2([1, 'mkm', true]);
function objectDesFn2(_a) {
    var a = _a.a, rest = __rest(_a, ["a"]);
    console.log(a, rest);
}
objectDesFn2({ a: 111, b: 'mkm', c: false });
/*
    7. 타입 내로잉
     - union type처럼 변수가 여러타입을 갖고 있을 때 , 이를 사용하려고하는
       "한가지 타입"으로 좁히는 문법
     - typeof , instanceof, in 연산자
*/
function typeNarrowing(strOrNumber) {
    if (typeof strOrNumber === 'number') {
        console.log(strOrNumber.toFixed(2));
    }
    else {
        console.log(strOrNumber.toUpperCase());
    }
}
typeNarrowing(1000);
typeNarrowing("mkm");
/*
    8. Type Assertion
     - 여러 타입을 가질 수 있는 변수에 대하여 개발자가 해당 값의 타입을 명확히
       알고 있는 경우 사용하는 문법으로, 컴파일러에게 이 "변수의 타입은 xx다"라고
       단언하는 문법
     - 타입 단언 시 컴파일러가 이를 믿고 타입 체크를 생략한다.
     - 타입단언은 개발자가 실제 타입을 "완벽하게" 알고 있을 때만 사용한다.
*/
function typeAssertion(strOrNumber) {
    // return <string>strOrNumber 구버전
    return strOrNumber.toUpperCase();
}
//typeAssertion(100); 런타임 에러 발생
// not null 단언문
//  - 선택변수의 값이 null이 아님을 단언하는 문법
function notNullAssertion(number) {
    return number;
}
/*
    9. never type
     - 어떤 값도 가질 수 없는 타입으로, 절대 값을 반환할수 없는 함수나
       도달할 수 없는 코드블럭을 표현할 때 사용.
     - never는 예외적인 상황을 명확히 표현하여 버그를 방지하기 위해 사용.
*/
function fnNever() {
    throw new Error(); // 값을 절대 반환하지 않는다.
    //return 1;
}
function fnNever2() {
    while (true) {
    }
    //return 1;
}
function typeNarrowing2(sOrn) {
    if (typeof sOrn === 'number') {
        console.log(sOrn);
    }
    else if (typeof sOrn === 'string') {
        console.log(sOrn);
    }
    else {
        // exhaustiveness check
        console.log(sOrn); // never
        var check = sOrn;
        // 현재 sOrN에 새로운 타입이 추가되는 경우 위 코드에서 컴파일 에러를 발생
        // 시킴으로써 모든 타입이 철처히 검사되고 있는지 확인 할 수 있다.
        // 타입체크용 메서드
        // 컴파일 단계의 타입체크기능을 무효화하여 check에 string,number와같은
        // 다른값이 전달된 경우, 런타임시 에러가 발생할수 있도록 처리하는 함수
        UnexpectedValue(check);
    }
}
function UnexpectedValue(value) {
    throw new Error("Unexptected Value : ".concat(value));
}
// const any:any = ['zzz'];
// typeNarrowing2(any);
/*
    10. 함수 타입 표현식/ 함수 시그니처
     - 함수의 시그니처를 타입으로 정의하는 방법
     - 함수의 시그니처
        - 함수가 가지는 매개변수의 개수와 자료형, 반환형을 합친 것.
*/
//일반함수
function print(s) {
    console.log(s);
}
//함수표현식
var pirnt2 = function (s) {
    console.log(s);
};
// 함수를 매개변수로 받는 함수의 타입표현식
var hello = function (callback) {
    callback("hello ts");
};
var hello2 = function (callback) {
    callback("hello ts");
};
hello2(print);
exports.default = print;
