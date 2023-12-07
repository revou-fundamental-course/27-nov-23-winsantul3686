
function resetField() {
  var alasInput = document.getElementById('alas');
  var tinggiInput = document.getElementById('tinggi');

  alasInput.value = '';
  tinggiInput.value = '';


  var outputDiv = document.getElementById('output1');
  outputDiv.innerHTML = '';

  
  var sisi1Input= document.getElementById('sisi1');
  var sisi2Input= document.getElementById('sisi2');
  var sisi3Input= document.getElementById('sisi3');

  sisi1Input.value='';
  sisi2Input.value='';
  sisi3Input.value='';

  var outputDiv = document.getElementById ('output2');
  outputDiv.innerHTML = '';
}
 
