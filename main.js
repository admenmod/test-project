'use strict';
let galleryEl = document.querySelector('.gallery');
let frequentQuestionsEl = document.querySelector('.frequent-questions');


let countQustions = 0;

let templates = {
	galleryItem(p = {}) { return `<div class="gallery-item">
		<div class="text">${p.text}</div>
		<img class="image" src="${p.src}" />
	</div>`; },
	
	questionItem(p = {}) {
	countQustions++;
	
	return `<div class="question-item">
		<p class="question"><b>Вопрос ${countQustions}:</b> ${p.question}</p>
		<hr>
		<p class="answer"> Ответ: <i>${p.answer}</i></p>
	</div>`; }
};

class BaseHTMLElement {
	constructor(type, p = {}) {
		let el = document.createElement(type);
		(p.classes || []).forEach(i => el.classList.add(i));
		
		this.rootEl = el;
	}
};


class ImageTextHTMLElement extends BaseHTMLElement {
	constructor(p = {}) {
		super('div', p);
		this.rootEl.classList.add('gallery-item');
		
		this.titleText = p.title||'title';
		this.imageSource = p.src;
		
		this.rootEl.innerHTML = `
			<div class="title">${this.titleText}</div>
			<img class="image" src="${this.imageSource}" />`;
	}
};


class QuestionHTMLElement extends BaseHTMLElement {
	constructor(p = {}) {
		super('div', p);
		this.rootEl.classList.add('question-item');
		
		this.questionText = p.question||'question';
		this.answerText = p.answer||'answer';
		
		this.rootEl.innerHTML = `
			<div class="question"><b>Вопрос</b> : ${this.questionText}</div>
			<p class="answer">Ответ : <i>${this.answerText}</i></p>`;
	}
};


let elements = [];

elements.push(new ImageTextHTMLElement({
	text: 'lffldl',
	src: 'https://www.barbeku-msk.ru/images/styles/style-m2.jpg'
}));


for(let i = 0; i < elements.length; i++) {
	galleryEl.append(elements[i].rootEl);
};

frequentQuestionsEl.append(new QuestionHTMLElement({
	question: 'yfhicfu',
	answer: 'kdkdkkddk dndnd nekw e e eekkekd e e kekekejf k vodkkd'
}).rootEl);
