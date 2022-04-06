const slider = () => {

  let imgSlider = document.getElementsByClassName('imgSlider');

  let step = 0;

  let nbrImg = imgSlider.length;

  let btnleft = document.querySelector('.btnleft');
  let btnright = document.querySelector('.btnright');

  function deleteActiveImages() {
    for (let i = 0; i < nbrImg; i++) {
      imgSlider[i].classList.remove('active');
    }
  }

  btnright.addEventListener('click', function () {
    step++;
    if (step >= nbrImg) {
      step = 0;
    }
    deleteActiveImages();
    imgSlider[step].classList.add('active');
  });

  btnleft.addEventListener('click', function () {
    step--;
    if (step < 0) {
      step = nbrImg - 1;
    }
    deleteActiveImages();
    imgSlider[step].classList.add('active');
  })

  setInterval(function () {
    step++;
    if (step >= nbrImg) {
      step = 0;
    }
    deleteActiveImages();
    imgSlider[step].classList.add('active');
  }, 20000)
};

export { slider };
