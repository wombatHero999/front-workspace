/*
    #1. Props
     - 부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법
     - 자식컴포넌트는 전달받은 props를 "읽기전용"으로 사용해야 한다.
     - 단방향 데이터 흐름을 통해 컴포넌트의 상태를 예측하기 쉽게 만든다.
       오직 부모에서 자식으로만 데이터를 전달할 수 있다. 
    
    When?
     - 부모에서 자식컴포넌트의 화면 및 동작을 제어하고자 할 때 사용한다. 
     - 자식이 독립적으로 값을 생성하기 어려운 경우
*/
import { useState } from "react";

interface ChildProps{
    message : string;
    style : React.CSSProperties;
    setMessage : (str:string) => void;
}

function ParentComponent(){

    // 자식컴포넌트에서 사용할 스타일속성 및 데이터
    const style:React.CSSProperties = {color:'white',backgroundColor:'black'};
    //let message = "Hello from Parent";

    /*
        #2. State
         - 컴포넌트 내부에서 선언하고 관리하는 상태값. 
         - State값이 변경되면 컴포넌트는 리렌더링한다.
         - 좋아요 상태, 팔로우 숫자, 입력하는 값 등 컴포넌트 내부에서
           이 상태값을 감지하기 위한용도로 선언한다.
         - 부모컴포넌트에서 여러 자식 컴포넌트에 공유해야할 데이터가 있
         는 경우 부모컴포턴트에서 state를 성너후 props로 전달한다.

        state선언방법
        const [상태값, 상태값변경함수] = useState(초기값);
        - 상태값변경함수에 의해 상태값(state)이 변경되는 경우
        컴포넌트는 자동으로 렌더링 된다.
    */
    let [message, setMessage] = useState('Hello From Parent');

    // state변경함수가 아닌 함수로 변경은 react가 감지하지 못한다.
    // 즉, state변경함수를 통해서만 state를 변경해야 화면이 렌더링된다.
    const setMessage2 = (str:string) =>{
        message = str;
    }

    return(
        <div>
            <ChildComponent message={message} style={style} setMessage={setMessage} />
            <ChildComponent message={message} style={style} setMessage={setMessage2} />
        </div>
    )
}

function ChildComponent({message, style, setMessage}:ChildProps){
    //console.log(props);
    //props.message ="마음에 안드네.."; 읽기전용으로만 사용해야한다.

    const messageHandler = () => {
        setMessage("자식에서 메세지 수정했어요 ㅎㅎ");
    };
    
    /* 
        컴포넌트별로 유지되어야 하는 데이터의 경우 해당 컴포넌트에서만
        상태값을 관리한다.
    */
    const [likeCount, setLikeCount] = useState(0);

    return(
        <div>
            <h1 style={style}>{message}</h1>
            <button onClick={messageHandler}>메시지 수정</button>

            <button onClick={() => setLikeCount(likeCount + 1)}>좋아요 : {likeCount}</button>
        </div>
    )
}

export default ParentComponent;