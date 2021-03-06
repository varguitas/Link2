$(document).ready(function(){
	$(".link2_a").click(function(e) {
        var url = $(this).attr("data-href");
		var title = $(this).attr("data-title");
		document.title = title;
		window.history.pushState("",title,url);
		loadContent(url);
    });
	window.onpopstate = function(event) {
		loadContent(location.pathname);
	};
	function loadContent(url){
		var html = $("body").children();
		$("body").prepend("<div id='link2_transition_div_old'></div>");
		$("body").prepend("<div id='link2_transition_div_new' style='display: none'></div>");
		$("#link2_transition_div_new").load(url);
		$(html).appendTo("#link2_transition_div_old");
		$("#link2_transition_div_old").hide("slide",{direction: "left"},500,function(){
			$("#link2_transition_div_old").remove();
			$("#link2_transition_div_new").show("slide",{direction: "left"},500,function(){
				$("#link2_transition_div_new").children().appendTo("body");
				$("#link2_transition_div_new").remove();
			});
		});
	}
});