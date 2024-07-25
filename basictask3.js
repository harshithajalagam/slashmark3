<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocery List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="container">
        <h1>Grocery List</h1>
        <input type="text" id="item" placeholder="Enter a grocery item">
        <button id="addBtn">Add Item</button>
        <ul id="list"></ul>
    </div>

    <script src="script.js"></script>

</body>
</html>

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

input[type="text"] {
    width: calc(100% - 22px);
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    background: #f4f4f4;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}

li button {
    background: #ff4c4c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

li button:hover {
    background: #e60000;
}
document.getElementById('addBtn').addEventListener('click', addItem);

function addItem() {
    const itemInput = document.getElementById('item');
    const itemValue = itemInput.value.trim();

    if (itemValue === '') {
        alert('Please enter a grocery item.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = itemValue;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(removeButton);
    document.getElementById('list').appendChild(listItem);

    itemInput.value = '';
    itemInput.focus();
}

