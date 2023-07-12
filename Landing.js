
function opensidebar(){
  if(!document.querySelector('.l1').classList[2]){
  document.querySelector('.rest').style.filter='blur(2px)';
  document.querySelector('.hamburg').classList.add('hambur');
  document.querySelector('.l1').classList.add('transform');
  console.log( document.querySelector('.l1').classList);

  document.querySelector('.l2').classList.add('transform2');
  document.querySelector('.l3').classList.add('transform3');
  document.querySelector('.sidenav').style.display='flex';
  document.querySelector('.nav-bar').style.position='fixed';

}
  else if(document.querySelector('.l1').classList[2]){
    document.querySelector('.rest').style.filter='blur(0px)';
    document.querySelector('.hamburg').classList.remove('hambur');

    document.querySelector('.l1').classList.remove('transform');
  console.log( document.querySelector('.l1').classList);

  document.querySelector('.l2').classList.remove('transform2');
  document.querySelector('.l3').classList.remove('transform3');
  document.querySelector('.sidenav').style.display='none';}
  document.querySelector('.nav-bar').style.position='fixed';
  

  }

function carousel(x){
  document.querySelector('.i'+x).style.zIndex='4';

  

}
const text=document.querySelector('.text p');
text.innerHTML =text.innerText.split("").map(
  (char,i)=>
  `<span style="transform:rotate(${i*10}deg)"> ${char} </span>`).join("");





  // Specify the number of pixels to scroll before triggering the function
const scrollThreshold = 900;

// Function to be executed when the scroll threshold is reached
function onScrollThreshold() {
  // Your code here

  // Perform any actions you want after reaching the scroll threshold
}

// Event listener for the scroll event
window.addEventListener("scroll", function() {
  // Calculate the scroll position
  const scrolledPixels = window.pageYOffset || document.documentElement.scrollTop;
  
  // Check if the scroll threshold is reached
  if (scrolledPixels >= scrollThreshold) {
    // Call the function when the threshold is reached
    onScrollThreshold();
  }
});

function show(x){
  if(window.innerWidth>=850){ document.querySelector('.social-id ').querySelectorAll('span')[x].style.visibility='visible';}
 
}
function hide(x){
  if(window.innerWidth>=850){ document.querySelector('.social-id ').querySelectorAll('span')[x].style.visibility='hidden';}
 
}