// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

// Hamburger
const hamburger = document.getElementById("hamburger-menu");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navMenu = document.querySelector(".navbar-menu");

hamburger.onclick = () => {
  if(!closeMenu.classList.contains('active')){
    openMenu.classList.add("active");
    closeMenu.classList.add("active");
    navMenu.classList.add("active");
  }else{
    openMenu.classList.remove("active");
    closeMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
};

// Klik di luar hamburger
document.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu && e.target != openMenu && e.target != closeMenu) {
    console.log("loea");
    openMenu.classList.remove("active");
    closeMenu.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Project Open
const btnOpenProject = document.querySelectorAll(".btn-open-project");
const boxContent = document.querySelector(".box-content");
const contentDisplay = document.querySelector("#project-open");
const setImage = document.querySelector(".top-side");
const setHeader = document.querySelector(".header-box h2");
const setDesc = document.querySelector(".desc-box p");
let setLink;
const getLink = document.querySelector(".btn");

for (let i = 0; i < btnOpenProject.length; i++) {
  btnOpenProject[i].onclick = () => {
    contentDisplay.classList.add("active");
    boxContent.classList.add("active");
    if (btnOpenProject[i].classList.contains("handarbeni")) {
      setImage.innerHTML = '<img src="img/handabeni.png"/>';
      setHeader.textContent = "Handarbeni";
      setDesc.textContent =
        "Handarbeni Media is a digital marketing agency that helps you promote your products or services online.We always help our happy clients to boost their brand awareness, to increase their sales by generating more leads, and to growth-hack their revenue";
      setLink = "https://handarbenimedia.netlify.app/";
      getLink.innerHTML =
        '<a href="' + setLink + '" target="_blank"><span>Kunjungi</span></a>';
    } else if (btnOpenProject[i].classList.contains("justabeginner")) {
      setImage.innerHTML = '<img src="img/justabeginner.png"/>';
      setHeader.textContent = "Just a Beginner";
      setDesc.textContent = "Just a Beginner";
      setLink = "https://justabeginner.netlify.app/";
      getLink.innerHTML =
        '<a href="' + setLink + '" target="_blank"><span>Kunjungi</span></a>';
    }
  };
  document.addEventListener("click", function (e) {
    if (e.target == contentDisplay) {
      contentDisplay.classList.remove("active");
      boxContent.classList.remove("active");
    }
  });
}
