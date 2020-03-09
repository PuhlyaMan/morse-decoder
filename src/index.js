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
  return expr
    .split("**********")
    .map(word =>
      word.match(/.{1,10}/g).map(symbol =>
        symbol
          .match(/.{1,2}/g)
          .filter(code => code !== "00")
          .map(code => (code === "10" ? "." : "-"))
      )
    )
    .map(word =>
      word.map(symbol => symbol.join("")).map(symbol => MORSE_TABLE[symbol])
    )
    .map(word => word.join(""))
    .join(" ");
}

module.exports = {
    decode
}