console.log("Password functionality removed. Click the arrow to proceed."); // 비밀번호 기능 제거 알림

// enterBtn라는 변수에 버튼을 할당한다.
const enterBtn = document.querySelector(".enter_btn");
// const userPw = document.querySelector(".input-pw"); // 비밀번호 입력 필드는 이제 필요 없으므로 이 줄을 삭제하거나 주석 처리합니다.

// 요소.addEventListener("이벤트타입", ()=>{함수});
// 예를들어 button.addEventListener("click", ()=>{console.log("hello")});
// -> button으로 지정한 요소가 클릭되었을 때 console창에 "hello"가 찍힌다.

enterBtn.addEventListener("click", () => {
    // 이제 비밀번호 확인 없이 바로 다음 페이지로 넘어가는 로직을 실행합니다.
    const firstPage = document.querySelector('.section-first_page');
    const secondPage = document.querySelector('.section-second-page');

    const nav = document.querySelector(".menu-nav");

    // 화면 전환 애니메이션을 클래스로 추가
    // 요소.classList.add("클래스명");을 입력하면 새로운 클래스가 추가된다.
    firstPage.classList.add('animate-slide-out');
    secondPage.classList.add('animate-slide-in');
    nav.classList.add('animate-nav-in'); // animate-slide-in 대신 animate-nav-in 사용 (CSS에 정의된 이름으로 통일)

    // 첫 번째 페이지의 애니메이션이 끝난 후 display를 none으로 변경
    firstPage.addEventListener('animationend', () => {
        firstPage.style.display = 'none';
        // 두 번째 페이지를 flex로 설정 (CSS에서 display:none; 이었으므로)
        secondPage.style.display = 'flex';
    }, { once: true }); // 이벤트 리스너가 한 번만 실행되도록 설정
});
