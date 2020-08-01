const hamburger = document.querySelector('.hamburger')
// const hamburger = document.getElementsByClassName('hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')
console.log(hamburger);
	// console.log('dd');
// hamburger.onclick = function(){
// 	console.log('dd');
// 	// navLinks.classList.toggle('open')
// }
hamburger.addEventListener('click',() =>{
	// console.log(links);
	navLinks.classList.toggle('open')
	links.forEach(link => {
		link.classList.toggle('fade')
	})
})