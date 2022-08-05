

var data = {'strcterx':{'introduction':'Structured programming is a programming paradigm aimed at improving the clarity, quality, and development time of a computer program by making extensive use of the structured control flow constructs of selection and repetition, block structures, and subroutines. ','title':'Structured programming','link1':'<a href="https://www.youtube.com/watch?v=t0kEwfxhY3w&list=PLYoyKxGqKo6uc4fg19782BWXbjhGe0JjC" target="blank"> sinhala</a>','doc':'<a href="https://www.w3schools.com/c/index.php" target="blank"> Documents </a>','link2':'<a href="https://www.youtube.com/watch?v=Bz4MxDeEM6k" target="blank"> English </a>'},
'oop':{'introduction':'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.','title':'OOP concepts(Java)',
  'link1':'<a href="https://www.youtube.com/watch?v=T_nclkocrvw&list=PLqeCu_1ZdDl63h6YR3QsxcGOB7yDS7i3b" target="blank"> sinhala</a>','doc':'<a href="https://www.w3schools.com/java/default.asp" target="blank"> Documents </a>','link2':'<a href="https://www.youtube.com/watch?v=yN_rocZNDGo" target="blank"> Project </a>'
  },'sql':{'introduction':'A database is an organized collection of structured information, or data, typically stored electronically in a computer system.','title':'Data base (SQL)','link1':'<a href="https://www.youtube.com/watch?v=ikJh_JzidJE&list=PLqeCu_1ZdDl59nxB6aPN7yiRzty-Kvago" target="blank"> sinhala</a>','doc':'<a href="https://www.w3schools.com/java/default.asp" target="blank"> Documents </a>','link2':'<a href="https://www.youtube.com/watch?v=7S_tz1z_5bA&t=1078s" target="blank"> English</a>',},
  'Git':{'introduction':'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.','title':'Github','link1':'<a href="https://www.youtube.com/watch?v=86Pz2icySuw" target="blank"> sinhala</a>'},
  'fultter':{'introduction':'Flutter is a cross-platform framework for developing apps for iOS and Android platforms as well as for web and desktop applications.  ','title':'Flutter','link1':'<a href="https://www.youtube.com/watch?v=NvrRQwF3VRs&list=PLdRfLcb1Dvix15denuU7KoSdPiy_Xzp24" target="blank"> sinhala</a>','doc':'<a href="https://flutter.dev/?gclid=CjwKCAjwlqOXBhBqEiwA-hhitAG8vrMFAxlSIXShoIdsTNdvs3mMPw3l91LSqhdKrzd77pgwWeTV1hoCDqEQAvD_BwE&gclsrc=aw.ds" target="blank"> Documents </a>',},
  'react':{'introduction':'React Native is a framework developed by Facebook for creating native-style apps for iOS & Android under one common language, JavaScript.','title':'React Native','link1':'<a href="https://www.youtube.com/watch?v=tcJpFxQtjHs&list=PLtoqJbwHBeHyUOcjgjObTFoccQklaUHwW" target="blank"> sinhala</a>','doc':'<a href="https://reactnative.dev/docs/getting-started" target="blank"> Documents </a>','link2':'<a href="https://www.youtube.com/watch?v=ANdSdIlgsEw&list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ" target="blank"> English</a>',},
  'android_studio':{'introduction':'Android Studio is an IDE for Google Android Development.Android Studio contains all the Android tools to design, test, debug, and profile your application. The Android Studio uses Gradle to manage your project, a Build Automation Tool.','title':'Android Studio','link1':'<a href="https://www.youtube.com/watch?v=MJ9ddtyP4_Y&list=PLdRfLcb1DviyM-TUDiITQwnqJsGTGZRbH" target="blank"> sinhala</a>','doc':'<a href="https://developer.android.com/docs" target="blank"> Documents </a>'},
  'html':{'introduction':'Html(the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices. Along with graphics and scripting, HTML and CSS are the basis of building Web pages and Web Applications.','title':'HTML & CSS','link1':'<a href="https://drive.google.com/drive/folders/1YX-BPGL4u3iYpzFpaf5ranLlgmAa3oFf?usp=sharing" target="blank"> sinhala</a>','doc':'Docs :<a href="Html https://www.w3schools.com/html/default.asp" target="blank"> Html </a> / <a href="Css https://www.w3schools.com/css/default.asp" target="blank"> Css </a> ',},
  'boostrap':{'introduction':'Bootstrap is an open-source and free CSS framework, which helps in directing a responsive device-friendly mobile-first front-end web page development tool. Bootstrap includes the CSS (Cascading Style Sheets), and an optional JavaScript supported design template (plug-ins).','title':'Bootstrap','link1':'<a href="https://www.youtube.com/watch?v=m3PQYfyCfzs&list=PLdRfLcb1DviwZ0lWHrtjK8a67E2ZUy8tg" target="blank"> sinhala</a>','doc':'<a href="https://getbootstrap.com/docs/5.2/getting-started/" target="blank"> Documents </a>',},
  'JS':{'introduction':'JavaScript, also known as the scripting language for websites, is a lightweight, cross-platform, interpreted compiled programming language. It is well-known for web page development, but it is also used in many non-browser environments.','title':'Java Script','link1':'<a href="https://www.youtube.com/watch?v=fsE55CPE4Tk&list=PLq2EMZ95WwVIpqjEFyvxfuRuJ7xWIDiL_" target="blank"> sinhala</a>','doc':'<a href="https://www.w3schools.com/js/" target="blank"> Documents </a>',}


}


$(document).ready(function() {
    $('.popup-btn').click(function() {
var id=this.id;
    $('#title').text(data[id].title);
    $('#description').text(data[id].introduction);
   
    $('#link1').html(data[id].link1);
    if(data[id].doc){
      $('#doc').show();
      $('#doc').html(data[id].doc);

    }
    else{
      $('#doc').hide();
    }
    if(data[id].link2){
      $('#link2').show();
    $('#link2').html(data[id].link2);}
    else{
      $('#link2').hide();
    }

      $('.popup-wrap').fadeIn(500);
      $('.popup-box').removeClass('transform-out').addClass('transform-in');
      //  alert(this.id);
  
    });
  
    $('.popup-close').click(function(e) {
      $('.popup-wrap').fadeOut(500);
      $('.popup-box').removeClass('transform-in').addClass('transform-out');
  
  
    });
  });