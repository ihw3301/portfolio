// Scroll event listener for showing about-me groups
window.addEventListener('scroll', function () {
    // About Me 섹션의 위치
    const aboutMeSection = document.getElementById('about-me');
    const aboutMeSectionTop = aboutMeSection.offsetTop;
    const aboutMeSectionHeight = aboutMeSection.offsetHeight;

    // 현재 스크롤 위치
    const currentScroll = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // about-me 섹션에 들어왔을 때 about-me-group1과 about-me-group2에 show 클래스 추가
    const aboutMeTriggerPoint = aboutMeSectionTop + aboutMeSectionHeight * 0.4;

    if (currentScroll + windowHeight >= aboutMeTriggerPoint) {
        document.querySelector('.about-me-group1').classList.add('show');
        document.querySelector('.about-me-group2').classList.add('show');
    }
});