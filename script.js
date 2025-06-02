function greetUser() {
  const input = document.getElementById('nameInput').value.trim();
  const greetingText = document.getElementById('greetingText');
  if (input) {
    greetingText.textContent = `Hey ${input}!! Nice to meet you! 😄`;
  } else {
    greetingText.textContent = '';
  }
}
