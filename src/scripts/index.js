// Start app vars
const startMenu = document.getElementById('start-menu')
const startAplication = document.getElementById('start-button')
// Main menu vars
const mainMenu = document.getElementById('main-menu')
const closeMainMenu = document.getElementById('close-main-menu')

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



