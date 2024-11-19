const div = document.querySelector('div');


for (let i=1; i<=16; i++) {
    const element = document.createElement('p');
    div.appendChild(element);
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.3;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}


const elements = div.querySelectorAll('p');

elements.forEach(p => {
    p.addEventListener('mouseenter', () => {
    p.style.backgroundColor = randomColor();    
    });
});

elements.forEach(p => {
    p.addEventListener('mouseover', () => {
    p.style.backgroundColor = randomColor();    
    });
});

