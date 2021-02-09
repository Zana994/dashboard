var element = document.getElementById("chk");
element.addEventListener('click', function (){
    var card_arr = document.getElementsByClassName("grid-item");
    var card_arr2 = document.getElementsByClassName("grid-items");
    if(element.checked){
        document.body.classList.toggle('white');
        document.querySelector('.bg-pattern').classList.toggle('white');
        for(var i=0; i<card_arr.length; i++){
            card_arr[i].classList.toggle('white-card');
        }
        for(var i=0; i<card_arr2.length; i++){
            card_arr2[i].classList.toggle('white-card-2');
        }
    }
    else { 
        document.body.classList.remove('white');
        document.querySelector('.bg-pattern').classList.remove('white');
        for(var i=0; i<card_arr.length; i++){
            card_arr[i].classList.remove('white-card');
        }
        for(var i=0; i<card_arr2.length; i++){
            card_arr2[i].classList.remove('white-card-2');
        }
    }
});