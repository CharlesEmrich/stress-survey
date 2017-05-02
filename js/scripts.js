var stressSymptoms   = [],
    healthSymptoms   = [],
    copingMechanisms = [];

var formGroups = ["stress-symptoms", "health-symptoms", "coping-mechanisms"];
var healthArrays = [stressSymptoms, healthSymptoms, copingMechanisms];

$(function() {
  var clicked = $(this).val();
  //Front-End Function Definitions
  function appendElement (formGroup, array) {
    $("input:checkbox[name='" + formGroup + "']:checked").each(function() {
      if (array.indexOf(clicked) === -1) {
        array.push(clicked);
      }
    });
  }

  function removeElement (formGroup, array) {
    $("input:checkbox[name='" + formGroup + "']:not(:checked)").each(function() {
    if (array.indexOf(clicked) !== -1) {
      array.splice(array.indexOf(clicked), 1);
    }
  });
  }

  //Event Handlers
  $("form#stress-survey").change(function() {
    //Add currently checked selections to symptom arrays:
    for (var i = 0; i < formGroups.length; i++) {
      appendElement(formGroups[i], healthArrays[i]);
      removeElement(formGroups[i], healthArrays[i]);
    }

    //Show information depending on state of symptom arrays:

    console.log([stressSymptoms, healthSymptoms, copingMechanisms]);
  });
});
