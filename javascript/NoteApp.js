
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e)
 {
    let addTxt = document.getElementById("addTxt");
    if (addTxt.value == '')
        alert('Please add some notes 😞!!');
    else { 
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notes = [];
    }
    else {
        notes = JSON.parse(notes);
    }

    notes.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    addTxt.value = "";
    showNotes();
   }
} );


function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notes = [];
    }
    else {
        notes = JSON.parse(notes);
    }
    let html = "";
    notes.forEach(function(element, index) {
        html += `
    <div class="card noteCard">
       <div class="card-body">
        <p class="card-text">${element}</p>
        <i class="fa fa-times" aria-hidden="true" id="${index}" onclick="deleteNote(this.id)" style="float: right; cursor: pointer; color: red;"></i>
       </div>
    </div> 
     `;

    });
  

    let collect = document.getElementById("notes");
    if (notes.length == 0) {
        let clearBtn=document.getElementById("clearBtn");
        clearBtn.style.display='none';
        collect.innerHTML = `<p>No notes are there 😞!!</p>`;   
    }

    else {
        let clearBtn=document.getElementById("clearBtn");
        clearBtn.style.display='block';
        collect.innerHTML = html;
    } 
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notes = [];
    } else {
        notes = JSON.parse(notes);
    }
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

function clearTask() {
    if(alert('Are You sure?'))
    {
        while(notes.firstChild) {
            notes.removeChild(notes.firstChild);
          }
    }
    localStorage.clear();
    showNotes();
  }


const searchTxt = document.querySelector('#searchTxt');
searchTxt.addEventListener('input', filterTasks);

  function filterTasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.noteCard').forEach(function(task)
    {
      let item = task.getElementsByTagName("p")[0].innerText;
      console.log(item);
      if(item.toLowerCase().indexOf(text) != -1)
      {
        task.style.display = 'block';
      } 
      else 
      {
        task.style.display = 'none';
      }
    });
  }














