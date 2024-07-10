document.addEventListener('turbolinks:load', function() {
  document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('follow-button')) {
      event.preventDefault();
      var form = event.target.closest('form');
      if (form) {
        Rails.fire(form, 'submit');
      }
    }
  });
});
