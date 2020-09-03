$(document).ready(function(){


    $("#head").slideDown(4000); //logo amimate
    
    $("#b1").click(function(){
    
      $("#popup1").show(1000);


    })
    $("#close").click(function(){
    
    $("#popup1").hide(1000);


  })


  
 
  
  $(window).scroll(function(){
    
  var x= $(document).scrollTop();
   console.log(x);

   if((x>300) && (x<600))
   {
    $('#p1').fadeIn(3000);
    $("#head2").animate({fontSize:"50px"},1000);
    $("#head2").animate({left:"-580px"},1000);
  

 
  
   }

   if((x>860) && (x<1055))

   {
    
    $("#head3").animate({fontSize:"25px"},1000);
    $("#head3").animate({left:"-580px"},1000);
    $(".part").animate({left:"532px"},1000);
    $(".part2").fadeIn(2000);
    $(".part3").animate({left:"-284px"},1000);
    $(".part4").animate({left:"330px"},1000);

   }



   if((x>1055) && (x<1500))
   
   {
    
   
    $(".part5").animate({top:"-355px"},1000);
    $(".part6").animate({top:"-123px"},1000);
    $(".part7").animate({left:"-284px"},1000);
    $(".part8").animate({left:"-80px"},1000);
    $(".part9").animate({left:"138px"},1000);

   }

   


   if((x>1355) && (x<2100))
   
   {
    
   
  
    $("#casting").animate({fontSize:"50px"},1000);
    $("#casting").animate({left:"-550px"},500);

    $("#cullom1").animate({left:"150px"},100);
    $("#cullom2").animate({top:"-400px"},100);
    $("#cullom3").animate({left:"-70px"},100);
 
    

   }
   
   if((x>2100) && (x<2200))
   
   {
    
   
  
   

    $("#textbuy").animate({top:"-60px"},1000);
    $("#h1pro").animate({left:"-540px"},1000);
    
   
    

   }
   if((x>2201) && (x<2300))
   
   {
    
   
  
   

    $("#team").animate({left:"-500px"},1000);
    
    
    
   
    

   }
   if((x>2217) && (x<2537))
   
   {
    
   
  
   

    $("#team1").show(3000);
    $("#team2").show(3000);
    $("#team3").show(3000);
    
    
    
   
    

   }

   if((x>2537) && (x<2800))
   
   {
    
   
  
   

    $("#team4").show(3000);
    $("#team5").show(3000);
  
    
    
    
   
    

   }

   if((x>3160) && (x<3230))
   
   {
    
   
  
   

    $("#Primiumh").slideDown(2000);
    $("#Primiumw").animate({top:"-200px"},1000);
    
    
    
    
   
    

   }
   if((x>3283) && (x<3300))
   
   {
    $("#Primiumw2").animate({top:"-300px"},1000);      
   }
   if((x>3400) && (x<3450))
   
   {
    $("#Primiumw3").animate({top:"-400px"},1000);      
   }
   if((x>3520) && (x<3600))
   
   {
    $("#Primiumw4").animate({top:"-500px"},1000);      
   }
   if((x>3650) && (x<3700))
   
   {
    $("#Primiumw5").animate({top:"-600px"},1000);      
   }
   if((x>3624) && (x<3837))
   {
    $("#primeump").animate({left:"300px"},1000);      
   }
  
   if((x>3920) && (x<4550))
   {
$("#sbi,#ubi,#mi,#facebook,#linkedin,#apple,#hp,#twitter,#instagram,#amazon,#paytm,#microsoft,#nokia,#moto,#zoho,#realme,#hp").slideDown(2000);

   }
   if((x>4600) && (x<4837))
   {
    $("#sub").animate({left:"400px"},1000); 
    $("#subp").animate({top:"-300px"},1000); 
    $("#subscribe_form").animate({top:"-300px"},1000); 
   
         
   }


   
  })
   

  })