<template>
  <div class="about">
  <section id="ABOUT">
  <div class="about-1">
      <h1> ABOUT US </h1>
      <p>Welcome to our e-library website, where you can access a vast collection of digital books and resources from anywhere in the world. Our mission is to provide affordable and convenient access to educational and recreational materials, empowering individuals to learn, grow, and explore new worlds.</p>
  </div>
  <div id="about-2 ">
  <div class="content-box-lg d-flex justify-content-center">
      <div class="container">
          <div class="row">
              <div class="col-md-4">
                 <div class="about-item text-center">
                  <i class="fa fa-book"></i>
                  <h3>MISSION</h3>
                  <hr>
                  <p> Our mission is to create a virtual library that caters to a diverse range of readers, including students, researchers, educators, and avid readers. We aim to make knowledge and information accessible to everyone by providing a user-friendly platform that is easily accessible on any device. </p>
                  </div>
              </div>
              <div class="col-md-4">
                 <div class="about-item text-center">
                  <i class="fa fa-globe"></i>
                  <h3>VISSION</h3>
                  <hr>
                  <p>Our vision is to be the leading online library that offers a comprehensive range of digital resources that cater to the diverse learning needs of our users. We want to inspire a love of reading and lifelong learning by making the process of obtaining knowledge more accessible and affordable. </p>
                  </div>
              </div>
              <div class="col-md-4">
                 <div class="about-item text-center">
                  <i class="fa fa-pencil"></i>
                  <h3>ACHIEVEMENTS</h3>
                  <hr>
                  <p>Since our launch, we have been able to achieve several notable accomplishments. Some of our achievements:
                      Providing a platform that offers access to over 100,000 digital books, journals, and articles from leading authors worldwide.
                      Offering a user-friendly platform with advanced search features that allow users to find the information.
                   </p>
                  </div>
               </div>
           </div>
         </div>
      </div>
   </div>   
</section>
</div>
 
<!--our footer -->

<footer class="text-center">
 <p>Copyright &copy; E-Library</p>
</footer>
</template>

<script>
export default{
  name:"about"
}
</script>

<style scoped>
*{
 padding: 0;
 margin: 0;
}
body{
 background-color: dimgray;
}

/*=======================
adding style to about-1 
=======================*/

.about-1{
 margin: 30px;
 padding: 5px;
}
.about-1 h1{
 text-align: center;
 color: black;
 font-weight: bold;
}
.about-1 p{
 text-align: center;
 padding: 5px;
 color: black;
 font-size: 2rem;
 margin-top: 20px;
}

.about-item{
 margin-bottom: 20px;
 margin-top: 20px;
 background-color: white;
 padding: 80px 30px;
 box-shadow: 0 0 9px rgba(0,0,0.6);
}

.about-item i{
 font-size: 4rem;
 margin: 0;
}

.about-item h3{
 font-size: 3rem;
 margin-bottom: 10px;
}
.about-item p{
 font-size: 1.5rem;
 margin-top: 20px;
}

.about-item hr{
 width: 46px;
 height: 3px;
 background-color: rgb(154, 145, 138);
 margin: 0 auto;
 border: none;
 text-align: center;
}

.about-item:hover{
  background-color: rgb(208, 195, 186);
}
.about-item:hover i,
.about-item:hover h3,
.about-item:hover p{
 color: #fff;
}
.about-item:hover hr{
 background-color: #fff;
}

.about-item:hover i{
 transform: translateY(-20px);
}
.about-item:hover i,
.about-item:hover h3,
.about-item:hover hr{
 transition: all 400ms ease-in-out;
}

footer{
 background: #212226;
 padding: 20px;
}
footer p{
 color: #fff;
}

</style>