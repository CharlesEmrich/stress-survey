var stressSymptoms = [],
    healthSymptoms = [];

$(function() {
  $("form#stress-survey").change(function() {
    //Add currently checked selections to symptom arrays:
    $("input:checkbox[name='stress-symptoms']:checked").each(function() {
      if (stressSymptoms.indexOf($(this).val()) === -1) {
        stressSymptoms.push($(this).val());
      }
    });
    $("input:checkbox[name='health-symptoms']:checked").each(function() {
      if (healthSymptoms.indexOf($(this).val()) === -1) {
        healthSymptoms.push($(this).val());
      }
    });

    //Remove currently unchecked selections from symptom arrays:
    $("input:checkbox[name='stress-symptoms']:not(:checked)").each(function() {
      if (stressSymptoms.indexOf($(this).val()) !== -1) {
        stressSymptoms.splice(stressSymptoms.indexOf($(this).val()), 1);
      }
      });
      $("input:checkbox[name='health-symptoms']:not(:checked)").each(function() {
        if (healthSymptoms.indexOf($(this).val()) !== -1) {
          healthSymptoms.splice(healthSymptoms.indexOf($(this).val()), 1);
        }
    });

    console.log(healthSymptoms);
    console.log(stressSymptoms);
  });
});
