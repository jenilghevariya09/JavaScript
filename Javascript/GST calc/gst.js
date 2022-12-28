
function tcalc () {
    
    var price = document.getElementById("taxprice").value,
    grand = document.getElementById("taxgrand").value;
    
    if (document.getElementById("taxperc")) {   
        percent = document.getElementById("taxperc").value;
    }

    
    if(document.getElementById('5').checked == true){
        var percent = document.getElementById("5").value;
        document.getElementById("taxperc").value = percent;
     }
     if(document.getElementById('12').checked == true){
         var percent = document.getElementById("12").value;
         document.getElementById("taxperc").value = percent;

         }
     if(document.getElementById('18').checked == true){
                 var percent = document.getElementById("18").value;
                 document.getElementById("taxperc").value = percent;
                     }
         if(document.getElementById('28').checked == true){
             var percent = document.getElementById("28").value;
             document.getElementById("taxperc").value = percent;
             }  

    if (document.getElementById("taxperc").value == document.getElementById("5").value) {
        document.getElementById('5').checked = true;     
    }else {
        document.getElementById('5').checked = false;
    }

    if(document.getElementById("taxperc").value == document.getElementById("12").value){
        document.getElementById('12').checked = true;
    }else {
        document.getElementById('12').checked = false;
    }

    if(document.getElementById("taxperc").value == document.getElementById("18").value){
        document.getElementById('18').checked = true;
    }else {
        document.getElementById('18').checked = false;
    }

    if(document.getElementById("taxperc").value == document.getElementById("28").value){
        document.getElementById('28').checked = true;  
    }else{
    document.getElementById('28').checked = false;  
    }
    
    
             
  
            
                  
    price = parseFloat(price);
    percent = parseFloat(percent);
    grand = parseFloat(grand);

    
   if(price){
    var grand = (price * ((100 + percent) / 100)).toFixed(2);

    document.getElementById("taxgrand").value = grand;

   }
   else {
    var price = ((100 * grand )/ (100 + percent)).toFixed(2);

    document.getElementById("taxprice").value = price;
   
}

  }
  
  