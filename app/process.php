<?php

$errors = [];
$data = [];

if (empty($_POST['user'])) {
    $errors['user'] = 'Укажите имя.';
}

if (empty($_POST['phone'])) {
    $errors['phone'] = 'Заполните телефон';
}

// Проверка телефона
function ValidateTel($valueTel) {
    $regexTel = "/^[0-9\/-]+$/";
    if($valueTel == "") {
        return false;
    } else {
        $string = preg_replace($regexTel, "", $valueTel);
    }
    return empty($string) ? true : false;
}

$phone = htmlspecialchars($_POST['phone']);
if($phone && !ValidateTel($phone)) {
    $errors['phone'] = 'Введите корректный телефон.';
}



if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {

    
    $name = htmlspecialchars($_POST['user']);
    $message = htmlspecialchars($_POST['message']);
    $tel = htmlspecialchars($_POST["phone"]);
    $to_email = 'strelaweb@gmail.com';
    
    
    $subject ="Новая заявка с сайта Скупка бытовой техники и электроники";
    $message ="\n\nСообщение: ".$message."\n\nИмя: " .$name."\n\nТелефон: ".$tel;


    $Sendmail = mail($to_email, $subject, $message);

    
    if($Sendmail) {
            $data['success'] = true;
            $data['message'] = 'Success!';
        }
    else
    {
        $data['success'] = false;
        $errors['mail'] = 'Ошибка отправки.';
       
    };
}

echo json_encode($data);