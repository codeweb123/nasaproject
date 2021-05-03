const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
// Item Lists
const listColumns = document.querySelectorAll('.drag-item-list');
const todoListEl = document.getElementById('todo-list');
const doingListEl = document.getElementById('doing-list');
const doneListEl = document.getElementById('done-list');
const onHoldListEl = document.getElementById('onhold-list');

// Items
let updatedOnLoad = false;

// Initialize Arrays
let todoListArray = [];
let doingListArray = [];
let doneListArray = [];
let onHoldListArray = [];
let listArrays = [];

// Drag Functionality
let draggedItem;
let dragging = false;
let currentColumn;

// Get Arrays from localStorage if available, set default values if not
function getSavedColumns() {
  if (localStorage.getItem('todoItems')) {
    todoListArray = JSON.parse(localStorage.todoItems);
    doingListArray = JSON.parse(localStorage.doingItems);
    doneListArray = JSON.parse(localStorage.doneItems);
    onHoldListArray = JSON.parse(localStorage.onHoldItems);
  } else {
    todoListArray = ['Release the course', 'Sit back and relax'];
    doingListArray = ['Work on projects', 'Listen to music'];
    doneListArray = ['Being cool', 'Getting stuff done'];
    onHoldListArray = ['Being uncool'];
  }
}

// Set localStorage Arrays
function updateSavedColumns() {
  listArrays = [todoListArray, doingListArray, doneListArray, onHoldListArray];
  const arrayNames = ['todo', 'doing', 'done', 'onHold'];
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
  });
}

// Filter Array to remove empty values
function filterArray(array) {
  const filteredArray = array.filter(item => item !== null);
  return filteredArray;
}

// Create DOM Elements for each list item
function createItemEl(columnEl, column, item, index) {
  // List Item
  const listEl = document.createElement('li');
  listEl.textContent = item;
  listEl.id = index;
  listEl.classList.add('drag-item');
  listEl.draggable = true;
  listEl.setAttribute('onfocusout', `updateItem(${index}, ${column})`);
  listEl.setAttribute('ondragstart', 'drag(event)');
  listEl.contentEditable = true;
  // Append
  columnEl.appendChild(listEl);
}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
  // Check localStorage once
  if (!updatedOnLoad) {
    getSavedColumns();
  }
  // todo Column
  todoListEl.textContent = '';
  todoListArray.forEach((todoItem, index) => {
    createItemEl(todoListEl, 0, todoItem, index);
  });
  todoListArray = filterArray(todoListArray);
  // doing Column
  doingListEl.textContent = '';
  doingListArray.forEach((doingItem, index) => {
    createItemEl(doingListEl, 1, doingItem, index);
  });
  doingListArray = filterArray(doingListArray);
  // done Column
  doneListEl.textContent = '';
  doneListArray.forEach((doneItem, index) => {
    createItemEl(doneListEl, 2, doneItem, index);
  });
  doneListArray = filterArray(doneListArray);
  // On Hold Column
  onHoldListEl.textContent = '';
  onHoldListArray.forEach((onHoldItem, index) => {
    createItemEl(onHoldListEl, 3, onHoldItem, index);
  });
  onHoldListArray = filterArray(onHoldListArray);
  // Don't run more than once, Update Local Storage
  updatedOnLoad = true;
  updateSavedColumns();
}

// Update Item - Delete if necessary, or update Array value
function updateItem(id, column) {
  const selectedArray = listArrays[column];
  const selectedColumn = listColumns[column].children;
  if (!dragging) {
    if (!selectedColumn[id].textContent) {
      delete selectedArray[id];
    } else {
      selectedArray[id] = selectedColumn[id].textContent;
    }
    updateDOM();
  }
}

// Add to Column List, Reset Textbox
function addToColumn(column) {
  const itemText = addItems[column].textContent;
  const selectedArray = listArrays[column];
  selectedArray.push(itemText);
  addItems[column].textContent = '';
  updateDOM(column);
}

// Show Add Item Input Box
function showInputBox(column) {
  addBtns[column].style.visibility = 'hidden';
  saveItemBtns[column].style.display = 'flex';
  addItemContainers[column].style.display = 'flex';
}

// Hide Item Input Box
function hideInputBox(column) {
  addBtns[column].style.visibility = 'visible';
  saveItemBtns[column].style.display = 'none';
  addItemContainers[column].style.display = 'none';
  addToColumn(column);
}

// Allows arrays to reflect Drag and Drop items
function rebuildArrays() {
  todoListArray = [];
  for (let i = 0; i < todoListEl.children.length; i++) {
    todoListArray.push(todoListEl.children[i].textContent);
  }
  doingListArray = [];
  for (let i = 0; i < doingListEl.children.length; i++) {
    doingListArray.push(doingListEl.children[i].textContent);
  }
  doneListArray = [];
  for (let i = 0; i < doneListEl.children.length; i++) {
    doneListArray.push(doneListEl.children[i].textContent);
  }
  onHoldListArray = [];
  for (let i = 0; i < onHoldListEl.children.length; i++) {
    onHoldListArray.push(onHoldListEl.children[i].textContent);
  }
  updateDOM();
}

// When Item Enters Column Area
function dragEnter(column) {
  listColumns[column].classList.add('over');
  currentColumn = column;
}

// When Item Starts Dragging
function drag(e) {
  draggedItem = e.target;
  dragging = true;
}

// Column Allows for Item to Drop
function allowDrop(e) {
  e.preventDefault();
}

// Dropping Item in Column
function drop(e) {
  e.preventDefault();
  const parent = listColumns[currentColumn];
  // Remove Background Color/Padding
  listColumns.forEach((column) => {
    column.classList.remove('over');
  });
  // Add item to Column
  parent.appendChild(draggedItem);
  // Dragging done
  dragging = false;
  rebuildArrays();
}

// On Load
updateDOM();
