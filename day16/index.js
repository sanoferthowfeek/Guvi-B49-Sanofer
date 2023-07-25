
console.log("Countdown Begins");

setTimeout (function () {
  console.log ("Count 10"); 

  setTimeout (function () {
    console.log ("Count 9"); 

    setTimeout (function () {
        console.log ("Count 8"); 
    
        setTimeout (function () {
            console.log ("Count 7"); 

            setTimeout (function () {
                console.log ("Count 6");
                
                setTimeout (function () {
                    console.log ("Count 5"); 
                
                    setTimeout (function () {
                        console.log ("Count 4"); 
                    
                        setTimeout (function () {
                            console.log ("Count 3");
                        
                            setTimeout (function () {
                                console.log ("Count 2"); 
                            
                                setTimeout (function () {
                                    console.log ("Count 1"); 

                                    console.log("Happy Independence Day")
                                },10000);
                             },9000);
                         },8000);
                    },7000);
                },6000); 
             },5000);
         },4000);   
     },3000);
  },2000);
},1000);
