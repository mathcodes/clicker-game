const bars = document.querySelectorAll('.bar');
const progress = document.querySelectorAll('.progress');
const pointsDiv = document.querySelectorAll('.pointsDiv');
points = 0;

bars.forEach((bar, index) => {
  const randomWidth = Math.floor((Math.random() * 65) + 10);
  bar.style.width = `${randomWidth}%`;


  progress[index].addEventListener('click', () => {
    const randomTiming = Math.floor((Math.random() * 2) + 3);
    console.log(randomTiming);
    console.log(bar.style.width);
    bar.style.transitionDuration = `${randomTiming}s`;
    bar.style.width = '100%';
  })

  progress[index].addEventListener('dblclick', () => {
    const randomTiming = Math.floor((Math.random() * 2) + 3);
    console.log(randomTiming);
    console.log(bar.style.width);
    bar.style.transitionDuration = `${randomTiming}s`;
    bar.style.width = '0%';
   })
});
   
