function convert() {
    const celsval= Number(document.getElementById("input").value);
    const fahrenval =((celsval)* 9/5) + 32;
    const result=document.getElementById("result");
    result.innerHTML=fahrenval.toFixed(2)+"F";
}