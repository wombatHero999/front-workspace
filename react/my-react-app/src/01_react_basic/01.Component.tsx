/* 
    #1. 컴포넌트의 이름은 "대문자"로 시작한다.
     - 리액트는 렌더링할 요소가 소문자로 시작하는 경우
     html태그로, 대문자로 시작하는 태그는 리액트 컴포넌트로 인식
*/
function Component(){
    /* 
        #2. 함수형 컴포넌트는 반드시 1개의 jsx요소를 반환해야 한다.
         - 여러 태그를 동시에 반환하고자 한다면 <></>로 감싸준다
        #3. return되는 요소는 ()로 감싸준다.
    */
    return (<>
            {/* <div>
                <h1>Hello React</h1>
            </div>         */}
            <Header />
            <hr></hr>
            <Footer/>
        </>)    
}

function Header(){
    const title = "Hello React";
    const style = {color:'white',backgroundColor:'black'};
    return (
        /* 
            #4. 모든 요소는 반드시 "닫아"줘야한다.
             - <img>, <input>등 종료태그가 존재하지 않는 태그도
               닫아줘야한다.
            #5. jsx문법에서 자바스크립트 변수를 사용시 {}를 이용한다.
            #6. style속성값은 "객체"로 작성하여 {}로 바인딩한다.
        */
        <header style={style}>            
            <img src="/vite.svg" />
            <h1>{title}</h1>
        </header>
    )
}

import './01.Component.css'
function Footer(){

    /* 
        #8. 이벤트 속성은 CalmelCase로 작성한다.
         - html => onclick="함수()"
         - jsx => onClick={함수}
         - 값으로는 함수를 호출하지 않고, 함수자체를 바인딩
    */
    const clickHandler = function(){
        console.log("클릭해주셔서 감사합니다.");
    }

    return (
        // #7. 클래스속성은 className으로 작성한다.
        //   - jsx문법내부에서 class는 class생성 예약어를 의미.
        <footer className="footer">
            <button onClick={clickHandler}>저를 클릭해주세요..</button>
        </footer>
    )
}


export default Component;