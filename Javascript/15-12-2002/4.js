    //callback function
function callbackAsk() {
    

    function askYesNo(question,yes,no) {
         (confirm(question)) ? yes() : no();
    }
    function ifYes() {
        alert("you agreed")
    }
    function ifNo() {
        alert("you cancled execution")
    }
    //you can write function as argument also...
         // askYesNo("are you agreed?",function ifYes() {
         //     alert("you agreed")
         // }, ifNo);

    askYesNo("are you agreed?",ifYes, ifNo);
}

    //arrow function
    callbackAskArrow = () => {
            arrowAskYorN = (question,yes,no) => (confirm(question)) ? yes() : no()
            ifYesArrow = () => alert("you agreed")
            ifNoArrow = () => alert("you cancled execution")
            arrowAskYorN("are you aggred?" , ifYesArrow, ifNoArrow)
        }

        //4.1 object
        function objectA() {
            let user={
                name : "jenil",
                admin : true,
                "likes birds": true // can add string as key 
            };

            let key = prompt("What do you want to know about the user?", "name");

            user.age = 20; // add object key value
            delete user.admin; // delete object field in output it'll show undefined
            alert(user.name + " " + user.age + user.admin + user[key]);
        }
       
        // computed properties
        ObjectB = () => {
            let fruit = prompt("Which fruit to buy?", "apple");

            let bag = {
                [fruit]: 5, // the name of the property is taken from the variable fruit
            };

            alert( bag.apple ); // 5 if fruit="apple"
        }

        //parameter as object
        paraObject = () => {
        makeUser = (firstname,lastname, age) => {
            return {
                firstname,
                lastname,
                age,
              // ...other properties
            };
          }
          
          let user = makeUser("John","warker" ,30);
          alert(user.firstname + " " + user.lastname + " " + user.age); // John
        }