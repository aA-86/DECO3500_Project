$(document).ready(function ($) {
    let $task_btn = $("#task-button");
    let $task_modal = $(".task-modal");
    
    $task_btn.click(function() {
        $task_modal.css("display", "grid");
    })

    /* calendar for button-due-date*/
    let $button_id_due_date = $("#button-due-date");
    $button_id_due_date.click(function() {
        $(this).data("label", "active");
        $calendar = $(".calendar");
        $calendar.css("display", "block");
        $calendar.css("top", "25%");
        $calendar.css("left", "50%");

        /* this resets the modal to default values */
        let $img = $button_id_due_date.find("img");
        $img.css("display", "inline");
        $button_id_due_date.text("");
        $button_id_due_date.append($img);
        $button_id_due_date.append("Add due date");
        $button_id_due_date.css("gap", "5px");
    })

    /* calendar number */
    let $calendar_num = $(".calendar__number");
    $calendar_num.click(function() {
        // Change previous current to nothing.
        $current = $(".calendar__number[data-current-date = 'current']");
        $current.attr("data-current-date", "");

        // Make selected date current.
        let $calendar_date = $(".calendar .calendar__header .date");
        $this = $(this);
        $this.attr("data-current-date", "current")
        $calendar_date.text($this.text() + ", " + $this.data("day"))
        
        // Checks which one is active
        let $active_button = "";
        $active_button = $button_id_due_date;
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
        $button_id_due_date.data("label", "")
    })


    let $minimise_btn = $(".task-modal .button-minus");
    $minimise_btn.click(function() {
        $task_modal.css("display", "none");
    })

    let $cross_btn = $(".task-modal .button-cross");
    $cross_btn.click(function() {
        $(".task-modal textarea").val("");
        $task_modal.css("display", "none");
    })

    let $assignees_btn = $(".task-modal .button-project");
    $assignees_btn.click(function() {
        $(".task-modal .project-modal").css("display", "block");
        $(this).find("span img").css("transform", "rotate(180deg)");
    })

    let $assignees_options = $(".task-modal .project-modal div")
    $assignees_options.click(function() {
        $this = $(this).clone();
        
        // Clear everything in the assignees_btn then append.
        $assignees_btn.text('');
        $assignees_btn.append($this);
        
        // Append the assignee image to the button.
        //$assignees_btn.text($this);
        $(".task-modal .project-modal").css("display", "none");
        $assignees_btn.find("img").css("transform", "rotate(360deg)");
    })

    let $priority_btn = $(".task-modal .button-priority");
    $priority_btn.click(function() {
        $(".task-modal .priority-modal").css("display", "block");
        $(this).find("img").css("transform", "rotate(180deg)");
    })

    let $priority_options = $(".task-modal .priority-modal div")
    $priority_options.click(function() {
        $this = $(this);

        $priority_btn.text($this.text())
        $(".task-modal .priority-modal").css("display", "none");
        $priority_btn.find("img").css("transform", "rotate(360deg)");
    })

    let $done_btn = $(".task-modal .button-done");
    $done_btn.click(function() {
        $task_modal.css("display", "none");

        let $name_val = $(".task-modal .content textarea").val();
        let $due_date_val = $(".task-modal .content #button-due-date").data("content");
        let $priority_val = $(".task-modal .content .button-priority").text();
        let $assignees_val = $(".task-modal .content .button-project img").attr('src');

        if ($name_val == '') {
            $name_val = 'Task 1'
        }

        if ($due_date_val == '') {
            $due_date_val = 'NO DUE DATE SPECIFIED';
        }
        
        let priority_width = ''
        if ($(".task-modal .content .button-priority").find('span:not("img")').text() == 'PRIORITY') {
            $priority_val = 'NO PRIORITY SELECTED';
        } else if ($priority_val == 'low') {
            $priority_val = '<img class = "priority-status" src = "./assets/low-button.svg" />';
        } else if ($priority_val == 'medium') {
            $priority_val = '<img class = "priority-status" src = "./assets/medium-priority.svg" />';
        } else if ($priority_val == 'high') {
            $priority_val = '<img class = "priority-status high-status"src = "./assets/high-priority.svg" />';
        }

        if ($assignees_val == './assets/down-arrow-blue.svg') {
            $assignees_val = 'NO ASSIGNEES SELECTED'
        } else if ($assignees_val == './assets/icon-ns.svg') {
            $assignees_val = '<img class="icon-ns" src = "' + $assignees_val + '" />'
        } else {
            $assignees_val = '<img src = "' + $assignees_val + '" />'
        }

        markup = "<tr>\
        <td>" + $name_val + "</td> \
        <td>" + $priority_val + "</td> \
        <td>" + $due_date_val + "</td> \
        <td>" + $assignees_val + "</td> \
        </tr>"
        $(".task-manager > table").append(markup);
        $('.priority-status').css('width', '80px');
        $('.high-status').css('width', '60px');
        $('.icon-ns').css('width', '40px');
    })
})