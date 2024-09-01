//your JS code here. If required.
const btn = document.getElementById("submit");
const list = document.getElementById("book-list");
btn.addEventListener("click", () => {
	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const isbn = document.getElementById("isbn").value;

	let tr = document.createElement("tr");
	
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");
	let td3 = document.createElement("td");
 
	td1.innerText = title;
	td2.innerText = author;
	td3.innerText = isbn;

	tr.appendChild(td1);	
	tr.appendChild(td2);
	tr.appendChild(td3);

	list.appendChild(tr);
});