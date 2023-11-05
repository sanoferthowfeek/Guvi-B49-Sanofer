async function thirukural(num){
    try {
        let data_from_api=await fetch("https://api-thirukkural.vercel.app/api?num="+`${num}`);
        let finaldata=await data_from_api.json();

        document.getElementById("number").innerText=finaldata.number;
        document.getElementById("sect_tam").innerText=finaldata.sect_tam;
        document.getElementById("chapgrp_tam").innerText=finaldata.chapgrp_tam;
        document.getElementById("chap_tam").innerText=finaldata.chap_tam;
        
        document.getElementById("sect_eng").innerText=finaldata.sect_eng;
        document.getElementById("chapgrp_eng").innerText=finaldata.chapgrp_eng;
        document.getElementById("chap_eng").innerText=finaldata.chap_eng;

        document.getElementById("line1").innerText=finaldata.line1;
        document.getElementById("line2").innerText=finaldata.line2;
        document.getElementById("tam_exp").innerText=finaldata.tam_exp;
        document.getElementById("eng").innerText=finaldata.eng;
        document.getElementById("eng_exp").innerText=finaldata.eng_exp;
        
    }catch (error) {
        console.log(error);
}}

thirukural('1')

let button=document.getElementById("button");
button.addEventListener("click",function(){
    var number=document.getElementById("inputdata").value; 
    thirukural(number);
})