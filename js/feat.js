const width = window.innerWidth;
const dropdownFeat = document.querySelector('#sl2');
const dropdownModel = document.querySelector('#selectModel');
const areaCar = document.querySelector('.compl-wrapper');

$(dropdownModel).change(function(e) {
	getItems(this.value, $(this).find(":selected").text());
});

$(dropdownFeat).change(function(e) {
	getItems(this.value, $(this).find(":selected").text(), true);
});

async function getItems(model, name, engine) {
  await fetch('./update-price/stock.json')
    .then(response => response.json())
    .then(data => stock = Object.values(data))
    .then(data => filterValue(data, model, name, engine));
}

// Фильтруем массив моделей
function filterValue(stock, value, name, engine) {
    
    let modelArr;
    let newModelArr = stock;
    
    if (value) {
       modelArr = stock.filter(item => item.model === value);
    } else {
        newModelArr[0] = {complictations: [], engine: null};
        
        const customizeStock = function(item) {
            item.complictations.forEach(compl => (function() {
                newModelArr[0].complictations.push(compl);
            })());
        };
        
        stock.forEach(item => customizeStock(item));
        modelArr = newModelArr;
    }
    
    // если выбран двигатель, то фильтруем комплектации и заново обновляем список
    if (engine) {
     const cars = modelArr[0].complictations.filter(car => car.engine === name);
     modelArr[0].complictations = cars;
    }
    
   renderModels(modelArr[0], engine);
}

// Отрисовываем полученные данные на сайте 
function renderModels(res, cat) {
  const {complictations:cars, engine, model:name} = res;

  if (engine !== null && !cat) {
    // Удаляем детей у комплектации
	$(dropdownFeat).html('<option disabled selected>Выберите двигатель</option>');

    // Перебираем массив с категориями (двигателем) и добавляем в список 
    engine.forEach(item => {
		dropdownFeat.append(new Option(item, name));
    });
    
    if (engine.length < 2) {
      $(dropdownFeat).val(name).trigger('change');
    }
  }
  

  if (cars !== null) {

    // Удаляем детей у комплектации
    while (areaCar.firstChild) {
      areaCar.removeChild(areaCar.firstChild);
    }

	let cnt = 0;
	let car;
	for (car of cars) {
	    
	    // Всего пять цветов, если выбран последний, а машин больше, то начинаем опять с нуля
	    if (cnt === 2) {
	        cnt = 0;
	    }
	    
		const htmlCard = 
                
                `<div class="jac__card-wr">
                    <div class="jac__card">
                        <div class="jac__txt">
                            <h3>JAC ${car.model}</h3>
                            <ul>
                                <li>${car.engine}</li>
                                <li>${car.name.split(' ')[1]}<br/>${car.name.split(' ')[2] ?? ""} ${car.name.split(' ')[3] ?? ""}</li>
                                <li>${car.power} <span>л.с</span></li>
                                <li>${car.kpp}</li>
                            </ul>
                        </div>
                        <div class="jac__car">
                            <div class="jac__block_img"><img src="./../img/cars/${car.model}/${cnt}.png" alt="car"></div>
                        </div>
                        <div class="jac__txt2">
                            <p class="jac__price">${new Intl.NumberFormat('ru-RU').format(car.new_cost)} ₽</p>
                            <s>от ${new Intl.NumberFormat('ru-RU').format(car.old_cost)} ₽</s>
                            <div class="jac__red">
                                ОСОБЫЕ УСЛОВИЯ ПРИ<br>ПОКУПКЕ В TRADE-IN
                            </div>
                            <div class="jac__red">
                                Кредит от 5.5%<br>годовых
                            </div>
                        </div>
                    </div>
                    <div class="jac__btn">
                        <button class="jac-btn1 js-modal" data-src="#credit-offer">КУПИТЬ В КРЕДИТ</button>
                        <button class="jac-btn2 js-modal" data-src="#personal-offer">получить предложение</button>
                    </div>
                </div>`;

			cnt++;
			areaCar.innerHTML += htmlCard;
    }

  }

 // Copy data-src to src
  (() => {
    const images = document.querySelectorAll('img.lazy');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
  })();

  // Replace png and webp
  function canUseWebP() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
      // was able or not to get WebP representation
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
  }
  
}

// Показываем комплектации выбранной модели по умолчанию
// $(dropdownModel).val("S7").trigger('change');
getItems(null);

// Переходим к блоку комплектации и выбираем нужную 
$('.js-select-compl').on('click', function() {
    const model = $(this).data('model');
    const destination = $('.auto-select').offset().top;
    
    $('body,html').animate({ scrollTop: destination });
    $(dropdownModel).val(model).trigger('change');
});