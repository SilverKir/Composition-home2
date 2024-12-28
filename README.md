# Decomposition
Весь документ можно составить из 4 компонентов:
1. Link - универсальные ссылки (в зависимости от типа ссылки, будет отображаться разный контент(с иконкой, с текстом, с картинкой))
2. LinkBlock - блоки ссылок (это блок новостей, блок навигации перед поиском, погода, посещаемое, карта Германии, Телепрограммма, Эфир, Работа над ошибками)
3. FindPanel - панель поиска
4. HeaderNews - блок переключения новостей (в него заложена логика отображения новостей)

Распределение компонентов по странице:
## 1. Header
HeaderNews
<LinkBlock >
<Link /> - ссылки новостей с иконкой 
</LinkBlock>
<Link /> - ссылка Работа над ошибками

## 2. Body
<FindPanel/> - панель поиска
<Link/> - ссылка Все найдетс

<LinkBlock> - блок рекламы
<Link/> - реклама
<LinkBlock/> - блок рекламы
## 3. Footer
<LinkBlock> - блок погоды
<Link/> - погода
<LinkBlock/> - блок погоды

<LinkBlock> - блок посещаемое
<Link/> - погода
<LinkBlock/> - блок посещаемое