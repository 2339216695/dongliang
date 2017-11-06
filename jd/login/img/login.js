$(document).ready(function(){
    console.log(1111);
    $("#uPwd").blur(chk);
    function chk(){
        if($("#uName").val()==""||$("#uName").val()==null||$("#uPwd").val()==""||$("#uPwd").val()==null){
            $("#box").css("color","red").html("请输入用户名和密码");
            return false;
        }else{
            var data={
                "userName":$("#uName").val(),
                "userPwd":$("#uPwd").val()
            };
            $("#box").load("enter.php",data,function(info){
                if(info==0){
                    $("#box").css("color","green").html("用户存在，请登录");
                }else{
                    $("#box").css("color","red").html("用户不存在，请注册");
                }
            });
            if( $("#box").html()=="用户存在，请登录"){
                return true;
            }else{
                return false;
            }
        }
    }
    $("#btn").click(function(){
        if(!chk()){
            document.location.reload();
        }else{
            document.location.replace("./index.html");
        }
    })
});
