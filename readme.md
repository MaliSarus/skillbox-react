<h2>Домашняя работа Модуль 3</h2>
<h3>Разбиение компонента Card</h3>

<p>Основная идея состояла в том, чтобы разбить карточку на модули разного характера, в которых применяются разные технологии вывода и передачи данные</p>
<p>Таким образом компонент Card был разбит на 4 подкомпонента:</p>
<ul>
<li><b>Card/TextContent.tsx</b> - Компонент со статической версткой. Передача данных за счет пропсов. Простой вывод значений пропсов в разметку. Компонент служит для отображения информации о Посте. В перспективе можно внутри добавить модуль User, в котором будут рендериться аватарка и имя пользователя</li>
<li><b>Card/CardMenu.tsx</b> - Компонент выводящий кнопку меню и ,в будущем, дополнительные ее части. Просто отдельная сущность в отдельном компоненте</li>
<li><b>Card/CardControls.tsx</b> - Компонент выводящий chilren'ов внутри специфической разметки. В перспективе можно передавать внутри children отдельный компонент Karma, Так как это будет больше соответствовать принципу единой ответственности</li>
<li><b>Card/CardActions.tsx</b> - Компонент-children для компонента <b>Card/CardControls.tsx</b>. Компонент с динамической версткой, которая меняется за счет передаваемых значений в пропсах</li>
</ul>

<h3>Почему именно так?</h3>

<p>Такое разбиение сделано по следующим причинам:</p>
<ol>
<li>Из-за идеи продемонстрировать понимание различных способов передачи и отображения данных</li>
<li>Потому что считаю, что на данном этапе делать супер-глубокую композицию будет излишне.</li>
</ol>

<h3>Card/TextContent.tsx</h3>
<p>Вопросы:</p>
<ol>
<li>что вы делаете на этом шаге?</li>
<li>зачем / для чего?</li>
<li>какой результат вам это дает?</li>
</ol>

<p>Ответы</p>
<ol>
<li>Выношу <b>постоянно повторяющуюся</b> часть компонента карточки в отдельную сущность</li>
<li>Из-за того, что, предположительно, структура описания поста будет одинакова везде, легче хранить разметку этих данных как отдельный include-component, куда будут передаваться данные в виде одинаковой структуры</li>
<li>Более легкое отслеживание разметки и понимание того, как должна выводиться информация о посте</li>
</ol>

<h3>Card/CardMenu.tsx</h3>
<p>Вопросы:</p>
<ol>
<li>что вы делаете на этом шаге?</li>
<li>зачем / для чего?</li>
<li>какой результат вам это дает?</li>
</ol>

<p>Ответы</p>
<ol>
<li>Выношу отдельную сущность в отдельный компонент</li>
<li>Чтобы в будущем реализовывать логику и функционал данной сущности в рамках собственного компонента</li>
<li>Придерживаемость концепции единой отвественности, более удобное поддерживание логики и фукнционала сущности</li>
</ol>

<h3>Card/CardСontrols.tsx</h3>
<p>Вопросы:</p>
<ol>
<li>что вы делаете на этом шаге?</li>
<li>зачем / для чего?</li>
<li>какой результат вам это дает?</li>
</ol>

<p>Ответы</p>
<ol>
<li>Выношу специфическую обертку карточки, внутри которой может быть <b>что угодно</b> в отдельный компонент</li>
<li>Чтобы существовало отдельное поле карточки для контролов, которая настравиается и стилизуется как независимый компонент, а не часть карточки. А так же чтобы контролы внутри можно было стилизовать по принципу БЭМ, где блоком является сам компонент, а его элементами - контролы</li>
<li>Существование отдельного контейнера для разных контролов, даже в виде отдельного компоенента</li>
</ol>

<h3>Card/CardActions.tsx</h3>
<p>Вопросы:</p>
<ol>
<li>что вы делаете на этом шаге?</li>
<li>зачем / для чего?</li>
<li>какой результат вам это дает?</li>
</ol>

<p>Ответы</p>
<ol>
<li>Выношу динамически формируемый набор элементов в отдельный компонент</li>
<li>Так как в дизайне были отображены разные кнопки в зависимости от состояний карточки, я подумал, что было бы неплохо сделать отдельный компонент-хранилище всех доступных кнопок, которые можно выводить в зависимости от того, нужная ли конктретная кнопка в данный момент</li>
<li>Задел на будущее</li>
</ol>