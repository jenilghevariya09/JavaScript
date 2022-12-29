
      
  

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

             
             price = parseFloat(price);
             percent = parseFloat(percent);
             grand = parseFloat(grand);
           
             if(price){
                var tax = (price / 100) * percent;
                var cgst = tax/2;
                var grand = price * ((100 + percent) / 100);

               
                document.getElementById("taxamt").value = tax.toFixed(2);
                document.getElementById("cgst").value = cgst.toFixed(2);
                document.getElementById("sgst").value = cgst.toFixed(2);
                document.getElementById("taxgrand").value = grand.toFixed(2);

                }

               
               
               if(grand) {
                var tax = (price / 100) * percent;

                var cgst = tax/2;
                var price = (100 * grand )/ (100 + percent);
                

                document.getElementById("taxamt").value = tax.toFixed(2);
                document.getElementById("cgst").value = cgst.toFixed(2);
                document.getElementById("sgst").value = cgst.toFixed(2);
                document.getElementById("taxprice").value = price.toFixed(2);


            }
            
               
   

  }
  
  function calc() {
    var price = document.getElementById("taxprice").value,
     grand = document.getElementById("taxgrand").value;
    

    
    if (document.getElementById("taxperc")) {   
        percent = document.getElementById("taxperc").value;
    }
   
    if (document.getElementById("taxperc").value == document.getElementById("5").value) {
        document.getElementById('5').checked = true;     
    }
    if(document.getElementById("taxperc").value != document.getElementById("5").value) {
        document.getElementById('5').checked = false;
    }

    if(document.getElementById("taxperc").value == document.getElementById("12").value){
        document.getElementById('12').checked = true;
    }
    if(document.getElementById("taxperc").value != document.getElementById("12").value) {
        document.getElementById('12').checked = false;
    }

    if(document.getElementById("taxperc").value == document.getElementById("18").value){
        document.getElementById('18').checked = true;
    }
    if(document.getElementById("taxperc").value != document.getElementById("18").value) {
        document.getElementById('18').checked = false;
    }

    if(document.getElementById("taxperc").value == document.getElementById("28").value){
        document.getElementById('28').checked = true;  
    }
    if(document.getElementById("taxperc").value != document.getElementById("28").value) {
        document.getElementById('28').checked = false;  
    }
    price = parseFloat(price);
      percent = parseFloat(percent);
      grand = parseFloat(grand);
    if(price){
        var tax = (price / 100) * percent;

        var cgst = tax/2;
        var grand = price * ((100 + percent) / 100);
     
        document.getElementById("taxamt").value = tax.toFixed(2);
        document.getElementById("cgst").value = cgst.toFixed(2);
        document.getElementById("sgst").value = cgst.toFixed(2);
        document.getElementById("taxgrand").value = grand.toFixed(2);

    
       }
       if(grand) {
        var tax = (price / 100) * percent;

        var cgst = tax/2;
        var price = (100 * grand )/ (100 + percent);
        
        document.getElementById("taxamt").value = tax.toFixed(2);

        document.getElementById("cgst").value = cgst.toFixed(2);
        document.getElementById("sgst").value = cgst.toFixed(2);
        document.getElementById("taxprice").value = price.toFixed(2);


       
    }
  }