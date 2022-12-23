    //6 advance working with function

    //6.1 recursive function

    function RecursiveFn() {
        x = +prompt('x?', );
        n = +prompt('n?', );
        function pow(x, n) {
             
            if (n == 1) {
              return x;
            } else {
              return x * pow(x, n - 1);
            }
          }
         
          alert( pow(x, n) ); // 8
    }

    //Recursive traversals
    function RecursiveTraversals() {
        let company = {
            sales: [{
              name: 'John',
              salary: 1000
            }, {
              name: 'Alice',
              salary: 1600
            }],
          
            development: {
              sites: [{
                name: 'Peter',
                salary: 2000
              }, {
                name: 'Alex',
                salary: 1800
              }],
          
              internals: [{
                name: 'Jack',
                salary: 1300
              }]
            }
          };

          function sumSalaries(department) {
            if (Array.isArray(department)) { // case (1)
              return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
            } else { // case (2)
              let sum = 0;
              for (let subdep of Object.values(department)) {
                sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
              }
              return sum;
            }
          }
          
          alert(sumSalaries(company));
    }

    //rest parameter
    function RestParameter() {
        function sum(...theArgs) {
            let total = 0;
            for (const arg of theArgs) {
              total += arg;
            }
            return total;
          }
          
          alert(sum(1, 2, 3));
          
          alert(sum(1, 2, 3, 4));
          
    }

    // Rest para = spred operator

    export  function RestSpred() {
        function result(...arg) {
            let number = 0
            for(let arg of args) number += arg;
            return number;
        }
        let args = [1, 2, 3, 4, 5, 6, 7, 8 ];

        alert(result(...args)); // 15
    }

