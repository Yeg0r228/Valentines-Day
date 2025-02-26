console.log('Script connected');

const arrayOfLoveWishes = [
    'Кохання це не тільки слова, це почуття, яке виражається вчинками.',
    'Вмієте любити - вмієте жити. Вмієте жити - вмієте любити.',
    'Любов - це велика сила, яка може змінити світ.',
    'Любов - це найкраще, що може бути в житті.',
    'Кохання - це коли ти не можеш уявити своє життя без іншої людини.',
    'Любов - це коли ти готовий зробити все заради щастя іншої людини.',
    'Кохання - це коли ти відчуваєш себе щасливим, просто дивлячись на іншу людину.',
    'Любов - це коли ти готовий пробачити всі помилки іншої людини.',
    'Кохання - це коли ти відчуваєш себе повним, коли інша людина поруч.',
    'Любов - це коли ти готовий поділитися всім, що маєш, з іншою людиною.',
    'Кохання - це коли ти відчуваєш себе захищеним поруч з іншою людиною.',
    'Любов - це коли ти готовий підтримати іншу людину у всіх її починаннях.',
    'Кохання - це коли ти відчуваєш себе щасливим, просто знаючи, що інша людина щаслива.',
    'Любов - це коли ти готовий зробити все, щоб інша людина відчувала себе коханою.',
    'Кохання - це коли ти відчуваєш себе живим поруч з іншою людиною.',
    'Любов - це коли ти готовий прийняти всі недоліки іншої людини.',
    'Кохання - це коли ти відчуваєш себе натхненним поруч з іншою людиною.',
    'Любов - це коли ти готовий зробити все, щоб інша людина була щаслива.',
    'Кохання - це коли ти відчуваєш себе повним поруч з іншою людиною.',
    'Любов - це коли ти готовий зробити все, щоб інша людина відчувала себе коханою.'
];

let countofHearts = 5;
console.log('countofHearts ' + countofHearts);

document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countofHearts);

document.getElementById('btn_love_wishes').addEventListener('click', () => {
    console.log('Button clicked');
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
    document.getElementById('p_love_wishes').innerText = arrayOfLoveWishes[index];

    countofHearts--;
    console.log('countofHearts ' + countofHearts);
    document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countofHearts) + '🤍'.repeat(5 - countofHearts);

    if (countofHearts === 0) {
        document.getElementById('btn_love_wishes').style.display = 'none';
    }
});

document.getElementById('btn-buy-wishes').addEventListener('click', () => {
    countofHearts = 5;
    document.getElementById('count-of-hearts').innerText = '🧡'.repeat(countofHearts);
    document.getElementById('btn_love_wishes').style.display = 'inline-block';
    document.getElementById('p_love_wishes').innerText = '';
    console.log('btn-buy-wishes clicked');
});