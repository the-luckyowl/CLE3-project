<?php
require_once "../headerAndFooter/header.html";
?>

<!DOCTYPE html>



<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../headerAndFooter/includes/css/headerAndFooter.css">
    <link rel="stylesheet" href="includes/css/loginCss.css">
    <link rel="stylesheet" href="../headerAndFooter/includes/css/mobileLayout.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

</head>
<body>

<main id="formContainer">
<form action="">
    <input type="text" name="username" class="form-control" placeholder="username">
    <br>
    <input type="password" name="password" class="form-control" placeholder="password">
    <br>
    <input type="submit" class="btn-primary" value="Login">
</form>
</main>
<?php require_once "../headerAndFooter/footer.html"; ?>
<script src = "../headerAndFooter/includes/toggleMenu.js"></script>

</body>

</html>