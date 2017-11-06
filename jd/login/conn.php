<?php
    header("Content-type:text/html;charset=utf-8");
    	$dbhost='localhost';
    	$dbuser='DLL';
    	$dbpwd='123';
    	$dbname='userdb';
    	$conn=mysql_connect($dbhost,$dbuser,$dbpwd);
    	if(!$conn){
    		echo "链接数据库失败";
    		exit();
    	}
    	if(!mysql_select_db($dbname)){
    		echo "切换数据库失败，请检查";
    		exit();
    	}
    	mysql_query("set names utf8");
?>