var stressSymptoms,
    healthSymptoms;

$(function() {
  // $("form#transportation_survey").submit(function(event){
  //   event.preventDefault();
  //   $("#work-responses").show();
  //   $("input:checkbox[name=work-transportation]:checked").each(function(){
  //     var workTransportationMode = $(this).val();
  //     $('#work-responses').append(workTransportationMode + "<br>");
  //   });
  //   $("#fun-responses").show();
  //   $("input:checkbox[name=fun-transportation]:checked").each(function(){
  //     var funTransportationMode = $(this).val();
  //     $('#fun-responses').append(funTransportationMode + "<br>");
  //   });
  //   $('#transportation_survey').hide();
  // });

  $("form#stress-survey").submit(function(event) {
    event.preventDefault();
    stressSymptoms = [];
    healthSymptoms = [];

    $("input:checkbox[name='stress-symptoms']:checked").each(function() {
      stressSymptoms.push($(this).val());
    });
    $("input:checkbox[name='health-symptoms']:checked").each(function() {
      healthSymptoms.push($(this).val());
    });
  });

  $("form#stress-survey").change(function() {
    console.log("ping");
  });
});
