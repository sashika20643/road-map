

var data = [{'introduction':'Structured programming is a programming paradigm aimed at improving the clarity, quality, and development time of a computer program by making extensive use of the structured control flow constructs of selection and repetition, block structures, and subroutines. ','title':'Structured programming','link1':'<a href="https://www.youtube.com/watch?v=t0kEwfxhY3w&list=PLYoyKxGqKo6uc4fg19782BWXbjhGe0JjC" target="blank"> sinhala</a>','doc':'<a href="https://www.w3schools.com/c/index.php" target="blank"> Documents </a>','link2':'<a href="https://www.youtube.com/watch?v=Bz4MxDeEM6k" target="blank"> English </a>'}
,{}]


$(document).ready(function() {
    $('.popup-btn').click(function() {

    $('#title').text(data[0].title);
    $('#description').text(data[0].introduction);
    $('#link1').html(data[0].link1);
    $('#doc').html(data[0].doc);
    $('#link2').html(data[0].link2);

      $('.popup-wrap').fadeIn(500);
      $('.popup-box').removeClass('transform-out').addClass('transform-in');
  
  
    });
  
    $('.popup-close').click(function(e) {
      $('.popup-wrap').fadeOut(500);
      $('.popup-box').removeClass('transform-in').addClass('transform-out');
  
  
    });
  });