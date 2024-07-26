const dogImage = document.getElementById('dogImage');
const dogBtn = document.getElementById('dogBtn');

const getNewDog = () => {
	fetch('https://dog.ceo/api/breeds/image/random').then((Response) => Response.json()).then((json) => {
		dogImage.innerHTML = `<img src='${json.message}'/>`;
	});
};

dogBtn.onclick = () => getNewDog();
