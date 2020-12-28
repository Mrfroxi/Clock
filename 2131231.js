const numbers = {
	'1': [2, 3, 6, 9, 12, 15],
	'2': [1, 2, 3, 6, 7, 8, 9, 10, 13, 14, 15],
	'3': [1, 2, 3, 6, 8, 9, 12, 13, 14, 15],
	'4': [1, 3, 4, 6, 7, 8, 9, 12, 15],
	'5': [1, 2, 3, 4, 7, 8, 9, 12, 13, 14, 15],
	'6': [1, 2, 3, 4, 7, 8, 9, 10, 12, 13, 14, 15],
	'7': [1, 2, 3, 6, 9, 12, 15],
	'8': [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 15],
	'9': [1, 2, 3, 4, 6, 7, 8, 9, 12, 13, 14, 15],
	'0': [1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 13, 14, 15],
};		

const byId = id => document.getElementById(id);

		const createEl = tag => document.createElement(tag);

		const tsc = byId('ts').children[0];
		const tmc = byId('tm').children[0];
		const thc = byId('th').children[0];

		const fill = id => {
			const el = byId(id);
			let firstNumber = createEl('div'),
				lastNumber = createEl('div');
			firstNumber.setAttribute('id', id + 'f');
			lastNumber.setAttribute('id', id + 'l');
			let childf, childl;
			for (let i = 0; i < 15; i++) {
				childf = createEl('span');
				childl = createEl('span');
				childf.setAttribute('id', id + 'f' + i);
				firstNumber.appendChild(childf);
				childl.setAttribute('id', id + 'l' + i);
				lastNumber.appendChild(childl)
			}
			el.appendChild(firstNumber);
			el.appendChild(lastNumber);
		}

		const numberToArray = number => {
			return number < 10 ? ['0', number.toString()] : number.toString().split('');
		}

		const getDate = () => {
			const date 		= new Date();
			const hours 	= numberToArray(date.getHours()), 
				  minutes 	= numberToArray(date.getMinutes()), 
				  seconds 	= numberToArray(date.getSeconds());
			return {hours, minutes, seconds}
		}

		const clearClass = children => {
			for (const child of children) {
				child.removeAttribute('class');
			}
		}
		
		const fillNumber = (el, data) => {
			const children = el.children;
			clearClass(children);
			for (let i = 0; i < data.length; i++) {
				children[data[i] - 1].classList.add('selected');
			}
		}

		const fillBlock = (id, numberArr) => {
			const children = byId(id).children;
			for (let i = 0; i < children.length; i++) {
			console.log(	fillNumber(children[i], numbers[numberArr[i]]));
			}
		}

		const getRotation = el => {
			const st = window.getComputedStyle(el, null);
			const tr = st.getPropertyValue('transform') || null;
			if (tr !== 'none') {
				const values = tr.split('(')[1].split(')')[0].split(',');
				const a = values[0];
				const b = values[1];
				const angle = Math.atan2(b, a) * (180/Math.PI);
				return angle;
			}
			return 0;
		}

		function update(){
			const {hours ,minutes, seconds } = getDate();
			fillBlock('h', hours);
			fillBlock('m', minutes);
			fillBlock('s', seconds);
			tsc.style.width = (parseInt(seconds[0] + seconds[1]) * 95 / 60) + '%';
			tmc.style.width = (parseInt(minutes[0] + minutes[1]) * 95 / 60) + '%';
			thc.style.width = (parseInt(hours[0] + hours[1]) * 95 / 24) + '%';
		}

		const init = (id) => {
			const timer = byId(id);
			const {hours ,minutes, seconds } = getDate();
			fill('h');
			fill('m');
			fill('s');
			tsc.style.width = (parseInt(seconds[0] + seconds[1]) * 95 / 60) + '%';
			tmc.style.width = (parseInt(minutes[0] + minutes[1]) * 95 / 60) + '%';
			thc.style.width = (parseInt(hours[0] + hours[1]) * 95 / 24) + '%';
			setInterval(update, 1000);
		}

		init('timer');