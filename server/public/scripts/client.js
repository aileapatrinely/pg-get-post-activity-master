$(document).ready(init);

function init() {
  $('.js-btn-add-book').on('click', postBooks);
  $('.js-btn-add-magazine').on('click', postMagazines);
  getBooks();
  getMagazines();
}

function getBooks() {
  $.ajax({
    type: 'GET',
    url: '/api/books',
  })
    .then((response) => {
      console.log(response);
      renderBooks(response);
    })
    .catch((err) => {
      console.log(err);
      alert('No Books for You!');
    });
}

function postBooks() {
  console.log('In function postBooks');
  const bookToSend = {
    title: $('.js-book-title').val(),
    author: $('.js-book-author').val(),
    published: $('.js-published').val(),
  };
  console.log(bookToSend);

  $.ajax({
    type: 'POST',
    url: '/api/books',
    data: bookToSend,
  })
    .then((response) => {
      getBooks();
    })
    .catch((err) => {
      console.log(err);
      alert(`We don't want your crummy book.`);
    });
}

function renderBooks(response) {
  const listOfBooks = response;
  $('.js-input').val('');
  $('#bookTableBody').empty();
  for (let book of listOfBooks) {
    $('#bookTableBody').append(`<tr>
                                            <td>${book.title}</td>
                                            <td>${book.author}</td>
                                            <td>${book.published}</td>
                                          </tr>`);
  }
}

function getMagazines() {
  $.ajax({
    type: 'GET',
    url: '/api/magazines',
  })
    .then((response) => {
      console.log(response);
      renderMagazines(response);
    })
    .catch((err) => {
      console.log(err);
      alert('No Tissues for Your Issues!');
    });
}

function postMagazines() {
  console.log('In function postMagazines');
  const magazineToSend = {
    title: $('.js-magazine-title').val(),
    issue_number: $('.js-magazine-issue').val(),
    pages: $('.js-pages').val(),
  };
  console.log(magazineToSend);

  $.ajax({
    type: 'POST',
    url: '/api/magazines',
    data: magazineToSend,
  })
    .then((response) => {
      getMagazines();
    })
    .catch((err) => {
      console.log(err);
      alert(`Keep Your Issues to Yourself.`);
    });
}

function renderMagazines(response) {
  const listOfMagazines = response;
  $('.js-input').val('');
  $('#magazineTableBody').empty();
  for (let magazine of listOfMagazines) {
    $('#magazineTableBody').append(`<tr>
                                            <td>${magazine.title}</td>
                                            <td>${magazine.issue_number}</td>
                                            <td>${magazine.pages}</td>
                                          </tr>`);
  }
}
