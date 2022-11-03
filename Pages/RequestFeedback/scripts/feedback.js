$(document).ready(function ($) {
    let $request_btn = $(".button-request");
    let $close_btn = $(".close-btn");
    let $minimise_btn = $(".minimise-btn");
    let $modal = $(".request-modal");
    let $framework_btn = $(".framework button:not(.button-image)");
    let $infographic = $(".rule-30-60-90")
    let $infographic_cross = $(".rule-30-60-90 .button-cross");
    let $question_btn = $(".framework .button-image");
    let $text_area = $("textarea");
 
    
    //let btn_pos_top = $modal_btn.offset();    

    /* text area */
    $text_area.click(function() {
        $text_area.css("background-color", "rgba(85,112,241,0.15)");
    })

    $text_area.on("keypress", function(e) {
        // 13 is Enter
        if(e.which == 13) {
            $text_area.css("background-color", "rgba(85,112,241,0)");
        }
    })

    $request_btn.click(function () {
        $modal.css("display", "block");
        $text_area.css("background-color", "rgba(85,112,241,0.15)");
        //$modal.css("padding-left", "2%");
    });

    $minimise_btn.click(function () {
        $modal.css("display", "none");
    });

    $close_btn.click(function () {
        /* reset text area */
        $(".request-modal textarea").val("");

        /* reset the priority */
        markup = "<option hidden selected>Select</option> \
        <option id='low' value='1'>low</option> \
        <option id='medium' value='2'>medium</option> \
        <option id='high' value='3'>high</option>";

        let $priority = $(".request-modal #priority");
        $priority.text("");
        $priority.append(markup);
        $priority.css("background-color", "rgba(82, 112, 241, 0.2)");
        $priority.css("color", "#1B2559");

        /* comment this out for testing */
        $modal.css("display", "none");

        /* get rid of the images and add back text*/
        $(".drop-zone .drop-zone__thumb").remove();
        if ($(".drop-zone__prompt").length == 0) {
            promptElement = document.createElement("span");
            promptElement.classList.add("drop-zone__prompt");
            let $promptElement = $(promptElement);
            $promptElement.text("Drop file here or click to upload");
            let $drop_zone = $(".drop-zone");
            $drop_zone.append($promptElement);
            // Get the alignment back.
            $drop_zone.css("align-items", "center")
            $drop_zone.css("justify-content", "center")
            $drop_zone.css("text-align", "center")
        } 
    })

    /* framework select */
    $framework_btn.click(function() {
        let $this = $(this);

        // reset all the colours to default 
        $framework_btn.css("background-color", "#fff");
        $framework_btn.css("color", "#5570F1");

        $this.css("background-color", "#5570F1")
        $this.css("color", "#fff")
    })

    $question_btn.click(function() {
        $infographic.css("display", "block");
        $infographic_cross.css("display", "block");
    })

    $infographic_cross.click(function() {
        $infographic.css("display", "none");
        $infographic_cross.css("display", "none");
    })

    /* clicking the options in priority */
    let $select = $("#priority");
    
    $select.change(function() {
        opt_val = $(this).children("option:selected").val();
        if (opt_val == 1) {
            $select.css("background-color", "#68AAF8")
            $select.css("color", "#fff")
        } else if (opt_val == 2) {
            $select.css("background-color", "#F9A144")
            $select.css("color", "#fff")
        } else {
            $select.css("background-color", "#E37676")
            $select.css("color", "#fff")
        }
    })

    let $assignee_select = $(".request-modal .assignee .button-select");
    let $hidden_option = $(".request-modal .assignee-modal");
    $assignee_select.click(function() {
        if ($hidden_option.css("display") == "none") {
            $hidden_option.css("display", "block");
        } else {
            $hidden_option.css("display", "none");
        }
    })

    let $hidden_options = $(".request-modal .assignee-modal div button");
    let $overlay_img = $(".request-modal .overlay img");
    let $overlay = $(".request-modal .overlay");
    $hidden_options.click(function() {

        let $data = $(this).data("assignee");

        if ($data == "option 1") {
            $overlay_img.css("display", "inline-flex");
            $overlay_img.attr("src", "./assets/group-profile-icons.svg");
        } else {
            $overlay_img.css("display", "inline-flex");
            $overlay_img.attr("src", "./assets/large-group-profile.svg");
        }
        
        $overlay.css("top", "115px");
        $assignee_select.css("display", "none");
        $hidden_options.css("display", "none");
    })

    $overlay.click(function() {
        $assignee_select.css("display", "inline-flex");
        $hidden_options.css("display", "inline-flex");
        $overlay_img.attr("src", "");
    })
})