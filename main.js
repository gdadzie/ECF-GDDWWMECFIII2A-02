let globalScoreDisplay0 = document.getElementById('globalScore0');
let globalScoreDisplay1 = document.getElementById('globalScore1');
let roundScoreDisplay0 = document.getElementById('roundScore0');
let roundScoreDisplay1 = document.getElementById('roundScore1');
const btnRollDice = document.getElementById('btnRollDice');
const btnHold = document.getElementById('btnHold');
let playersTitle = document.getElementById('players-title');
let playersTitle0 = document.getElementById('players-title0');
let playersTitle1 = document.getElementById('players-title1');
let interfacePlayer =document.querySelector('.interfacePlayer');
const btnNewGame =  document.getElementById('initGame');
let diceDisplay = document.getElementsByClassName('diceDisplay');
let interface0 = document.querySelector('.interface0');
let interface1 = document.querySelector('.interface1');




class Players{

        constructor(globalScore, roundScore, isActive, game){

            this.globalScore = [0,0] ;
            this.roundScore = 0;
            this.isActive=this.isActive;

            this.gamePlaying = false;
        }



        //Initialiser une nouvelle partie

        newGame(){

            btnNewGame.addEventListener('click',()=>{

                this.globalScore = [0,0];
                this.roundScore = 0;
                this.isActive =0 ;
                this.gamePlaying = true;

                globalScoreDisplay0.textContent = 0;
                globalScoreDisplay1.textContent = 0;
                roundScoreDisplay0.textContent = 0;
                roundScoreDisplay1.textContent = 0;
                playersTitle0.textContent = 'Player 1';
                playersTitle1.textContent = 'Player 2';
                interface0.classList.add('active');
                interface1.classList.remove('active');
                document.querySelector('#players-title'+this.isActive).classList.remove('winner')
                document.querySelector('.diceDisplay').style.display = 'NONE';
            })
        }

        
        
        //FONCTION ROLL DICE
        roll(){

        //Ajout d'évenement au click du bouton ROLL DICE
            btnRollDice.addEventListener('click',()=>{

                if(this.gamePlaying){

        //Choix du nombre aléatoire
                    let random = Math.floor(Math.random()*6)+1;
            
        //DICE DISPLAY
                    document.querySelector('.diceDisplay').style.display = 'block';
        //Affichage du dé selon résultat du lancé
                    document.querySelector('.diceDisplay').src = 'dice-'+ random +'.png';
                    
        //SKIP PLAYERS
                    if(random !== 1){
        //Transfert du résultat du dé vers le ROUND       
                    this.roundScore += random ;
        //Affichage du round dans la case Current HTML
                
                        document.querySelector('#roundScore'+this.isActive).textContent = this.roundScore

                        
        
                    }else{
                        
                        this.nextPlayer()


                    }
                }
                
         
            })
            
        }
        
        hold(){

        //Ajout d'évenement au click du bouton HOLD
            btnHold.addEventListener('click',()=>{

                if(this.gamePlaying){


        // TRANSFER ROUNSCORE TO GLOBALSCORE
        this.globalScore[this.isActive] += this.roundScore
        document.querySelector('#globalScore'+this.isActive).textContent = this.globalScore[this.isActive]


       

        
        
        console.log('player 1 round: '+roundScoreDisplay0.textContent)
        console.log('player 2 round: '+roundScoreDisplay1.textContent)
        console.log('player 1 global: '+this.globalScore[0])
        console.log('player 2 global: '+ this.globalScore[1])


        

        
                    
                    // WINNER
                    if(this.globalScore[this.isActive] >= 100){

                        document.querySelector('#players-title'+this.isActive).textContent ='WINNER !'
                        document.querySelector('#players-title'+this.isActive).classList.add('winner')

                        document.querySelector('.diceDisplay').style.display = 'NONE';
                        this.gamePlaying = false;


                    }else{
                        this.nextPlayer()
                    }
                }
            
            
            })
        }

        nextPlayer(){

            this.isActive === 0 ? this.isActive = 1 : this.isActive = 0
            this.roundScore = 0


            roundScoreDisplay0.textContent = 0;
            roundScoreDisplay1.textContent = 0;
            interface0.classList.toggle('active');
            interface1.classList.toggle('active');
           
            
            
        }
        
        


}

let player1 = new Players(0,0,1,0);
let player2 = new Players(0,0,0,0);

player1.roll();
player1.hold();
player1.newGame();
console.log()





