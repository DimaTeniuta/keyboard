const keys = {
  en: {
    key1: ['`', '~'],
    key2: ['1', '!'],
    key3: ['2', '@'],
    key4: ['3', '#'],
    key5: ['4', '$'],
    key6: ['5', '%'],
    key7: ['6', '^'],
    key8: ['7', '&'],
    key9: ['8', '*'],
    key10: ['9', '('],
    key11: ['0', ')'],
    key12: ['-', '_'],
    key13: ['=', '+'],
    key14: ['Backspace', ''],
    key15: ['Tab', ''],
    key16: ['Q', ''],
    key17: ['W', ''],
    key18: ['E', ''],
    key19: ['R', ''],
    key20: ['T', ''],
    key21: ['Y', ''],
    key22: ['U', ''],
    key23: ['I', ''],
    key24: ['O', ''],
    key25: ['P', ''],
    key26: ['[', '{'],
    key27: [']', '}'],
    key28: ['\u002F', '|'],
    key29: ['DEL', ''],
    key30: ['Caps Lock', ''],
    key31: ['A', ''],
    key32: ['S', ''],
    key33: ['D', ''],
    key34: ['F', ''],
    key35: ['G', ''],
    key36: ['H', ''],
    key37: ['J', ''],
    key38: ['K', ''],
    key39: ['L', ''],
    key40: [';', ':'],
    key41: ['\u0027', '\u0022'],
    key42: ['ENTER', ''],
    key43: ['Shift', ''],
    key44: ['\u002F', ''],
    key45: ['Z', ''],
    key46: ['X', ''],
    key47: ['C', ''],
    key48: ['V', ''],
    key49: ['B', ''],
    key50: ['N', ''],
    key51: ['M', ''],
    key52: [',', '<'],
    key53: ['.', '>'],
    key54: ['/', '?'],
    key55: ['\u2191', ''],
    key56: ['Shift', ''],
    key57: ['Ctrl', ''],
    key58: ['Win', ''],
    key59: ['Alt', ''],
    key60: ['space', ''],
    key61: ['Alt', ''],
    key62: ['Ctrl', ''],
    key63: ['\u2190', ''],
    key64: ['\u2193', ''],
    key65: ['\u2192', ''],
  },
  ru: {
    key1: ['Ё', ''],
    key2: ['1', '!'],
    key3: ['2', '\u0022'],
    key4: ['3', '№'],
    key5: ['4', ';'],
    key6: ['5', '%'],
    key7: ['6', ':'],
    key8: ['7', '?'],
    key9: ['8', '*'],
    key10: ['9', '('],
    key11: ['0', ')'],
    key12: ['-', '_'],
    key13: ['=', '+'],
    key14: ['Backspace', ''],
    key15: ['Tab', ''],
    key16: ['Й', ''],
    key17: ['Ц', ''],
    key18: ['У', ''],
    key19: ['К', ''],
    key20: ['Е', ''],
    key21: ['Н', ''],
    key22: ['Г', ''],
    key23: ['Ш', ''],
    key24: ['Щ', ''],
    key25: ['З', ''],
    key26: ['Х', ''],
    key27: ['Ъ', ''],
    key28: ['\u002F', '/'],
    key29: ['DEL', ''],
    key30: ['Caps Lock', ''],
    key31: ['Ф', ''],
    key32: ['Ы', ''],
    key33: ['В', ''],
    key34: ['А', ''],
    key35: ['П', ''],
    key36: ['Р', ''],
    key37: ['О', ''],
    key38: ['Л', ''],
    key39: ['Д', ''],
    key40: ['Ж', ''],
    key41: ['Э', ''],
    key42: ['ENTER', ''],
    key43: ['Shift', ''],
    key44: ['\u002F', ''],
    key45: ['Я', ''],
    key46: ['Ч', ''],
    key47: ['С', ''],
    key48: ['М', ''],
    key49: ['И', ''],
    key50: ['Т', ''],
    key51: ['Ь', ''],
    key52: ['Б', ''],
    key53: ['Ю', ''],
    key54: ['.', ','],
    key55: ['\u2191', ''],
    key56: ['Shift', ''],
    key57: ['Ctrl', ''],
    key58: ['Win', ''],
    key59: ['Alt', ''],
    key60: ['', ''],
    key61: ['Alt', ''],
    key62: ['Ctrl', ''],
    key63: ['\u2190', ''],
    key64: ['\u2193', ''],
    key65: ['\u2192', ''],
  },
};

const body = document.querySelector('body');
let counKeys = 1;

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
    if (i === 0) {
      listLi.classList.add('tilde-key');
    }
    if (i === 13) {
      listLi.classList.add('backspace-key');
    }
    if (i === 14) {
      listLi.classList.add('tab-key');
    }
    if (i === 28) {
      listLi.classList.add('del-key');
    }
    if (i === 29) {
      listLi.classList.add('caps-lock-key');
    }
    if (i === 41) {
      listLi.classList.add('enter-key');
    }
    if (i === 42) {
      listLi.classList.add('shift-key');
    }
    if (i === 55) {
      listLi.classList.add('shift-keyRight');
    }
    if (i === 56 || i === 61) {
      listLi.classList.add('ctrl-key');
    }
    if (i === 57) {
      listLi.classList.add('win');
    }
    if (i === 58 || i === 60) {
      listLi.classList.add('alt');
    }
    if (i === 54 || i === 62 || i === 63 || i === 64) {
      listLi.classList.add('up-right-left-down');
    }
    if (i === 59) {
      listLi.classList.add('space-key');
    }
  }
}
createContent();

const newListEn = document.querySelectorAll('[data-key]');
function createContentKeys() {
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

createContentKeys();
