var path;
if(window.location.href.indexOf('127.0.0.1') > -1) {
  path = 'http://127.0.0.1:5555/';
} else {
  path = window.location.href;
}
console.log(path);
var socket = io.connect(path + 'poopchat');
socket.emit('initialize', {time: 'poopchat!!!!'});

socket.on('initialize', function(initialize) {
  console.log(initialize);
});

socket.on('message', function(message) {
  console.log(message);
  $('#messages').append('<div class="row"><div class="col-md-12"><p>' + message.message.message + '</p></div></div>');
  var messageDiv = document.getElementById("messages");
  messageDiv.scrollTop = messageDiv.scrollHeight;
});

function sendMessage() {
  var message = $('#message').val();
  $('#message').val('');
  socket.emit('send', {message: message});
  console.log(message);
}
