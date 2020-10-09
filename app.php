<!DOCTYPE html>
<html>
<?php
    require 'header.php';
    require 'navbar.php';
  ?> 
  
  <div class="container-fluid body-width">         
    <?php
      require 'home.php';
      require 'search_channels.php';
      require 'by_id.php';
      require 'compare.php';
      require 'guide.php'
    ?>   
  </div>
  
  <!-- Bootstrap -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  
  <!-- My Scripts and Google YouTube API -->  
  <script src="<?php echo $dirYT;?>script/header.js"></script>
  <script src="<?php echo $dirYT;?>script/navbar.js"></script>
  <script src="<?php echo $dirYT;?>script/my_credentials.js"></script>
  <script src="<?php echo $dirYT;?>script/main_script.js"></script>
  <script async defer src="https://apis.google.com/js/api.js" 
    onload="this.onload=function(){};handleClientLoad()"
    onreadystatechange="if (this.readyState === 'complete') this.onload()">
    </script>
</body>
</html>