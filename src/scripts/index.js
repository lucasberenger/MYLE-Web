// Start app vars
const startMenu = document.getElementById('start-menu') // Start menu
const startAplication = document.getElementById('start-button') // Start app button
// Main menu vars
const mainMenu = document.getElementById('main-menu') // Main menu
const closeMainMenu = document.getElementById('close-main-menu') // Close app button (x on the top right)
// Notepad Vars 
const notepadToolbar = document.getElementById('toolbar-notepad') // Notepad button in the toolbar 
const notepad = document.getElementById('notepad') // Notepad element itself
const windowMinimize = document.getElementById('notepad-window-minimize') // Window minimize button
const closeWindow = document.getElementById('notepad-close-window') // Close window button
const notepadText = document.getElementById('notepad-text-input') // Text area
const copyText = document.getElementById('copy-text') // Copy text button
const clearText = document.getElementById('clear-text') // Clear text button

// Start App / quit App 

function startApp() {
    // Hide the start menu
    startMenu.classList.remove('flex')
    startMenu.classList.add('hide')
    // Shows the app on the page
    mainMenu.classList.add('block')
}


function quitApp() {
    // close the main menu
   mainMenu.classList.remove('block')
    // goes back to the start menu
    startMenu.classList.remove('hide')
    startMenu.classList.add('flex')
    

}
// Start app and quit app events (starts pressing 'start button' and quits clicking at the x mark on the top right side of the doc)
startAplication.addEventListener('click', () => {
    startApp()
})

closeMainMenu.addEventListener('click', () => {
    quitApp()
})

// ----------------- Notepad Functions and  Events -------------------
// opens the notepad when the toolbar button is clicked. While the notepad is open, if the toolbar is clicked, the notepad is minimized
function openNotepad() {

    if(notepad.classList.contains('hide')) {
        notepad.classList.remove('hide')
        notepad.classList.add('flex')
       
    } else {
        notepad.classList.remove('flex')
        notepad.classList.add('hide')
        
    }
}


notepadToolbar.addEventListener('click', () => {
    openNotepad()
})

function closeNotepad() {
    notepad.classList.remove('flex')
    notepad.classList.add('hide')

    // move the notepad to its initial position
    notepad.style.top = '50%' 
    notepad.style.left = '50%'

    // notepadText.value = '' // text cleaning
    clear()

}   

    
    
// closes the notepad
closeWindow.addEventListener('click', () => {
    closeNotepad()
})

// minimizes the notepad
function minimizeNotepad() {
    notepad.classList.remove('flex')
    notepad.classList.add('hide')
}

windowMinimize.addEventListener('click', () => {
    minimizeNotepad()
})

// Clear text function
function clear() {
    notepadText.value = '' // clears the text
}

clearText.addEventListener('click', () => {
    clear()
})

// Copy text function 
function copy() { 
    navigator.clipboard.writeText(notepadText.value) // copies the text in the text area
}

copyText.addEventListener('click', () => {
    copy() 
})

// Dragging notepad function

let isDragging = false
let offsetX, offsetY

notepad.addEventListener('mousedown',  (e) => {
    isDragging = true
    offsetX = e.clientX - parseFloat(getComputedStyle(notepad).left)
    offsetY = e.clientY - parseFloat(getComputedStyle(notepad).top)
    notepad.style.cursor = 'grabbing'
})

document.addEventListener('mousemove', (e) => {
    if(isDragging) {
        const x = e.clientX - offsetX
        const y = e.clientY - offsetY

        notepad.style.left = x + 'px'
        notepad.style.top = y + 'px'
    }
})

document.addEventListener('mouseup', () => {
    isDragging = false
    notepad.style.cursor = 'grab'
})






