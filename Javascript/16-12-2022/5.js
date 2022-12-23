//Data types
    //String
    function stringA() {
        
        let guestList = `Guests:
         * John
         * Pete
         * Mary     h
         hello
         it'll run at it is with using backticks 

         with double quotes 
        `;// it'll run at it is

        let guestLists = "Guests:\n * John\n * Pete\n * Mary"; // with double quotes 

        alert(guestList + guestLists);
    }

    function Search() {
        let str = 'As sly as a fox, as strong as an ox';
        let target = prompt(`serch word from string 
        * 'As sly as a fox, as strong as an ox' * `,'as') 
            
        if (str.indexOf(target,0) != -1) {
            return alert(str.indexOf(target,0)) 
        } else {
            alert("we can't find")
        }
    }

    function SearchA() {
        let str = 'As sly as a fox, as strong as an ox';

        let target = prompt(`serch word from string 
        * 'As sly as a fox, as strong as an ox' * `,) // let's look for it
        
        let pos = 0;
        while (true) {
          let foundPos = str.indexOf(target, pos);
          if (foundPos == -1) break;
        
          alert( `Found at ${foundPos}` );
          pos = foundPos + 1; // continue the search from the next position
        }
    }

    function SearchB() {
        let str = 'As sly as a fox, as strong as an ox';
        let target = prompt(`serch word from string 
        * 'As sly as a fox, as strong as an ox' * `,'as') 
            
        if (str.includes(target)) {
             alert(str.indexOf(target,0) + "  found") 
        } else {
            alert("we can't find")
        }
    }

    function UpperChar() {
        let str = 'As sly as a fox, as strong as an ox';
        ans = str.slice(0,-2)  + str.slice(-2 , -1).toUpperCase() + str.slice(-1);
        ans1 = str.trim(2)         

        alert(ans)
        alert(ans1)
    }

    function ArrayA() {
        styles = ["Jazz", "Blues"];
        styles.push("Rock-n-Roll");
        styles[Math.floor((styles.length-1)/2)] = "Classics";
        styles.shift();
        styles.unshift("Rap", "Reggae");
        
        alert(styles);
    }

    function ConcatArray() {
        let arr = [1, 2];

            let arrayLike = {
              0: "something",
              1: "if",
              2: "else",
              [Symbol.isConcatSpreadable]: true,
              length: 3
            };

            alert( arr.concat(arrayLike) ); // 1,2,something,else
    }