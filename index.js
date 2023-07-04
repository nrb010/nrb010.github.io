function showmusic(){
    $("#music_container").css("display","inherit");
    $("#music_container").addClass("animated fadeIn");
    setTimeout(function(){
        $("#music_container").removeClass("animated fadeIn");
    },800);
}
function closemusic(){
    $("#music_container").addClass("animated fadeOut");
    setTimeout(function(){
        $("#music_container").removeClass("animated fadeOut");
        $("#music_container").css("display","none");
    },800);
}


function showmerch(){
    $("#merch_container").css("display","inherit");
    $("#merch_container").addClass("animated fadeIn");
    setTimeout(function(){
        $("#merch_container").removeClass("animated fadeIn");
    },800);
}
function closemerch(){
    $("#merch_container").addClass("animated fadeOut");
    setTimeout(function(){
        $("#merch_container").removeClass("animated fadeOut");
        $("#merch_container").css("display","none");
    },800);
}

function showteach(){
    $("#teach_container").css("display","inherit");
    $("#teach_container").addClass("animated fadeIn");
    setTimeout(function(){
        $("#teach_container").removeClass("animated fadeIn");
    },800);
}
function closeteach(){
    $("#teach_container").addClass("animated fadeOut");
    setTimeout(function(){
        $("#teach_container").removeClass("animated fadeOut");
        $("#teach_container").css("display","none");
    },800);
}

function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated fadeIn");
    setTimeout(function(){
        $("#about_container").removeClass("animated fadeIn");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated fadeOut");
    setTimeout(function(){
        $("#about_container").removeClass("animated fadeOut");
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
