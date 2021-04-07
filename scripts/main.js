const imgs = [
  "images/14420366_p0_master1200.jpg",
  "images/65202590_p1_master1200.jpg",
  "images/65387186_p0_master1200.jpg",
  "images/66095400_p0_master1200.jpg",
  "images/66537867_p0_master1200.jpg",
  "images/84418556_p0_master1200.jpg",
  "https://ars.els-cdn.com/content/image/1-s2.0-S1367578820300675-gr5_lrg.jpg"
];

const size = imgs.length;

let index = 0;

const button = document.querySelector('button');

button.onclick = function() {
    index = (index + 1) % size;
    button.children[0].children[0].setAttribute("src", imgs[index]);
}