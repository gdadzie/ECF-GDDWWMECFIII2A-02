const btnNewGame =  document.getElementById('initGame')
const btnRollDice = document.getElementById('btnRollDice')
const btnHold = document.getElementById('btnHold')
let globalScoreDisplay0 = document.getElementById('globalScore0')
let globalScoreDisplay1 = document.getElementById('globalScore1')
let roundScoreDisplay0 = document.getElementById('roundScore0')
let roundScoreDisplay1 = document.getElementById('roundScore1')
let interfacePlayer =document.querySelector('.interfacePlayer')
let playersTitle = document.getElementById('players-title')
let playersTitle0 = document.getElementById('players-title0')
let playersTitle1 = document.getElementById('players-title1')
let diceDisplay = document.querySelector('.diceDisplay')
let interface0 = document.querySelector('.interface0')
let interface1 = document.querySelector('.interface1')

class Players {

        constructor(globalScore, roundScore, isActive, game){

            this.globalScore = [0,0]
            this.roundScore = 0
            this.isActive = this.isActive
            this.gamePlaying = false
        }

        //INITIALISER UNE NOUVELLE PARTIE
        newGame(){

            btnNewGame.addEventListener('click',()=>{

                this.globalScore = [0,0]
                this.roundScore = 0
                this.isActive =0 
                this.gamePlaying = true
                globalScoreDisplay0.textContent = 0
                globalScoreDisplay1.textContent = 0
                roundScoreDisplay0.textContent = 0
                roundScoreDisplay1.textContent = 0
                playersTitle0.textContent = 'Player 1'
                playersTitle1.textContent = 'Player 2'
                interface0.classList.add('active')
                interface1.classList.remove('active')
                document.querySelector('#players-title'+this.isActive).classList.remove('winner')
                document.querySelector('.diceDisplay').style.display = 'NONE'

            })
        }

        //AFFICHAGE D'UN NOMBRE ALÉATOIRE
        roll(){ 

            btnRollDice.addEventListener('click',()=>{

                if(this.gamePlaying) {

                    let random = Math.floor(Math.random()*6)+1
                    document.querySelector('.diceDisplay').style.display = 'block'
                    document.querySelector('.diceDisplay').src = 'dice-'+ random +'.png'
       
                    if(random !== 1) {
             
                        this.roundScore += random 
                        document.querySelector('#roundScore'+this.isActive).textContent = this.roundScore

                    }else {
                        
                        this.nextPlayer()

                    }
                }
                
            })
            
        }
        
        //TRANSFERT DU ROUND VERS LE GLOBAL 
        hold() {

            btnHold.addEventListener('click',() => {

                if(this.gamePlaying) {

                    this.globalScore[this.isActive] += this.roundScore
                    document.querySelector('#globalScore'+this.isActive).textContent = this.globalScore[this.isActive]
                    console.log('player 1 round: '+roundScoreDisplay0.textContent)
                    console.log('player 2 round: '+roundScoreDisplay1.textContent)
                    console.log('player 1 global: '+this.globalScore[0])
                    console.log('player 2 global: '+ this.globalScore[1])

                    if(this.globalScore[this.isActive] >= 100) {

                        document.querySelector('#players-title'+this.isActive).textContent ='VAINQUEUR !'
                        document.querySelector('#players-title'+this.isActive).classList.add('winner')
                        document.querySelector('.diceDisplay').style.display = 'NONE'
                        this.gamePlaying = false

                    }else {
                        
                        this.nextPlayer()
                    }
                }
            
            })

        }

        //BASCULEMENT VERS INTERFACE ACTIF
        nextPlayer() {

            this.isActive === 0 ? this.isActive = 1 : this.isActive = 0
            this.roundScore = 0
            document.querySelector('.diceDisplay').style.display = 'NONE'
            roundScoreDisplay0.textContent = 0
            roundScoreDisplay1.textContent = 0
            interface0.classList.toggle('active')
            interface1.classList.toggle('active')
            
        }

}
document.querySelector('.diceDisplay').style.display = 'NONE'

let player1 = new Players(0,0,1,0)
let player2 = new Players(0,0,0,0)

player1.roll()
player1.hold()
player1.newGame()
console.log()





