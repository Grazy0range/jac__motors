<?php

$compls = file_get_contents("update-price/stock.json");
$res = json_decode($compls, true);

$STOCK = [];
$cnt = 0;

foreach ($res as $model => $value) {
  $search = [" new", " New", " 2021", " rest"];
  $replace = ["", "", "", ""];
  $model = str_replace($search, $replace, $model);
  $STOCK[$model]["price"] = number_format($value['complictations'][0]['new_cost'], 0, "", " ");
  $STOCK[$model]["recprice"] = number_format($value['complictations'][0]['old_cost'], 0, "", " ");
  $STOCK[$model]["credit"] = number_format($value['complictations'][0]['credit'], 0, "", " ");
  $STOCK[$model]["name"] = $model;

  foreach ($value["complictations"] as $key => $compl) {
    $STOCK[$model]["compl"][$key]["price"] = $compl['new_cost'];
    $STOCK[$model]["compl"][$key]["recprice"] = $compl['old_cost'];
  }
} ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/style-table.css">
  <link rel="stylesheet" href="css/style-mob.css">
  <link rel="stylesheet" href="css/pop-up.css">
  <title>Дилерский центр JAC</title>
</head>

<body>
  <div class="header">
    <div class="header__wrapper">
      <header>
        <a href="#" class="header__logo"></a>
        <div class="header__info">
          <small>пн-вс с 9:00 до 21:00</small>
          <small>москва, 38 км мкад 6бс1</small>
        </div>
      </header>
      <h1 class="header__h1">финальная<br><span>распродажа</span></h1>
      <div class="header__sale js-modal" data-src="#credit-offer">СКИДКА ОТ <span> 70 000 ₽</span> ПРИ ПОКУПКЕ <span> В КРЕДИТ</span></div>
    </div>
    <div class="header__slide">
      <div class="header__phone open">
        <span></span>
        <p class="phone__txt js-modal" data-src="#feedback">обратный звонок</p>
        <div class="header__call js-modal" data-src="#feedback">
          <img src="img/phone.svg" alt="phone" class="icon-phone">
        </div>
      </div>

      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <? foreach ($STOCK as $model) : ?>
            <div class="swiper-slide">
              <div class="swiper__text">
                <h2 class="car__name"><?= $model['name'] ?></h2>
                <p class="car__cur">осталось в наличии: <?= rand(2, 4) ?> шт</p>
              </div>
              <img src="img/cars/<?= strtoupper($model['name']) ?>/0.png" alt="car" class="sw__car">
              <div class="swiper__price">
                <p class="price-txt">подарки при покупке:</p>
                <div class="swiper-wrapper">
                  <div class="price-one js-modal" data-src="#credit-offer">3 платежа<span>по кредиту</span></div>
                  <div class="price-two js-modal" data-src="#personal-offer">КАСКО</div>
                  <div class="price-three js-modal" data-src="#personal-offer">100 литров<span>бензина</span></div>
                </div>
              </div>
            </div>
          <? endforeach; ?>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </div>
  <main class="container">
    <section class="cont__one">
      <div class="cont__one-text">
        <h2>преимущества</h2>
        <div class="cont__block">
          <p>Зачет вашего авто в TRADE-IN</p>
          <p>Кредит без первоначального взноса</p>
          <p>Гарантия лучшей цены</p>
        </div>
        <div class="header__phone">
          <span></span>
          <p class="phone__txt js-modal" data-src="#personal-offer">подробнее</p>
        </div>
      </div>
      <div class="cont__one-car">
      </div>
      <hr>
    </section>
    <section class="cont__two">
      <h2>модельный ряд</h2>
      <div class="cont__model-car">
        <? foreach ($STOCK as $model) : ?>
          <div class="car__card">
            <div class="car-elps">
              КРЕДИТ 5.5%
              <span>БЕЗ ВЗНОСА</span>
            </div>
            <p class="car-name"><?= $model['name'] ?></p>
            <s><?= $model['recprice'] ?> ₽</s>
            <div class="car__card-img"><img src="img/cars/<?= strtoupper($model['name']) ?>/<?= rand(0, 2) ?>.png" alt="car" class="car-img"></div>
            <p class="car-price">от <?= $model['price'] ?> ₽</p>
            <span>В кредит от <?= $model['credit'] ?> ₽/мес.</span>
            <div class="car-btn">
              <button class="btn1 js-modal" data-src="#credit-offer">в кредит от <?= $model['credit'] ?> ₽/м</button>
              <button class="btn2 sale js-modal" data-src="#personal-offer">получить предложение</button>
            </div>
          </div>
        <? endforeach; ?>
      </div>
      <div class="cont__model-btn">
        <div class="header__phone">
          <span></span>
          <p class="phone__txt" data-src="#personal-offer">еще модели</p>
        </div>
      </div>
      <h2>автокредит</h2>
    </section>
    <section class="cont__three">
      <hr class="hr">
      <hr>
      <div class="cont__three-block">
        <h2>автокредит</h2>
        <div class="cont__three-block2">
          <form class="form">
            <span>НОВЫЙ АВТОМОБИЛЬ</span>
            <p>В КРЕДИТ ОТ 5 900 ₽/МЕС.</p>
            <input type="text" placeholder="имя" name="name" required>
            <input type="tel" placeholder="+7 (___) ___-__-__" name="phone" required>
            <button type="submit">рассчитать кредит</button>
          </form>
        </div>
      </div>
    </section>
    <section class="cont__four">
      <div class="cont__four-line"></div>
      <h2>автомобили в наличии</h2>
      <div class="equipment__inp">
        <select class="select1" name="model" style="width: 350px; height: 60px;" id="selectModel">
          <option>Модель</option>
          <? foreach ($STOCK as $model) : ?>
            <option value="<?= $model['name'] ?>"><?= strtoupper($model['name']) ?></option>
          <? endforeach; ?>
        </select>
        <select class="select2" name="oil" id="sl2" style="width: 350px; height: 60px;">
        </select>
      </div>
      <div class="jac compl-wrapper">
        <!-- Не удалять, сюда подгружаются комплектации -->
      </div>
      <h2>КОНТАКТЫ</h2>
    </section>
    <section class="cont__five">
      <div class="five__info">
        <h3>JAC</h3>
        <p>Официальный дилер</p>
        <div class="info-icon">
          <img src="img/icon1.svg" alt="icon">
          <small>+7 (495) 407-79-23</small>
        </div>
        <div class="info-icon">
          <img src="img/icon2.svg" alt="icon">
          <small>пн-вс с 9:00 до 21:00</small>
        </div>
        <div class="info-icon">
          <img src="img/icon3.svg" alt="icon">
          <small>гор. Москва, 38км МКАД, владение 6</small>
        </div>
        <button class="info-btn js-modal" data-src="#feedback">Обратный звонок</button>
      </div>
      <div id="map" class="map__block"></div>
    </section>
  </main>
  <footer>
    <h3 class="footer__h3">подробная информация</h3>
    <div class="footer__block">
      ООО "АВТО КОНТ", ИНН 9725073740, ОГРН 1227700058574 от 9 февраля 2022 г.
      Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких
      условиях не является публичной офертой, определяемой положением ч. 2 ст. 437 Гражданского кодекса Российской
      Федерации. Годовая ставка автокредита достигается путем суммирования дисконтов за включение ряда услуг банка.
      Минимальный срок погашения от 61 дня, максимальный 84 месяца. Подробности в отделе продаж. Пользователь данного
      интернет-ресурса обратившийся, через специальные формы связи, размещённые на данном сайте, а также по средствам
      телефонного звонка, выражает свое безусловное согласие продолжить устную или письменную коммуникацию с помощью
      электронных средств связи, в т.ч.: sms-информирование, e-mail-рассылка и пр. JAC оказывает услуги кредитования и
      страхования с помощью партнеров: Банк-партнер: ПАО «Банк ВТБ» . Генеральная лицензия
      Банка № 1000 от 08.07.2015 без ограничения срока действия. Партнер по страхованию: ПАО СК «Росгосстрах».
      Генеральная лицензия СЛ № 0001
      от 06.06.2018 без ограничения срока действия.
    </div>
    <div class="header__phone">
      <!-- <span></span> -->
      <p class="phone__txt js-hidden"><span>свернуть</span><span style="display: none;">показать</span></p>
    </div>
    <div class="line3">

    </div>
  </footer>
  <div class="custom-model-main" id="feedback">
    <div class="custom-model-inner">
      <div class="close-btn">&#10006</div>
      <div class="form-feed-back">
        <div class="frm-fb">
          <h3 class="frm-str">ОБРАТНЫЙ ЗВОНОК</h3>
          <form action="" class="pop-up">
            <p class="pop-up-txt pop-up-txt_correct">Заполните завку и мы<br>Вам перезвоним!</p>
            <!-- <input class="benefit__pop" name="name" type="text" placeholder="имя"> -->
            <input class="benefit__pop" name="phone" type="tel" placeholder="+7 (___) ___-__-__">
            <button class="pop__btn" type="submit">получить предложение</button>
            <!-- <label class="benefit__small pop-s">
                                <input class="hidden-check" type="checkbox" name="a" value="" checked>
                                <span class="custom-check2"></span>Согласие на обработку персональных данных
                            </label> -->
          </form>
        </div>
      </div>
    </div>
    <div class="bg-overlay"></div>
  </div>
  <!-- sale -->
  <div class="custom-model-main" id="personal-offer">
    <div class="custom-model-inner">
      <div class="close-btn">&#10006</div>
      <div class="form-feed-back2">
        <div class="frm-fb2">
          <h3 class="frm-str2">финальная распродажа!</h3>
          <p class="frm-str3"><span>скидка от 70 000 ₽ <br> при оформлении кредита</span></span></p>
          <form action="" class="pop-up2">
            <p class="pop-up-txt">Успейте получить самое выгодное предложение.<br>Оставьте свой номер, мы вам перезвоним
            </p>
            <input class="benefit__pop" name="phone" type="tel" placeholder="+7 (___) ___-__-__">
            <!--div class="wrapper-block">
                                <div class="block-one">
                                    <span></span>
                                    <small>ПЕРЕЗВОНИТЬ СЕЙЧАС</small>
                                </div>
                                <div class="block-two">
                                    <span></span>
                                    <small>ВЫБРАТЬ ВРЕМЯ</small>
                                </div>
                            </div-->
            <button class="pop__btn" type="submit">получить предложение</button>
            <!-- <label class="benefit__small pop-s">
                                <input class="hidden-check" type="checkbox" name="a" value="" checked>
                                <span class="custom-check2"></span>Согласие на обработку персональных данных
                            </label> -->
          </form>
        </div>
      </div>
      <div class="personal__offer_car"><img src="img/personal_offer_car.png" alt="car"></div>
    </div>
    <div class="bg-overlay"></div>
  </div>
  <!-- credit -->
  <div class="custom-model-main" id="credit-offer">
    <div class="custom-model-inner">
      <div class="close-btn">&#10006</div>
      <div class="form-feed-back2">
        <div class="frm-fb2">
          <h3 class="frm-str2">Ставка от 5.5%!</h3>
          <p class="frm-str3"><span>СКИДКА ОТ 70 000 ₽</span><br><span>ПРИ ПОКУПКЕ В КРЕДИТ</span></p>
          <form action="" class="pop-up2">
            <p class="pop-up-txt">Успейте получить самое выгодное предложение.<br>Оставьте свой номер, мы вам перезвоним
            </p>
            <input class="benefit__pop" name="phone" type="tel" placeholder="+7 (___) ___-__-__">
            <button class="pop__btn" type="submit">Получить кредит</button>
            <!-- <label class="benefit__small pop-s">
                                <input class="hidden-check" type="checkbox" name="a" value="" checked>
                                <span class="custom-check2"></span>Согласие на обработку персональных данных
                            </label> -->
          </form>
        </div>
      </div>
    </div>
    <div class="bg-overlay"></div>
  </div>
  <!-- thanks -->
  <div class="custom-model-main" id="thanks">
    <div class="custom-model-inner">
      <div class="close-btn">&#10006</div>
      <div class="form-feed-back2">
        <div class="frm-fb2">
          <h3 class="frm-str2">Ваша заявка отправлена!</h3>
          <p class="frm-str3"><span>СОВСЕМ СКОРО</span><br><span>с вами свяжется наш менеджер!</span></p>
        </div>
      </div>
    </div>
    <div class="bg-overlay"></div>
  </div>
  <!-- already -->
  <div class="custom-model-main" id="already">
    <div class="custom-model-inner">
      <div class="close-btn">&#10006</div>
      <div class="form-feed-back2">
        <div class="frm-fb2">
          <h3 class="frm-str2">Вы уже отправляли заявку!</h3>
          <p class="frm-str3"><span>СОВСЕМ СКОРО</span><br><span>с вами свяжется наш менеджер!</span></p>
        </div>
      </div>
    </div>
    <div class="bg-overlay"></div>
  </div>
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js"></script>
  <script src="https://api-maps.yandex.ru/2.1/?apikey=f2603d79-1d7f-44f3-8334-697a7a2e63a0&lang=ru_RU" type="text/javascript"></script>
  <script src="js/main.js"></script>
  <script src="js/feat.js"></script>
  <script src="js/catalog_script.js"></script>
  <script type="text/javascript">
    ymaps.ready(function() {
      var myMap = new ymaps.Map('map', {
        center: [55.596666, 37.512586],
        zoom: 16,

      })
      myMap.geoObjects.add(new ymaps.Placemark([55.596666, 37.512586], {
        balloonContent: '<strong>серобуромалиновый</strong> цвет'
      }));
      myMap.controls.remove('searchControl');
      myMap.controls.remove('geolocationControl');
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('routeEditor');
      myMap.controls.remove('rulerControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('routeButtonControl');
      myMap.controls.remove('routePanelControl');
    });
  </script>
</body>

</html>