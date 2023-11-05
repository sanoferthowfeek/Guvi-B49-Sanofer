var finput =document.getElementById("first-name")
finput.setAttribute("required","")
var linput =document.getElementById("last-input")
var addinput= document.getElementById("address-text") 
var pininput = document.getElementById("input-pincode")
var gendername = document.getElementsByName("gender")
var parotainput = document.getElementById(" input-Parota")
var stateinput = document.getElementById("input-state")
var countryinput = document.getElementById("input-country")
var submit =document.getElementById("submit")
var foods = document.getElementById("foods")
  var fooditems= t("div","id","food-items","FoodItems :")
 
  function t(element,attname,attvalue,innertext){
    var element = document.createElement(element);
    element.setAttribute(attname,attvalue);
    element.innerText= innertext
   return element    
}
  
  var ul =  li("ul");
  var li1 = li("li")
  var li2 = li("li")
  var li3 = li("li")
  var li4 = li("li")
  var li5 = li("li")

  function li(elementname){
    var element = document.createElement(elementname);
    return element;
  }

  var liinuput1 = checkbox("input","type","checkbox","name","food","id","input-Parotta","value","Parotta")
  var liinuput2 = checkbox("input","type","checkbox","name","food","id","input-Biriyani","value","Biriyani")
  var liinuput3 = checkbox("input","type","checkbox","name","food","id","input-Dosa","value","Dosa")
  var liinuput4 = checkbox("input","type","checkbox","name","food","id","input-Idly","value","Idly")
  var liinuput5 = checkbox("input","type","checkbox","name","food","id","input-Pongal","value","Parotta","Pongal")

  function checkbox(elementname,att1name,att1value,att2name,att2value,att3name,att3value,att4name,att4value){
          var element = document.createElement(elementname);
          element.setAttribute(att1name,att1value);
          element.setAttribute(att2name,att2value);
          element.setAttribute(att3name,att3value);
          element.setAttribute(att4name,att4value);
          return element;
  }

  var Parotta = t("label","for","inner-Parotta","Parotta" )
  var Biriyani= t("label","for","inner-Biriyani","Biriyani")
 var Dosa = t("label","for","inner-Dosa","Dosa" )
 var Idly = t("label","for","inner-Idly","Idly" )
 var Pongal= t("label","for","inner-Pongal","Pongal" )
 
foods.append(fooditems)
foods.append(ul)
ul.append(li1,li2,li3,li4,li5)
li1.append(liinuput1,Parotta)
li2.append(liinuput2,Biriyani)
li3.append(liinuput3,Dosa)
li4.append(liinuput4,Idly)
li5.append(liinuput5,Pongal)

 console.log(document)

submit.addEventListener("click", (e)=>{
    e.preventDefault();
// for gender radio boxes
var gendercount= 0 
var gendername = document.getElementsByName('gender');    
for(i=0; i<gendername.length; i++) 
{
    if(gendername[i].checked == true){
        gendercount++
      var genderin = gendername[i].value;
    }
}      
// for food items    
var food = document.getElementsByName("food")
var count= 0
var array =[]
for(i=0; i<food.length; i++){
    if(food[i].checked == true){
        count++
         array.push(food[i].value)
    }    
}

console.log(array)

if(count==2 && gendercount== 1 && finput.value!==''&& linput.value!==''&&addinput.value!==''&& pininput.value !==''&& stateinput.value !==''&& countryinput.value!=='')
{
var tablebody = document.getElementById("table-body")
var newrow = tablebody.insertRow(-1);

var cell1 =newrow.insertCell(-1);
cell1.innerText = finput.value

 var cell2 = newrow.insertCell(-1);
cell2.innerText = linput.value

var cell3 = newrow.insertCell(-1);
cell3.innerText = addinput.value

var cell4 = newrow.insertCell(-1);
cell4.innerText = pininput.value

var cell5 = newrow.insertCell(-1);
cell5.innerText = genderin

var cell6 = newrow.insertCell(-1);
cell6.innerText = array

var cell7 = newrow.insertCell(-1);
cell7.innerText = stateinput.value

var cell8 = newrow.insertCell(-1);
cell8.innerText = countryinput.value

function reset() {
    console.log("reset")
    finput.value = ''
    linput.value = ''
    addinput.value = ''
    pininput.value = ''
    for(i=0; i<gendername.length; i++) {

    if(gendername[i].checked == true){
        gendername[i].checked = false
    }
   }
   for(i=0; i<gendername.length; i++) {

    if(gendername[i].checked == true){
        gendername[i].checked = false
    }
   }
   for(i=0; i<food.length; i++) {

    if(food[i].checked == true){
        food[i].checked = false
    }
   }
 
    stateinput.value = ''
    countryinput.value = ""
}
reset()
}
else{
    alert(`Please select only 2 food item & checkin Gender `)
}
})
