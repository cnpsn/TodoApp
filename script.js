
const addBtn = document.querySelector('.input-group-append');
const inpt = document.querySelector('.form-control')
const list = document.querySelector('.list-group');
const allDel = document.querySelector('.button')

addBtn.addEventListener('click',addNewItem);
list.addEventListener('click',deleteItem);
allDel.addEventListener('click',deleteAll)

function addNewItem(e){
    if(inpt.value === ''){
        alert('Lütfen bir not ekleyin ! ')
    }

    const li = document.createElement('li');
    li.className='list-group-item active';
    li.appendChild(document.createTextNode(inpt.value));

    const a = document.createElement('a');
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times float-right" style="color:white"></i>';

    li.appendChild(a);

    list.appendChild(li);
}

function deleteItem(e){
    if(e.target.className === 'fas fa-times float-right'){
        e.target.parentElement.parentElement.remove();
    }
}
function deleteAll(e){
    if(confirm('Gerçekten silmek istiyor musunuz ?')){
        list.innerHTML='';
    }
}

