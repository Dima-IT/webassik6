
$(document).ready(function() {


    console.log("jQuery is ready!");

 
    $("h1").css("text-align", "center");

    $("#greeting").text("Welcome to My Portfolio!");

    $(".intro").css("font-weight", "bold");

    $("#lightBtn").click(function() {
        $("body").css({
            "background-color": "white",
            "color": "black"
        });
    });

    $("#darkBtn").click(function() {
        $("body").css({
            "background-color": "#222",
            "color": "white"
        });
    });



    $("#hideBtn").click(function() {
        $("#facts").hide();
    });

    $("#showBtn").click(function() {
        $("#facts").show();
    });

    $("#toggleBtn").click(function() {
        $("#facts").toggle();
    });


    $("#fadeInBtn").click(function() {
        $("#gallery img").fadeIn();
    });

    $("#fadeOutBtn").click(function() {
        $("#gallery img").fadeOut();
    });

    $("#fadeToggleBtn").click(function() {
        $("#gallery img").fadeToggle();
    });


    $(".slideContent").hide();

    $(".slideTitle").click(function() {
        var panel = $(this).next();

        if (panel.is(":visible")) {
            panel.slideUp();
        } else {
            panel.slideDown();
        }
    });

    $(".slideTitle").dblclick(function() {
        $(this).next().slideToggle();
    });


    
    $("#addBtn").click(function() {
        var skill = $("#skillInput").val().trim();

        if (skill !== "") {
            $("#skillList").append(
                $("<li>").text(skill)
            );
            $("#skillInput").val("");
        }
    });

    $("#prependBtn").click(function() {
        var skill = $("#skillInput").val().trim();

        if (skill !== "") {
            $("#skillList").prepend(
                $("<li>").text(skill)
            );
            $("#skillInput").val("");
        }
    });

    $("#removeBtn").click(function() {
        $("#skillList li").last().remove();
    });


    
    $("#changeLinkBtn").click(function() {
        $("#socialLink").attr(
            "href",
            "https://www.linkedin.com"
        );

        $("#socialLink").text("LinkedIn");
    });


   
    $("#nameInput").on("input", function() {
        var name = $(this).val();
        $("#liveName").text("Name: " + name);
    });

    $("#emailInput").on("input", function() {
        var email = $(this).val();
        $("#liveEmail").text("Email: " + email);
    });



    var animated = false;

    $("#animateBtn").click(function() {
        $(".progress").each(function() {
            var targetWidth = $(this).attr("data-width");

            if (animated) {
                $(this).animate({ width: "0%" }, 800);
            } else {
                $(this).animate({ width: targetWidth }, 800);
            }
        });

        animated = !animated;
    });

});

