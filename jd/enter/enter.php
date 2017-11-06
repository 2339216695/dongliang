<?php
	
	header("Content-type:text/html","charset:utf-8");
	$userName=$_POST['user'];
	$pwdN=$_POST["pwd"];
	$host="10.221.2.2";
	$user="DLL";
	$pwd="123";
	$db="userdb";
	$conn= @mysql_connect($host,$user,$pwd);
	if (!$conn){
		echo "can't content mysql";
		exit();
	}
	if(!mysql_select_db($db)){
			echo "can't change".$db;
			exit();
		}

	mysql_query("set names utf8");
	$sql="select name,pwd from usertable where name='$userName' and pwd='$pwdN';";
	$res = mysql_query($sql);
	if(mysql_num_rows($res)==0){
		echo 1;
	}else{
		echo 0;
	};
	// echo "11111";
?>