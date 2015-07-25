(function() {
  $(document).ready(function() {
    var $input = $('#input');
    $('.key').not('#reset, #enter').on('click', function() {
      $input.val($input.val() + $(this).text());
    });
    
    $('#enter').on('click', function() {
      $input.val(eval($input.val()));
    });
    
    $('#reset').on('click', function() {
      $input.val('');
    });
  })
})();