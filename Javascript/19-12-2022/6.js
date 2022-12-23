//5.5 array method
    
    //foreach array
    function ArrayMethod() {
        arr = ["I","am","Jenil"]
        arr.forEach((item,index,array) => {
            alert(`${item} is at index ${index} in ${array}`);
        });    
    }

    //Map in array
    function ArrayMap() {
        let data = [
            {id: 1, name: "John"},
            {id: 2, name: "Pete"},
            {id: 3, name: "Mary"}
          ];
          let Amap = data.map(array => array.id + array.name );
          alert(Amap);
    }

    //Sort and reverse
    function ArraySort() {
        let arr=[2,4,1,6,5]
        let sortarr = arr.sort((a,b) => a > b ? 1 : -1);
        alert(sortarr)
        alert(arr.reverse());
    }

    //Split and join
    function SpliJoin() {
        let names = 'Bilbo, Gandialf, Nazgul';

        let arr = names.split('i')
        let str = arr.join('i')


    alert( ` ${arr}.` ); // A message to Bilbo  
    alert( ` ${str}.` ); // A message to Bilbo  
    }

    //REDUCE
    function ReduceArr() {
        let arr = [1, 2, 3, 4, 5 , 'hello'];

        let result = arr.reduce((sum, current) => sum + current, 0);

        alert(result); // 15
    }

    //task
    function task1() {
        function camelize(str) {
            return str
              .split('-') 
              .map(
                (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
              )
              .join('');
        }
        let user = camelize(prompt("enter word with -",));
        alert(user)
    }

    //destructuring

    //destructuring array
    function deStructure() {
        let arr = [["jenil",'ghevariya'],["hello",'world']]

        let [Firstname,Lastname] = arr;
        alert(Firstname+ " : " + Lastname)

        //destructuring object
        let options = {
            title: "Menu"
          };
          
          let {width: w = 100, height: h = 200, title} = options;
          
          alert(title + w + h);

    }

    //Object to JSON
    function ObjectToJSON() {
        let data={
            FirstName : "Jenil",
            LastName : "Ghevariya",
            roles:{
            courses: ['html', 'css', 'js'],
            isAdmin : true
            }
        }
        let json = JSON.stringify(data,null,2);
        alert(json)

    }

    function JsonParse() {
        let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

        let user = JSON.parse(userData);

        alert( user.friends[1] + user.name );
    }