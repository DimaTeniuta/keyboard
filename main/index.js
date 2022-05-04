const keys = {
  en: {
    key1: ['`', '~', '~'],
    key2: ['1', '!', '!'],
    key3: ['2', '@', '@'],
    key4: ['3', '#', '#'],
    key5: ['4', '$', '$'],
    key6: ['5', '%', '%'],
    key7: ['6', '^', '^'],
    key8: ['7', '&', '&'],
    key9: ['8', '*', '*'],
    key10: ['9', '(', '('],
    key11: ['0', ')', ')'],
    key12: ['-', '_', '_'],
    key13: ['=', '+', '_'],
    key14: ['Backspace', ''],
    key15: ['Tab', ''],
    key16: ['Q', '', 'Q'],
    key17: ['W', '', 'W'],
    key18: ['E', '', 'E'],
    key19: ['R', '', 'R'],
    key20: ['T', '', 'T'],
    key21: ['Y', '', 'Y'],
    key22: ['U', '', 'U'],
    key23: ['I', '', 'I'],
    key24: ['O', '', 'O'],
    key25: ['P', '', 'P'],
    key26: ['[', '{', '{'],
    key27: [']', '}', '}'],
    key28: ['\\', '|', '|'],
    key29: ['DEL', ''],
    key30: ['CapsLock', ''],
    key31: ['A', '', 'A'],
    key32: ['S', '', 'S'],
    key33: ['D', '', 'D'],
    key34: ['F', '', 'F'],
    key35: ['G', '', 'G'],
    key36: ['H', '', 'H'],
    key37: ['J', '', 'J'],
    key38: ['K', '', 'K'],
    key39: ['L', '', 'L'],
    key40: [';', ':', ':'],
    key41: ['\u0027', '\u0022', '\u0022'],
    key42: ['ENTER', ''],
    key43: ['Shift', ''],
    key44: ['\u002F', '', '\u002F'],
    key45: ['Z', '', 'Z'],
    key46: ['X', '', 'X'],
    key47: ['C', '', 'C'],
    key48: ['V', '', 'V'],
    key49: ['B', '', 'B'],
    key50: ['N', '', 'N'],
    key51: ['M', '', 'M'],
    key52: [',', '<', '<'],
    key53: ['.', '>', '>'],
    key54: ['/', '?', '?'],
    key55: ['\u2191', ''],
    key56: ['Shift', ''],
    key57: ['Ctrl', ''],
    key58: ['Win', ''],
    key59: ['Alt', ''],
    key60: [' ', '', ' '],
    key61: ['Alt', ''],
    key62: ['Ctrl', ''],
    key63: ['\u2190', ''],
    key64: ['\u2193', ''],
    key65: ['\u2192', ''],
  },
  ru: {
    key1: ['Ё', '', 'Ё'],
    key2: ['1', '!', '!'],
    key3: ['2', '\u0022', '\u0022'],
    key4: ['3', '№', '№'],
    key5: ['4', ';', ';'],
    key6: ['5', '%', '%'],
    key7: ['6', ':', ':'],
    key8: ['7', '?', '?'],
    key9: ['8', '*', '*'],
    key10: ['9', '(', '('],
    key11: ['0', ')', ')'],
    key12: ['-', '_', '_'],
    key13: ['=', '+', '+'],
    key14: ['Backspace', ''],
    key15: ['Tab', ''],
    key16: ['Й', '', 'Й'],
    key17: ['Ц', '', 'Ц'],
    key18: ['У', '', 'У'],
    key19: ['К', '', 'К'],
    key20: ['Е', '', 'Е'],
    key21: ['Н', '', 'Н'],
    key22: ['Г', '', 'Г'],
    key23: ['Ш', '', 'Ш'],
    key24: ['Щ', '', 'Щ'],
    key25: ['З', '', 'З'],
    key26: ['Х', '', 'Х'],
    key27: ['Ъ', '', 'Ъ'],
    key28: ['\\', '/', '/'],
    key29: ['DEL', ''],
    key30: ['CapsLock', ''],
    key31: ['Ф', '', 'Ф'],
    key32: ['Ы', '', 'Ы'],
    key33: ['В', '', 'В'],
    key34: ['А', '', 'А'],
    key35: ['П', '', 'П'],
    key36: ['Р', '', 'Р'],
    key37: ['О', '', 'О'],
    key38: ['Л', '', 'Л'],
    key39: ['Д', '', 'Д'],
    key40: ['Ж', '', 'Ж'],
    key41: ['Э', '', 'Э'],
    key42: ['ENTER', ''],
    key43: ['Shift', '', '', 'ShiftLeft'],
    key44: ['/', '', '/'],
    key45: ['Я', '', 'Я'],
    key46: ['Ч', '', 'Ч'],
    key47: ['С', '', 'С'],
    key48: ['М', '', 'М'],
    key49: ['И', '', 'И'],
    key50: ['Т', '', 'Т'],
    key51: ['Ь', '', 'Ь'],
    key52: ['Б', '', 'Б'],
    key53: ['Ю', '', 'Ю'],
    key54: ['.', ',', ','],
    key55: ['\u2191', ''],
    key56: ['Shift', '', '', 'ShiftRight'],
    key57: ['Ctrl', ''],
    key58: ['Win', ''],
    key59: ['Alt', ''],
    key60: [' ', ''],
    key61: ['Alt', ''],
    key62: ['Ctrl', ''],
    key63: ['\u2190', ''],
    key64: ['\u2193', ''],
    key65: ['\u2192', ''],
  },
};

const body = document.querySelector('body');
let counKeys = 1;
let isEn = true;

function createContent() {
  // craate title
  const container = document.createElement('div');
  container.classList.add('container');
  const title = document.createElement('div');
  title.classList.add('title');
  const h1Title = document.createElement('h1');
  h1Title.classList.add('h1-title');
  h1Title.textContent = 'Keyboard for windows';
  const keyboardLayout = document.createElement('p');
  keyboardLayout.classList.add('text-title');
  keyboardLayout.textContent = '(Shift + Alt) - switch keyboard layout';
  body.append(container);
  title.append(h1Title);
  title.append(keyboardLayout);
  container.append(title);
  // create textarea
  const wrapArea = document.createElement('div');
  wrapArea.classList.add('wrap-text-area');
  const textAreaDiv = document.createElement('div');
  textAreaDiv.classList.add('text-area');
  const textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.name = 'area';
  textArea.id = 'area-text';
  textArea.cols = '100';
  textArea.rows = '10';
  wrapArea.append(textAreaDiv);
  textAreaDiv.append(textArea);
  container.append(wrapArea);
  // create keyboard
  const wrapKeyboard = document.createElement('div');
  wrapKeyboard.classList.add('wrap-keyboard');
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const list = document.createElement('ul');
  list.classList.add('list');
  container.append(wrapKeyboard);
  wrapKeyboard.append(keyboard);
  keyboard.append(list);
  for (let i = 0; i < 65; i += 1) {
    const listLi = document.createElement('li');
    listLi.classList.add('key');
    listLi.setAttribute('data-key', `key${counKeys}`);
    counKeys += 1;
    const p1 = document.createElement('p');
    p1.classList.add('content1-key');
    const p2 = document.createElement('p');
    p2.classList.add('content2-key');
    listLi.append(p1);
    listLi.append(p2);
    list.append(listLi);
    if (i === 13) {
      listLi.classList.add('backspace');
    }
    if (i === 14) {
      listLi.classList.add('tab');
    }
    if (i === 28) {
      listLi.classList.add('delete');
    }
    if (i === 29) {
      listLi.classList.add('capsLock');
    }
    if (i === 41) {
      listLi.classList.add('enter');
    }
    if (i === 42) {
      listLi.classList.add('shiftLeft');
    }
    if (i === 55) {
      listLi.classList.add('shiftRight');
    }
    if (i === 56) {
      listLi.classList.add('controlLeft');
    }
    if (i === 61) {
      listLi.classList.add('controlRight');
    }
    if (i === 57) {
      listLi.classList.add('metaLeft');
    }
    if (i === 58) {
      listLi.classList.add('altLeft');
    }
    if (i === 60) {
      listLi.classList.add('altRight');
    }
    if (i === 54) {
      listLi.classList.add('arrowUp');
    }
    if (i === 62) {
      listLi.classList.add('arrowLeft');
    }
    if (i === 63) {
      listLi.classList.add('arrowDown');
    }
    if (i === 64) {
      listLi.classList.add('arrowRight');
    }
    if (i === 59) {
      listLi.classList.add('space');
    }
  }
}
createContent();
// add content in buttons
const newListEn = document.querySelectorAll('[data-key]');
function createContentKeys() {
  isEn = JSON.parse(localStorage.getItem('lang'));
  if (isEn) {
    newListEn.forEach((el) => {
      const keysArray = Object.entries(keys.en);
      keysArray.forEach((element) => {
        if (el.dataset.key === element[0]) {
          const p1 = el.firstChild;
          const p2 = el.lastChild;
          p1.textContent = `${element[1][1]}`;
          p2.textContent = `${element[1][0]}`;
        }
      });
    });
    localStorage.setItem('lang', JSON.stringify(isEn));
  } else {
    newListEn.forEach((el) => {
      const keysArray = Object.entries(keys.ru);
      keysArray.forEach((element) => {
        if (el.dataset.key === element[0]) {
          const p1 = el.firstChild;
          const p2 = el.lastChild;
          p1.textContent = `${element[1][1]}`;
          p2.textContent = `${element[1][0]}`;
        }
      });
    });
    localStorage.setItem('lang', JSON.stringify(isEn));
  }
}

createContentKeys();
// change language
function doubleKeys(func, ...buttons) {
  const pressing = new Set();
  document.addEventListener('keydown', (event) => {
    pressing.add(event.code);
    for (let i = 0; i < buttons.length; i += 1) {
      if (!pressing.has(buttons[i])) {
        return;
      }
    }
    pressing.clear();
    func();
  });
}

function changeLanguage() {
  if (isEn === true) {
    isEn = false;
    localStorage.setItem('lang', JSON.stringify(isEn));
    newListEn.forEach((el) => {
      const keysArray = Object.entries(keys.ru);
      keysArray.forEach((element) => {
        if (el.dataset.key === element[0]) {
          const p1 = el.firstChild;
          const p2 = el.lastChild;
          p1.textContent = `${element[1][1]}`;
          p2.textContent = `${element[1][0]}`;
        }
      });
    });
  } else {
    isEn = true;
    localStorage.setItem('lang', JSON.stringify(isEn));
    newListEn.forEach((el) => {
      const keysArray = Object.entries(keys.en);
      keysArray.forEach((element) => {
        if (el.dataset.key === element[0]) {
          const p1 = el.firstChild;
          const p2 = el.lastChild;
          p1.textContent = `${element[1][1]}`;
          p2.textContent = `${element[1][0]}`;
        }
      });
    });
  }
}

doubleKeys(changeLanguage, 'ShiftLeft', 'AltLeft');

// add focus for buttons
const listButtons = document.querySelectorAll('.key');
const specialButtons = document.querySelectorAll('.backspace, .tab, .delete, .capsLock, .shiftLeft, .arrowUp, .shiftRight, .controlLeft, .metaLeft, .altLeft, .altRight, .controlRight, .arrowLeft, .arrowDown, .arrowRight');

function addDataSetForSpecialButtons() {
  specialButtons.forEach((el) => {
    el.setAttribute('data-special', `${el.className.slice(4)[0].toUpperCase() + el.className.slice(5)}`);
  });
}
addDataSetForSpecialButtons();

document.addEventListener('keydown', (event) => {
  listButtons.forEach((el) => {
    if (el.lastChild.textContent === event.key.toUpperCase()) {
      el.classList.add('active');
    } else if (el.dataset.special === event.code) {
      el.classList.add('active');
    } else if (el.firstChild.textContent === event.key.toUpperCase()) {
      el.classList.add('active');
    }
  });
});
document.addEventListener('keyup', () => {
  listButtons.forEach((el) => {
    el.classList.remove('active');
  });
});
