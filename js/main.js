/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*====== MENU SHOW ======*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*====== MENU HIDE ======*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper(".home__swiper", {
  // เปิดใช้งาน loop เพื่อให้สไลด์วนซ้ำได้เรื่อย ๆ
  loop: true,

  // กำหนดระยะห่างระหว่างแต่ละสไลด์
  spaceBetween: 32,

  // เปิดใช้งานให้เมาส์เปลี่ยนเป็นรูปมือและสามารถลากได้ "แกร็บ เคอร์เซอร์"
  grabCursor: true,

  // ใช้เอฟเฟกต์แบบ "creative" เพื่อให้ดูมีมิติในการเลื่อน
  effect: "creative",

  // กำหนดลักษณะของเอฟเฟกต์เมื่อสไลด์ก่อนหน้า (prev) หรือถัดไป (next)
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500], // ย้ายตำแหน่ง x = -100, y = 0, z = -500 (ถอยหลัง)
      rotate: [0, 0, 15], // หมุนในแกน Z 15 องศา
      opacity: 0, // ตั้งค่าให้โปร่งใส
    },
    next: {
      translate: [100, 0, -500], // ย้ายตำแหน่ง x = 100, y = 0, z = -500 (ไปข้างหน้า)
      rotate: [0, 0, -15], // หมุนในแกน Z -15 องศา
      opacity: 0, // ตั้งค่าให้โปร่งใส
    },
  },

  // ตั้งค่า pagination (จุดนำทาง) ให้คลิกได้
  pagination: {
    el: ".swiper-pagination", // กำหนด element ที่ใช้แสดง pagination
    clickable: true, // สามารถคลิกเปลี่ยนสไลด์ได้
  },
});

/*=============== GSAP ANIMATION ===============*/
// สร้างแอนิเมชันให้กับ ".home__images" โดยให้ปรากฏขึ้นมาจากด้านล่าง (y: 150) และโปร่งใสในตอนแรก (opacity: 0)
gsap.from(".home__images", 1.5, { opacity: 0, y: 150, delay: 0.1 });

// สร้างแอนิเมชันให้กับ ".home__data" โดยให้ปรากฏจากทางซ้าย (x: -100) และโปร่งใสในตอนแรก
gsap.from(".home__data", 1.8, { opacity: 0, x: -100, delay: 0.8 });

// สร้างแอนิเมชันให้กับ ".home__info" เช่นเดียวกัน ปรากฏจากทางซ้าย และโปร่งใส
gsap.from(".home__info", 1.8, { opacity: 0, x: -100, delay: 1 });
