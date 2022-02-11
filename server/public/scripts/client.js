console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', addKoala)
    console.log( 'in addButton on click' );
}

function getKoalas(){
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then(function(response){
    console.log('Got a response', response);
     renderKoala(response);
  }).catch(function(err) {
    console.log('Unable to get Koalas', err);
    
  })
  // ajax call to server to get koalas
  
} // end getKoalas



function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
}

function addKoala() {
  let koalaToSend = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    readyForTransfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val()
  }
  $.ajax({
    method: 'POST',
    url: 'KOALAS',
    data: koalaToSend
  }).then(response => {
    console.log('Our Koala Was Added', response);
    getKoalas()
  }).catch(error => {
    console.log('Unable to add koala', error);
    alert('Problem adding Koala')
  })
}
