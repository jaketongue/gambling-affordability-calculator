window.onload = function() {
    var disposable = localStorage.getItem("disposableIncome");
    var difference = localStorage.getItem("spendingDifference");
    var gambling = localStorage.getItem("reviewTotalGambling");
        
    $("#affordabilityEstimate").text(disposable);
    $("#reviewTotalGambling").text(gambling);

    if(parseInt(difference) < 0){

        $(".difference_text").css("color", "red");
        $("#spendingDifference").text(difference);

    } else {

        $("._fcpqk1_hide").hide();
        $("._1ev4tfg_hide").hide();
        $("._1ifvlii_hide").hide();
        $("._13gp5re_hide").hide();
        $("._15oy8to_hide").hide();
        $("._fcpqk3").hide();
        $("._fcpqk2").css("padding-top", "20px");

    };

    if(parseInt(disposable) < 0){

        $(".affordability_text").css("color", "red");
        $("#affordabilityEstimate").text(disposable);
        $("._fcpqk1_hide").hide();
        $("._fcpqk2").hide();
        $("._1ev4tfg_hide").hide();
        $("._1ifvlii_hide").hide();
        $("._13gp5re_hide").hide();
        $("._15oy8to_hide").hide();
        $("._fcpqk3").css("padding-top", "20px");

    } else {

        $(".affordability_text").css("color", "rgb(31, 169, 73");
        $("#affordabilityEstimate").text(disposable);
        $("._fcpqk3").hide();
        
    }
};

