<?php
    require('./conn.php');
    $userName=$_POST['userName'];
    $sql="select name from usertable where name='$userName';";
    $res=mysql_query($sql);
    if(mysql_num_rows($res)==0){
        echo 0;
    }else{
        echo 1;
    };
?>