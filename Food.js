let food = document.getElementByID("food").value;
let calories = document.getElementByID("calories").value;
let quantity = document.getElementByID("quantity").value;
if (food === '') || calories === '' ||quantity === ''){
document.write("Please fill out all fields")
}else{
document.write(food + ", " + calories + ", " + quantity)
}
