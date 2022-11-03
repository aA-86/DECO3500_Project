/* Referenced from https://medium.com/@nerdplusdog/a-how-to-guide-for-modal-boxes-with-javascript-html-and-css-6a49d063987e */
$(document).ready(function($) {
    let $modal_btn_1 = $(".status-modal-btn-1");
    let $modal_btn_2 = $(".status-modal-btn-2");
    let $close_btn = $(".close-btn");
    let $modal_1 = $(".status-modal-1");
    let $modal_2 = $(".status-modal-2");
    //let btn_pos_top = $modal_btn.offset();    
    
    $modal_btn_1.click(function() {
        let $btn_pos = $modal_btn_1.offset();
        $modal_1.css("display", "block");
        $modal_1.css("padding-top", $btn_pos.top);
        //$modal.css("padding-left", "2%");
    });

    $modal_btn_2.click(function() {
        let $btn_pos = $modal_btn_2.offset();
        $modal_2.css("display", "block");
        $modal_2.css("padding-top", $btn_pos.top);
    })

    $close_btn.click(function() {
        $modal_1.css("display", "none");
        $modal_2.css("display","none")
    });

    /* clicking on the icons */
    $(".blue-icon").click(function() {
        let image = $(".blue-icon img")
        let image_src = image.attr("src");

        if (image_src == "./assets/blue-icon-fill-thank.svg") {
            image.attr("src", "./assets/blue-icon-thank.svg");
        } else {
            image.attr("src", "./assets/blue-icon-fill-thank.svg");
            $(".notifications .thank-you-notification .message").text("I appreciate your feedback!");
            $(".notifications .thank-you-notification").css("display", "grid");
        }
    })

    $(".purple-icon").click(function() {
        let image = $(".purple-icon img")
        let image_src = image.attr("src");

        if (image_src == "./assets/purple-icon-fill-thank.svg") {
            image.attr("src", "./assets/purple-icon-thank.svg");
        } else {
            image.attr("src", "./assets/purple-icon-fill-thank.svg");
            $(".notifications .thank-you-notification .message").text("I appreciate your feedback!");
            $(".notifications .thank-you-notification").css("display", "grid");
        }
    })

    $(".jc-icon").click(function() {
        let image = $(".jc-icon img")
        let image_src = image.attr("src");

        if (image_src == "./assets/jc-eye-fill-reminder.svg") {
            image.attr("src", "./assets/jc-eye-reminder.svg");
        } else {
            image.attr("src", "./assets/jc-eye-fill-reminder.svg");
            let $reminder_notification = $(".notifications .thank-you-notification");
            $(".notifications .thank-you-notification .message").text("Sorry to bother! I really need feedback from you :)");
            $(".notifications .thank-you-notification").css("display", "grid");
        }
    })

    $(".km-icon").click(function() {
        let image = $(".km-icon img")
        let image_src = image.attr("src");

        if (image_src == "./assets/km-eye-fill-reminder.svg") {
            image.attr("src", "./assets/km-eye-reminder.svg");
        } else {
            image.attr("src", "./assets/km-eye-fill-reminder.svg");
            $(".notifications .thank-you-notification .message").text("Sorry to bother! I really need feedback from you :)");
            $(".notifications .thank-you-notification").css("display", "grid");
        }
    })
})