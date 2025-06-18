function test13(){
    /* 
        img태그 동적 생성
        <img src="이미지파일의 경로" width/height alt , style>
    */
   const img = document.createElement('img');
   img.src = "./window.png";
   img.style = "width:200px;"

   document.querySelector(".img-wrapper")
   .appendChild(img);
}

function deleteNode(node){
    node.remove();
}