

let total = 0;
document.getElementById('registerButton').addEventListener('click', function(){
    let prev = document.getElementsByClassName('firsttxt').innerText; 
    document.getElementsByClassName('firsttxt').innerText = prev + document.getElementById('uname').innerText;
});







// document.getElementById('detailsimg').onclick(function(){

// });
// document.getElementById('diceimg').onclick(function(){

// });
document.getElementById('couponimg').addEventListener('click', function(){
    // console.log(33);
    if(total>10){
    document.getElementById('cpn').style.display='block';
    let coupon = generateString(12);
    console.log(coupon);
    let prev = document.getElementsByClassName('cpnnum').innerText;
    document.getElementsByClassName('cpnnum').innerText = prev + coupon;
    }
    else{
        alert('Ooops....Please try again');
    }
});





const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}



// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 5) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");
        total += randomNumber1;
    }, 500);
}
