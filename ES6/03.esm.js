function sayHi(){
    console.log('hello module');
}
const abc = "abcde";
export {sayHi};
export {abc};
export const fn1 = (a) => console.log(a);

// default문법
export default abc;
// export default fn1;


