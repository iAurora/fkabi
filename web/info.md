В вёрстке используется "box-sizing: border-box;"" по умолчанию для всех элементов (_helpers.scss). Это значит, что "border" и "padding" вычитаются из размера элемента, а не увеличивают его. Из-за этого при использовании "border" на "img" может возникать нежелательный ресайз изображения на размер рамки. В этом случае для данного типа картинок нужно прописать значение "content-box". Похожие проблемы могут возникать с кодом вставленным извне. Решается так же. Например для google maps нужно прописать значение "content-box" для ".google-map-canvas" и "google-map-canvas *".

**Форматирование текста:**

* h1 - основной заголовок страницы (скорее всего отдельное поле при создании страницы, ибо обязателен и единичен)
* h2 - чёрный 13px
* h3 - серый 13px
* .bold, .italic, .underline, .strike - применяют соответствующие стили к тексту, .center выравнивает текст или заголовок по центру; при отсутвии необходимости классы можно удалить

**Изображения:**

*Описание*. В гайдлайнах прописано наличие обязательной подписи под картинками, поэтому в вёрстке предусмотрен figcaption для каждой из них вне зависимости от размера и места отображения. Если подпись не нужна, тег должен отсутствовать полностью – пустым его оставить недостаточно.

*Виды картинок*. В вёрстке предусмотрены следующие классы для картинок в блоке контента:

* .full - картинка на всю ширину по центру странцы, ширина 440px или менее
* .left-50 - картинка на 1/2 страницы слева, ширина 210px
* .right-50 - картинка на 1/2 страницы справа, ширина 210px
* .left-30- картинка на 1/3 страницы слева, ширина 140px
* .right-30 - картинка на 1/3 страницы справа, ширина 140px
* схемы проезда имеют отдельный стиль в рамках блока .maps, .right и .left для правой и левой картинки каждого ряда соотвественно, 200 x 120 px

*Lightbox*. Некоторые картинки контента могут требовать возможности увеличения по клику. Такие изображения должны помещаться в тег "a" с аттрибутом "data-lightbox". Этот атрибут имеет либо уникальное значение, если картинка одиночная, либо общее для группы картинок. В этом случае появится возможность пролистывания между ними в лайтбоксе. Так же для ссылки желательно прописать "title" равный "figcaption" картинки.

**Таблицы:**

*Типы ячеек* Таблицы в контенте имеют 2 типа ячеек ".fit" и ".long". Ячейки типа ".fit" имеют выравнивание по центру, занимают ровно ширину своего содержимого и не имеют возможности переноса на следующую строку. Перенос можно сделать вручную посредством "br". Так, например, можно разбить длинный заголовок на 2 строчки, чтобы сохранить узкую ячейку. ".long" занимает всё оставшееся место и имеет выравнивание по левому краю. Предполагается, что .long будет применяться к первой ячейке таблицы.

*Заголовок таблицы* Чёрный 13рх с выравниванием по центру. Тег может отсутствовать.