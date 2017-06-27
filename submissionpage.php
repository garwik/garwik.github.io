<?php
if($_POST["admittance"]) {
    mail("collective@yopmail.com", "Form to email message", $_POST["admittance"], "From: an@email.address");
}
?>