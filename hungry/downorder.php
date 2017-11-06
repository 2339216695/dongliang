<?php

$DBhost="localhost";
$DBuser="DLL";
$DBpwd="123";
$DBname="kaifanla";
$did=$_GET['num1'];
//echo $name;
$SQL="select user,host,name from user;";
header("content-type:application/json");
$conn = @mysql_connect($DBhost, $DBuser, $DBpwd);
	if(!$conn){
		echo "链接失败,请检查配置";
		exit();
	}
	if(!mysql_select_db($DBname)){
		echo "无法切换到指定的数据库:";
		exit();
	}
mysql_query("set names utf8");
$res=mysql_query("select name,price,detail,material,img_lg,did from kf_dish where did='$did';");
//$row = mysql_fetch_assoc($res);
$arr=array();
while($row = mysql_fetch_row($res))
	{
array_push($arr,$row);
	}

$downorder = json_encode($arr);
		    echo $downorder;


?>




