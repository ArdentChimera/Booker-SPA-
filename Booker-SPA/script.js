import { loadHomePage } from "./pages/home.js";
import { loadForm } from "./pages/form.js";
import page from "https://unpkg.com/page/page.mjs";

// TRY DOING AT LEAST ONE OF THESE TODO'S PER DAY!!!!!

// TODO: implement localStorage so that we can save the books in local and not in array format
// TODO: create a card component that looks like the one from this link : https://uiverse.io/alexruix/cowardly-ape-35
// TODO: make the card component in a grid
// TODO: figure out how to save the toggle button's state so it does not dissapear when page is rerendered
// TODO: add a button to the nav bar so we can navigate to the home page.
// TODO: maybe find an API that we can use to search for books and add them directly to the library
// TODO: change the font to something more appropriate and interesting
// TODO: use a color scheme so the colors are consistent
// TODO: change the routing logic because this one is not bverry good !!!

export const myLibrary = [];

function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
	};
}

const theHobbit = new Book(
	"The Hobbit",
	"J.R.R. Tolkien",
	"295",
	"not read yet"
);

myLibrary.push(theHobbit);

page("/", loadHomePage);
page("/form", loadForm);

page.start();

const formContainer = document.querySelector("#form-container");
formContainer.style.display = "none";
document.getElementById("addBtn").addEventListener("click", (e) => {
	e.preventDefault();

	if (window.location.reload) {
		page.redirect("/");
	}

	page("/form");

	document.querySelector("#input #addBtn").addEventListener("click", (e) => {
		e.preventDefault();
		const form = document.querySelector("#input");
		const data = new FormData(form);

		console.log(Object.fromEntries(data));
		const { title, author, pages, isRead } = Object.fromEntries(data);
		const bookToAdd = new Book(title, author, pages, isRead);

		myLibrary.push(bookToAdd);

		loadHomePage();

		const table = (document.querySelector("#library").style.display = "table");

		formContainer.style.display = "none";
	});
});
