let title = document.querySelector('.title');
let start = document.querySelector('.start');
let turn = 'x';
let squares = [];
let k = 0;
let cas;
let indice = 0;

start.addEventListener('click',function(){
   title.innerHTML = 'X turn';
   start.style.display = 'none';
   indice++;
});

function endGame(num1,num2,num3){

    title.innerHTML = `${squares[num1]} is the winner`;
    document.getElementById('item'+num1).style.background = 'rgb(63, 125, 18)';
    document.getElementById('item'+num2).style.background = 'rgb(63, 125, 18)';
    document.getElementById('item'+num3).style.background = 'rgb(63, 125, 18)';
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);

}

function winner(){
     for(i=1;i<10;i++){
        squares[i] = document.getElementById('item'+i).innerHTML;
     }
     if(squares[1]==squares[2]&&squares[2]==squares[3]&&squares[1]!=''){
        cas = 1;
        endGame(1,2,3);
     }
     else if(squares[4]==squares[5]&&squares[5]==squares[6]&&squares[4]!=''){
        cas = 1;
        endGame(4,5,6);
     }
     else if(squares[7]==squares[8]&&squares[8]==squares[9]&&squares[7]!=''){
        cas = 1;
        endGame(7,8,9);
     }
     else if(squares[1]==squares[4]&&squares[4]==squares[7]&&squares[1]!=''){
        cas = 1;
        endGame(1,4,7);
     }
     else if(squares[2]==squares[5]&&squares[5]==squares[8]&&squares[2]!=''){
        cas = 1;
        endGame(2,5,8);
     }
     else if(squares[3]==squares[6]&&squares[6]==squares[9]&&squares[3]!=''){
        cas = 1;
        endGame(3,6,9);
     }
     else if(squares[1]==squares[5]&&squares[5]==squares[9]&&squares[1]!=''){
        cas = 1;
        endGame(1,5,9);
     }
     else if(squares[3]==squares[5]&&squares[5]==squares[7]&&squares[3]!=''){
        cas = 1;
        endGame(3,5,7);
     }
     else{
      k++;
     }
}

function draw(){
   if(k==9){
      title.innerHTML = `It's a draw`;
      setInterval(function(){title.innerHTML += '.'},1000);
      setTimeout(function(){location.reload()},4000);
   }
}

function game(id) 
{
   let element = document.getElementById(id);
   let j = 1;
   if(cas != 1 && indice == 1){
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O turn';
        j--;
    }
    else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X turn';
        j--;
    }
    if(j==0){
       winner();
       draw();
    }
   }
}
 
function above(id){
   if(indice == 1 && cas != 1 &&  k<9){
   let element = document.getElementById(id);
    element.style.background = '#000';
    element.style.cursor = 'pointer';
   }
}
function outBox(id){
   if(indice == 1 && cas != 1 &&  k<9){
   let element = document.getElementById(id);
   element.style.background = 'rgb(211, 52, 153)';
   element.style.cursor = 'default';
   }
}
