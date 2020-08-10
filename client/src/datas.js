import imgCat from './img/cat.svg';
import imgBear from './img/bear.svg';
import imgLion from './img/lion.svg';
import imgFox from './img/fox.svg';


export const questions = [ {
    textQuestion: `Do you know what letter is missing 0 ?`,
    questions: ['C', '?', 'T'],
    answers: [
        { text: 'E', correct: false },
        { text: 'A', correct: true },
        { text: 'O', correct: false }
    ],
    svg: imgCat
},
{
    textQuestion: `Do you know what letter is missing 1 ?`,
    questions: ['B', '?', 'A', 'R'],
    answers: [
        { text: 'E', correct: true },
        { text: 'A', correct: false },
        { text: 'F', correct: false },
        { text: 'G', correct: false }
    ],
    svg: imgBear
},
{
    textQuestion: `Do you know what letter is missing 2 ?`,
    questions: ['L', 'I', '?', 'N'],
    answers: [
        { text: 'B', correct: false },
        { text: 'A', correct: false },
        { text: 'O', correct: true },
        { text: 'E', correct: false }
    ],
    svg: imgLion
},
{
    textQuestion: `Do you know what letter is missing 3 ?`,
    questions: ['F', 'O', '?'],
    answers: [
        { text: 'X', correct: true },
        { text: 'C', correct: false },
        { text: 'F', correct: false }
    ],
    svg: imgFox
}
]