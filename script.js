const bars = document.querySelectorAll('.bar');
const progress = document.querySelectorAll('.progress');
const points = 
bars.forEach((bar, index) => {
  const randomWidth = Math.floor((Math.random() * 65) + 10);
  bar.style.width = `${randomWidth}%`;


  progress[index].addEventListener('mouseover', () => {
    const randomTiming = Math.floor((Math.random() * 2) + 3);
    console.log(randomTiming);
    console.log(bar.style.width);
    bar.style.transitionDuration = `${randomTiming}s`;
    bar.style.width = '400px';
  })
  
    progress[index].addEventListener('click', () => {
    const randomTiming = Math.floor((Math.random() * 2) + 3);
    console.log(randomTiming);
    bar.style.transitionDuration = `${randomTiming}s`;
    bar.style.width = '0%';
  })
  
    if (bar.style.width = '400px'){
  return points++
    }
  // if (bar.style.width) {
  // progress[index].addEventListener('mouseover', () => {
  //   const randomTiming = Math.floor((Math.random() * 2) + 2);
  //   console.log(randomTiming);
  //   bar.style.transitionDuration = `${randomTiming}s`;
    // bar.style.width = '100%';
});
// }