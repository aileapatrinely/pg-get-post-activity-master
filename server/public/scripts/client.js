$(document).ready(init);

funciton init(){
    console.log('Gettin it');
}

let bookObject = {};

function getBooks(){
    $.ajax({
        type:'GET',
        url:'/api/books',
    })
    .then((response)=>{
        console.log(response);
        renderBooks(response)
    })
    .catch((err)=>{
        console.log(err);
        alert('No Books for You!');
    });
}

function postBooks(){
    $.ajax({
        type:'POST',
        url: '/api/books',
        data: bookObject,
    })
    .then((response)=>{
        getBooks();
    })
    .catch((err)=>{
        console.log(err);
        alert(`We don't want your crummy book.`);
    });
}

function renderBooks(response){
    const listOfBooks = response;
      $('#bookTableBody').empty();
      for (let book of listOfBooks) {
        $('#bookTableBody').append(`<tr>
                                            <td>${book.title}</td>
                                            <td>${book.author}</td>
                                            <td>${book.published}</td>
                                          </tr>`);
      };
}