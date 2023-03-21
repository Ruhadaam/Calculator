function display(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var result = eval(document.getElementById("result").value);
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = result;
  }
  
  
function calculate() {
  try {
    result.value = eval(result.value);
    output.innerHTML = result.value;
    1
  } catch (error) {
    result.value = 'Error';
    output.innerHTML = '';
  }
}

function clearResult() {
  result.value = '';
  output.innerHTML = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

window.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || key === ".") {
      display(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      display(" " + key + " ");
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      event.preventDefault(); // Varsayılan davranışı engelle
      input.value = input.value.slice(0, -1); // Son karakteri sil
    }
  });
  
  var input = document.getElementById("input"); // input alanını seçin
input.addEventListener("keydown", function(event) { // tuşa basıldığında fonksiyonu tetikleyin
  if (event.key === "Backspace") { // eğer basılan tuş backspace ise
    event.preventDefault(); // varsayılan davranışı engelleyin (yani karakteri silmeyin)
    var currentValue = input.value; // input alanındaki mevcut değeri alın
    input.value = currentValue.slice(0, -1); // son karakteri silmek için mevcut değerin son karakterini kesin ve input alanına yazın
  }
});

  
