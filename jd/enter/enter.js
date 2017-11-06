$(document).ready(function(){
	$("#pwd").blur(vali);
function vali(){
	if($("#user").val()=="" || $("#user").val()==null || $("#pwd").val()=="" || $("#pwd").val()==null){
		$("#err").css("color","red").html("请输入用户名和密码");
	}else{
		var data={
			"user":$("#user").val(),
			"pwd":$("#pwd").val()
		}
		$("#err").load("./enter.php",data,function(info){
			if(info==0){
                    $("#err").css("color","green").html("用户存在，请登录");
                }else{
                    $("#err").css("color","red").html("用户不存在，请注册");
                }
		})
		if( $("#err").html()=="用户存在，请登录"){
                return true;
            }else{
                return false;
            }
		}
	}
	$("#btn").click(function(){
        if(!vali()){
            document.location.reload();
        }else{
           // document.location.replace("../index/index.html");
           document.location.href=("../index/index.html?user="+$('#user').val());
        }
    })
});
