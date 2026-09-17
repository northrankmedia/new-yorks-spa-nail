document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  var hoursTable = document.getElementById('hours-table');
  if (hoursTable) {
    var todayIndex = String(new Date().getDay());
    var todayRow = hoursTable.querySelector('tr[data-day="' + todayIndex + '"]');
    if (todayRow) todayRow.classList.add('today');
  }
});
