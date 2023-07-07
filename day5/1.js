var json = [{
    "name" : "sanofer", 
    "education"   : "BCA",
    "work" : "house wife",
},
{
    "name" : "thowfeek", 
    "education"   : "B.E.(mechanical)",
    "work" : "engineer",
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.education);
    console.log(obj.work);
   

}
//for Each
json.forEach(function(obj) { console.log(obj.education); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].name);
 
}
}
//for Of
let text = "";
for (let x of json[key].name) {
 text += x; 
}
 console.log(text);