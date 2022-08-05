const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrayOfNumbers = []
    for (let i = 0; i < expr.length; i += 10) {
     arrayOfNumbers.push(expr.slice(i, i + 10))
    }
   let result = []
   result = arrayOfNumbers.map((item) => item.replace(/00/gi, '')).map((item) => item.replace(/10/gi, '.')).map((item) => item.replace(/11/gi, '-')).map((item) => item.replace('**********', ' ')).map((item) => item == ' ' ? ' ' : MORSE_TABLE[item]).join('')
   return result
}

module.exports = {
    decode
}