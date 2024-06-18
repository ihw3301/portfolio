document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); // 모든 섹션 요소 선택
    const navLinks = document.querySelectorAll('nav a'); // 헤더 내비게이션 링크들 선택

    // 각 섹션의 offsetTop 값을 배열에 저장
    const sectionOffsets = Array.from(sections).map(section => {
        return section.offsetTop;
    });

    // 초기 로드 시 헤더 링크 초기 스타일 설정
    setInitialHeaderLinkStyles(sectionOffsets, navLinks);

    // 헤더 링크에 transition 효과 추가
    navLinks.forEach(link => {
        link.style.transition = 'color 0.3s ease, background-color 0.3s ease'; // 색상과 배경색에 대해 부드러운 전환 효과 추가
    });

    // 헤더 링크 클릭 시 부드러운 스크롤 처리
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 방지

            const targetId = link.getAttribute('href'); // 클릭된 링크의 href 속성 값 가져오기
            const targetSection = document.querySelector(targetId); // 대상 섹션 요소 가져오기
            const targetOffsetTop = targetSection.offsetTop; // 대상 섹션의 offsetTop 값 가져오기

            // 스크롤 부드럽게 처리
            window.scrollTo({
                top: targetOffsetTop,
                behavior: 'smooth'
            });

            // 링크 클릭 후 현재 섹션 스타일 변경
            setCurrentHeaderLinkStyles(targetId);
        });
    });

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function() {
        // 현재 스크롤 위치
        const scrollPosition = window.scrollY;

        // 현재 보여지는 섹션 결정
        let currentSectionIndex = sectionOffsets.findIndex(offset => scrollPosition < offset);
        if (currentSectionIndex === -1) {
            // 마지막 섹션인 경우 (스크롤이 맨 아래에 위치)
            currentSectionIndex = sections.length - 1;
        } else if (currentSectionIndex !== 0) {
            // 이전 섹션에 속하는 경우
            currentSectionIndex -= 1;
        }

        // 현재 섹션의 ID
        const currentSectionId = sections[currentSectionIndex].id;

        // 헤더 내비게이션 링크 스타일 변경
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.style.color = '#000'; // 현재 섹션 링크 글자색 검은색으로 변경
                link.style.backgroundColor = '#fff'; // 현재 섹션 링크 배경색 흰색으로 변경
            } else {
                link.style.color = '#fff'; // 다른 링크들은 흰색으로 변경
                link.style.backgroundColor = 'transparent'; // 다른 링크 배경색 투명하게 설정
            }
        });

    });

    // 초기 로드 시 헤더 링크 초기 스타일 설정 함수 정의
    function setInitialHeaderLinkStyles(sectionOffsets, navLinks) {
        // 현재 스크롤 위치
        const scrollPosition = window.scrollY;

        // 현재 보여지는 섹션 결정
        let currentSectionIndex = sectionOffsets.findIndex(offset => scrollPosition < offset);
        if (currentSectionIndex === -1) {
            // 마지막 섹션인 경우 (스크롤이 맨 아래에 위치)
            currentSectionIndex = sectionOffsets.length - 1;
        } else if (currentSectionIndex !== 0) {
            // 이전 섹션에 속하는 경우
            currentSectionIndex -= 1;
        }

        // 현재 섹션의 ID
        const currentSectionId = sections[currentSectionIndex].id;

        // 헤더 내비게이션 링크 초기 스타일 설정
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.style.color = '#000'; // 현재 섹션 링크 글자색 검은색으로 변경
                link.style.backgroundColor = '#fff'; // 현재 섹션 링크 배경색 흰색으로 변경
            } else {
                link.style.color = '#fff'; // 다른 링크들은 흰색으로 변경
                link.style.backgroundColor = 'transparent'; // 다른 링크 배경색 투명하게 설정
            }
        });
    }

    // 현재 섹션 스타일 변경 함수 정의
    function setCurrentHeaderLinkStyles(targetId) {
        // 현재 섹션 ID
        const currentSectionId = targetId.substring(1); // # 제거

        // 헤더 내비게이션 링크 스타일 변경
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.style.color = '#000'; // 현재 섹션 링크 글자색 검은색으로 변경
                link.style.backgroundColor = '#fff'; // 현재 섹션 링크 배경색 흰색으로 변경
            } else {
                link.style.color = '#fff'; // 다른 링크들은 흰색으로 변경
                link.style.backgroundColor = 'transparent'; // 다른 링크 배경색 투명하게 설정
            }
        });
    }
});
