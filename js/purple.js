const search = document.querySelector('.search');
const head = document.querySelector('.head');
window.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    search.style.transform = 'translate(0)';
    head.style.transform = 'translate(0)';
    search.classList.add('up');
    head.classList.add('up');
  } else {
    console.log('Down');
    search.style.transform = 'translateY(-600px)';
    head.style.transform = 'translateY(-600px)';
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}