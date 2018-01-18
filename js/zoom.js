jQuery(document).ready(function($) {

  function zoomIn(){
      var Page = document.getElementById('Body');
      var zoom = parseInt(Page.style.zoom) + 10 +'%'
      Page.style.zoom = zoom;
      return false;
  }

  function zoomOut(){
      var Page = document.getElementById('Body');
      var zoom = parseInt(Page.style.zoom) - 10 +'%'
      Page.style.zoom = zoom;
      return false;
  }

  $('#zoom-in-but').click(zoomIn);
  $('#zoom-out-but').click(zoomOut);
});
