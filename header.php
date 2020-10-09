  <?php
    $dirYT = '/projects/youtube_channel/';
    ?>
<head>
  <title>YouTube Channel Info</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="style/header.css">
  <link rel="stylesheet" href="style/master.css">
  <link rel="stylesheet" href="style/navbar.css"> 
  <link rel="stylesheet" href="style/search_channels.css"> 
  <link rel="stylesheet" href="style/by_id.css"> 
  <script src="https://kit.fontawesome.com/6b0b6e5fa1.js" crossorigin="anonymous"></script>
</head>
<body class="bg-light-gray">
  <div class="container-fluid">
    <header class="row py-2 bg-light-gray main-header">
      <div class="col-10 px-2">
        <a href="#home" onclick="displayHome()">              
          <i class="fab fa-lg fa-youtube text-red"></i>
          <span class="title">YouTube Channel Info</span>
        </a>        
      </div>
      <div class="col-2 px-2 text-right">
        <span style="cursor:pointer" onclick="openSidebar()">
          <i class="fas fa-lg fa-user-circle"></i>
        </span>  
      </div>      
    </header>
  </div>

  <!-- User Slide Out Login Menu -->
  <div id="user-sidebar">
    <div class="user-login text-center py-2" id="sidebar-login">
      <div>Please Log In!</div>
      <div class="pt-2 pb-1">Log In With Google</div>
      <button id="sidebar-login-button" type="button" class="btn bg-red text-white btn-font border border-dark">LOG IN</button>
    </div>
    <div class="user-logout text-center py-2" id="sidebar-logout">
      <div>Logged In!</div>
      <div class="pt-2 pb-1">Log Out?</div>
      <button id="sidebar-logout-button" type="button" class="btn bg-red text-white btn-font border border-dark">LOG OUT</button>
    </div>
  </div>
  
  <!--Opaque Overlay Canvas-->
  <div id="overlay-canvas" class="overlay" onclick="closeSidebar()"></div>
