// index.js

var helper_contacts=[];
var seeker_contacts=[];

function invalidContactInfo() {
  return [];
}

function toggleContactDisplayText() {
  var userType = $('#user_type_toggle input:checked').prop('id');

  if (userType === "providing") {
    $('#provider_contact_label_text').show();
    $('#seeker_contact_label_text').hide();
  }
  else if (userType === "seeking") {
    $('#provider_contact_label_text').hide();
    $('#seeker_contact_label_text').show();
  }
  $('#contact_info_display').show();
}

$(document).ready(function(){

  $('#user_type_toggle input').click(function() {
    toggleContactDisplayText();
  });

  $("#contact_info").submit(function() {
    if (invalidContactInfo().length) {
      // flag everything in the list returned by "invalidContactInfo()"
      return false;
    }
    else {
      $('#card-username').text($('#username_field').val());
      $('#contact_card_display').show();
      $('#next_step').show();

      // we're not actually submitting anything anywhere with this demo
      return false;
    }
  });

});
