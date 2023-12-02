import {
	html,
	render,
} from "https://cdn.jsdelivr.net/npm/lit-html@3.1.0/lit-html.min.js";

const fromTemplate = html`
	<form id="input">
		<label for="title"> Name </label>
		<input type="text" name="title" placeholder="..." />
		<label for="author"> Author </label>
		<input type="text" name="author" placeholder="..." />
		<label for="pages"> Pages </label>
		<input type="text" name="pages" placeholder="..." />
		<label class="switch">
			<input type="checkbox" />
			<span class="slider"></span>
		</label>
		<a id="addBtn" href="#">Add</a>
	</form>
`;

export function loadForm(ctx, next) {
	const formContainer = document.querySelector("#form-container");

	render(fromTemplate, formContainer);
	formContainer.style.display = "block";
	const table = (document.querySelector("#library").style.display = "none");
}
