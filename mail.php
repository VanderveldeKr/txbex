<?php
    $data = $_POST;
    $telegramm = $data['telegramm'];
    $jaw = $data['jaw'];
    $summ = $data['summ'];
    
    $selectedTechnologies = '';
    
    foreach($technologies as $item) {
        echo "$item<br />";
        
    $selectedTechnologies .= $item . "\n";
    }
    
    $textile = $data['textile'];
    $procedures = $data['procedures'];
    $fasting = $data['fasting'];
 
    $to = "mike770@yandex.ru"; 
    $date = date ("d.m.Y"); 
    $time = date ("h:i");
    $subject = "Заявки с Лид Формы";

    $msg="
    Пара: $jaw;
    Сумма: $summ;
    Телеграмм: $telegramm";

    mail($to, $subject, $msg, "From: $to ");
?>