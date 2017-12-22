// $(document).ready(function() {
//   var $btn = $('submit');
// // desabilitando el boton
//    $btn.attr('disabled', true);
//
// // deaparecern el span a ecribir por lo menos 3 teclas
//    var inputUser = $('#username');
//
//    // agregando el evento
//    $(inputUser).keydown(function() {
//      if(inputUser.val().length >= 2) {
//        $('p:first-of-type span').hide();
//      } else {
//        $('p:first-of-type span').show();
//      }
//    })
//
//
//    var passwordIn = $('#password');
//
//    $(passwordIn).keydown(function() {
//      if(passwordIn.val().length >= 6) {
//        $('p:nth-child(2) span').hide();
//      } else {
//        $('p:nth-child(2) span').show();
//      }
//
//      var confirmPass = $('confirm_password');
//      var pass = passwordIn.val();
//
//      $(confirmPass).keydown(function() {
//         if(pass === $confirmPass.val()) {
//           $('p:nth-child(3) span').hide();
//         } else {
//           $('p:nth-child(3) span').show();
//         }
//       });
//
//    })
//
// });


function begin() {

  // ocultamos todos los span

  $('form p span').hide();



  var $usernameInput = $('#username');

  var $passwordInput = $('#password');

  var $confirmPasswordInput = $('#confirm_password');

  var $submit = $('#submit');



  function isUsernameValid() {

    return $usernameInput.val().length >= 3;

  }



  function isPasswordValid() {

    return $passwordInput.val().length >= 6;

  }



  function arePasswordsMaching() {

    return $passwordInput.val() === $confirmPasswordInput.val();

  }



  function usernameEvent() {

    if (isUsernameValid())

      $usernameInput.next().hide();

    else

      $usernameInput.next().show();

  }



  function passwordEvent() {

    if (isPasswordValid())

      $passwordInput.next().hide();

    else

      $passwordInput.next().show();

  }



  function confirmPasswordEvent() {

    if (arePasswordsMaching())

      $confirmPasswordInput.next().hide();

    else

      $confirmPasswordInput.next().show();

  }



  function areAllValidationsPassing() {

    return isUsernameValid() && isPasswordValid() && arePasswordsMaching();

  }



  function formStateEvent() {

    $submit.prop('disabled', !areAllValidationsPassing());

  }



  // hacemos focus al input username

  $usernameInput.focus();



  $usernameInput

    .focus(usernameEvent)

    .on('keyup', usernameEvent)

    .on('keyup', passwordEvent)

    .on('keyup', formStateEvent);



  $passwordInput

    .focus(passwordEvent)

    .on('keyup', passwordEvent)

    .on('keyup', confirmPasswordEvent)

    .on('keyup', formStateEvent);



  $confirmPasswordInput

    .focus(confirmPasswordEvent)

    .on('keyup', confirmPasswordEvent)

    .on('keyup', formStateEvent);



  formStateEvent();

}



$(document).ready(begin);
