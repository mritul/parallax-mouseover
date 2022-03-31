let container = document.querySelector(".art");
let layerImg = document.querySelectorAll(".layer img");

container.addEventListener("mouseover", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  layerImg[0].style.transform = `translate(${(x / 100) * -8}px,${
    (y / 100) * -8
  }px)`;
  layerImg[1].style.transform = `translate(${(x / 100) * -8}px,${
    (y / 100) * -8
  }px)`;
  layerImg[2].style.transform = `translate(${(x / 100) * -15}px,${
    (y / 100) * -15
  }px)`;
  layerImg[3].style.transform = `translate(${(x / 100) * -15}px,${
    (y / 100) * -15
  }px)`;
  layerImg[4].style.transform = `translate(${(x / 100) * -10}px,${
    (y / 100) * -10
  }px)`;
});
