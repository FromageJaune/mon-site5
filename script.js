let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score = 0;
let severite = "bénigne"
let bronchiolite = ""


$('input[type="radio"][name="FC"]').change(function () {
    if ($('input[type="radio"]').val() == "on"){
        score1 = 0
        this_ = $(this).attr('class')
        score1 += +this_
    }
});
$('input[type="radio"][name="W"]').change(function () {
    if ($('input[type="radio"]').val() == "on") {
        score2 = 0
        this_ = $(this).attr('class')
        score2 += +this_

    }
});
$('input[type="radio"][name="T"]').change(function () {
    if ($('input[type="radio"]').val() == "on") {
        score3 = 0
        this_ = $(this).attr('class')
        score3 += +this_

    }
});
$('input[type="radio"][name="EG"]').change(function () {
    if ($('input[type="radio"]').val() == "on") {
        score4 = 0
        this_ = $(this).attr('class')
        score4 += +this_

    }
});
$("#total").click(function(){
    score = score1 + score2 + score3 + score4;
    if(score <= 3){
        severite = "bénigne";
        severite = "Sévérité : " + severite;
        bronchiolite = "Bronchiolite sans critères de gravité"
        
    } else if(score <= 7){
        severite = "modérée";
        severite = "Sévérité : " + severite;
        bronchiolite = "Bronchiolite de gravité modérée"
        
    } else if(score >= 8){
        severite = "sevère";
        severite = "Sévérité : " + severite;
        bronchiolite = "Bronchiolite sevère"
    }
    $("#end").html(score);
    $("#severite").html(severite);
    $("#bronchiolite").html(bronchiolite);

});


