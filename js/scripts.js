var stressSymptoms   = [],
    healthSymptoms   = [],
    copingMechanisms = [];

var formGroups = ["stress-symptoms", "health-symptoms", "coping-mechanisms"];
var healthArrays = [stressSymptoms, healthSymptoms, copingMechanisms];

$(function() {
  //Front-End Function Definitions
  function appendElement (formGroup, array) {
    $("input:checkbox[name='" + formGroup + "']:checked").each(function() {
      if (array.indexOf($(this).val()) === -1) {
        array.push($(this).val());
      }
    });
  }

  function removeElement (formGroup, array) {
    $("input:checkbox[name='" + formGroup + "']:not(:checked)").each(function() {
    if (array.indexOf($(this).val()) !== -1) {
      array.splice(array.indexOf($(this).val()), 1);
    }
  });
  }

  //Event Handlers
  $("form#stress-survey").change(function() {
    for (var i = 0; i < formGroups.length; i++) {
      appendElement(formGroups[i], healthArrays[i]);
      removeElement(formGroups[i], healthArrays[i]);
    }
    // Show information depending on state of symptom arrays:
    if (stressSymptoms.length > 1 && copingMechanisms.length < 2) {
      $("#stress-advice").show();
      $("#more-coping-advice").show();
    } else if (stressSymptoms.length <= 1) {
      $("#stress-advice").hide();
      $("#more-coping-advice").hide();
    }
    if (healthSymptoms.length > 1 && copingMechanisms.length < 2) {
      $("#health-advice").show();
      $("#more-coping-advice").show();
    } else if (healthSymptoms.length <= 1 && stressSymptoms.length < 1) {
      $("#health-advice").hide();
      $("#more-coping-advice").hide(); //This line produced amazingly weird behavior
    } else {
      $("#health-advice").hide();
    }
    if (healthSymptoms.length + stressSymptoms.length >= 5) {
      $("#danger-advice").show();
      $("#health-advice").hide();
      $("#stress-advice").hide();
    } else if (healthSymptoms.length + stressSymptoms.length >= 5) {
      $("#danger-advice").hide();
    }



    console.log([stressSymptoms, healthSymptoms, copingMechanisms]);
  });
});
