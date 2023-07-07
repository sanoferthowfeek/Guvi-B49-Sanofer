let obj1 = '{"name":"person 1","age":5}';

let obj2 = '{"age":5,"name":"person 1"}';


function compareJSON(json1, json2) {
 
  let object1 = JSON.parse(obj1);
  let object2 = JSON.parse(obj2);
  

  if(Object.keys(object1).length != Object.keys(object2).length) {
    return false;
  }
  
  for(let key in object1) {
    if(!object2.hasOwnProperty(key) || object1[key] !== object2[key]) {
      return false;
    }
  }
  

  
  return true;
  
}

const result = compareJSON(obj1, obj2);
console.log(result);