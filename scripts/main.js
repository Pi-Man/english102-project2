const imageButtons = document.querySelectorAll("button.imgZoom");

const imageModal = document.getElementById("imgModal");

for (i = 0; i < imageButtons.length; i++) {
  button = imageButtons[i];
  button.onclick = function() {
    const img = this.children[0].children[0];
    const mimg = imageModal.children[1];
    const capt = imageModal.children[2];
    mimg.src = img.src;
    mimg.alt = img.alt;
    capt.innerHTML = img.alt;
    imgModal.style.display = "block";
  }
}

imageModal.children[0].onclick = function() {
  imageModal.style.display = "none";
}