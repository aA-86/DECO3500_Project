$(document).ready(function ($) {
    
    /* calendar for button-due-date-2*/
    let $button_id_due_date = $("#button-due-date-2");
    $button_id_due_date.click(function() {
        $calendar = $(".calendar");
        $calendar.css("display", "block");
        $calendar.css("top", "25%");
        $calendar.css("left", "50%");

        let $img = $button_id_due_date.find("img");
        $img.css("display", "inline");
        $button_id_due_date.text("");
        $button_id_due_date.append($img);
        $button_id_due_date.append("Add due date");
        $button_id_due_date.css("gap", "5px");
    })

    let $submit_request_btn = $(".request-modal .footer .button-submit-request");

    let $modal = $(".request-modal");
    $submit_request_btn.click(function() {
        $modal.css("display", "none");
        $(".sent-overlay").css("display", "inline");

        /* resets everything, does the same thing as the cross button does */
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

    let $sent_overlay_cross = $(".sent-overlay .button-times") 
    $sent_overlay_cross.click(function() {
        $(".sent-overlay").css("display", "none");
    })

     /* calendar for button-due-date-1*/
    let $button_due_date = $("#button-due-date-1");
    $button_due_date.click(function() {
        $(this).data("label", "active");
        $calendar = $(".calendar");
        $calendar.css("display", "block");
        $calendar.css("top", "20%");
        $calendar.css("left", "50%");

        let $img = $button_due_date.find("img");
        $img.css("display", "inline");
        $button_due_date.text("");
        $button_due_date.append($img);
        $button_due_date.append("Add due date");
        $button_due_date.css("gap", "5px");
    })

    /* calendar number handles both 1 and 2 */

    let $calendar_num = $(".calendar__number");
    $calendar_num.click(function() {
        // Change previous current to nothing.
        $current = $(".calendar__number[data-current-date= 'current']");
        $current.attr("data-current-date", "");

        // Make selected date current.
        let $calendar_date = $(".calendar .calendar__header .date");
        $this = $(this);
        $this.attr("data-current-date", "current")
        $calendar_date.text($this.text() + ", " + $this.data("day"))


        // Checks which one is active
        let $active_button = "";
        if ($button_due_date.data("label") == "active") {
            $active_button = $button_due_date;
        } else {
            $active_button = $button_id_due_date;
        }
        // save the span.
        let $img = $active_button.find("img");
        $img.css("display", "none")

        $active_button.text("") 
        $active_button.append($img)
        $active_button.append($this.text() + " " + $this.data("day") + " 2022");
        $active_button.css("font-size", "16px");

        $due_date_alt = $this.text() + " Oct 2022";
        $active_button.data("content", $due_date_alt);

        // Hide the calendar
        $(".calendar").css("display", "none");
        $button_due_date.data("label", "")
        $button_id_due_date.data("label", "")
    })
})