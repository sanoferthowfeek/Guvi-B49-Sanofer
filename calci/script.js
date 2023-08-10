 let txt = document.getElementById('txt');
 let buttons = Array.from(document.getElementsByClassName('button'));
 
 buttons.map(button =>{
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'Cl':
                txt.innerText = '';
                break;
            case 'Del':
                    if(txt.innerText) {
                        txt.innerText = txt.innerText.slice(0,-1);
                    }
                    break;  
            case '=':
                try{
                    txt.innerText = eval(txt.innerText);
                } catch{
                txt.innerText = 'Error!!!!';
                }
                break;       
            default:
                txt.innerText += e.target.innerText;
        }



    });
 });
 