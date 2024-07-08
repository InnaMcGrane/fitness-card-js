function createElement(html) {
  const element = document.createElement("div");
  element.insertAdjacentHTML("beforeend", html);
  return element.firstElementChild;
}

class Card {
  constructor(title, time, icon) {
    this.title = title;
    this.time = time;
    this.icon = icon;
    this._init();
  }

  _init() {
		// подготовка шаблона из строки в реальные элементы
    this._element = createElement(this._getTemplate());
		// навешивание слушателей
		this._addListeners()
  }

  _getTemplate() {
    return ` <div class="fitness-card">
        <div class="fitness-card__top">
          <span class="fitness-card__intencity">0</span>
          <div class="fitness-card__content">
            <h3 class="fitness-card__title">${this.title}</h3>
            <span class="fitness-card__time"> ${this.time}</span>
          </div>
          <i class="fa-solid fa-${this.icon}"></i>
        </div>
        <div class="fitness-card__bottom">
          <button class="btn btn--favorite">favorite</button>
          <button class="btn btn--intencity-plus">intencity +</button>
          <button class="btn btn--intencity-minus">intencity -</button>
          <button class="btn btn--finish">finish</button>
        </div>
      </div> `;
  }

	/* 
	
	- надо менять число в блоке fitness-card__intencity
	- жмем на кнопку +(навесить addEventListener) внутри функции будет логика:
	- ищем элемент который будем изменять (fitness-card__intencity)
	- в найденном элементе textContent изменять 0 на 1 и тд
	
	*/

  _addListeners() {
    this._element.querySelector(".btn--favorite").addEventListener("click", () => {
      this._element.classList.toggle("fitness-card--favorite");
    });
    this._element.querySelector(".btn--intencity-plus").addEventListener("click", () => {
        this._element.classList.toggle("fitness-card--intencity-1");
    });
    this._element.querySelector(".btn--finish").addEventListener("click", () => {
      this._element.classList.toggle("fitness-card--finish");
    });
    this._element.querySelector(".btn--intencity-plus").addEventListener("click", () => {
        const counter = this._element.querySelector(".fitness-card__intencity");
        /* 
        
        - взять старое значение элемента
        counter.textContent
        - сделать операцию старое + новое
        +counter.textContent + 1
        - перетереть старое значение новым
        counter.textContent = новое значение (1)
        */
        counter.textContent = +counter.textContent + 1;
    });
    this._element.querySelector(".btn--intencity-minus").addEventListener("click", () => {
        const counter = this._element.querySelector(".fitness-card__intencity");
        counter.textContent = +counter.textContent - 1;
    });
  
  }

  get element() {
    return this._element;
  }
}

const cardList = document.querySelector(".card-list");
const training = new Card ("Warm up", "6 minutes",)
const training1 = new Card("Swimming", "5 minutes", "person-swimming");
const training2 = new Card ("Slow down","3 minutes",)
cardList.insertAdjacentElement('beforeend',training.element)
cardList.insertAdjacentElement("beforeend", training1.element);
cardList.insertAdjacentElement('beforeend',training2.element)

