


function playSound(e) {
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if (!audio) return

	key.classList.add('playing')
	audio.currentTime = 0
	audio.play()
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return
	this.classList.remove('playing')
}

let keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
keys.forEach(key => key.addEventListener('mousedown', function () {
	const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);
	const keyN = document.querySelector(`div[data-key="${key.getAttribute('data-key')}"]`);
	if (!audio) return;

	keyN.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}))
window.addEventListener('keydown', playSound)























// function removeTransition(e) {
// 	if (e.propertyName !== 'transform') return;
// 	e.target.classList.remove('playing');
// }

// function playSound(e) {
// 	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
// 	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
// 	if (!audio) return;

// 	key.classList.add('playing');
// 	audio.currentTime = 0;
// 	audio.play();
// }

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// keys.forEach(key => key.addEventListener('mousedown', function () {
// 	const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);
// 	const keyN = document.querySelector(`div[data-key="${key.getAttribute('data-key')}"]`);
// 	if (!audio) return;

// 	keyN.classList.add('playing');
// 	audio.currentTime = 0;
// 	audio.play();
// }));
// window.addEventListener('keydown', playSound);


// function ibg() {
// 	if (isIE()) {
// 		let ibg = document.querySelectorAll("._ibg");
// 		for (var i = 0; i < ibg.length; i++) {
// 			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
// 				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 			}
// 		}
// 	}
// }
// ibg();




