<?php
	header("Content-type:text/html","charset:utf-8");
	$host="10.221.2.2";
	$name="DLL";
	$pwd="123";
	$db="userdb";
	$uName=$_GET['name'];
	$conn=@mysql_connect($host,$name,$pwd);
	if(!$conn){
		echo "can't connect mysql";
		exit ();
	}
	if(!mysql_select_db($db)){
		echo "can't change".$db;
		exit ();
	}
	mysql_query("set names utf8");
	$sql="select shop_name,shop_url,user_name,price,payment_mode,submit_time,order_state,order_num,product_img from jd_orders,jd_products,jd_order_product_detail where jd_orders.order_id=jd_order_product_detail.order_id and jd_order_product_detail.product_id=jd_products.product_id and jd_orders.user_name=('$uName');";
	$res=mysql_query($sql);
	$arr=array();
	while($line1=mysql_fetch_assoc($res)){array_push($arr,$line1);}
	//$line1=mysql_fetch_row($res);
	$json=json_encode($arr);
	 //var_dump($arr);
	echo $json;
// echo "123";
?>