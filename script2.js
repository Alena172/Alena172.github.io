document.getElementById('servicesTable').addEventListener('click', function (event) {
    var target = event.target;
    while (target !== this) {
      if (target.classList.contains('service-cell')) {
        var descriptionRow = target.nextElementSibling;
        toggleDescription(descriptionRow);
        return;
      }
      target = target.parentNode;
    }
  });

  function toggleDescription(element) {
    element.classList.toggle('show');
  }