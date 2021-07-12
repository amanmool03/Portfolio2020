let cursor = document.querySelector('.cursor1');
let cursor_inner = document.querySelector('.cursor-inner');
let nav_links = document.querySelectorAll('.nav ol li');

window.addEventListener("mousemove",(e)=>{
	cursor.style.top = (e.pageY - scrollY) + 'px';
	cursor.style.left = e.pageX  + 'px';

	// cursor.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")

	// cursor.style.transform = "translate3d(" + (e.clientX) + "px, " + (e.clientY) + "px, 0px)";
})

window.addEventListener("mousemove",(e)=>{
	// cursor_inner.style.top = (e.clientY - scrollY) + 'px';
	// cursor_inner.style.left = e.clientX + 'px';

	cursor_inner.style.top = (e.pageY - scrollY) + 'px';
	cursor_inner.style.left = e.pageX + 'px';
})

nav_links.forEach(link =>{
	link.addEventListener('mouseover',()=>{
		cursor.classList.add("link-grow");
	});

		link.addEventListener('mouseleave',()=>{
		cursor.classList.remove("link-grow");
	})
})

document.addEventListener('mousedown' , ()=>{
	cursor_inner.classList.add("click");
})
document.addEventListener('mouseup' , ()=>{
	cursor_inner.classList.remove("click");
})