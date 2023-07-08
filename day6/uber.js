let baseFee = .88
let cities = ["mayiladuthurai", "ooty", "kodaikanal" ]
let uberRates = [15, 20, 25]
let customerName = "Sanofer" 
let customerCity = "mayiladuthurai"
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
function getRate(customerCity) {
function uberRate(customerCity, index) {
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
getRate(customerCity)
