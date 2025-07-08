function append(val) {
  document.getElementById('display').value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expr = document.getElementById('display').value;
    const result = math.evaluate(expr);
    document.getElementById('display').value = result;
  } catch (err) {
    document.getElementById('display').value = 'Error';
  }
}

// Toggle Day/Night Mode
document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('night-mode');
  document.body.classList.toggle('day-mode');
});
