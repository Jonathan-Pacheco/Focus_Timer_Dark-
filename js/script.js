import Cards from "./cards.js"
import Timer from "./timer.js"

const buttonPlay = document.querySelector('.btn-play')
const buttonStop = document.querySelector('.btn-stop')
const buttonPlus = document.querySelector('.btn-plus')
const buttonMinus = document.querySelector('.btn-minus')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const forestSong = document.querySelector('#card1')
const rainSong = document.querySelector('#card2')
const coffeeSong = document.querySelector('#card3')
const fireplaceSong = document.querySelector('#card4')

const forestAudio = new Audio('./sounds/Floresta.wav')
const rainAudio = new Audio('./sounds/Chuva.wav')
const coffeeAudio = new Audio('./sounds/Cafeteria.wav')
const fireplaceAudio = new Audio('./sounds/Lareira.wav')
const click = new Audio('./sounds/Click.wav')

const setVolumeForest = document.querySelector('.volume1');
const setVolumeRain = document.querySelector('.volume2');
const setVolumeCoffee = document.querySelector('.volume3');
const setVolumeFireplace = document.querySelector('.volume4');

let timerTimeOut
let audioAtual 

const cards = Cards({
  forestSong,
  rainSong,
  coffeeSong,
  fireplaceSong,
  forestAudio,
  rainAudio,
  coffeeAudio,
  fireplaceAudio
})

const timer = Timer({
  minutesDisplay, 
})

function play(Audio) {
     audioAtual = Audio
     Audio.play()
}

function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    if (minutes <= 0 && seconds <= 0) {
      cards.audioStop()
      return
    }
    if(seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    countdown()
  }, 1000)
}

buttonPlus.addEventListener('click', function() {
  click.play()
  timer.plusFive()
})

buttonMinus.addEventListener('click', function() {
  click.play()
  timer.minusFive()
})

buttonPlay.addEventListener('click', function() {
  click.play()
  countdown()
  play(audioAtual)
})

buttonStop.addEventListener('click', function() {
  click.play()
  clearTimeout(timerTimeOut)
  cards.audioStop()
})


  forestSong.addEventListener('click', function() {
    forestAudio.loop = true
    cards.clearColors()
    forestSong.classList.add('color') 
    cards.audioStop()
    play(forestAudio)
    click.play()
  })

  rainSong.addEventListener('click', function() {
    rainAudio.loop = true
    cards.clearColors()  
    rainSong.classList.add('color')
    cards.audioStop()
    play(rainAudio)
    click.play()
  })
  
  coffeeSong.addEventListener('click', function() {
    coffeeAudio.loop = true
    cards.clearColors()
    coffeeSong.classList.add('color') 
    cards.audioStop()
    play(coffeeAudio)
    click.play()
  })
  
  fireplaceSong.addEventListener('click', function() {
    fireplaceAudio.loop = true
    cards.clearColors()
    fireplaceSong.classList.add('color')  
    cards.audioStop()
    play(fireplaceAudio)
    click.play()
  })
  
  setVolumeForest.addEventListener("change", function(e) {
    forestAudio.volume = e.currentTarget.value / 100;
  })
  setVolumeRain.addEventListener("change", function(e) {
    rainAudio.volume = e.currentTarget.value / 100;
  })
  setVolumeCoffee.addEventListener("change", function(e) {
    coffeeAudio.volume = e.currentTarget.value / 100;
  })
  setVolumeFireplace.addEventListener("change", function(e) {
    fireplaceAudio.volume = e.currentTarget.value / 100;
  })

/* Dark Mode */

const lightButton = document.querySelector('.light-btn')
const darkButton = document.querySelector('.dark-btn')
const timerDark = document.querySelector('.time')
const darkControls = document.querySelector('.controls')
const darkCards = document.querySelector('#cards')
  
function darkLightMode() {
  click.play()
  lightButton.classList.toggle('hide')
  darkButton.classList.toggle('hide')
 }

function darkColors() {
  forestSong.classList.toggle('dark')
  rainSong.classList.toggle('dark')
  coffeeSong.classList.toggle('dark')
  fireplaceSong.classList.toggle('dark')
  document.body.classList.toggle('dark')
  timerDark.classList.toggle('dark')
  darkControls.classList.toggle('dark')
  darkCards.classList.toggle('dark')
}

lightButton.addEventListener('click', function() {
  darkLightMode()
  darkColors()
})

darkButton.addEventListener('click', function() {
  darkLightMode()
  darkColors()
})


  
  
  
  
  