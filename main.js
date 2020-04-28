document.getElementByID("apply").addEventListener("click", function() {
    let nextFoodItem = new nextFoodItem(
        document.getElementById("name").value,
        document.getElementById("calories").value,
        document.getElementById("quantity").value,  
    );
    if(nextFoodItem.isValid()) {
        foodList.push(nextFoodItem);
            clear();
            updateDisplay(foodList);
    }
    else {
        document.getElementById("total").innerHTML = "Invalid input";
        }
    });

        document.getElementById("clear").addEventListener("click", clear);

    function clear () {
        document.getElementById("name").value = "";
        document.getElementById("calories").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("name").focus();
    }

    let foodList = [];

    function updateDisplay(array) {
        let myList = document.getElementById("foodList");
        myList.innerHTML = "";
        let total = 0;
        for (i = 0; i < array.length; i++) {
            total = total +(array[i].calories + array[i].quuantity);
            let node = document.createElement("li");
            node.innerHTML = array[i].name + ", " + array[i].calories + ", " + array[i].quantity;
            document.getElementById("foodList").appendChild(node);
        }
        document.getElementByID("total").innerHTML = "You have consumed" + total + "calories";
}
