window.addEventListener("scroll", () => {
    const scrollIndicator = document.querySelector(".Scroll-indicator-bar");
    const pagescroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHe.
    const scrollValue = (pagescroll / height) * 100;
    scrollIndicator.style.width = scrollValue + "%";
});

const menußtn document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation document.querySelector(".navigation");

menuBtn.addEventListener("click", () => { 
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});