console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('THIS IS TOTALLY SUBMITTED!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


document.querySelector('img').addEventListener('mouseover', () => {
	// alert('HEY YOU HOVERED!')
})


