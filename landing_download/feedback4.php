<?php

$errors = array();
$form_data = array();

if ($_POST['name4'] == "")
    {
        $errors['name4'] = 'Введите Ваше имя';
    }

if ($_POST['phone4'] == "")
{
    $errors['name4'] = 'Введите Ваш телефон';
}

if (!empty($errors))
    {
        $form_data['success'] = false;
        $form_data['errors']  = $errors;
    }
else
    {
        $message = "<h4>Заявка с сайта ".$_SERVER['HTTP_HOST']."</h4><p>Четвертая форма</p>";

        foreach($_POST as $k => $v)
            {
                $message .= $k.": ".$v."<br />";
            }

        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf8' . "\r\n";

        if (mail('vasha_pochta@yandex.ru', 'Заявка с сайта '.$_SERVER['HTTP_HOST'], $message, $headers)) 
// если хотите отправлять нескольким адресатам, то пропишите через запятую адреса вот так 'vasha_pochta@yandex.ru, vasha2_pochata2@yandex.ru'
            {
                $form_data['success'] = true;
                $form_data['posted'] = 'Спасибо за заказ! Оставайтесь пожалуйста на связи, Вам позвонит личный менеджер!';
            }
        else
            {
                $errors['name4'] = 'Ошибка отправки письма';
            }
    }


echo json_encode($form_data);

?>