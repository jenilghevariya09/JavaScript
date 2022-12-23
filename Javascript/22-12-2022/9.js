    // Github User API fetch
    function GitHub() {
        let login = prompt("enter you username",'jenilghevariya09')
    fetch(`https://api.github.com/users/${login}`)
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) { // (*)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    document.body.append(img);
    resolve(githubUser);
    setTimeout(() => {
    img.remove();
    }, 2000);
  })).then(githubUser => {

    alert(`Finished showing ${githubUser.name}`); 
  
    return new Promise((resolve, reject) => { 
      setTimeout(() => resolve(githubUser), 100);
    });
  
  }).then(githubUser => {
  
    alert(`Finished showing ${githubUser.company}`); 
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(githubUser), 100);
    })
  
  }).then(githubUser => {
  
    alert(`Finished showing ${githubUser.twitter_username}`); 
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(githubUser), 100);
    })
  
  });

//   .then(githubUser => alert(`Finished showing ${githubUser.name}` ))
  
    }

    //async await
    async function f() {

        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve("done!"), 1000)
        });
      
        let result = await promise; // wait until the promise resolves (*)
      
        alert(result); // "done!"
      
        alert("jenil");
        alert("ghevariya");
        alert("jenil ghevariya");
      }

    async function showAvatar() {
        let login = prompt("enter you username",'jenilghevariya09')

        // read our JSON
      
        // read github user
        let githubResponse = await fetch(`https://api.github.com/users/${login}`);
        let githubUser = await githubResponse.json();
      
        // show the avatar
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
      
        // wait 3 seconds
        // await new Promise((resolve, reject) => setTimeout(resolve, 3000));
        await new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 2000)
          });
      
        img.remove();
        
       
        alert(`Finished showing ${githubUser.name}`); 
        alert(`Finished showing ${githubUser.company}`); 
        alert(`Finished showing ${githubUser.twitter_username}`); 

        return githubUser;
      }
      
      function Generator() {
        function* generateSequence(start, end) {
            for (let i = start; i <= end; i++) yield i;
          }
          
          function* generatePasswordCodes() {
          
            // 0..9 binary number
            yield* generateSequence(48, 57);
          
            // A..Z
            yield* generateSequence(65, 90);
          
            // a..z
            yield* generateSequence(97, 122);
          
          }
          
          let str = '';
          
          for(let code of generatePasswordCodes()) {
            str += String.fromCharCode(code);
          }
          
          alert(str);
      }
    
      //eval
      function EvalCalc() {
        let number = prompt("Type an arithmetic expression?", '2*3+2');

        alert( eval(number) );
      }