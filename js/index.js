// //array, photo database

let items = [
  { id: "hiking", src: "img/image-2.jpg", alt: "hiking shoes" },
  { id: "golf", src: "img/image-3.jpg", alt: "golf shoes" },
  { id: "basketball", src: "img/image-4.jpg", alt: "basketball shoes" },
];

let slider = document.querySelector("#slider-tape"); //лента слайдера
let slides = Array.from(document.querySelectorAll(".slider__item")); //Array of current slides

items.forEach((item) => {
  let image = document.createElement("img");
  image.id = item.id;
  image.className = "slider__item";
  image.src = item.src;
  image.alt = item.alt;

  slides.forEach((slide) => {
    if (item.id === slide.id) {
      slides.length = slides.length - 1;
      slider.lastChild.remove();
    }
  });
  slider.appendChild(image);
  slides.push(item);
});

console.log(slider);
console.log(slides);
