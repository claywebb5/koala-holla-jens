console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $('#addButton').on('click', addKoala);
    console.log( 'in addButton on click' );
  $(#viewKoalas).on('click', '#btn-ready', updateStatus);
}

function getKoalas(){
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then(function(response){
    console.log('Got a response', response);
    //Call a function here
     renderData(response);
  }).catch(function(err) {
    console.log('Unable to get Koalas', err);
    
  })
}

// function saveKoala( newKoala ){
//   console.log( 'in saveKoala', newKoala );
//   // ajax call to server to get koalas
// }


function renderData(koalas) {
  console.log('in renderData');
  for (let koala of koalas){
    $('#viewKoalas').append(`
    <tr data-id=${koala.id}>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.readyForTransferIn}</td>
        <td>${koala.notes}</td>
    </tr>
    
    `)
  }
}

function addKoala() {
  let koalaToSend = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    readyForTransfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val()
  };
  $.ajax({
    method: 'POST',
    url: '/koalas',
    data: koalaToSend
  }).then(response => {
    console.log('Our Koala Was Added', response);
    getKoalas()
  }).catch(error => {
    console.log('Unable to add koala', error);
    alert('Problem adding Koala')
    })
  }

function updateStatus(){
  console.log('Clicked update button!');
  let id = $(this).closest('tr').data().id;
  $.ajax({
    method:'PUT',
    url: `/kolas/${id}`,
  }).then(function (response) {
    getKoal();
  }).catch(function (err) {
    console.log(err);   
  })  
}

