$(document).ready(function ($) {
    let $submit_btn = $(".custom-thank-you-message .button-submit button");
    $submit_btn.click(function() {
        $(".sent-overlay").css("display", "inline");
        $(".custom-thank-you-message").css("display", "none");
    })
    /*
    $submit_btn.click(function() {
        // create a copy of provide feedback modal.
        $copy = $(".provide-feedback").clone().appendTo(".notifications");
        $copy.css("top", "800px")
        
        let $textarea_val = $(".custom-thank-you-message textarea").val();
        $copy.find(".message").text($textarea_val);
        $copy.find(".button-later").text("customise");

        // save the image
        let $img = $copy.find(".profile-image img");
        let $header = $copy.find(".profile-image");

        $header.text("Send to ");
        $header.append($img);
        $header.css("gap", "10px")
    })
    */
   let $thank_you_customise_btn = $(".notifications .thank-you-notification .button-customise");
   $thank_you_customise_btn.click(function() {
        $(".custom-thank-you-message").css("display", "grid");
        $(".thank-you-notification").css("display", "none");
   })

   let $thank_you_send_btn = $(".notifications .thank-you-notification .button-send");
   $thank_you_send_btn.click(function() {
        $(".thank-you-notification").css("display", "none");
        $(".sent-overlay").css("display", "inline");

        /* reset text area */
        $(".custom-thank-you-message textarea").val("");
   })

   let $custom_send_btn = $(".notifications .custom-thank-you-message .button-submit");
   $custom_send_btn.click(function() {
        /* reset text area */
        $(".custom-thank-you-message textarea").val("");
   })

   $(document).on("keypress", function(e) {
        if (e.which == 49) { // if 1 is pressed
            $(".notifications .check-feedback").css("display", "grid");
        } else if (e.which == 50) { // if 2 is pressed
            $(".notifications .receive-message").css("display", "block");
        } else if(e.which == 51) { // if 3 is pressed
            let $request_provide_feedback = $(".notifications .provide-feedback");
            $request_provide_feedback.find(".message").text("I appreciate your feedback!");
            $request_provide_feedback.css("display", "grid");
        } else if (e.which == 52) { // 4 is pressed
            let $request_provide_feedback = $(".notifications .provide-feedback");
            $request_provide_feedback.find(".message").text("Sorry to bother! I really need feedback from you :)");
            $request_provide_feedback.css("display", "grid");
        } else if (e.which == 53 ) { // 5 is pressed
          $(".feedback-complete-modal").css("display", "block");
        } 
   }) 

   /* receive message button cross */
   let $receive_btn_cross = $(".notifications .receive-message .button-cross");
   $receive_btn_cross.click(function() {
        $(".notifications .receive-message").css("display", "none");
   })

   /* close provide feedback */
   let $pf_later_btn = $(".notifications .provide-feedback .button-later");
   $pf_later_btn.click(function() {
        $(".notifications .provide-feedback").css("display", "none");
   })

   /* close check-feedback */
   let $cf_later_btn = $(".notifications .check-feedback .button-later");
   $cf_later_btn.click(function() {
        $(".notifications .check-feedback").css("display", "none");
   })

   /* close button for feedback complete */
   let $fbc_cross_btn = $(".feedback-complete-modal .header .button-cross");
   $fbc_cross_btn.click(function() {
     $(".feedback-complete-modal").css("display", "none");
   })
})