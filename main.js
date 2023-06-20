// for box-2
window.onload = () => {
  setTimeout(() => {
    let innerClass1 = document.querySelector('.inner-1').getAttribute('class');
    let innerClass2 = document.querySelector('.inner-2').getAttribute('class');
    innerClass1 += ' extend';
    innerClass2 += ' extend';
    document.querySelector('.inner-1').setAttribute('class', innerClass1);
    document.querySelector('.inner-2').setAttribute('class', innerClass2);
  }, 2000);
};
// for box-5
function operation(mode) {
  const nodeList = document.querySelectorAll('.box-5 .list li .animation');
  nodeList.forEach((node) => {
    node.style.animationPlayState = mode;
  });
}
