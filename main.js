import './style.css'

const booksArray = [
'Lord of the Rings: The Fellowship of the Ring',
'Dune',
'The Silmarillion',
'Teste',
'Testeeeee',
'O Messias de Duna',
'Os Hereges de Duna'
]

function autoComplete(input,arr){
  var currentFocus;

  input.addEventListener("input", function(e){
    var a,i,b,val = this.value;
    closeAllLists();/* Essa chamada remove todas as divs de inputs anteriores, no HTML só fica a div do último input */
    console.log(this.value)
    if(!val){return false}
    currentFocus = -1;

    a = document.createElement('div')
    a.setAttribute('class','autocomplete-itens')
    this.parentNode.appendChild(a);

    for(i=0;i<arr.length;i++){
      if(val.toUpperCase() == arr[i].substr(0,val.length).toUpperCase()){/*Existem livros com o input no nome? */
         const b = document.createElement('div')
         b.textContent = arr[i]
         b.style.fontSize = '1.3rem'
         b.addEventListener('click', e => {
          input.value = b.textContent
         })
         a.appendChild(b)
      }
    }
  })

  function closeAllLists(elmnt){
    var x = document.getElementsByClassName('autocomplete-itens')
    for (var i = 0; i < x.length; i++){
      if(elmnt != x[i] && elmnt != input) {
        x[i].parentNode.removeChild(x[i])
      }
    }
  }
}

function createForm(){
  const inputBookName = document.createElement('input')
  const app = document.querySelector("[data-js='autocomplete']")
  app.appendChild(inputBookName)
  inputBookName.id = 'myInput'
  inputBookName.type = 'text'
  inputBookName.name = 'myBook'
  inputBookName.placeholder = 'Book Name'
  
  autoComplete(inputBookName,booksArray)
}


createForm()