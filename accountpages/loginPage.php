<?php
require_once "../headerAndFooter/header.html";
?>

<!DOCTYPE html>



<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login</title>

    <link rel="stylesheet" href="../headerAndFooter/includes/css/headerAndFooter.css">
    <link rel="stylesheet" href="includes/css/loginCss.css">
</head>
<body>
<header>

</header>
<div id="formContainer">
<form>
    <input type="text" name="username" class="form-control" placeholder="username">
    <br>
    <input type="password" name="password" class="form-control" placeholder="password">
    <br>
    <input type="submit" class="btn-primary" value="Login">
</form>
</div>
</body>
<?php require_once "../headerAndFooter/footer.html"; ?>
</html>