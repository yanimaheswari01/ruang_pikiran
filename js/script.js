$(document).ready(function () {
  // function
  function selectLocation(location) {
    $("#jobLocationInput").val(location);
  }
  function selectSpecialist(location) {
    $("#jobspecialist").val(location);
  }
  function selectCompany(location) {
    $("#jobscompany").val(location);
  }

  // Event listener
  $(".items-specialist").click(function () {
    var specialist = $(this).text();
    selectSpecialist(specialist);
  });

  $(".items-company").click(function () {
    var specialist = $(this).text();
    selectCompany(specialist);
  });

  $(".items-location").click(function () {
    var specialist = $(this).text();
    selectLocation(specialist);
  });

  $(document).ready(function () {
    $(".btn-menu").click(function (e) {
      e.preventDefault();

      $(".btn-dropdown").toggleClass("active");
    });
  });
});
