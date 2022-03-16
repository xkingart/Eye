//get handle on elements in web page
const balls = document.getElementsByClassName('ball');
//function that tracks eye movement 
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
//loop through the two and apply translation of elements 
  for (let index = 0; index < 2; index++) {
    balls[index].style.left = x;
    balls[index].style.top = y;
    balls[index].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
