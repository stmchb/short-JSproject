const input = document.querySelector('.text-field');
const ul = document.querySelector("ul");
const button = document.querySelector(".button");



input.addEventListener("keydown", (e) => {
  const value = e.target.value.trim(); // Trim whitespace
  if (e.key === "Enter" && value !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = `<button class="edit">✏️</button>
        <button class="delete">🗑️</button>`
    li.textContent = value;
    li.appendChild(span);
    ul.appendChild(li);
    input.value = ""; // Clear input field after adding the item
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    const listItem = e.target.closest("li");
    const textElement = listItem.firstChild;

    // Create an input field
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = textElement.textContent.trim();

    // Replace the text element with the input field
    listItem.replaceChild(inputField, textElement);

    // Focus on the input field
    inputField.focus();

    // Add event listener for Enter key press
    inputField.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        // Update the text content with the input field value
        textElement.textContent = inputField.value.trim();
        // Replace the input field with the updated text content
        listItem.replaceChild(textElement, inputField);
      }
    });
  }
});


document.addEventListener("click", (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.closest("li").remove();
  }
})

