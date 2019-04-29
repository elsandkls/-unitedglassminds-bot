<?php 
header("Content-Type: text/html"); 
$debug=0;

if($debug == 1)
{
    echo $ENV['QUERY_STRING'];
    echo " <br>";
    $query_String_test = $ENV['QUERY_STRING'];
    echo " <br>";
    echo $_GET['q'];
    echo " <br>";
}
$kadgar_users = explode("/",$_GET['q']);

if($debug == 1)
{
    echo $kadgar_users;
    echo " <br>";
}

$build_kadgar_string = "https://kadgar.net/live";

for ($x = 0; $x <= (count($kadgar_users)-1); $x++)
{
    if($debug == 1)
    {
        echo "User: ".$kadgar_users[$x]." <br>";
    }
    // eventually we will call this and get the uptime twitch data.    
    $ch = curl_init("https://decapi.me/twitch/uptime/".$kadgar_users[$x]);  
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    $data = curl_exec($ch);    
    curl_close($ch);
    if( strpos($data , "offline"))
    {
        // nothing is needed, user is offline
    }
    else
    {
        // user is online build return string to pass back to twitch chat bot        
        if($debug == 1)
        {
            echo "User: ".$kadgar_users[$x]." :: ".$data." <br>";
        }
        else
        {           
            // this will allow any user passed in who is online even for a 
            // few seconds to be added to the link
            $build_kadgar_string = $build_kadgar_string."/".$kadgar_users[$x];
        }
    }
}
echo $build_kadgar_string;

?>