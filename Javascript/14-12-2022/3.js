//condition

    //if condition 
        function condition() {
            let accessAllowed;
        let age = prompt('How old are you?', '');
        
        if (age > 18) {
          accessAllowed = true;
        } else if (age==18) {
          accessAllowed = true;
        }
        else {
            accessAllowed = false;
          }
        alert(accessAllowed);
        }

    // Conditional operator ‘?’
     
        function cond() {
            let age = prompt('How old are you?', '');
            let conds = (age >= 18) ? true : false;
            alert(conds);
        }
    
    //&& and ||
        function logical() {
           alert( alert(1) || alert(2) || alert(3) || 2) 
     
        }

    //braking the loop
        function breakloop() {
            let sum = 0;

            while (true) {

                let value = +prompt(`total sum ${sum}`, '');

                if (!value) break; // (*)

                sum += value;

            }
            alert(` Sum: ` + sum );
                    }
    
    //switch case
    function switchcase() {
        let a = +prompt('a?', '');
        switch (a) {
            case 0:
                alert( 0 );
                break;
            case 1:
                alert( 1 );
                break;
            case 2:
            case 3:
                alert( '2,3' );
                break; 

        }
        
    }

    //2.15 complete