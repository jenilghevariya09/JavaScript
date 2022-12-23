    function alert() {
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
      
        document.body.append(div);
        setTimeout(() => div.remove(), 1000);
    }