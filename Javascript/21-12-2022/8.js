    //__proto__


    function ProtoisThis() {
        let animal = {
            walk(){
                if (!this.isSleeping) {
                    alert("I am not Sleep")
                }
            },
            Sleep(){
                this.isSleeping = true;
            },
       
        };

        let rabbit = {
            name : "rabbit carrot",
            __proto__ : animal
        }
        rabbit.Sleep();
        alert(rabbit.isSleeping);
        animal.walk();
        alert(rabbit.name);
    }

    // class super
    function ClassSuper() {
        
 
    class Animal {

        constructor(name) {
          this.speed = 0;
          this.name = name;
        }
      
      }
      
      class Rabbit extends Animal {
      
        constructor(name, earLength) {
          super(name);
          this.earLength = earLength;
        }
           
      }
      
      let animal = new Animal("black rabbit")
      let rabbit = new Rabbit("White Rabbit", 10);
      alert(rabbit.name); // White Rabbit
      alert(rabbit.earLength);
      alert(animal.name)

    }

    //try catch
    function TryCatch() {
        let json = '{ "name" :"jenil" }';

        try {
        
          let user = JSON.parse(json); 
          alert( user.name );
          alert(user.baad); // no error undefined
          alert(   a); // error it'll runs catch 
          
        
        } catch (err) {
            if (err.name = "ReferenceError") {
               alert("This is ReferenceError"+ " : " + err.message);
              }
              else{
          alert( "Our apologies, the data has errors, we'll try to request it one more time. "  + err );
                } 
        alert("finally executed");
        }
    }

    

    
    