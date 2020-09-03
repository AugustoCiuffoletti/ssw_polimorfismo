// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Polimorfismo</h1>`;

function f (x) { return 4*x+3; }
function g (x) { return 9*x+2; }
function zero ( h ) {
  return h(0);
}
console.log(zero(f));
console.log(zero(g));
