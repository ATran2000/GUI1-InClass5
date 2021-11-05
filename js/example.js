var list = document.getElementsByTagName("ul")[0];

// ADD NEW ITEM TO END OF LIST
var newItem = document.createElement("li");
var itemText = document.createTextNode("cream");
newItem.appendChild(itemText);
list.appendChild(newItem)

// ADD NEW ITEM START OF LIST
var newItem = document.createElement("li");
var itemText = document.createTextNode("kale");
newItem.appendChild(itemText);
list.insertBefore(newItem, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.getElementsByTagName("li");

for (var i=0; i < listItems.length; i++) {
    listItems[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var spanEle = document.createElement("span");
var lengthText = document.createTextNode(listItems.length);
spanEle.appendChild(lengthText);
document.getElementsByTagName("h2")[0].appendChild(spanEle);