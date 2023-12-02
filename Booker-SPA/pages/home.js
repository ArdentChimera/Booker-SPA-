import {
	html,
	render,
} from "https://cdn.jsdelivr.net/npm/lit-html@3.1.0/lit-html.min.js";
import { myLibrary } from "../script.js";

function displayBook(array) {
	const table = document.querySelector("#library tbody");

	const tableRow = (arr) => html`
		${arr.map(
			(el) => html`
				<tr>
					<td>${el.title}</td>
					<td>${el.author}</td>
					<td>${el.pages}</td>
					<td>
						<label class="switch">
							<input type="checkbox" />
							<span class="slider"></span>
						</label>
					</td>
				</tr>
			`
		)}
	`;
	render(tableRow(array), table);
}

export function loadHomePage(ctx, next) {
	displayBook(myLibrary);
}
