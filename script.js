// Создаем кнопку и добавляем ее на страницу
const button = document.createElement('button');
button.textContent = 'Нажми меня';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';

document.body.appendChild(button);

// Добавляем обработчик события для кнопки
button.addEventListener('click', () => {
    alert('Привет! Ты нажал на кнопку!');
});
