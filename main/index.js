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
    key28: ['\\', '|'],
    key29: ['DEL', ''],
    key30: ['CapsLock', ''],
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
    key60: [' ', '', ' '],
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
    key28: ['\\', '/'],
    key29: ['DEL', ''],
    key30: ['CapsLock', ''],
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
    key44: ['/', ''],
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
    key60: [' ', ''],
    key61: ['Alt', ''],
    key62: ['Ctrl', ''],
    key63: ['\u2190', ''],
    key64: ['\u2193', ''],
    key65: ['\u2192', ''],
  },
};

const dataKeys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'NumpadDivide', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const body = document.querySelector('body');
let counKeys = 1;
let isEn = true;

// fuction for create page
function createContent() {
  // craate title
  const container = document.createElement('div');
  container.classList.add('container');
  const title = document.createElement('div');
  title.classList.add('title');
  const h1Title = document.createElement('h1');
  h1Title.classList.add('h1-title');
  h1Title.textContent = 'Keyboard for windows';
  body.append(container);
  title.append(h1Title);
  container.append(title);
  // create textarea
  const wrapArea = document.createElement('div');
  wrapArea.classList.add('wrap-text-area');
  const textAreaDiv = document.createElement('div');
  const form = document.createElement('form');
  form.id = 'frm';
  textAreaDiv.append(form);
  textAreaDiv.classList.add('text-area');
  const textArea = document.createElement('textarea');
  textArea.autofocus = 'autofocus';
  textArea.name = 'area';
  textArea.id = 'area-text';
  textArea.cols = '100';
  textArea.rows = '10';
  form.append(textArea);
  wrapArea.append(textAreaDiv);
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
  const lamp = document.createElement('div');
  lamp.classList.add('lamp');
  const caps = document.querySelector('.capsLock');
  const lastChildCaps = caps.lastChild;
  caps.insertBefore(lamp, lastChildCaps);
  const description = document.createElement('div');
  description.classList.add('description');
  const keyboardLayout = document.createElement('p');
  keyboardLayout.classList.add('text-title');
  keyboardLayout.textContent = '(CtrlLeft + AltLeft) - switch keyboard layout (use double click)';
  const shiftDescription = document.createElement('p');
  shiftDescription.classList.add('text-title');
  shiftDescription.textContent = 'ShiftLeft or ShiftRight can be used with double click.';
  container.append(description);
  description.append(keyboardLayout);
  description.append(shiftDescription);
}
createContent();

const listButtons = document.querySelectorAll('.key');

// add data-spesial
function addDataSetForButtons() {
  for (let i = 0; i < listButtons.length; i += 1) {
    listButtons[i].setAttribute('data-special', `${dataKeys[i]}`);
  }
}

addDataSetForButtons();

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

const keyBoard = document.querySelector('.list');
const areaText = document.getElementById('area-text');
// add focus for textarea
const showCursor = () => {
  setTimeout(() => {
    areaText.focus();
  }, 0);
};

createContentKeys();

// change language use keyboard
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
  keyBoard.addEventListener('mousedown', (e) => {
    if (e.target.dataset.special === 'ControlLeft' || e.target.dataset.special === 'AltLeft') {
      pressing.add(e.target.dataset.special);
      for (let i = 0; i < buttons.length; i += 1) {
        if (!pressing.has(buttons[i])) {
          return;
        }
      }
    } else if (e.target.parentElement.dataset.special === 'ControlLeft' || e.target.parentElement.dataset.special === 'AltLeft') {
      pressing.add(e.target.parentElement.dataset.special);
      for (let i = 0; i < buttons.length; i += 1) {
        if (!pressing.has(buttons[i])) {
          return;
        }
      }
    }
  });
  document.addEventListener('mouseup', () => {
    pressing.clear();
  });
  document.addEventListener('keyup', () => {
    pressing.clear();
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

doubleKeys(changeLanguage, 'ControlLeft', 'AltLeft');

let pressed = [];
let count = 0;
const ctrl = document.querySelector('.controlLeft');
const alt = document.querySelector('.altLeft');

// change language use mouse
function changeLangForMouse(event) {
  const buttons = ['ControlLeft', 'AltLeft'];
  if ((event.target.dataset.special === 'ControlLeft') || (event.target.dataset.special === 'AltLeft')) {
    pressed.push(event.target.dataset.special);
    if (event.target.dataset.special === 'ControlLeft') {
      ctrl.classList.add('active');
    } else {
      alt.classList.add('active');
    }
  } else if ((event.target.parentElement.dataset.special === 'ControlLeft') || (event.target.parentElement.dataset.special === 'AltLeft')) {
    pressed.push(event.target.parentElement.dataset.special);
    if (event.target.parentElement.dataset.special === 'ControlLeft') {
      ctrl.classList.add('active');
    } else {
      alt.classList.add('active');
    }
  }
  for (let i = 0; i < buttons.length; i += 1) {
    if (pressed.includes(buttons[i])) {
      count += 1;
    } else {
      count = 0;
      return;
    }
  }

  if (count === 2) {
    changeLanguage();
    ctrl.classList.remove('active');
    alt.classList.remove('active');
    pressed = [];
    count = 0;
  }
}

keyBoard.addEventListener('dblclick', changeLangForMouse);

// add focus for buttons
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  listButtons.forEach((el) => {
    if (el.dataset.special === event.code) {
      if (!(event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.code === 'CapsLock')) {
        el.classList.add('active');
      }
    }
  });
  document.addEventListener('keyup', () => {
    event.preventDefault();
    listButtons.forEach((el) => {
      if (!(el.dataset.special === 'ShiftLeft' || el.dataset.special === 'ShiftRight' || el.dataset.special === 'CapsLock')) {
        el.classList.remove('active');
      }
    });
  });
});

// add class 'active' for click
const shiftLeft = document.querySelector('.shiftLeft');
const shiftRight = document.querySelector('.shiftRight');
const capsLock = document.querySelector('.capsLock');
const arrDataSpecial = ['Tab', 'CapsLock', 'ShiftLeft', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ShiftRight', 'Enter', 'Delete', 'Backspace'];
let arrKeys = [];

function mousedownKey(event) {
  if (event.target.classList.contains('key')) {
    if (!(
      event.target.dataset.special === 'ShiftLeft'
      || event.target.dataset.special === 'ShiftRight'
      || event.target.dataset.special === 'CapsLock'
    )) {
      event.target.classList.add('active');
      arrKeys.push(event.target);
    }
  } else if (event.target.closest('p')) {
    if (!(
      event.target.parentElement.dataset.special === 'ShiftLeft'
      || event.target.parentElement.dataset.special === 'ShiftRight'
      || event.target.parentElement.dataset.special === 'CapsLock'
    )) {
      event.target.parentElement.classList.add('active');
      arrKeys.push(event.target.parentElement);
    }
  }
  document.addEventListener('mouseup', () => {
    arrKeys.forEach((el) => {
      el.classList.remove('active');
    });
    arrKeys = [];
  });
}

keyBoard.addEventListener('mousedown', mousedownKey);

function clickMouseCapslock(event) {
  if (event.target.dataset.special === 'CapsLock') {
    capsLock.classList.toggle('active');
  } else if (event.target.parentElement.dataset.special === 'CapsLock') {
    capsLock.classList.toggle('active');
  }
}

keyBoard.addEventListener('mousedown', clickMouseCapslock);

function mousedownMouseShiftLeft(event) {
  if (event.target.dataset.special === 'ShiftLeft' && !shiftLeft.classList.contains('active')) {
    shiftLeft.classList.add('active');
  } else if (event.target.parentElement.dataset.special === 'ShiftLeft' && !shiftLeft.classList.contains('active')) {
    shiftLeft.classList.add('active');
  }
}

keyBoard.addEventListener('mousedown', mousedownMouseShiftLeft);

function mousedownMouseShiftRight(event) {
  if (event.target.dataset.special === 'ShiftRight' && !shiftRight.classList.contains('active')) {
    shiftRight.classList.add('active');
  } else if (event.target.parentElement.dataset.special === 'ShiftRight' && !shiftRight.classList.contains('active')) {
    shiftRight.classList.add('active');
  }
}

keyBoard.addEventListener('mousedown', mousedownMouseShiftRight);

function clickMouseShiftLeftremove(event) {
  if (event.target.dataset.special === 'ShiftLeft' && shiftLeft.classList.contains('active')) {
    shiftLeft.classList.remove('active');
  } else if (event.target.parentElement.dataset.special === 'ShiftLeft' && shiftLeft.classList.contains('active')) {
    shiftLeft.classList.remove('active');
  }
}

keyBoard.addEventListener('click', clickMouseShiftLeftremove);

function clickMouseShiftRightremove(event) {
  if (event.target.dataset.special === 'ShiftRight' && shiftRight.classList.contains('active')) {
    shiftRight.classList.remove('active');
  } else if (event.target.parentElement.dataset.special === 'ShiftRight' && shiftRight.classList.contains('active')) {
    shiftRight.classList.remove('active');
  }
}

keyBoard.addEventListener('click', clickMouseShiftRightremove);

function clickMouseShiftLeftDouble(event) {
  if (event.target.dataset.special === 'ShiftLeft') {
    shiftLeft.classList.toggle('active');
  } else if (event.target.parentElement.dataset.special === 'ShiftLeft') {
    shiftLeft.classList.toggle('active');
  }
}

keyBoard.addEventListener('dblclick', clickMouseShiftLeftDouble);

function clickMouseShiftRightDouble(event) {
  if (event.target.dataset.special === 'ShiftRight') {
    shiftRight.classList.toggle('active');
  } else if (event.target.parentElement.dataset.special === 'ShiftRight') {
    shiftRight.classList.toggle('active');
  }
}

keyBoard.addEventListener('dblclick', clickMouseShiftRightDouble);

// function for add text in current cursor value
function addTextInCurrentArea(text) {
  const start = areaText.selectionStart;
  const end = areaText.selectionEnd;
  const finishText = `${areaText.value.substring(0, start)}${text}${areaText.value.substring(end)}`;
  areaText.value = finishText;
  areaText.selectionEnd = start + text.length;
}

// function for delete text befor cursor
function deleteElUseBackspace() {
  const start = areaText.selectionStart;
  const end = areaText.selectionEnd;
  if (start === end) {
    const finishText = `${areaText.value.substring(0, start - 1)}${areaText.value.substring(end)}`;
    areaText.value = finishText;
    areaText.selectionEnd = end - 1;
  } else {
    const finishText = `${areaText.value.substring(0, start)}${areaText.value.substring(end)}`;
    areaText.value = finishText;
    areaText.selectionEnd = start;
  }
}

// function for Backspace
function funcBacksspace(event) {
  if (
    event.target.dataset.special === 'Backspace'
    || event.target.parentElement.dataset.special === 'Backspace'
    || event.code === 'Backspace') {
    showCursor();
    deleteElUseBackspace();
  }
}

keyBoard.addEventListener('mousedown', funcBacksspace);
document.addEventListener('keydown', funcBacksspace);

// function for Tab
function funcTab(event) {
  if (
    event.target.dataset.special === 'Tab'
    || event.target.parentElement.dataset.special === 'Tab'
    || event.code === 'Tab') {
    showCursor();
    const tab = '    ';
    addTextInCurrentArea(tab);
  }
}

keyBoard.addEventListener('mousedown', funcTab);
document.addEventListener('keydown', funcTab);

// function for delete text after cursor
function deleteElUseDel() {
  const start = areaText.selectionStart;
  const end = areaText.selectionEnd;
  const finishText = `${areaText.value.substring(0, start)}${areaText.value.substring(end).slice(1)}`;
  areaText.value = finishText;
  areaText.selectionEnd = end;
}

// function for Del
function funcDel(event) {
  if (
    event.target.dataset.special === 'Delete'
    || event.target.parentElement.dataset.special === 'Delete'
    || event.code === 'Delete') {
    showCursor();
    deleteElUseDel();
  }
}

keyBoard.addEventListener('mousedown', funcDel);
document.addEventListener('keydown', funcDel);

// function for Enter
function funcEnter(event) {
  if (
    event.target.dataset.special === 'Enter'
    || event.target.parentElement.dataset.special === 'Enter'
    || event.code === 'Enter'
  ) {
    const ent = '\n';
    showCursor();
    addTextInCurrentArea(ent);
  }
}

keyBoard.addEventListener('mousedown', funcEnter);
document.addEventListener('keydown', funcEnter);

// add 'active' class use keyboard for shift and capslock
document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft') {
    shiftLeft.classList.add('active');
  }
  if (event.code === 'ShiftRight') {
    shiftRight.classList.add('active');
  }
  if (event.code === 'CapsLock') {
    capsLock.classList.toggle('active');
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft') {
    shiftLeft.classList.remove('active');
  }
  if (event.code === 'ShiftRight') {
    shiftRight.classList.remove('active');
  }
});

// input text in textarea use mouse
function inputText(event) {
  if (
    !(arrDataSpecial.includes(event.target.dataset.special)
    || arrDataSpecial.includes(event.target.parentElement.dataset.special))
  ) {
    if (!capsLock.classList.contains('active')) {
      if (
        (event.target.classList.contains('key') && (!shiftLeft.classList.contains('active')))
        && (event.target.classList.contains('key') && (!shiftRight.classList.contains('active')))
      ) {
        addTextInCurrentArea(event.target.lastChild.textContent.toLowerCase());
        showCursor();
      } else if (event.target.closest('p') && (!shiftLeft.classList.contains('active'))) {
        showCursor();
        addTextInCurrentArea(event.target.parentElement.lastChild.textContent.toLowerCase());
      }

      if (
        (event.target.classList.contains('key') && (shiftLeft.classList.contains('active')))
        || (event.target.classList.contains('key') && (shiftRight.classList.contains('active')))
      ) {
        if (!event.target.firstChild.textContent) {
          showCursor();
          addTextInCurrentArea(event.target.textContent.toUpperCase());
        } else {
          showCursor();
          addTextInCurrentArea(event.target.firstChild.textContent);
        }
      } else if (
        (event.target.closest('p') && (shiftLeft.classList.contains('active')))
        || (event.target.closest('p') && (shiftRight.classList.contains('active')))
      ) {
        if (!event.target.parentElement.firstChild.textContent) {
          showCursor();
          addTextInCurrentArea(event.target.parentElement.lastChild.textContent.toUpperCase());
        } else {
          showCursor();
          addTextInCurrentArea(event.target.parentElement.firstChild.textContent);
        }
      }
    } else {
      if (
        (event.target.classList.contains('key') && (!shiftLeft.classList.contains('active')))
        && (event.target.classList.contains('key') && (!shiftRight.classList.contains('active')))
      ) {
        showCursor();
        addTextInCurrentArea(event.target.lastChild.textContent);
      } else if (
        (event.target.closest('p') && (!shiftLeft.classList.contains('active')))
        && (event.target.closest('p') && (!shiftRight.classList.contains('active')))
      ) {
        showCursor();
        addTextInCurrentArea(event.target.parentElement.lastChild.textContent);
      }

      if (
        (event.target.classList.contains('key') && (shiftLeft.classList.contains('active')))
        || (event.target.classList.contains('key') && (shiftRight.classList.contains('active')))
      ) {
        if (!event.target.firstChild.textContent) {
          showCursor();
          addTextInCurrentArea(event.target.lastChild.textContent.toLowerCase());
        } else {
          showCursor();
          addTextInCurrentArea(event.target.firstChild.textContent);
        }
      } else if (
        (event.target.closest('p') && (shiftLeft.classList.contains('active')))
        || (event.target.closest('p') && (shiftRight.classList.contains('active')))
      ) {
        if (!event.target.parentElement.firstChild.textContent) {
          showCursor();
          addTextInCurrentArea(event.target.parentElement.lastChild.textContent.toLowerCase());
        } else {
          showCursor();
          addTextInCurrentArea(event.target.parentElement.firstChild.textContent);
        }
      }
    }
  }
}

keyBoard.addEventListener('mousedown', inputText);

// input text in textarea use keyboard
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (!(arrDataSpecial.includes(event.code))) {
    if (!capsLock.classList.contains('active')) {
      listButtons.forEach((el) => {
        if (
          el.dataset.special === event.code && (!shiftLeft.classList.contains('active'))
          && (!shiftRight.classList.contains('active'))
        ) {
          showCursor();
          addTextInCurrentArea(el.lastChild.textContent.toLowerCase());
        } else if (
          (el.dataset.special === event.code && (shiftLeft.classList.contains('active')))
          || (el.dataset.special === event.code && (shiftRight.classList.contains('active')))
        ) {
          if (!el.firstChild.textContent) {
            showCursor();
            addTextInCurrentArea(el.lastChild.textContent.toUpperCase());
          } else {
            showCursor();
            addTextInCurrentArea(el.firstChild.textContent);
          }
        }
      });
    } else {
      listButtons.forEach((el) => {
        if (
          el.dataset.special === event.code
          && (!shiftLeft.classList.contains('active'))
          && (!shiftLeft.classList.contains('active'))
        ) {
          showCursor();
          addTextInCurrentArea(el.lastChild.textContent.toUpperCase());
        } else if (
          (el.dataset.special === event.code && (shiftLeft.classList.contains('active')))
          || (el.dataset.special === event.code && (shiftRight.classList.contains('active')))
        ) {
          if (!el.firstChild.textContent) {
            showCursor();
            addTextInCurrentArea(el.lastChild.textContent.toLowerCase());
          } else {
            showCursor();
            addTextInCurrentArea(el.firstChild.textContent.toLowerCase());
          }
        }
      });
    }
  }
});
