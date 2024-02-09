const actualBtn = document.getElementById('actual-btn');

const fileChosen = document.getElementById('file-chosen');

actualBtn.addEventListener('change', function(){
  fileChosen.textContent = this.files[0].name;

  fileChosen.innerText==="No file chosen"? fileChosen.style.color="#EB2626":  fileChosen.style.color="#58595B"

})




