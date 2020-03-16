//We worked on this as a group; Gardner.

//Variable declarations
const pair1 = document.querySelectorAll(".cardOne");
const pair2 = document.querySelectorAll(".cardTwo");
const pair3 = document.querySelectorAll(".cardThree");
const pair4 = document.querySelectorAll(".cardFour");
const pair5 = document.querySelectorAll(".cardFive");
const tds = document.querySelectorAll('TD');
const card = {
  back: "url('images/block.png') center /100%",
  front: "url('images/moneyMAN.png') center /100%"
};
const item = {
  albumONE: "url('images/albumONE.png')no-repeat center /100%",
  albumTWO: "url('images/albumTWO.png') no-repeat center /100%",
  albumTHREE: "url('images/albumTHREE.png') no-repeat center /100%",
  albumFOUR: "url('images/albumFOUR.jpg') no-repeat center /100%",
  albumFIVE: "url('images/albumFIVE.png') no-repeat center /100%"
};

const flipCard = (pairs, img) => {
  pairs.forEach((td) =>{
         td.style.background = img;
       });
     };

const revealPowerUp = (pairs, item) => {
  pairs.forEach((td) =>{
    td.addEventListener('click', (event) =>{
         td.style.background = item;
         setTimeout(cardsMatch, 1800);
         setTimeout(cardsDontMatch, 1800);
       });
     });
   };

revealPowerUp(pair1, item.albumONE);
revealPowerUp(pair2, item.albumTWO);
revealPowerUp(pair3, item.albumTHREE);
revealPowerUp(pair4, item.albumFOUR);
revealPowerUp(pair5, item.albumFIVE);

//Function that checks if the cards do not match.
const cardsDontMatch = () => {

  const match = [[1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10],
  [2, 1], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10],
  [3, 1], [3, 2], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10],
  [4, 1], [4, 2], [4, 3], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10],
  [5, 1], [5, 2], [5, 3], [5, 4], [5, 7], [5, 8], [5, 9], [5, 10],
  [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 7], [6, 8], [6, 9], [6, 10],
  [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 9], [7, 10],
  [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 9], [8, 10],
  [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8],
  [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9]]

  for(let i = 0; i < match.length; i++){
  const cardPairs = match[i];

  const firstCard = document.getElementById(cardPairs[0]).style.background;
  const secondCard = document.getElementById(cardPairs[1]).style.background;

    if(firstCard.includes('albumONE') && secondCard.includes('albumTWO')){
     flipCard(pair1, card.back);
     flipCard(pair2, card.back);
  }else if(firstCard.includes('albumONE') && secondCard.includes('albumTHREE')){
    flipCard(pair1, card.back);
    flipCard(pair3, card.back);
  }else if(firstCard.includes('albumONE') && secondCard.includes('albumFOUR')){
    flipCard(pair1, card.back);
    flipCard(pair4, card.back);
  }else if(firstCard.includes('albumONE') && secondCard.includes('albumFIVE')){
    flipCard(pair1, card.back);
    flipCard(pair5, card.back);
  }else if (firstCard.includes('albumTWO') && secondCard.includes('albumONE')){
    flipCard(pair2, card.back);
    flipCard(pair1, card.back);
  }else if(firstCard.includes('albumTWO') && secondCard.includes('albumTHREE')){
    flipCard(pair2, card.back);
    flipCard(pair3, card.back);
  }else if(firstCard.includes('albumTWO') && secondCard.includes('albumFOUR')){
    flipCard(pair2, card.back);
    flipCard(pair4, card.back);
  }else if(firstCard.includes('albumTWO') && secondCard.includes('albumFIVE')){
    flipCard(pair2, card.back);
    flipCard(pair5, card.back);
  }else if (firstCard.includes('albumTHREE') && secondCard.includes('albumONE')){
    flipCard(pair3, card.back);
    flipCard(pair1, card.back);
  }else if(firstCard.includes('albumTHREE') && secondCard.includes('albumTWO')){
    flipCard(pair3, card.back);
    flipCard(pair2, card.back);
  }else if(firstCard.includes('albumTHREE') && secondCard.includes('albumFOUR')){
    flipCard(pair3, card.back);
    flipCard(pair4, card.back);
  }else if(firstCard.includes('albumTHREE') && secondCard.includes('albumFIVE')){
    flipCard(pair3, card.back);
    flipCard(pair5, card.back);
  }else if(firstCard.includes('albumFOUR') && secondCard.includes('albumONE')){
    flipCard(pair4, card.back);
    flipCard(pair1, card.back);
  }else if(firstCard.includes('albumFOUR') && secondCard.includes('albumTWO')){
    flipCard(pair4, card.back);
    flipCard(pair2, card.back);
  }else if(firstCard.includes('albumFOUR') && secondCard.includes('albumTHREE')){
    flipCard(pair4, card.back);
    flipCard(pair3, card.back);
  }else if(firstCard.includes('albumFOUR') && secondCard.includes('albumFIVE')){
    flipCard(pair4, card.back);
    flipCard(pair5, card.back);
  }else if (firstCard.includes('albumFIVE') && secondCard.includes('albumONE')){
    flipCard(pair5, card.back);
    flipCard(pair1, card.back);
  }else if(firstCard.includes('albumFIVE') && secondCard.includes('albumTWO')){
    flipCard(pair5, card.back);
    flipCard(pair2, card.back);
  }else if(firstCard.includes('albumFIVE') && secondCard.includes('albumTHREE')){
    flipCard(pair5, card.back);
    flipCard(pair3, card.back);
  }else if(firstCard.includes('albumFIVE') && secondCard.includes('albumFOUR')){
    flipCard(pair5, card.back);
    flipCard(pair4, card.back);
    };
  };
};

//Fuction that checks if the cards do match.
const cardsMatch = () => {
  const match = [[1, 2],[3, 4], [5, 6], [7, 8], [9, 10]]

  for(let i = 0; i < match.length; i++){
  const cardPairs = match[i];

  const firstCard = document.getElementById(cardPairs[0]).style.background;
  const secondCard = document.getElementById(cardPairs[1]).style.background;

  if (firstCard.includes('albumONE') && secondCard.includes('albumONE')){
    flipCard(pair1, card.front);
  }else if(firstCard.includes('albumTWO') && secondCard.includes('albumTWO')){
    flipCard(pair2, card.front);
  }else if( firstCard.includes('albumTHREE') && secondCard.includes('albumTHREE')){
    flipCard(pair3, card.front);
  }else if( firstCard.includes('albumFOUR') && secondCard.includes('albumFOUR')){
    flipCard(pair4, card.front);
  }else if( firstCard.includes('albumFIVE') && secondCard.includes('albumFIVE')){
    flipCard(pair5, card.front);
    };
  };
};

//Reset button (Mario is the button)
document.querySelector("button").addEventListener('click', () =>{
      tds.forEach((td) =>{
    td.style.background = card.back;
  })
})
