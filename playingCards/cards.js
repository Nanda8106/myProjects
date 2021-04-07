
var start_btn = document.querySelector(".start-btn");
var display_board = document.querySelector(".display-board");
var result = document.querySelector(".result");
var collect = document.querySelector(".collect");
var refresh = document.querySelector(".refresh");
var per1_draw = document.querySelector(".per1-draw");
var per1_throw = document.querySelector(".per1-throw");
var per2_draw = document.querySelector(".per2-draw");
var per2_throw = document.querySelector(".per2-throw");

const music = new Audio('music/1313.wav');


   
    

function startGame(){
    
    
//    var person1div = document.getElementById("person1");
//    var person2div = document.getElementById("person2");
    
    
    
    
    music.play();
    
    start_btn.style.display = "none"
    
    var per1 = prompt("what is your name. person1");
    var per2 = prompt("what is your name. person2");
    
    
    display_board.style.display = "block";
    result.style.display = "block";
    
    
    
    
    let cardsGame = {
        'you':{'div':'person1' ,'names': 'name1', 'score':0},
        'dealer':{'div': 'person2','names': 'name2', 'score':0},
        'cards':["2H","2S","2C","2D", "3H","3S","3C","3D", "4H","4S","4C","4D","5H","5S","5C","5D","6H","6S","6C","6D","7H","7S","7C","7D","8H","8S","8C","8D","9H","9S","9C","9D","10H","10S","10C","10D","QH","QS","QC","QD","JH","JS","JC","JD","KH","KS","KC","KD","AH","AS","AC","AD"],
//        'scores':{"2H":2, "3H":3, "4H":4,"5H":5,"6H":6,"7H":7,"8H":8,"9H":9,"10H":10,"QH":11,"JH":12,"KH":13,"AH":14},
    }
    
    const YOU = cardsGame['you'];
    const DEALER = cardsGame['dealer'];
    
    
    
    var cardscopy = []
    for (let i = 0; i < cardsGame.cards.length; i++) {
        cardscopy.push(cardsGame.cards[i])
    }
    console.log(cardscopy)
    
    function randomcard(number) {
        let randomnum = Math.floor(Math.random() * number);
        return cardsGame['cards'][randomnum]
    }
    
    var person1 = [];
    var person2 = [];
    
    for(let i=0; i<22; i++) {
        let cardtake = randomcard(cardsGame.cards.length)
        let indexto = cardsGame.cards.indexOf(cardtake)
    
        cardsGame.cards.splice(indexto, 1);
        if (person1.length == person2.length) {
            person1.push(cardtake)
        }else{
            person2.push(cardtake)
        }
          

    }
    
    
    // cards on screen
    for(let i=0; i<person1.length; i++){
        imgSrc(person1[i],YOU)
    }
    for(let i=0; i<person2.length; i++){
        imgSrc(person2[i],DEALER)
    }
    // ending
    
    per1_draw.style.visibility = "visible"
    
    document.getElementById("per1draw").addEventListener('click', Draw1);
    document.getElementById("per1throw").addEventListener('click', Throw1);
    document.getElementById("per2draw").addEventListener('click', Draw2);
    document.getElementById("per2throw").addEventListener('click', Throw2);
    


        /*let numberofCards = {
            member1: {Ace: 0,King: 0,Jack: 0,Queen: 0,Two: 0,Three: 0,Four: 0,Five: 0,Six: 0,Seven: 0,Eight: 0,Nine: 0,Ten: 0,},
            member2: {Ace: 0,King: 0,Jack: 0,Queen: 0,Two: 0,Three: 0,Four: 0,Five: 0,Six: 0,Seven: 0,Eight: 0,Nine: 0,Ten: 0,}
        }*/
        
        let member1CN = howmanycards(person1);
        winner(member1CN, per1,YOU)
        
        let member2CN = howmanycards(person2);
        winner(member2CN, per2,DEALER)
        
        
        document.getElementById(YOU['names']).innerHTML = per1;
        document.getElementById("name1cards").innerHTML ="(Ace="+member1CN[0]+", King="+member1CN[1]+", Jack="+member1CN[2]+", Queen="+member1CN[3]+", Two="+member1CN[4]+", Three="+member1CN[5]+", Four="+member1CN[6]+", Five="+member1CN[7]+", Six="+member1CN[8]+", Seven="+member1CN[9]+", Eight="+member1CN[10]+", Nine="+member1CN[11]+", Ten="+member1CN[12]+")";
        document.getElementById(DEALER["names"]).innerHTML = per2;
        document.getElementById("name2cards").innerHTML ="(Ace="+member2CN[0]+", King="+member2CN[1]+", Jack="+member2CN[2]+", Queen="+member2CN[3]+", Two="+member2CN[4]+", Three="+member2CN[5]+", Four="+member2CN[6]+", Five="+member2CN[7]+", Six="+member2CN[8]+", Seven="+member2CN[9]+", Eight="+member2CN[10]+", Nine="+member2CN[11]+", Ten="+member2CN[12]+")";
        

        function Draw1() {
            per1_draw.style.visibility = "hidden";
            music.play();
            let cardtake = randomcard(cardsGame.cards.length)
            let indexto = cardsGame.cards.indexOf(cardtake)

            cardsGame.cards.splice(indexto, 1);
            person1.push(cardtake)
            imgSrc(person1[person1.length - 1], YOU)
            per1_throw.style.visibility = "visible";
            
            let member1CCN = howmanycards(person1);
            document.getElementById(YOU['names']).innerHTML = per1;
            document.getElementById("name1cards").innerHTML ="(Ace="+member1CCN[0]+", King="+member1CCN[1]+", Jack="+member1CCN[2]+", Queen="+member1CCN[3]+", Two="+member1CCN[4]+", Three="+member1CCN[5]+", Four="+member1CCN[6]+", Five="+member1CCN[7]+", Six="+member1CCN[8]+", Seven="+member1CCN[9]+", Eight="+member1CCN[10]+", Nine="+member1CCN[11]+", Ten="+member1CCN[12]+")";
        
            winner(member1CCN, per1,YOU)
            
            
        
        
        
        }

        function Throw1() {

            let throwcardname = prompt("which card do you want to throw? like if the card is 7 and is daimaond then enter 7D,AD...");
            let indexro = person1.indexOf(throwcardname);
            person1.splice(indexro, 1);
            console.log(person1);
            cardsGame.cards.push(throwcardname)
            let yourImage = document.querySelector(".person1").querySelectorAll("img");

            for (let i = 0; i < yourImage.length; i++) {
                yourImage[i].remove();
            }
            for (let i = 0; i < person1.length; i++) {
                imgSrc(person1[i], YOU)
            }
            per1_throw.style.visibility = "hidden";
            per2_draw.style.visibility = "visible";
            
            let member1CCN = howmanycards(person1);
            
            document.getElementById(YOU['names']).innerHTML = per1;
            document.getElementById("name1cards").innerHTML ="(Ace="+member1CCN[0]+", King="+member1CCN[1]+", Jack="+member1CCN[2]+", Queen="+member1CCN[3]+", Two="+member1CCN[4]+", Three="+member1CCN[5]+", Four="+member1CCN[6]+", Five="+member1CCN[7]+", Six="+member1CCN[8]+", Seven="+member1CCN[9]+", Eight="+member1CCN[10]+", Nine="+member1CCN[11]+", Ten="+member1CCN[12]+")";
        
        
        
        }

        function Draw2() {
            music.play();
            let cardtake = randomcard(cardsGame.cards.length)
            let indexto = cardsGame.cards.indexOf(cardtake)

            cardsGame.cards.splice(indexto, 1);
            person2.push(cardtake)
            imgSrc(person2[person2.length - 1], DEALER)
            per2_draw.style.visibility = "hidden"
            per2_throw.style.visibility = "visible"
            
            
            let member2CCN = howmanycards(person2);
             document.getElementById(DEALER["names"]).innerHTML = per2;
            document.getElementById("name2cards").innerHTML ="(Ace="+member2CCN[0]+", King="+member2CCN[1]+", Jack="+member2CCN[2]+", Queen="+member2CCN[3]+", Two="+member2CCN[4]+", Three="+member2CCN[5]+", Four="+member2CCN[6]+", Five="+member2CCN[7]+", Six="+member2CCN[8]+", Seven="+member2CCN[9]+", Eight="+member2CCN[10]+", Nine="+member2CCN[11]+", Ten="+member2CCN[12]+")";

            winner(member2CCN, per2,DEALER)
            
        
        }

        function Throw2() {
            let throwcardname = prompt("which card do you want to throw? like if the card is 7 and is daimaond then enter 7D,AD...");
            let indexro = person2.indexOf(throwcardname);
            person2.splice(indexro, 1);
            console.log(person2);
            cardsGame.cards.push(throwcardname)
            let yourImage = document.querySelector(".person2").querySelectorAll("img");

            for (let i = 0; i < yourImage.length; i++) {
                yourImage[i].remove();
            }
            for (let i = 0; i < person2.length; i++) {
                imgSrc(person2[i], DEALER)
            }
            per2_throw.style.visibility = "hidden";
            per1_draw.style.visibility = "visible";
            let member2CCN = howmanycards(person2);
            document.getElementById(DEALER["names"]).innerHTML = per2;
            document.getElementById("name2cards").innerHTML ="(Ace="+member2CCN[0]+", King="+member2CCN[1]+", Jack="+member2CCN[2]+", Queen="+member2CCN[3]+", Two="+member2CCN[4]+", Three="+member2CCN[5]+", Four="+member2CCN[6]+", Five="+member2CCN[7]+", Six="+member2CCN[8]+", Seven="+member2CCN[9]+", Eight="+member2CCN[10]+", Nine="+member2CCN[11]+", Ten="+member2CCN[12]+")";

        
        
            
        }
    

   /* refresh.style.display = "block";
    
    document.getElementById("playAgain").addEventListener('click', PlayAgain);*/
    
}


 function PlayAgain(){
     display_board.style.display = "none";
     result.style.display = "none";
     let yourImage = document.querySelector(".person1").querySelectorAll("img");
     let dealerImage = document.querySelector(".person2").querySelectorAll("img");
     for(let i = 0; i<yourImage.length; i++){
         yourImage[i].remove();
     }
     for(let i = 0; i<yourImage.length; i++){
         dealerImage[i].remove();
     }
     startGame()
 }

    




function personssum(personCards, scores) {
    
    let sum = 0;
    for(let i =0; i<personCards.length; i++){
        sum = sum + scores[personCards[i]]
    }
    return sum;
}

function imgSrc(cards,gamer){
    var cardImage = document.createElement("img");
    cardImage.src = `images/${cards}.png`;
    document.getElementById(gamer['div']).appendChild(cardImage)
    
}

function winnerMessage(person1sum, person2sum, per1, per2){
    let message = "";
    if(person1sum > person2sum){
        message = "Congaratulation "+per1+" : You are the winner";
    }else if(person1sum < person2sum){
        message = "Congaratulation "+per2+" : You are the winner";
    }else{
        message = "Match Tied";
    }
    return message;
}
function howmanycards(person){
    let particularcards = {
            'ace': ['AC', 'AS', 'AD', 'AH'],
            'king': ["KH", "KS", "KC", "KD"],
            'queen': ["QH", "QS", "QC", "QD"],
            'jack': ["JH", "JS", "JC", "JD"],
            'two': ["2H", "2S", "2C", "2D"],
            'three': ["3H", "3S", "3C", "3D"],
            'four': ["4H", "4S", "4C", "4D"],
            'five': ["5H", "5S", "5C", "5D"],
            'six': ["6H", "6S", "6C", "6D"],
            'seven': ["7H", "7S", "7C", "7D"],
            'eight': ["8H", "8S", "8C", "8D"],
            'nine': ["9H", "9S", "9C", "9D"],
            'ten': ["10H", "10S", "10C", "10D"],
        }
    let member = {
        Ace: 0,
        King: 0,
        Jack: 0,
        Queen: 0,
        Two: 0,
        Three: 0,
        Four: 0,
        Five: 0,
        Six: 0,
        Seven: 0,
        Eight: 0,
        Nine: 0,
        Ten: 0,
    } 
        

        for (let i = 0; i < person.length; i++) {
            for (let k = 0; k < particularcards.ace.length; k++) {
                if (particularcards.ace[k] == person[i]) {
                    member.Ace+=1;
                    
                }
            }
            for (let k = 0; k < particularcards.king.length; k++) {
                if (particularcards.king[k] == person[i]) {
                    member.King += 1;
                    
                }
            }
            for (let k = 0; k < particularcards.jack.length; k++) {
                if (particularcards.jack[k] == person[i]) {
                    member.Jack += 1;
                    
                }
            }
            for (let k = 0; k < particularcards.queen.length; k++) {
                if (particularcards.queen[k] == person[i]) {
                   member.Queen += 1;
                    
                }
            }
            for (let k = 0; k < particularcards.two.length; k++) {
                if (particularcards.two[k] == person[i]) {
                    member.Two += 1;
                    
                }
            }
            for (let k = 0; k < particularcards.three.length; k++) {
                if (particularcards.three[k] == person[i]) {
                    member.Three += 1;
                }
            }
            for (let k = 0; k < particularcards.four.length; k++) {
                if (particularcards.four[k] == person[i]) {
                    member.Four += 1;
                }
            }
            for (let k = 0; k < particularcards.five.length; k++) {
                if (particularcards.five[k] == person[i]) {
                    member.Five += 1;
                }
            }
            for (let k = 0; k < particularcards.six.length; k++) {
                if (particularcards.six[k] == person[i]) {
                    member.Six += 1;
                }
            }
            for (let k = 0; k < particularcards.seven.length; k++) {
                if (particularcards.seven[k] == person[i]) {
                   member.Seven += 1;
                }
            }
            for (let k = 0; k < particularcards.eight.length; k++) {
                if (particularcards.eight[k] == person[i]) {
                    member.Eight += 1;
                }
            }
            for (let k = 0; k < particularcards.nine.length; k++) {
                if (particularcards.nine[k] == person[i]) {
                    member.Nine +=1;
                }
            }
            for (let k = 0; k < particularcards.ten.length; k++) {
                if (particularcards.ten[k] == person[i]) {
                    member.Ten += 1;
                }
            }
        }
    return [member.Ace,member.King,member.Jack,member.Queen,member.Two,member.Three, member.Four,member.Five,member.Six,member.Seven,member.Eight, member.Nine,member.Ten];
}

function winner(cardnumberlist, personname, personsDiv){
    let forwinning = [4,3]
    let fourcount = 0;
    let threecount = 0;
    for(let i =0; i<cardnumberlist.length;i++){
        if(forwinning[0] == cardnumberlist[i]){
            fourcount += 1;
        }
        if(forwinning[1] == cardnumberlist[i]){
            threecount += 1;
        }
    }
    
    if( (fourcount>=1) && (threecount == 2)){
        document.querySelector(".draw-btn").style.display = "none";
        document.getElementById(personsDiv['names']).innerHTML = personname+"(Winner)";
    }
}
           




































