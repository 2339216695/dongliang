<?php
    require('./conn.php');
    $userName=$_GET['userName'];
    $pwd=$_GET['pwd'];
    $phone=$_GET['phone'];
    $sql="insert into usertable(name,pwd,phone) values('$userName','$pwd','$phone');";
    $res=mysql_query($sql);
    echo "<script>location.href='../enter/enter.html';</script>";
?>