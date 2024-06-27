//! 객체의 속성 존재 여부 확인
// : 객체에 없는 속성에 접근 - undefined 자료형
// : 조건문으로 undefined인지 아닌지 확인

// 객체 생성
let object = {
  name: '박영준',
  age: 28,
  job: 'developer'
}

//# 1. 객체 내부에 해당 속성이 있는지 확인

//# 2. 조건문을 연산자를 활용하여 간단하게 표시
// object.name
// object.hobby 속성의 여부를 확인

// : 논리연산자(and, or, not)
// : or연산자의 경우 둘 중에 하나라도 true면 true

// object.name이 존재하는지 여부를 논리연산자를 사용하여 표시(실행 X)

// object.hobby가 존재하는지 여부를 논리연산자를 사용하여 표시(실행 O)

//! 기본 속성 지정하기
// : 삼항 연산자

// - 객체의 기본 속성을 지정

// - 객체 출력(JSON 형태로 반환)
//# 3. 객체의 기본 속성을 간단하게 지정
// >> object의 name과 favorite 속성을 지정
// : 각각 속성이 존재하지 않을 경우

// : '이름을 알 수 없음', '떡볶이'로 지정
// : 논리연산자를 사용하여 구현

//! 배열 기반의 다중 할당
// : 배열과 비슷한 방법으로 한 번에 여러 개의 변수에 값을 할당

//? 다중 할당의 형태
// 식별자의 경우 변수를 나열한 형태
// : [식별자, 식별자, 식별자, ...] = 배열

let array = [1, 2]

// : 배열의 크기는 같을 필요가 X
// : 넘치는 값은 생략
// : const 키워드로써 다중 할당을 받기 가능
let arrayA = [1, 2, 3, 4, 5];

// 다중 할당을 받은 식별자는 각각의 변수가 선언된 것과 같음

//! 객체 기반의 다중 할당
// : 객체 내부에 있는 속성을 꺼내서 변수로 할당할 때 사용

// 객체 속성을 꺼내서 다중 할당
// {속성명, 속성명} = 객체
// {식별자=속성명, 식별자=속성명} = 객체

// 객체 생성
const bookObject = {
  name: '어린왕자',
  price: 18000,
  publisher: '열린책들'
}

// 객체에서 변수를 추출: name과 price 속성을 그대로 꺼내옴
// : 배열의 다중 할당과 달리
// : 지정된 속성명으로 해당 값이 자동 전달
// : 객체에 저장된 속성명이 아닐 경우 undefined를 반환

// name과 price 속성을 각각의 새로운 이름의 변수에 저장