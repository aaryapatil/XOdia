<!DOCTYPE html>

<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
  <title>XOdia</title>

  <!-- CSS  -->
  <link href="css/style.css" rel="stylesheet"media="screen,projection">
  <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
  <link href="css/materialize.min.css" type="text/css" rel="stylesheet" media="screen,projection">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/sweetalert2.css">
  <link rel="stylesheet" href="css/style3.css">

  <style type="text/css">

  
  .back{
    background: url("black.jpg ");
    min-height: 665px;
    background-position: center center;

  /* Background image doesn't tile */
  background-repeat: no-repeat;

  /* Background image is fixed in the viewport so that it doesn't move when
     the content's height is greater than the image's height */
  background-attachment: fixed;

  /* This is what makes the background image rescale based
     on the container's size */
  background-size: cover;

  /* Set a background color that will be displayed
     while the background image is loading */
  background-color: #464646;


  }


  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }
  .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .hvr-shadow:hover{
   box-shadow: 1px 1px 5px  #000000;
    -webkit-box-shadow: 1px 1px 5px  #000000;
    -moz-box-shadow: 1px 1px 5px  #000000;

  }
  .canvas {
    max-width: 100%;
    height: auto;
}

  </style>
  <link rel="apple-touch-icon" sizes="57x57" href="favi/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="favi/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="favi/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="favi/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="favi/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="favi/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="favi/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="favi/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="favi/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="favi/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favi/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="favi/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favi/favicon-16x16.png">
  <link rel="manifest" href="favi/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

</head>
<body style="overflow-x:hidden;font-family: 'Lato',sans-serif;" id="body" class="back">
   <nav style="background:transparent;" role="navigation" >
    <div class="nav-wrapper container center" ><a class="hide-on-large-only" target="blank" id="logo-container" href="http://credenz.info" class="brand-logo"><img src="logobrand.png" style="width:100px;"></a>
      <!-- <ul class="right hide-on-med-and-up">
        <li><a href="#about" class="page-scroll">About</a></li>
        <li><a href="#contact" class="page-scroll">Contact us</a></li>
        <li><a href="http://xodia.pythonanywhere.com/xodia/" target="blank">Previous game</a></li>
      </ul> -->
         <a id="bulb" target="blank" href="http://credenz.info" class="brand-logo hide-on-med-and-down"><img src="logobrand.png" style="width:140px;height:80px;position:fixed;left:0;padding:05px;"></a>
        <a target="blank" href="http://pictieee.in" class="hide-on-med-and-down"><img style="width:165px;padding:10px;height:70px;position:fixed;right:0;" src="logopisb.png"></a> 
      <ul id="nav-mobile" class="side-nav black " style="color:white;">
        <li><a href="#index-banner" class="page-scroll" ><img style="width:100px;" src="logobrand.png"></a></li>
        <li><a href="#about"  style="color:white;"class="page-scroll">About</a></li>
        <li><a href="#gtab"  style="color:white;"class="page-scroll">Grow</a></li>
        <li><a href="#contact" style="color:white;" class="page-scroll">Register</a></li>
        <li><a href="#contact" style="color:white;" class="page-scroll" >Contact</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse hide-on-med-and-up"><i class="material-icons">=</i></a>
    </div>
  </nav>
     <div class="center hide-on-med-and-down" >
 
        <canvas id="canvas" width=1300 height=700 style="z-index:0;position:fixed;left:0;right:0;margin-left:auto;margin-right:auto;"></canvas> 
    </div>
 <div id="header" class="hide-on-small-only">
        <div class="sidenav web">
            <a class="page-scroll" href="#body" class="active">
                <div class="sidenavitem" style="top:100px">
                    <div class="title" >
                        <h1>HOME</h1> 
                    </div>
                    <div class="icon"> <i class="fa fa-home"></i> 
                    </div>
                </div>
            </a>
            <a class="page-scroll" href="#about">
                <div class="sidenavitem" style="top:160px;">
                    <div class="title">
                        <h1>ABOUT</h1> 
                    </div>
                    <div class="icon"> <i class="fa fa-info-circle"></i> 
                    </div>
                </div>
            </a>
            <a class="page-scroll" href="#gtab" class="event2load">
                <div class="sidenavitem" style="top:220px;">
                    <div class="title">
                        <h1>GROW</h1> 
                    </div>
                    <div class="icon"> <i class="fa fa-pagelines"></i> 
                    </div>
                </div>
            </a>
            <!--
            <a class="page-scroll" href="#contact" target="_blank">
                <div class="sidenavitem" style="top:280px;">
                    <div class="title">
                        <h1>REGISTER</h1> 
                    </div>
                    <div class="icon">
                        <i class="fa fa-pencil-square"></i>
                    </div>
                </div>
            </a>
             
            <a href="#sponsors" class="markload">
                <div class="sidenavitem" style="top:400px;">
                    <div class="title">
                        <h1>SPONSORS</h1> 
                    </div>
                    <div class="icon">
                        <img src="img/sponsors.png" class="img-responsive center-block" style="width:35px;">
                    </div>
                </div>
            </a> -->
            <a class="page-scroll" href="#contact" >
                <div class="sidenavitem " style="top:280px;">
                    <div class="title">
                        <h1>Contact</h1> 
                    </div>
                    <div class="icon"> <i class="fa fa-phone"></i> 
                    </div>
                </div>
            </a>
        </div>
    </div>
  <!-- INdex -->

 <div class="section back" id="index-banner">


      <div class="row">

        <div class="col s12 m12 valign-wrapper" >
          <img src="x.png" id="xologo" class="responsive-img " style="margin:auto;width:500px;display:none;position:relative;top:150px;" > 
          <!-- 
          ______
          |       |        /\      ____   |   |
          |______ |       /  \    |___    |___|
          |       |      /____\    ___|   |   |
          |       |____ /      \          |   |     was here to do flashy stuff!

           -->
<div  style="position:absolute;top:456px;width:10px;left:650px;z-index:10"><a href="http://cdn.business2community.com/wp-content/uploads/2014/02/The_Flash_by_Boy_Meets_Hero.jpg" style="font-size:15%;">r</a></div>




          <a href="#about" class="btn-floating btn-large white tooltipped mb waves-effect waves-light hvr-grow page-scroll shadow-circle hide-on-med-and-down"
          data-position="top" data-delay="50" data-tooltip="GET TO KNOW MORE!
" style="position:relative;opacity: 1;top:440px;right:17%"><i class="sgd fa fa-chevron-down" style="color: black; opacity: 1;position: relative;"></i>GET TO KNOW MORE!
          </a>
          <a href="#about" class="btn-floating btn-large mb waves-effect waves-light white hvr-grow page-scroll shadow-circle hide-on-large-only" style="position:absolute;opacity: 1;bottom:8%;left:44%;z-index:0"><i class="sgd fa fa-chevron-down" style="color: black; opacity: 1;position: relative;"></i>
          </a>
        </div>
        <div class="col s12 m12 valign-wrapper">
          <img src="xodiagrowwhite.png" id="grow" class="responsive-img " style="margin:auto;width:400px;display:none;position:relative;top:-150px;" >           
          

        </div>
        <div class="col s12 m12 valign-wrapper" style="position:absolute;bottom:47%;">
            <div class="col s12 m12 l12 center hide-on-small-only">
               
           </div>
         
          </div>

           
      </div>

  </div>
<!-- go -->


  <div class="info" id="about">
    <div class="container">
      <div class="section" >

        <!--   Icon Section   -->
        <div class="row">
          <div class="col s12 m12 " style="padding-top:5%">
            <h2  style="color:white;text-align: center;">WHAT IS XODIA?</h2>
          </div>

        </div>
        <div class="row">
          <div class="col s12 m6 l6  center-align">
                <div class="card darken-1" style="z-index:1;color:teal;">
              <div class="card-content">
                <span class="card-title" style="color:teal;"><b>Battle of Codes</b></span>

              </div>
              <div class="card-action">
               <p style="color:black; ">XOdia is a free online competition in which C/C++/Java/Python codes will battle it out in a unique game designed for two players. Make your codes play for you. This is an opportunity to test your programming skills, thinking strategy and coding efficiency. It's not just about brainstorming, it's also about striving to evolve. Can your code be exodia, the undefeatable?</p>
               <a target="blank" class="btn" href="http://xodia.pythonanywhere.com/xodia/" style="color:white;"> < <i class=" fa fa-gamepad"></i>  Previous Game</a>

              </div>
            </div>
            </div>
            <div class="col s12 m6 l6  center-align">
                <div class="card darken-1" style="z-index:1;color:teal;">
              <div class="card-content">
                <span class="card-title" style="color:teal;"><b>Play the Game</b></span>

              </div>
              <div class="card-action">
               <h5>GROW</h5>
                        <br>
                        <p style="color:black;">In order to understand how the game works, you can try out this manual test 
                          game.</p>

                      <div class="center">
                        <br>
                      <a class="waves-effect waves-light btn" href="grow" target="blank" style="color:white;"> PLAY THE GAME <i class="fa fa-gamepad"></i></a>
              </div>
            </div>
            </div>
            <!--  
            <div class="col l6 m12 s12 center-align">
                
                  <div class="card grey lighten-5" style="z-index:5">
                    <div class="card-content teal-text center">

                        <h4 style="text-align:center;color:teal">PLAY THE GAME</h4>
                        <h5>GROW</h5>
                        <br>
                        <p style="color:black;">In order to understand how the game works, you can try out this manual test 
                          game.</p><br>

                      <div class="center">
                      <a class="waves-effect waves-light btn-large" href="grow" target="blank" style="color:white;"> PLAY THE GAME <i class="fa fa-gamepad"></i></a>
                    </div>

                  </div>

            </div>
          </div>
-->
  <script src="js/jquery-2.1.3.min.js"></script>
  <script src="js/materialize.min.js"></script>
  <script src="js/init.js"></script>
  <script src="js/sweetalert2.min.js"></script>
                   
<!--
         

-->

    
          
          
          <div class="col s1 offset-s11 " id="but">

            <a href="#gtab" class="btn-floating hide-on-med-and-down  btn-large waves-effect waves-light hvr-grow  white page-scroll shadow-circle" style="position:absolute ;right: 17%;top:130; opacity: 1;"><i class="sgd fa fa-chevron-down" style="color: black; right: 10%; opacity: 1;"></i>
            </a>
          
          </div>
          </div>
          
        </div>
        </div>

      </div>
    
  
<div class="row">
 <a href="#contact" class="btn-floating hide-on-med-and-down  btn-large waves-effect waves-light hvr-grow  white page-scroll shadow-circle" style="position:relative;right: 57%;top:10%; opacity: 1;"><i class="sgd fa fa-chevron-down" style="color: black; right: 10%; opacity: 1;"></i></a>

  <div class="col s12 m12 " style="padding-top:1%;height:650px;">

<div class="gtab" id="gtab">
  <div class="container no-pad-bot">
    <div class="section">
      <div class="row " style="padding-top:7%">
        <div class="col s12">
           
          <ul class="tabs" style="width: 100%;">
                      
            <li class="tab col s3" style="width: 25%;"><a class="active" href="#test1">GAME</a></li>
            <li class="tab col s3" style="width: 25%;"><a href="#test2" class="">CATCH</a></li>
            <li class="tab col s3" style="width: 25%;"><a href="#test3" class="">DOCS</a></li>
            <li class="tab col s3" style="width: 25%;"><a href="#test4" class="">RULES</a></li>

          <div class="indicator" style="right: 524px; left: 0px;"></div><div class="indicator" style="right: 524px; left: 0px;"></div><div class="indicator" style="right: 524px; left: 0px;"></div>
          </ul>
        </div>
        <div id="test1" class="col s12 m6 " style="">
          <div class="card hvr-shadow" style="overflow: hidden;">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="./xodiagrowblack.png">
            </div>
            <div class="card-content center">
              <span class="card-title activator grey-text text-darken-4"><a href="#gtab" class="btn-floating btn-large waves-effect waves-light hvr-grow  white page-scroll shadow-circle" style=" opacity: 1;position:relative;left:3%"><i class="sgd fa fa-chevron-up" style="color: black; opacity: 1;"></i></a></span>

            </div>
            <div class="card-reveal" style="transform: translateY(0px);">
              <span class="card-title grey-text text-darken-4">
                <h4 style="text-align:center">GROW</h4>
                <hr style="display: block; height: 1px;
                            border: 0; border-top: 1px solid #d3d3d3;
                          margin: 1em 0; padding: 0;">
               <i class="fa fa-times right"></i>
              </span>
                  
                  <p>In this battle for the survival of the fittest, are you able to safeguard your own species?</p>
                  <p>Will you be able to save your kind from extinction and grow?</p>
                  <p>You are provided with a seed to culminate the growth of your species.</p>
                  <p>Fight for space in this world, for existence.</p>
                  <p>We will follow the ideology: <b>Multiply &amp; Conquer</b></p>
                  <p><i>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; You either fight to live or die fighting.</i></p>


            </div>
          </div>
        </div>
        <div id="test2" class="col s12 m6 offset-m2  " style="display: none;">
            <div class="card white darken-1" style="z-index:3">
                <div class="card-content black-text">
                  <span class="card-title">
                  <h5 style="text-align:center;color:black">BUT WAIT THERE'S MORE..</h5>
                  </span>
                </div>
                <div class="card-action">
                  <p style="font-weight: bold;">A tree wants to stop you, the inhibitor.</p>
                  <p> It's the war for space where each tree tries to overpower the other by terminating its branches and inhibiting its growth.</p>
                  <p>Watch out, your existence is in danger! Ready for battle?</p>

                </div>
              </div>
        </div>
        <div id="test3" class="col s12 m6 offset-m4" style="display: none;">
            <div class="card white darken-1" style="z-index:3">
                <div class="card-content black-text">
                  <span class="card-title" style="color:black"><h5>So you seem interested?</h5></span>
                  <p>Download the documentation and template.<br>Branch,Bound,Prune,Repeat</p>
                  <p>May the best algorithm win!</p>
                </div>
                <div class="card-action">

                  <a href="Grow_Documentation.pdf"  style="color:teal;">DOCUMENTATION</a>
                  <a class='dropdown-button btn-flat' hover="true" href='#' data-activates='dropdown1' style="color:teal;">Templates</a>
                  <!-- Dropdown Structure -->
                  <ul class="dropdown-content active" id='dropdown1' class='dropdown-content' style="text-color:yellow;">
                    <li><a href="templates/template_c.c">C</a></li>
                    <li><a href="templates/template_cpp.cpp">C++</a></li>
                    <li><a href="templates/temp.java">Java</a></li>
                    <li><a href="templates/template_py.py">Python</a></li>
                  </ul>
                        
                                  </div>
            </div>
        </div>
        <div id="test4" class="col s12 m6 offset-m6" style="display: none;">
            <div class="card white darken-1" style="z-index:3">
                <div class="card-content black-text">
                  <span class="card-title"><h5 style="text-align:center;color:black">THE RULES</h5>


                </span></div>
                <div class="card-action">
                  <p>The Code for the bots must be strictly written in C/C++/Java/Python.</p>
                  <p>Bots may be DISQUALIFIED due to following reasons:</p>
                  <p>1. Bot did not respond within 2 seconds of its execution.</p>
                  <p>2. Bot returned an INVALID MOVE.</p>
                  <p>3. Syntactical errors in the program.</p>
                  <p>4. Excessive resource usage.</p>
                  <p>5. Any malicious activity encountered in the code.</p>
                </div>
                
              </div>
            </div>
        </div>

      </div>

    </div>

</div>
</div>

<div class="col s1 offset-s9 " id="but">
  <a href="#contact" class="btn-floating hide-on-med-and-down  btn-large waves-effect waves-light hvr-grow  white page-scroll shadow-circle" style="position:relative; left:50%;bottom:90px; opacity: 1;"><i class="sgd fa fa-chevron-down" style="color: black; right: 10%; opacity: 1;"></i>
            </a>
          </div>
  </div>
<!--  -->
<!-- COntact -->
<div class="row">
<section id="contact" class="col l10 offset-l1  s12 m6 offset-m3">
      <div class="" style="">
        <div class="row ">
          <div class="col s12 m12 l4 center">
            <div class="card darken-1" style="z-index:3;color:black;">
              <div class="card-content">
                <span class="card-title" style="color:teal;"><b>Subscribe</b></span>

              </div>
              <div class="card-action">
                <p>Enter your email id to receive updates about the upcoming XOdia which will take place during August,2015.</p>
   
<?php
      include_once('config.php');

    try
      { 
        $con = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);            
            
        if(isset($_POST['register']))
          {
        $mailid = $_POST['mailid'];
        $msg = "Thank you for registering. You will be kept updated about XOdia on your mail '$mailid'. Happy coding!";



          $sql = "SELECT * FROM xodia_newsletter WHERE mail = :mail LIMIT 1";
          $stmt = $con->prepare($sql);           
          $stmt->bindValue( "mail", $mailid, PDO::PARAM_STR );              
          $stmt->execute();

          if($stmt->rowCount()==1)
          {
             echo "<script>swal('Oops!','You have already registered','error');</script>";      
          }
          else
          {

            if(mail($mailid,"XOdia - registration",$msg))
              {
                $sql = "INSERT INTO xodia_newsletter VALUES(:mail)";
                $stmt = $con->prepare($sql); 
                $stmt->bindValue( "mail", $mailid, PDO::PARAM_STR );              
                $stmt->execute();

                echo "<script>swal('Thank you','You have been registered successfully','success');</script>";      
              }    
          }
        
          }
      }

      catch (PDOException $e)
        {
          echo "<script>swal('Registration Failed','Please try again later,Sorry for the inconvinience','error')</script>";
        }     
    

    ?>                
               <form class="center" id = "newsletter" method="POST" action".">
                <div class="input-field col s12">
                  <input style="color:teal;"type="email" required name = "mailid" id = "mailid" class="validate ">
                  <label for="email" data-error="wrong" data-success="right">Email</label>
                </div>
                <p></p>
                <button style="z-index:2;" class="btn waves-effect  waves-light " id="submit" type="submit" name="register" value="Submit">Submit
                  <i class="material-icons">></i>
                </button>         
                </form>
              </div>
            </div>
            </div>
            <div class="col l4 m12 s12 center-align">
            
            <div class="card grey lighten-5" style="z-index:5">
                    <div class="card-content teal-text center">

                        <h4 style="text-align:center;color:teal">SPONSORED BY</h4>
                        
                      <a href="http://k-imaginations.com" target="blank"><img src="kimg.png" style="position:relative;width:100%;"></a>
                    </div>
                    </div>

                  </div>

          <div class="col l4 m12 s12 center-align">
            
            <div class="card grey lighten-5" style="z-index:5">
                    <div class="card-content teal-text center">

                        <h4 style="text-align:center;color:teal">SUBMISSIONS</h4>
                        <p style="color:black;">Registrations will start soon.</p>

                      <h5 style="text-align:center">Get in touch with us via:</h5>

                      <div class="center">
                      <a style="text-align:center;text-transform: lowercase;color:black;font-size:120%" href="mailto:pictxodia15@gmail.com"> pictxodia15@gmail.com</a></div>
                      <h4>Contacts</h4>
                      <p style="color:black;">Anuj Godase: +91 9028731183</p>
                      <p style="color:black;">Rudra Lande: +91 7276190504</p>
                    </div>

                  </div>
                  </div>

              
                  </div>


            </div>
            </div>
         
</section>


<section id="contact" >
      <div class="container text-center" style="overflow-x: hidden;">
        
          <div class="gdl hide-on-small-only" style="right: 17%; position: absolute; opacity: 1;">
      <a class="page-scroll btn-floating btn-large white waves-effect shadow-circle hvr-grow" style="z-index:4;" href="#body"><i style="color:black;position:relative;top:-1%" class="fa fa-chevron-up"></i></a>
    </div>

  </div>
    <div class="gdl hide-on-med-and-up center" style=" position: relative; opacity: 1;top:-10%">
      <a class="page-scroll btn-floating btn-large white waves-effect shadow-circle hvr-grow" style="position:relative;z-index:10;" href="#body"><i style="color:black;position:relative;top:-1%" class="fa fa-chevron-up"></i></a>
    </div>
</section>
</div>

  <!-- submissions -->




  
  <footer class="page-footer black hide-on-small-only" id="foot" style="position:relative;z-index:1;width:100%;height:20%;">
          <div class="container black" style="position:relative;">
              <div class="row black">
                <div class="col l2 m4 s12">

                <a href="http://ieee.org" target="blank" ><img class="responsive-img" src="ieeelogowithtagline.png" style="width:150px;position:relative;right:0%;"></a>
                
                  </div>
                  <div class="col l9 m4 s9 center">

                  <p style="color:white;text-align:center;">Copyright © PICT IEEE Student Branch, 2015</p>
            
                 <a class="btn-floating hvr-wobble-horizontal waves-effect white   " style="margin-right:10px;" href="https://www.facebook.com/pages/XOdia/621906491246926" target="_blank"><i class=" fa fa-facebook" style="font-size:150%;color:black; "></i></a>
                  <a class=" btn-floating hvr-wobble-horizontal waves-effect white " style="margin-right:10px;" href="http://www.instagram.com/pisbcredenz" target="_blank"><i class=" fa fa-instagram" style="font-size:150%;color:black; "></i></a>
                  <a class=" btn-floating hvr-wobble-horizontal waves-effect white " style="margin-right:10px;" href="http://www.twitter.com/xodia_" target="_blank"><i class=" fa fa-twitter" style="font-size:150%;color:black; "></i></a>
                </div>              

              </div>
            </div>
  </footer>
  <footer class="page-footer black hide-on-med-and-up" id="foot" style="position:relative;z-index:1;width:100%;height:35%;">
          <div class="container black" style="position:relative;">
              <div class="row black center">
                <div class="col l2 m4 s12">

                <a href="http://ieee.org" target="blank" ><img class="responsive-img" src="ieeelogowithtagline.png" style="width:150px;position:relative;right:0%;"></a>
                
                  </div>
                  <div class="col l9 m4 s12 center">

                  <p style="color:white;text-align:center;">Copyright © PICT IEEE Student Branch, 2015</p>
            
                 <a class="btn-floating hvr-wobble-horizontal waves-effect white   " style="margin-right:10px;" href="https://www.facebook.com/pages/XOdia/621906491246926" target="_blank"><i class=" fa fa-facebook" style="font-size:150%;color:black; "></i></a>
                  <a class=" btn-floating hvr-wobble-horizontal waves-effect white " style="margin-right:10px;" href="http://www.instagram.com/pisbcredenz" target="_blank"><i class=" fa fa-instagram" style="font-size:150%;color:black; "></i></a>
                  <a class=" btn-floating hvr-wobble-horizontal waves-effect white " style="margin-right:10px;" href="http://www.twitter.com/xodia_" target="_blank"><i class=" fa fa-twitter" style="font-size:150%;color:black; "></i></a>
                </div>              

              </div>
            </div>
  </footer>


  <script type="text/javascript">
$(document).ready(function() {
  $("#xologo").delay(1000).css({
    opacity : 0,
    display : 'block' // or whatever
}).animate({
    top:'0px',
    opacity   : 1
}, 2500);

$("#grow").delay(1000).css({
    opacity : 0,
    display : 'block' // or whatever
}).animate({
    top:'0px',
    opacity   : 1
}, 2500);

 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
    }
  );
});

 $('.sidenavitem').mouseenter(function() {
                $(this).animate({
                    left: "0px"
                });
            }).mouseleave(function() {
                $(this).animate({
                    left: "-120px"
                });
            });
            $('.sidenav > a').click(function() {
                $('.sidenav > a').removeClass('active');
                $(this).addClass("active");
            });
            $('.sidebar-item').click(function() {
                $('.sidebar-item').removeClass('active');
                $(this).addClass("active");
            });

  </script>


  <script type="text/javascript">
    function hideToast(){
    var alert = document.getElementById("toast");
    alert.style.opacity = 0;
     
}
  </script>
  <script src="js/jquery.easing.min.js"></script>
 <script type="text/javascript">
var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
var cw=canvas.width;
var ch=canvas.height;


// tree definitions
var x1 = 500;
var y1 = 300;
var x2 = 600;
var y2 = 350;
// growing definitions
var angle = 0.15 * Math.PI;
var depth = 5;

// save segments for later animation
var branches=[];
for(var i=0;i<=depth;i++){branches.push([]);}
var segments=[];
var segmentIndex=0;

// animation variables
var nextTime=0;
var delay=16*7;

///////////// Do stuff!

// define the tree
defineTree( 1300, 0,1200 , 100, angle, depth );
//defineTree( y2, x2, y1, x1, angle, depth );
defineTree( -25, 600, 75, 500, angle, depth );
// create a combined array of segments to be drawn with animation
for(var i=branches.length-1;i>=0;i--){
  segments=segments.concat(branches[i]);
}

// load leaf images and then start animating
var leaves=new Image();
leaves.onload=function(){
  // animate drawing the tree
  requestAnimationFrame(animate);
}
leaves.src='https://dl.dropboxusercontent.com/u/139992952/multple/leaves.png';



///////////// functions

// function to reiteratively define all segments of a tree
function defineTree( x1, y1, x2, y2, angle, depth ){

  var segment={
    x1:x1,y1:y1,
    x2:x2,y2:y2,
    linewidth:depth,
  };
  branches[depth].push(segment);

  if( depth > 0 ){
    var x = x2 - x1;
    var y = y2 - y1;

    var scale = 0.4 +  0.33;

    x *= scale;
    y *= scale;

    var xLeft = x * Math.cos( -angle ) - y * Math.sin( -angle );
    var yLeft = x * Math.sin( -angle ) + y * Math.cos( -angle );

    var xRight = x * Math.cos( +angle ) - y * Math.sin( +angle );
    var yRight = x * Math.sin( +angle ) + y * Math.cos( +angle );

    xLeft += x2;
    yLeft += y2;

    xRight += x2;
    yRight += y2;

    defineTree( x2, y2, xLeft, yLeft, angle, depth - 1 );
    defineTree( x2, y2, xRight, yRight, angle, depth - 1 );
  }
}

// draw 1 segment of the tree
function drawSegment(segment){
  context.strokeStyle = 'rgb( 255,255,255 )';
  context.lineWidth = segment.linewidth;
  context.beginPath();
  context.moveTo( segment.x1, segment.y1 );
  context.lineTo( segment.x2, segment.y2 );
  context.stroke();
  //
  if(segment.linewidth==0){
    var dx=segment.x2-segment.x1;
    var dy=segment.y2-segment.y1;
    var angle=Math.atan2(dy,dx)+Math.PI/2;
    var i=parseInt(Math.random()*2.99);
    var j=parseInt(Math.random()*1.99);
    context.save();
    context.translate(segment.x2,segment.y2);
    context.rotate(angle);
    context.scale(.25,.25);
   
    context.restore();
  }
}


// animate drawing each segment of the tree
function animate(currentTime){

  // request another loop until all segments have been drawn
  if(segmentIndex<segments.length){
    requestAnimationFrame(animate);
  }

  // delay until nextTime
  if(currentTime<nextTime){return;}

  // set the new nextTime
  nextTime=currentTime+delay;

  // draw the current segment
  drawSegment(segments[segmentIndex]);

  // increment the segmentIndex for next loop
  segmentIndex++;
}

  </script>
  </body>
</html>