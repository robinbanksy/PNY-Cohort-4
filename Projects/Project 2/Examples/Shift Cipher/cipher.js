const input = document.getElementById("input");
const output = document.getElementById("output");
const shift = document.getElementById("shift");

input.addEventListener("input", () => {
    output.value = encrypt(input.value, Number(shift.value))
})

input.addEventListener("output", () => {
    input.value = decrypt(output.value, shift.value)
})

    
    
function encrypt(str, shift) {
  // Normalize the shift so that negative shifts wrap correctly
  if (shift < 0) shift = 26 + (shift % 26);
  
  return str.split('').map(char => {
    let code = char.charCodeAt(0);
    
    // Uppercase letters (65-90)
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    // Lowercase letters (97-122)
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    // Leave spaces, numbers, and punctuation as they are
    return char; 
  }).join('');
}

function decrypt(str, shift) {
  // Normalize the shift so that negative shifts wrap correctly
  if (shift < 0) shift = 26 + (shift % 26);
  
  return str.split('').map(char => {
    let code = char.charCodeAt(0);
    
    // Uppercase letters (65-90)
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 - shift) % 26) + 65);
    }
    // Lowercase letters (97-122)
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 - shift) % 26) + 97);
    }
    // Leave spaces, numbers, and punctuation as they are
    return char; 
  }).join('');
}
