//Combining Datatypes

//1
const crayonBox = {
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
}
console.log(crayonBox.colors[3]) //green

//2
const bottle = {
    cap: {
        material: 'plastic',
        color: 'white'
    }
}
console.log(bottle.cap.material) //plastic

//3
const receipt = [
    {name: 'milk', price: 3.49},
    {name: 'eggs', price: 2.50},
    {name: 'Raisin Bran', price: 1.89}
]
console.log(receipt[2].price) //1.89

//4
const apartmentBuilding = [
    tenants = ['Joe Shmo', 'Dingus McCringus', 'Other Name'],
    floorplans = ['1 bedroom', '2 bedroom', '3 bedroom']
]
console.log(apartmentBuilding[0][1]) //Dingus McCringus
