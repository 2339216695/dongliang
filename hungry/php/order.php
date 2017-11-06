<?php
//  header("Content-type:application/json");
$DBhost="localhost";
$DBuser="DLL";
$DBpwd="123";
$DBname="kaifanla";

$SQL="select user,host,name from user;";
header("content-type:application/json");
 $del=$_REQUEST["del"];
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
 if($del!=0){
        mysql_query("delete from kf_order where oid='$del'");
    }
$res=mysql_query("select user_name,img_sm,order_time,oid,img_lg from kf_order,kf_dish where kf_dish.did=kf_order.did;");
//$row = mysql_fetch_assoc($res);
$arr=array();
while($row = mysql_fetch_row($res))
	{
array_push($arr,$row);
	}

$data = json_encode($arr);
		    echo $data;


?>