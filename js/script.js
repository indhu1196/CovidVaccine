$(document).ready(function(){
    var res = [], country= [], sponsor = [], funding = [], trialphase = [], allData = [];
    $.ajax ({
        'async': false,
        'global': false,
        'dataType': 'json',
        'url': 'data.json',
        'success': function(data) {    
            allData = data;
            data.forEach(function(key, value){
                res.push(key["Candidate"]);
                country.push(key["Country/ies"])
                sponsor.push(key["Sponsor"])
                funding.push(key["Funding"]);
                trialphase.push(key["Trial Phase"]);
            });
            
        }
    });

    console.log(allData)

    for(var i =0; i< res.length ; i++) {
        $("#can-li").append('<li class="li-item" id="'+ i +'-Element">'+ res[i] +'</li>');
        $("#mobselect").append('<option class="li-item" value="'+ res[i] +'" id="'+ i + '">' + res[i] +'</option>')
    }
    $('#can-li').scrollTop(650);
    $("#can-li li:nth-child(35)").addClass("active");
    $("#tab-content #name").text(res[34]);
    $("#tab-content #country").text(country[34]);
    $("#tab-content #funding").text(funding[34]);
    $("#tab-content #sponsor").text(sponsor[34]);
    $("#phaseName").text(trialphase[34]);
    $("#phase1liner").empty();
    $("#phaseDesc1").text("Phase 0 involves exploratory, first-in-human (FIH) trials that are run according to FDA guidelines. Also called human microdose studies, they have single sub-therapeutic doses given to 10 to 15 subjects and yield pharmacokinetic data or help with imaging specific targets without introducing pharmacological effects. Pharmaceutical companies perform Phase 0 studies to decide which of their drug candidates has the best pharmacokinetic parameters in humans.");
    $("#phaseDesc2").empty();
    $("#arrow2").css("color","#fff");

    $(".li-item").click(function() {
        var id = this.id.split(/\s*\-\s*/g);
        id = id[0]

        $("#tab-content #name").text(res[id]);
        $("#tab-content #country").text(country[id]);
        $("#tab-content #funding").text(funding[id]);
        $("#tab-content #sponsor").text(sponsor[id]);
            
        console.log(trialphase[id])
        if( trialphase[id] == "Early research" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            $("#phaseDesc1").text("Deciding whether a drug is ready for clinical trials (the so-called move from bench to bedside) involves extensive preclinical studies that yield preliminary efficacy, toxicity, pharmacokinetic and safety information.")
            move(15);
            $("#arrow2").css("color","#fff");
        } else if( trialphase[id] == "Pre-clinical") {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc1").text("Phase 0 involves exploratory, first-in-human (FIH) trials that are run according to FDA guidelines. Also called human microdose studies, they have single sub-therapeutic doses given to 10 to 15 subjects and yield pharmacokinetic data or help with imaging specific targets without introducing pharmacological effects. Pharmaceutical companies perform Phase 0 studies to decide which of their drug candidates has the best pharmacokinetic parameters in humans.");
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            move(31.5);
            $("#arrow2").css("color","#fff");
        } else if( trialphase[id] == "Phase 1" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            $("#phaseDesc1").text("They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.")
            move(48.5);
            $("#arrow2").css("color","#fff");
        } else if( trialphase[id] == "Phase 2" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            $("#phaseDesc1").text("Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
            move(65);
            $("#arrow2").css("color","#fff");
        } else if( trialphase[id] == "Phase 1/2" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phase1liner").text("Accelerated by combining 1 and 2");
            $("#phaseDesc1").html("<span>Phase 1: </span>They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.");
            $("#phaseDesc2").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
            move(65);
            $("#arrow2").css({"color":"#000", "right":"48%"});
        } else if( trialphase[id] == "Phase 3" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            $("#phaseDesc1").text("Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.")
            move(82);
            $("#arrow2").css("color","#fff");
        } else if( trialphase[id] == "Phase 4" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phaseDesc2").empty();
            $("#phase1liner").empty();
            $("#phaseDesc1").text("Phase IV trials are also known as post-marketing surveillance trials involving safety surveillance (pharmacovigilance) and ongoing technical support after approval.");
            move(100);
            $("#arrow2").css("color","#fff");
        } else if( trialphase[id] == "Phase 2/3" ) {
            $("#phaseName").text(trialphase[id]);
            $("#phase1liner").text("Accelerated by combining 2 and 3");
            $("#phaseDesc1").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
            $("#phaseDesc2").html("<span>Phase 3: </span>Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.") 
            move(82);
            $("#arrow2").css({"color":"#000","right":"38.5%"});
        }
    }) 
    $("#mobselect").on('change', function(){
        loadSelectData();
    });
    function loadSelectData() {
            var selVal = $("#mobselect option:selected").attr('id');
            console.log(selVal);
            // console.log( 'Index : ' + countries.indexOf(selVal) );
            // i = countries.indexOf(selVal)
            var id = selVal;
            // console.log(id);
            $("#tab-content #name").text(res[id]);
            $("#tab-content #country").text(country[id]);
            $("#tab-content #funding").text(funding[id]);
            $("#tab-content #sponsor").text(sponsor[id]);
            if( trialphase[id] == "Early research" ) {
                $("#phaseName").text(trialphase[id]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("Deciding whether a drug is ready for clinical trials (the so-called move from bench to bedside) involves extensive preclinical studies that yield preliminary efficacy, toxicity, pharmacokinetic and safety information.")
                move(15);
                $("#arrow2").css("color","#fff");
            } else if( trialphase[id] == "Pre-clinical") {
                $("#phaseName").text(trialphase[id]);
                $("#phaseDesc1").text("Phase 0 involves exploratory, first-in-human (FIH) trials that are run according to FDA guidelines. Also called human microdose studies, they have single sub-therapeutic doses given to 10 to 15 subjects and yield pharmacokinetic data or help with imaging specific targets without introducing pharmacological effects. Pharmaceutical companies perform Phase 0 studies to decide which of their drug candidates has the best pharmacokinetic parameters in humans.");
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                move(31.5);
                $("#arrow2").css("color","#fff");
            } else if( trialphase[id] == "Phase 1" ) {
                $("#phaseName").text(trialphase[id]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.")
                move(48.5);
                $("#arrow2").css("color","#fff");
            } else if( trialphase[id] == "Phase 2" ) {
                $("#phaseName").text(trialphase[id]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
                move(65);
                $("#arrow2").css("color","#fff");
            } else if( trialphase[id] == "Phase 1/2" ) {
                $("#phaseName").text(trialphase[id]);
                $("#phase1liner").text("Accelerated by combining 1 and 2");
                $("#phaseDesc1").html("<span>Phase 1: </span>They are primarily designed to assess the safety and tolerability of a drug, but the pharmacokinetics and, if possible, the pharmacodynamics are also measured.Phase I trials are the first tests of a drug with a small number of healthy human subjects.");
                $("#phaseDesc2").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
                move(65);
                $("#arrow2").css({"color":"#000", "right":"48%"});
            } else if( trialphase[id] == "Phase 3" ) {
                $("#phaseName").text(trialphase[id]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.")
                move(82);
                $("#arrow2").css("color","#fff");
            } else if( trialphase[id] == "Phase 4" ) {
                $("#phaseName").text(trialphase[id]);
                $("#phaseDesc2").empty();
                $("#phase1liner").empty();
                $("#phaseDesc1").text("Phase IV trials are also known as post-marketing surveillance trials involving safety surveillance (pharmacovigilance) and ongoing technical support after approval.");
                move(100);
                $("#arrow2").css("color","#fff");
            } else if( trialphase[id] == "Phase 2/3" ) {
                $("#phaseName").text(trialphase[id]);
                $("#phase1liner").text("Accelerated by combining 2 and 3");
                $("#phaseDesc1").html("<span>Phase 2: </span>Phase II trials are performed on larger groups of patients and are designed to assess the efficacy of the drug and to continue the Phase I safety assessments. Most importantly, Phase II clinical studies help to establish therapeutic doses for the large-scale Phase III studies.");
                $("#phaseDesc2").html("<span>Phase 3: </span>Phase III trials are randomized controlled multicentre trials and provide most of the long-term safety data. Phase III trials investigate the efficacy and safety of a new drug over 6 to 12 months or longer in a large patient population (several hundred patients or more) under conditions that reflect daily clinical life much more closely than the Phase I or II trials and allow evaluation of the overall benefit-risk relationship of the drug.") 
                move(82);
                $("#arrow2").css({"color":"#000","right":"38.5%"});
            }
    }
    var countofli = document.getElementsByClassName("li-item")

    for (var i = 0; i < countofli.length; i++) {
        countofli[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
    }

    move(31.5);
    function move(width) {
        var elem = document.getElementById("myBar");
        elem.style.width = width + "%";
    }

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('#mobselect').mobileSelect({				
            onClose: function(){
                loadSelectData();
            }
        });
    }

    

})
