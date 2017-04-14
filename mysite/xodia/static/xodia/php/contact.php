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
             echo "<label >You already have registered</label>";      
          }
          else
          {

            if(mail($mailid,"XOdia - registration",$msg))
              {
                $sql = "INSERT INTO xodia_newsletter VALUES(:mail)";
                $stmt = $con->prepare($sql); 
                $stmt->bindValue( "mail", $mailid, PDO::PARAM_STR );              
                $stmt->execute();

                echo "<label >You have been registered successfully</label>";      
              }    
          }
        
          }
      }

      catch (PDOException $e)
        {
          echo "Registration Failed.Please try again later,Sorry for the inconvinience";
        }     
    

    ?>