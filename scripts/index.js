
//폭탄이 있는 위치를 나타내는 배열

let num = [];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

//section id=msg 출력 함수
const msgShow = (m) => {
    const msg = document.getElementById("msg");
    msg.innerHTML = `<h2>${m}</h2>`;
}

//숫자박스가 선택된 경우
/* 화살표함수 */
const show = (n) => {
    if(!shuffleFlag) {
        msgShow("폭탄을 섞어 주세요.");
        return;
    }

    //눌러진 번호판 배열에 추가, 동일한 배열에 더 이상 입력되지 않도록 수정
    if(!selNum.includes(n)) selNum.push(n);
    //오류체크
    //console.log(selNum);

    //폭탄이 있는 배열을 참조하여 그림 변경
    let imgSrc;
    if(num[n-1] == 1) imgSrc = "boom";
    else imgSrc = "hart";

    //현재 눌러진 숫자 박스에 그림 표시
    document.getElementById(`box${n}`).innerHTML = `<img src = ./images/${imgSrc}.png>`;

    //성공할 경우
    if(selNum.length == 8) {
        //차집합으로 걸러내기
        let fn = [1,2,3,4,5,6,7,8,9].filter((i) => !selNum.includes(i))
        document.getElementById(`box${fn[0]}`).innerHTML = `<img src = ./images/${imgSrc}.png>`;
        shuffleFlag = false;
        msgShow("성공");
        
    }

    //실패할 경우
    if (imgSrc == "boom") {
        for(let j=1 ;j<=9; j++) {
            document.getElementById(`box${j}`).innerHTML = `<img src = ./images/boom.png>`;
        }
        shuffleFlag = false;
        msgShow("실패");
    }
}

//폭탄섞기 함수
const boxShuffle = () => {
    num.sort(() => Math.random() - 0.5);
    shuffleFlag = true;
    init();
    //오류체크
    //console.log(num);
}

//초기화함수
const init = () => {
    //메세지 초기화
    msgShow(``);

    //Box 초기화
    for(let i=1; i<=9; i++){
        document.getElementById(`box${i}`).innerHTML = `${i}`;
    }
    
    //선택배열 초기화
    selNum = [];
}



/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   //DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
   for(let i=0; i<9; i++) {
    if(i==8) {
        num.push(1);
    } else {
        num.push(0);
    }
   }
    //console.log(num);   
});