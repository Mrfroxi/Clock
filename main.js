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

const formatDate = num => {
    return num<10 ? ['0' ,num.toString()] : num.toString().split('');
}
//Возвращает массив чисел 
let datetime = () => {
const now = new Date();
const hour =formatDate(now.getHours());
const  minet = formatDate(now.getMinutes());
 const second =formatDate( now.getSeconds());
return{ hour,minet,second}
}



console.log(datetime())


document.querySelector('span');
