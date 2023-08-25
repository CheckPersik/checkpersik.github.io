$(function() {

  const WorkSlider =  $('[data-slider="slick"]');

/*Filter
 */
  var filter = $("[data-filter]");

  filter.on("click", function(event) {
    event.preventDefault();
     
    var cat = $(this).data("filter");
    if(cat == 'all'){
      $("[data-cat]").removeClass("hide");
    }else{
      $("[data-cat]").each(function(){

        var workcat = $(this).data("cat");
  
        
  
        if(workcat != cat) {
          $(this).addClass("hide");
        }
        else{
          $(this).removeClass("hide");
        }
      });
    }
    
   
  });
/* Modal */

var modalCall = $("[data-modal]");
var modalClose = $("[data-close]");

modalCall.on("click", function(event) {
  event.preventDefault();
  var $this = $(this);
  var modalId = $this.data("modal");

$(modalId).addClass("show");
$("body").addClass("no-scroll");

setTimeout(function(){
  $(modalId).find(".modal__dialog").css({
    transform: "rotateX(0)"
  });
}, 200);

WorkSlider.slick('setPosition');

});

modalClose.on("click", function(event) {
  event.preventDefault();
  var $this = $(this);
  var modalParent = $this.parents(".modal");

  modalParent.find(".modal__dialog").css({
    transform: "rotateX(90deg)"
  });

  setTimeout(function(){
    modalParent.removeClass("show");
     $("body").removeClass("no-scroll");
   
  }, 200);

});


$(".modal").on("click", function(event) {
  var $this = $(this)
  $this.find(".modal__dialog").css({
    transform: "rotateX(90deg)"
  });

    setTimeout(function(){
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
     
    }, 200);



});

$(".modal__dialog").on("click", function(event) {
 event.stopPropagation();

});

/* SLider : https://kenwheeler.github.io/slick/
 */

WorkSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

  $(".SlickPrev").on("click", function(event){
    event.preventDefault();

    var currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");

  });

  $(".SlickNext").on("click", function(event){
    event.preventDefault();

    var currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");

  });


  /*MOBILE NAV
  ======================================= */

const navToggle= $("#navToggle")
const nav = $("#nav")

  navToggle.on("click", function(event) {
      event.preventDefault();
      nav.toggleClass("show");

  });

});