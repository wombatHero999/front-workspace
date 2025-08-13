import React, { useState } from 'react';


interface UserInfoProps {
}

export default function UserInfoContainer() {
  
  return (
    <div>      
      <UserInfo />
    </div>
  );
}


function UserInfo(??: UserInfoProps) {
  const handleChangeName = () => {
     
  }
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
      <h2>사용자 정보</h2>
      <h3>이름: </h3>
      <h3>나이: </h3>
      <h3>취미: </h3>
     <button onClick={handleChangeName}>정보 변경변경</button>
    </div>
  );
}