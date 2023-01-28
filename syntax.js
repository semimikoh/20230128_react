/*

var 키워드를 사용하지 않는 이유
1) 중복 선언이 허용된다. => 예기치 않는 오류를 발생시킨다
2) 호이스팅이 일어난다. => 변수 선언 이전에 참조해도 오류가 발생하지 않는다.
3) 함수 레벨 스코프(유효범위)만 지원한다. 블록 레벨 스코프는 지원하지 않는다.

*/

// let num = 10;
// let num = 20;

// console.log(num);

// //블록레벨 스코프 X
// for (let num = 0; num < 10; num++) {
//   console.log(num); //10
// }

// {
//   var num = 30;
// }

//console.log(str); 호이스팅은 발생하지만 TDZ때문에 오류 발생

let str = "문자열";

/*
 화살표 함수(Arrow Function)
 - 화살표를 사용해서 함수를 간결하게 표현할 수 있다.
 - return 생략할 수 있다.
 - 함수 호이스팅이 일어나지 않는다.

*/
// sum; 함수 호이스팅이 일어나지 않기 때문에 오류 발생
const sum = (a, b) => a + b; // 코드블록과 return을 생략하면 표현식의 결과가 반환된다
const getObj = (name, age) => ({ name: name, age: age }); // 객체를 return 할 때는 ()로 감싸준다.

// sum(10); 매개변수를 한 개만 전달해도 오류가 발생하지 않는다 전달값 undefined

/*
매개변수 rest
- 매개변수가 몇개일지 정해지지 않았을 때 사용
- 매개변수 앞에 ...을 붙이면 인자가 몇이든 배열로 모아진다.
- 매개변수의 마지막에 위치해야한다. (a, ...numbers)
*/

function getTotal(...numbers) {
  //addry.prototype.reduce : 누산 함수 (계산을 누적시켜서 계산)
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
getTotal(1, 2, 3, 4, 5);

/*
스프레드 (펼침 연산자)
-배열이나 객체를 펼치는 효과가 있다.
-배열인자를 복사할 때 편하다.
*/

let arr = [1, 2, 3, 4, 5];
// console.log(getTotal(...arr));

let newArr = [0, ...arr, 10];
// console.log(newArr);

let user = {
  name: "semi",
  age: 31,
};

let copy = user; // 객체는 참조값이 복사된다.
copy.age = 40;

// console.log(user);

let copy2 = { ...user }; // {    name: "semi",    age: 40  }; 참조 복사 x 프로퍼티를 펼쳐서 복사함
copy2.age = 50;
// console.log(copy2, user);

/* 
비구조화 할당
- 배열이나 객체의 값을 변수로 간단하게 할당할 수 있다.
- 객체는 가져오고 싶은 프로퍼티명으로 가져온다.
    => 객체는 가져오고 싶은 프로퍼티명을 알아야한다.
- 배열은 인덱스의 순서대로 변수에 할당한다.
    => 변수명은 자유롭게 지을 수 있다.

*/

//user의 프로퍼티들을 같은 이름의 변수로 담기

// let age = user.age;
// let name = user.name;

let { age: username, name } = user;
// console.log(username);
let fruits = ["apple", "orange", "grape"];
let [first, second, three] = fruits;

// console.log(first, three, second);

/* 
상황 연산자
- 조건식 > 참일 경우 : 거짓일 경우
- 조건에 따라 다른 값을 할당해야할 때 유용하다.

*/

// user, name이 40보다 작으면 'red'아니면 'green'

let result = user.age < 40 ? "red" : "green";
// console.log(user.age, result);

/* 
단축 평가
&&(and)
||(or)
*/

function print() {
  //   console.log("32세다");
}

user.age = 320;
user.age > 30 && print();

/* 
옵셔널 체이닝
-프로퍼티 참조할 때 참조하는 객체가 undefined, null인경우 참조하지 않는다.

*/

// const students = {
//   mark: {
//     age: 20,
//     score: {
//       korean: 90,
//       english: 80,
//       math: 40,
//     },
//   },
//   john: {
//     age: 20,
//   },
// };

// console.log(students.mark.score.english); // 80;
// console.log(students.john.score);

let obj = {
  age: 31,
  height: 173,
};

console.log(obj.weight?.num.age.name);

/* 
템플릿 리터럴 
-문자열안에 js 표현식을 포함시킬 수 있다.
*/

// console.log("안녕하세요" + user.name + "입니다.");
// console.log(`안녕하세요${user.name}입니다.`);

/*
null 병합 연산자
= ?? 앞의 값이 null이나 undefined 일때 ?? 뒤의 값을 평가한다.
*/

// null ?? console.log("실행"); // 0은 falthy한 값이지만, null이나 undefined가 아니기 때문이 실행 X

/*
배열의 고차함수
- 배열을 순회하면서 각 요소에 대한 함수를 실행한다.
- 배열의 요소의 개수만큼 반복하는 함수
*/

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
}

/*
foreach : 배열의 각 요소를 인자로 전달받는 콜백함수를 실행.
 => 콜백함수의 첫번째 매개변수에 각 요소가 전달
 => 콜백함수의 두번째 매개변수에 각 요소의 인덱스 전달
*/

// numbers.forEach((el, i) => console.log(el, i));

/*
filter : 콜백함수의 return 값이 ture인 요소만 모아서 새로운 배열로 변환
 => return 값이 true or false -> 조건식이어야한다.
*/

let evenNum = numbers.filter(function (el) {
  return el % 2 === 0;
});

evenNum = numbers.filter((el) => el % 2 === 1);

/*
map : 각 요소를 dl용해서 새로운 값을 만들어내어 새로운 배열로 반환
*/

let doublNum = numbers.map(function (el) {
  return el;
});

doubleNum = numbers.map((el, i) => (i % 2 === 1 ? el * 2 : el));

// console.log(doubleNum);

//age 30이상의 객체의 이름 값만 배열로 모으기
let userlist = [
  { name: "semi", age: 33 },
  { name: "henny", age: 28 },
  { name: "tom", age: 53 },
];

let answer = userlist.filter((el) => el.age >= 30).map((el) => el.name);

// console.log(userlist);
