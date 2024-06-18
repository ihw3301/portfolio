// -------------------------------------- 스킬 부분 ----------------------------------------------

// 스크롤 이벤트 리스너 추가
window.addEventListener('scroll', function () {
    // Skills 섹션의 위치
    const skillsSection = document.getElementById('skills');
    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.offsetHeight;

    // 현재 스크롤 위치
    const currentScroll = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // 스킬 섹션에 들어왔을 때 이미지를 나타내는 조건 추가
    const skillsSectionMiddle = skillsSectionTop + skillsSectionHeight * 0.4;

    // Skills 섹션이 화면에 보일 때 막대 그래프를 채우는 함수 호출
    if (currentScroll + windowHeight >= skillsSectionMiddle) {
        fillBarsOnce(); // 한 번만 채우도록 변경된 함수 호출
        showSkills();

        const bars = document.querySelectorAll('.bar');

        bars.forEach((bar, index) => {
            setTimeout(() => {
                fadeInImages(bar); // 순차적으로 이미지를 나타나도록 fadeInImages 함수 호출
            }, index * 200); // 인덱스에 따라 타이밍을 조정하여 순차적으로 처리
        });
    }
});

// 한 번만 막대 그래프를 채우는 함수
function fillBarsOnce() {
    // 이미 채워진 상태인지 확인
    const bars = document.querySelectorAll('.bar');
    const firstBar = bars[0]; // 첫 번째 막대 그래프를 기준으로 확인
    const skill = firstBar.querySelector('.skill');
    const width = parseFloat(skill.style.width) || 0;
    if (width === 0) { // 너비가 0이면 한 번만 채우는 작업을 수행
        fillBars();
    }
}

// 막대 그래프를 채우는 함수
function fillBars() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        const skill = bar.querySelector('.skill');
        const targetWidth = parseInt(skill.dataset.targetWidth); // 목표 너비 가져오기
        const currentWidth = parseInt(skill.style.width) || 0; // 현재 너비 가져오기
        const step = Math.ceil(targetWidth / (100 - index)); // 한 단계당 증가량 계산 (인덱스에 따라 다른 값 적용)
        let width = 0; // 초기 너비
        const increaseWidth = () => {
            if (width < targetWidth) {
                width += step; // 증가량만큼 너비 증가
                skill.style.width = width + '%'; // 현재 너비에 추가
                skill.querySelector('span').textContent = Math.min(Math.round(width), targetWidth) + '%'; // 최대 목표 너비로 업데이트
                setTimeout(increaseWidth, 15); // 0.02초마다 반복
            }
        };
        increaseWidth();
    });
}

// 각 bar 요소 안에 있는 img 태그들을 순차적으로 나타나도록 설정하는 함수
function fadeInImages(bar) {
    const images = bar.querySelectorAll('img');
    images.forEach(img => {
        img.style.transform = 'translateY(0)'; // translateY를 0으로 변경하여 원래 위치로 나타나게 함
        img.style.opacity = '1'; // opacity를 1로 변경하여 부드럽게 나타나게 함
    });
}

// skill들을 부드럽게 나타내는 함수
function showSkills() {
    const skills = document.querySelectorAll('.bar .skill');
    skills.forEach(skill => {
        skill.style.opacity = '1'; // opacity를 1로 변경하여 부드럽게 나타나게 함
    });
}