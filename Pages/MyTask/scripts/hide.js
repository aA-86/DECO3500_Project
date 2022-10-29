/* set all hidden tables to hidden at the beginning */
$(document).ready(function() {
  $(".hidden-row td").css("padding", "0px");
  $(".hidden-content-table").toggle();
});

function toggle_hidden_content(image_element_id) {
  /**
   * Summary: Toggles hidden content based on the image id.
   * 
   * @param {Object} image_element_id : JQuery object representing the id of the image. 
   */
  // Gets the padding of the hiddren row.
   let css_style = $("#hidden-row-1 td").css("padding")[0];

   switch (image_element_id) {
    case "image-hidden-content-1":
      if (css_style == 1) {
        $("#hidden-row-1 td").css("padding", "0px");
      } else {
        $("#hidden-row-1 td").css("padding", "15px 1px 1px 6px");
      }
      $("#hidden-content-1").toggle();
      break;
   }
  
}

$(document).ready(function ($) {
  $(".drop-down-arrow").click(function() {
    $this = $(this);
    let image_src = $this.find("img").attr("src");

    if (image_src == "./assets/down-drop-down.svg") {
      $this.find("img").attr("src", "./assets/up-drop-down.svg");
      
    } else {
      $this.find("img").attr("src", "./assets/down-drop-down.svg");
    }

    let image_element_id = $this.find("img").attr("id");
    toggle_hidden_content(image_element_id)
  })
})



 
    
   