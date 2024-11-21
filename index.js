const div = document.querySelector('div');
const btn = document.querySelector('.btn');

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.5;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

btn.addEventListener('click', () => {
    let newGrid = prompt('Введите количество ячеек:');
    if (newGrid <= 0 || isNaN(newGrid)) {
        alert ('Введите корректное число больше 0!');
    return;
    } else if (newGrid >= 100) {
        alert ('Введите число меньше 100');
        return;
}
    div.innerHTML = '';
    
    const cellSize = Math.floor (520 / newGrid);

    for (let i = 1; i <= newGrid * newGrid; i++) {
        const element = document.createElement('p');
        element.style.width = `${cellSize}px`;
        element.style.height = `${cellSize}px`;
        element.style.boxSizing = 'border-box';
        div.appendChild(element);
    
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = randomColor();    
        });
    }

});
