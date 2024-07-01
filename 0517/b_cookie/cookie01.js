/*
! 쿠키(Cookie)

& 1. 쿠키의 정의
쿠키는 웹 사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일

: 사용자가 웹 사이트를 방문할 때마다 서버에 의해 생성되며, 브라우저는 이 쿠키를 로컬 컴퓨터에 저장하고 있다가 각 요청 시 서버로 다시 전송
>> 웹 사이트는 사용자의 세션 또는 특정 기간 동안 지속적인 상태 정보를 기억 가능

& 2. 쿠키의 구조
쿠키는 일반적으로 다음과 같은 구성 요소를 포함

- 이름: 각 쿠키를 식별하는 고유한 이름
- 값: 서버가 각 쿠키에 저장하는 정보의 문자열
- 만료 날짜: 쿠키의 수명을 결정
            해당 날짜가 지나면 쿠키는 더 이상 유효 X
- 경로: 쿠키를 전송할 요청의 URL 경로
- 도메인: 쿠키를 보낼 수 있는 도메인
- Secure 플래그: 해당 플래그 설정 시 쿠키는 HTTPS 프로토콜을 통해서만 전송
- HttpOnly 플래그: 해당 플래그 설정 시 쿠키는 서버에 의해서만 액세스할 수 있고 JavaScript 등의 클라이언트 사이드 스크립트에서는 접근 불가

& 3. 쿠키의 용도

- 세션 관리: 로그인, 쇼핑 카트, 게임 점수, 또는 서버가 사용자를 기억해야 하는 어떤 정보든 저장 가능
- 개인화: 사용자 선호, 테마 및 기타 설정을 저장하여 맞춤형 사용자 경험을 제공
- 추적: 사용자의 행동과 방문 패턴을 추적하여 효과적인 마케팅 또는 광고 전략을 수립

& 4. 쿠키의 한계

- 용량 제한: 쿠키는 크기가 약 4KB로 제한되어 있어 많은 정보를 저장하기에는 부적합
- 성능 문제: 모든 HTTP 요청에 쿠키 정보가 포함되므로 네트워크 트래픽이 불필요하게 증가 가능성
- 보안 취약성: 크로스 사이트 스크립팅(XSS)과 크로스 사이트 요청 위조(CSRF) 같은 공격에 취약 가능성 O
  >> 특히 HttpOnly 플래그가 설정되지 않은 경우, 쿠키는 클라이언트 사이드 스크립트에 의해 접근 가능
- 개인 정보 보호 문제: 쿠키를 통한 사용자의 활동 추적은 개인 정보 보호에 대한 우려를 증가시킬 수 있으며, 이는 사용자와 법적 규제 사이의 문제가 될 가능성이 증가
*/

//! 쿠키 생성 및 수정

// document.cookie 속성 사용법
// document.cookie 속성을 사용하면 JavaScript를 통해 웹 브라우저에 쿠키를 생성하고 관리 가능
// : 쿠키 설정, 읽기, 수정 및 삭제 기능

//! 쿠키 생성 및 수정
// 쿠키를 생성하거나 수정할 때는 document.cookie에 문자열을 할당
// : (필수) 쿠키의 이름, 값
// : (선택, 추가 설정) 만료 날짜, 경로, 도메인, 보안

//? 기본 형식
// document.cookie = "쿠키이름=쿠키값; expires=날짜; path=경로; domain=도메인; secure";

// 예시: 사용자 이름 쿠키 설정
// - 사이트의 모든 페이지에서 해당 쿠키에 접근할 수 있도록 경로를 /로 설정

document.cookie = "username=leeseungah; path=/;"

//! 쿠키의 만료 시간 설정
// 쿠키의 expires 속성을 설정하여 쿠키의 생명 주기를 관리 가능
// : 만료 날짜가 설정되지 않은 쿠키는 세션 쿠키가 되어 브라우저가 닫힐 때 자동으로 삭제
// : 만료 날짜를 설정하려면, UTC/GMT 시간대의 문자열 형식을 사용

let date = new Date(); // 실시간 날짜, 시간을 생성
date.setTime(date.getTime() + (1 * 60 * 60 * 1000)); // 1시간 뒤 만료
// 쿠키 화면의 시간 단위는 UTC(협정 세계시) 시간을 기준
// : KST(한국 표준시)로 변환하려면 9시간을 더해야 함
// >> 한국이 UTC보다 9시간 빠름

let expires = "expires=" + date.toUTCString();
document.cookie = "username=leeseungah; path=/;" + expires + ";"

//! 쿠키 읽기
// document.cookie를 사용하여 모든 쿠키를 읽기 가능
// : 세미콜론으로 구분된 이름-값 쌍의 문자열을 반환
// : 특정 쿠키를 찾기 위해서는 문자열 파싱이 필요

let cookies = document.cookie.split(';'); // 배열 형식으로 반환
for (let i = 0; i < cookies.length; i++) {
  let cookie = cookies[i];
  let parts = cookie.split('=');
  let name = parts[0].trim();
  let value = parts[1].trim();

  if (name === 'username') {
    console.log("Username: ", value);
  }
}