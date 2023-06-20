import buildDocsIndex from './modules/buildDocsIndex.js';
import playground from './modules/playground.js';
import startAnimations from './modules/startAnimations.js';
import toggleOnClick from './modules/toggle.js';
import darkModeControl from './modules/darkMode.js';
import operateAnimation from './modules/operateAnimation.js';

buildDocsIndex();
playground();
darkModeControl();
operateAnimation();

toggleOnClick('.callout-showList', 'html', 'animationList-active');
toggleOnClick('.callout-hideList', 'html', 'animationList-active');
toggleOnClick('.hamburger', 'html', 'hamburger-active');
toggleOnClick('.docs-index', 'html', 'hamburger-active');

requestAnimationFrame(startAnimations);

document.querySelectorAll('.copy-icon').forEach((icon) => {
  icon.addEventListener('click', () => {
    icon.classList.add('copied');
    document.querySelector('.copied .tooltip').textContent = 'Copied!';
    setTimeout(() => {
      icon.children[0].textContent = 'Copy class name to clipboard';
      icon.classList.remove('copied');
    }, 750);
  });
});
