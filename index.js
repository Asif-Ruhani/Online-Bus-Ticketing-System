
const ReservedSeats=[];
let availableSeats=40;
let reserveseats=0; 
let i=0;
let totalPrice=0;
let GrandTotal=0;
let TotalSeat=0;

let CurrentAvailableSeats=document.getElementById('AvailableSeats');
CurrentAvailableSeats.innerText=availableSeats;

let CurrentReserveSeats=document.getElementById('ReservedSeats');
CurrentReserveSeats.innerText=reserveseats;

let totalprice=document.getElementById('totalPrice');
totalprice.innerText=totalPrice;

let Grand_Total=document.getElementById('GrandTotal');
Grand_Total.innerText=GrandTotal;





GetSeatName(); // whend the project is run, this function will be called




 function SeatAllocation(seatname){

     if(ReservedSeats.includes(seatname)==true){
        // console.log('This seat is already allocated');
    }


     else{
             // One person can not reserve more than 4 seats 
             if(ReservedSeats.length<4){
                 ReservedSeats.push(seatname);
                i++;

                //  Update available & reserved seats
                 CurrentAvailableSeats.innerText=availableSeats-i;
                 CurrentReserveSeats.innerText=reserveseats+i;
                
                // Set selected seats's background color
                 const SeatId=document.getElementById(seatname);
                 SeatId.classList.add('SeatsBgColor');
        
    
                //  Process is started to display seat's info.
                 const SeatInfoArea=document.getElementById('ScrollingDiv');  // outer div, created to contain inner div.
                 const EachSeatDiv= document.createElement('div')  // inner div, created dynamically to display each seat's info. 
                
                // Three paragraphs are created dynamically into inner div for seat name, class & price. and flex them.
                const seat_name=document.createElement('p');
                seat_name.innerText=seatname;
    
                const seat_class=document.createElement('p');
                seat_class.innerText='Economy';
    
                const seat_price=document.createElement('p');
                seat_price.innerText=parseInt('550');
    
                // append paragraphs into their parent div (inner div)
                EachSeatDiv.appendChild(seat_name);
                EachSeatDiv.appendChild(seat_class);
                EachSeatDiv.appendChild(seat_price);
                 
                // Finally append inner div into it's parent div(Outer div).
                SeatInfoArea.appendChild(EachSeatDiv);
    
                //  convert each seat price to integer.
                 let currentPrice=parseInt(seat_price.innerText);  
                
                //  convert total price to integer
                totalPrice=parseInt(totalprice.innerText);  
                
                // update total price after selecting a seat.
                totalPrice+=currentPrice;
                 
                // Set the total price & grand price.
                 totalprice.innerText=totalPrice;
                 Grand_Total.innerText=totalPrice;
            }
    
        } 
}



document.getElementById('ApplyCoupon').addEventListener('click',function(){  // this line execute when "Apply Coupon" button is clicked.
    
    const DiscountDisplay=document.getElementById('DiscountInfoDisplay');
        const DiscountInputBox=document.getElementById('inputBox');

                      if(DiscountInputBox.value === 'NEW15'){
                        Grand_Total.innerText=totalPrice-(totalPrice*0.15);
                        DiscountDisplay.innerText='Your have got 15% discount';
                        
                    }
            
                    else if(DiscountInputBox.value === 'OLD20'){
                        Grand_Total.innerText=totalPrice-(totalPrice*0.20);
                        DiscountDisplay.innerText='Your have got 20% discount';
                       
                    }
            
                    else{
                             Grand_Total.innerText=totalPrice;
                          
                    }

})




    function GetSeatName(){
          
    document.addEventListener('click',function(event){   // get the button name that is clicked bu mouse
        const SeatName=event.target.innerText;
        SeatAllocation(SeatName);
    
      })

  }



    






