//! 종합 문제: 숫자 추측 게임 //

// 사용자가 1부터 100 사이의 숫자를 맞추는 게임

// 컴퓨터는 사용자가 숫자를 맞출 때까지 숫자를 입력받고(반복)
// , 사용자가 입력한 숫자가 정답보다 높은지, 낮은지, 아니면 정확한지 출력(조건)

// 게임은 사용자가 숫자를 맞췄을 때 종료

// 사용자가 입력한 숫자가 유효한 숫자인지 확인하고, 그렇지 않으면 오류 메시지를 출력하고 다른 숫자를 재입력받기(조건)

//? 문제 상세 설명
// 프로그램은 먼저 컴퓨터에 의해 1부터 100 사이의 무작위 숫자가 생성
// 사용자는 숫자를 추측하여 입력하고, 입력한 숫자가 정수인지 확인

// 입력받은 숫자가 목표 숫자보다 낮으면 "더 높은 숫자를 입력하세요."라고 출력
// 입력받은 숫자가 목표 숫자보다 높으면 "더 낮은 숫자를 입력하세요."라고 출력

// 입력받은 숫자가 목표 숫자와 일치하면 "정답입니다!"라고 출력하고 게임을 종료

// 숫자가 아닌 입력이나 1과 100 사이의 범위를 벗어나는 입력을 받은 경우, "유효한 숫자를 입력해주세요."라고 출력하고 다른 숫자를 재입력받기

//! 게임 구현 //
const targetNumber = Math.floor(Math.random() * 100) + 1;

// 반복해서 숫자 입력 받기
while (true) {
  // 사용자로부터 숫자 입력 받기
  const userInput = prompt("1부터 100 사이의 숫자를 추측해 보세요:");

  //& 사용자가 prompt 창의 '취소'버튼을 클릭한 경우
  // >> 사용자의 입력값이 null로 인식
  if (userInput === null) {
    console.log("게임을 중단했습니다.");
    break;
  }

  const guess = parseInt(userInput);

  // 유효성 검사
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("유효한 숫자를 입력해주세요.");
    continue;
  }

  // 숫자 비교
  if (guess < targetNumber) {
    console.log("더 높은 숫자를 입력하세요.");
  } else if (guess > targetNumber) {
    console.log("더 낮은 숫자를 입력하세요.");
  } else {
    console.log("정답입니다!");
    break; // 정답을 맞췄으므로 반복문 탈출
  }
}
