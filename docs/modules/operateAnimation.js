const operateAnimation = () => {
  const operateBtn = document.querySelectorAll('.operate-btn');
  const calloutTitle = document.querySelector('.callout-title');

  operateBtn.forEach((btn) => {
    const mode = btn.dataset.operate;
    btn.addEventListener('click', () => {
      calloutTitle.style.animationPlayState = mode;
    });
  });
};

export default operateAnimation;
