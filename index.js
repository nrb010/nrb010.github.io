function showmusic(){
    $("#music_container").css("display","inherit");
    $("#music_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#music_container").removeClass("animated slideInLeft");
    },800);
}
function closemusic(){
    $("#music_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#music_container").removeClass("animated slideOutLeft");
        $("#music_container").css("display","none");
    },800);
}


function showmerch(){
    $("#merch_container").css("display","inherit");
    $("#merch_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#merch_container").removeClass("animated slideInLeft");
    },800);
}
function closemerch(){
    $("#merch_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#merch_container").removeClass("animated slideOutLeft");
        $("#merch_container").css("display","none");
    },800);
}

function showteach(){
    $("#teach_container").css("display","inherit");
    $("#teach_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#teach_container").removeClass("animated slideInRight");
    },800);
}
function closeteach(){
    $("#teach_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#teach_container").removeClass("animated slideOutRight");
        $("#teach_container").css("display","none");
    },800);
}

function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInRight");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutRight");
        $("#about_container").css("display","none");
    },800);
}


setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
