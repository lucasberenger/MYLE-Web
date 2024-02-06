// Start app vars
const startMenu = document.getElementById('start-menu')
const startAplication = document.getElementById('start-button')
// Main menu vars
const mainMenu = document.getElementById('main-menu')
const closeMainMenu = document.getElementById('close-main-menu')
// Notepad Vars 
const notepadToolbar = document.getElementById('toolbar-notepad') // Notepad button in the toolbar 
const notepad = document.getElementById('notepad') // Notepad element itself
const windowMinimize = document.getElementById('notepad-window-minimize') //window minimize button
const closeWindow = document.getElementById('notepad-close-window') // close window button

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

// Notepad Functions and  Events 
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






