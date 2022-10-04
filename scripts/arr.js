/* 배열 선언 */
//let arr = new Array();
let ar = [];

/* 배열 추가 : 뒤에서, 앞에서 */
//ar.push("😆");
//ar.unshift("😂");  
//console.log(ar);
/* 배열 삭제 : 뒤에서, 앞에서 */
//ar.pop();
//ar.shift();
/* 배열 순회 */
//for(let i of ar) {console.log(i);}
/* 배열의 length 속성*/
 

//배열 비우기
 

/* 배열을 문자열로 반환*/
arr = ['🍕','🍔','🍗','🍜',] ;
let arrs = String(arr);
console.log(arrs);
/* 문자열 split하면 배열반환*/
let rarr = arrs.split(',');
console.log(rarr);
/* 배열 정렬 */
let num = [1,3,5,2,4]; 
console.log(num.sort());

/* 배열 섞기*/
//Oldway
const shuffeOld = (num) => {
    for(let i=0; i< num.length; i++) {
        let idx1 =Math.floor(Math.random()*5);
        let idx2 =Math.floor(Math.random()*5);

        if(idx1 == idx2) continue;

        let temp = num[idx1];
        num[idx1] = num[idx2];
        num[idx2] = temp;
    }
    return num;
}
//Recentway
const shuffe = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

console.log(shuffeOld(num));
console.log(shuffe(num));

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 
let nf = num.filter((x) => x > 3);
console.log(nf);

/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

/*얕은 복사, 깊은 복사*/
//얕은 복사 : 참조변수 생성하여 주소값 복사
let setC = setA;
console.log(`setC => ${setC}`);
setA[0]=10;
console.log(`setA => ${setA}`);
console.log(`setC => ${setC}`);

//깊은 복사 : 참조변수 생성하고 실제값 복사
let setD = [...setA];
console.log(`setD => ${setD}`);
setA[0]=1;
console.log(`setD => ${setD}`);
console.log(`setA => ${setA}`);

//합집합
let union = [...setA, ...setB]; 
console.log(union);

//교집합
let intersection = setA.filter((item) => setB.includes(item));
console.log(intersection);

//차집합
let difference = setA.filter((item) => !setB.includes(item)); 
console.log(difference);




