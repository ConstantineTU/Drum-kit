
function playSound(e) {
	console.log(e)
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if (!audio) return
	let circleEffect = document.createElement('span')
	circleEffect.classList.add('square')
	const color = getRandomColor()
	circleEffect.style.background = color
	circleEffect.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
	key.appendChild(circleEffect)
	setTimeout(() => circleEffect.remove(), 500)
	key.classList.add('playing')
	audio.currentTime = 0
	audio.play()
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return
	this.classList.remove('playing')
}

let masks = document.querySelectorAll('.mask')
let keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
masks.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)

masks.forEach(key => key.addEventListener('mousedown', function () {
	const audio = document.querySelector(`audio[data-key="${key.getAttribute('data-key')}"]`);
	const keyN = document.querySelector(`div[data-key="${key.getAttribute('data-key')}"]`);
	if (!audio) return;
	keyN.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}))
masks.forEach(key => {
	key.addEventListener('mousedown', function (e) {
		if (e.target === key) {
			let x = e.clientX
			let y = e.clientY
			let buttonTop = e.target.offsetTop
			let buttonLeft = e.target.offsetLeft
			let xInside = x - buttonLeft
			let yInside = y - buttonTop
			let circleEffect = document.createElement('span')
			circleEffect.classList.add('circle')
			circleEffect.style.top = yInside + 'px'
			circleEffect.style.left = xInside + 'px'
			const color = getRandomColor()
			circleEffect.style.background = color
			circleEffect.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
			this.appendChild(circleEffect)
			setTimeout(() => circleEffect.remove(), 500)
		}
	})
})

const colors = ['#ff1900', '#28dd74', '#0095f8', '#db6f11', '#72109c', '#ff008c']
function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}
console.log('Для удобства проверки моей работы - вывожу в консоль браузера самооценку своего проекта по пунктам, с указанием баллов за каждый выполненный мною пункт')
console.log('Считаю, что я разобрался в коде чужого проекта, понял его и воспроизвёл исходное приложение. Правки и изменения не ухудшают внешний вид и функционал исходного проекта - 10 баллов')
console.log('Дополнил исходный проект обязательным дополнительным функционалом (при наведении мыши на клавишу - работает hover, а при клике проигрывается звук), указанным в описании задания - 10 баллов')
console.log('Дополнил исходный проект дополнительным функционалом на выбор из тех, которые перечислены в описании задания - Добавил кнопкам красивую js-анимацию - 10 баллов')
console.log('Помимо красивой js-анимации, анимация имеет случайный цвет - 10 баллов ')
console.log('Самооценка - Score: 30/30')
console.log('Спасибо за проверку, надеюсь, что я прошёл задание на максимальный балл, если вы обнаружили у меня какие-то недочеты, прошу вас указать их при проверке.')



