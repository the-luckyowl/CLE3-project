<?php require_once "../headerAndFooter/header.html"?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../headerAndFooter/includes/css/headerAndFooter.css">
    <link rel="stylesheet" href="includes/css/accountMenu.css">
    <link rel="stylesheet" href="../headerAndFooter/includes/css/mobileLayout.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" >
    <title>gebruiker</title>
</head>

<body>
<main id="container">
    <nav id="accountManager">
    <div class="item">account informatie</div>
    <div class = "item">vrienden</div>
    <div class="item">gekochten concerten</div>
    </nav>
    <div id="tabsContainer">

    </div>
    <div id="concertSearchBar">
        <label for="searchBar"></label><input type="text" name="searchBar" id="searchBar" placeholder="search">
    </div>
    <ul id="concertOverview">

    </ul>
</main>
<script src = "includes/userInfoJs.js"></script>
<?php require_once "../headerAndFooter/footer.html"?>
<script src = "../headerAndFooter/includes/toggleMenu.js"></script>

</body>

</html>
