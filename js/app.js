

	// let container = document.querySelector('.container');
	// container.style.display='block';

let contain = setTimeout(()=>{
	let container = document.querySelector('.container');
	container.style.display='block';
},3000);




const navSlide = () =>
{
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let nav_links = document.querySelectorAll('.nav ol li');
let resume_btn = document.querySelector('.resume-btn');
let blur_effect = document.querySelector('.fill');

	

burger.addEventListener('click',()=>{
	let time;
	console.log('clicked');
	nav.classList.toggle('nav-active');
	blur_effect.classList.toggle('blur');
	nav_links.forEach((links,index)=>{
		if(links.style.animation){
			links.style.animation = '';
		}
		else{
			links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
		}
	});
	burger.classList.toggle('toggle');

});
}


const app = () =>
{
    navSlide();
}

app();