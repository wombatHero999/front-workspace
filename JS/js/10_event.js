function test1() {
    console.log('요소에 이벤트 발생');
    // return undefined
}

/* 
    html페이지 로딩이 완료된 이후에 코드를 실행하고자 할때
     - window.onload사용
*/
window.onload = function () {
    // document.querySelector("#btn2").onclick = test1();
    document.querySelector("#btn2").onclick = test1;
    // "test1();"
    // function() { test1();}
    document.querySelector("#btn2").onclick = function (e) {
        console.log('하이');
    };
    document.querySelector("#btn3").addEventListener("click", function (e) {
        console.log("btn3 clicked!");
    });
    document.querySelector("#btn3").addEventListener("click", function (e) {
        console.log("222222 btn3 clicked!");
    });

    /*
        Event객체
         - 발생한 이벤트 관련 모든 정보를 가지고 있는 객체
         - 이벤트가 발생한 요소, 발생한 이벤트의 유형, html내부의 위치정보 등
         - 이벤트발생시 브라우저는 이벤트 핸들러 함수의 첫번째 매개변수로 항상
           이벤트 객체를 주입
        Event target객체
         - 이벤트가 발생한 객체
         - 이벤트 객체의 target 속성의 값
    */
    document.querySelector(".box").onmouseover = function (e) {
        console.log(e);
        console.log(e.target);

        e.target.innerHTML = "하이";
        this.innerHTML = "하이2";
    };

    document.querySelector(".box").onmouseout =
        function (e) {
            e.target.innerHTML = "잘가";
        }

    /* 
        keyEvent
         keydown - keypress - keyup(input에 값이 기록되는 순간)
                              input
    */
    document.querySelector("#userInput")
        .addEventListener("keyup", function (e) {
            console.log(e);
            document.querySelector(".text-wrapper").innerHTML
                = e.target.value;
        });


    /* submit event */
    document.querySelector("form").onsubmit = function (e) {
        /* 
            사용자가 입력한 값이 유효한 값인지 유효성 검사를 진행
            하기 위한 목적으로 작성한다.
        */
        console.log(e);
        // 1. 아이디 검사
        const userId = document.querySelector("#userId");
        if (userId.value.length < 4) {
            console.log('유효한 아이디를 입력하세요');
            userId.focus();
            //return false; // submit이벤트 막기
            e.preventDefault(); // submit이벤트 막기
            // console.log('12');
            // 기본 이벤트 실행 방지.
            // 기본 이벤트 ? 각 태그마다 내장되어 있는 이벤트 기능
            // ex) submit버튼태그 : submit이벤트
            //     a태그 : click이벤트
        }
        // 2. 비밀번호 검사
        const pwd = document.querySelector("#pwd");
        if(pwd.value.length < 4){
            console.log("유효한 비밀번호를 입력하세요...!");
            pwd.select();
            e.preventDefault();
        }

        // 유효성 검사 모두 통과시 true반환
        return true;
    };

}

function displayMsg(e, boxx){
    console.log(e.target, boxx.dataset.text);

    // 상위요소로의 이벤트 전파를 막는 함수
    //e.stopPropagation();
}

