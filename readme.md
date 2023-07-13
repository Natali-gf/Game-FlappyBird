ФУНКЦИОНАЛЬНЫЕ ТРЕБОВАНИЯ
+ Птица не должна улетать за границы поля. Если птица касается земли, игра заканчивается, если «потолка» — игра продолжается.
+ Если птица касается трубы, игра заканчивается.
+ При клике на окно игры птица подлетает вверх на высоту, равную половине высоты свободного промежутка в трубе.
+ При бездействии игрока птица падает с ускорением.
+ Свободный промежуток в трубе занимает 25 % высоты трубы.
+ Высота птицы составляет 20 % от высоты свободного промежутка в трубе.
+ Ширина трубы вдвое больше ширины птицы.
+ Расстояние между трубами равно ширине трёх труб.
+ Птица двигается с такой скоростью, что новые трубы появляются каждую секунду.
Подсчитывается текущее количество баллов. Оно увеличивается, когда птица преодолевает середину свободного промежутка в трубе.
+ Лучший результат игрока (максимальное количество набранных баллов) сохраняется в localStorage и отображается под текущим количеством баллов, если игра запускается не в первый раз.
+ Птица анимирована (вращается при движении в сторону полёта).

ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ
+ - добавить в игру увеличение уровня сложности при достижении определённого количества очков и альтернативный способ управления;
+ - адаптировать игру под мобильные устройства (от 360 px до 1024 px);
+ - добавить в игру звуки с использованием Audio API.
