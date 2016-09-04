$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();

	//foucus name, give hint
	$("#name").bind({"focus":function(){
		$("#nameMsg").html("Please input your name");
	},"blur":function(){
		$("#nameMsg").html("");
	}});

	//foucus email, give hint
	$("#email").bind({"focus":function(){
		$("#emailMsg").html("Please input your email");
	},"blur":function(){
		$("#emailMsg").html("");
	}});

	//foucus message, give hint
	$("#message").bind({"focus":function(){
		$("#textMsg").html("You can give me some comments");
	},"blur":function(){
		$("#textMsg").html("");
	}});
	
});
