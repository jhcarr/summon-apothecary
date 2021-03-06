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

  $('#contact_info').submit(function() {
    $('#card-username').text($('#username_field').val());
    $('#card-email').text($('#email_field').val());
    $('#card-phone').text($('#phone_field').val());
    $('#contact_card_display').show();
    $('#next_step').show();

    // we're not actually submitting anything anywhere with this demo
    return false;

  });

});
