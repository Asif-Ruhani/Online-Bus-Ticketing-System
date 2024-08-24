
const ReservedSeats=[];
let availableSeats=40;
let reserveseats=0; 
let i=0;
let totalPrice=0;
let GrandTotal=0;

let x1=document.getElementById('AvailableSeats');
x1.innerText=availableSeats;

let x2=document.getElementById('ReservedSeats');
x2.innerText=reserveseats;

let totalprice=document.getElementById('totalPrice');
totalprice.innerText=totalPrice;

let x4=document.getElementById('GrandTotal');
x4.innerText=GrandTotal;






    document.addEventListener('click',function(event){   // get the button name that is clicked bu mouse
    const SeatName=event.target.innerText;
    // console.log(SeatName);
    
    
    if(ReservedSeats.includes(SeatName)==true){
        console.log('Already ache');
        // console.log(array);
        
    }
    else{
          
        if(ReservedSeats.length<4){
            ReservedSeats.push(SeatName);
            i+=1;
            
            x1.innerText=availableSeats-i;
            x2.innerText=reserveseats+i;
            

            const SeatId=document.getElementById(SeatName);
            SeatId.classList.add('SeatsBgColor');
            // console.log(ReservedSeats);


            const SeatNumber=document.getElementById('SeatName');   // jei div er moddhe p banabo sei div er id nilam
            const seat_name=document.createElement('p');
            seat_name.innerText=SeatName;
            SeatNumber.appendChild(seat_name);
      
      
            const SeatClass=document.getElementById('SeatClass');   // jei div er moddhe p banabo sei div er id nilam
            const seat_class=document.createElement('p');
            seat_class.innerText='Economy';
            SeatClass.appendChild(seat_class);
      
      
            const SeatPrice=document.getElementById('SeatPrice');   // jei div er moddhe p banabo sei div er id nilam
            const seat_price=document.createElement('p');
            seat_price.innerText=parseInt('550');
            SeatPrice.appendChild(seat_price);

           
            let currentPrice=parseInt(seat_price.innerText);  // 550 ke integer a convert korlam

            let total_price=parseInt(totalprice.innerText);   // total price keo integer a convert korlam

            totalPrice+=currentPrice;   // total price ke increase korlam

            totalprice.innerText=totalPrice;

            


        }
        else{
            console.log('Limit Over');
            console.log('final array is = ',ReservedSeats);
        }   
    }  


      





  })






