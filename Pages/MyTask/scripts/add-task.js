$(document).ready(function ($) {
    let $task_modal = $(".task-modal");
    
    let $task_btn = $("#task-button");
    $task_btn.click(function() {
        $task_modal.css("display", "grid");
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

    let $project_btn = $(".task-modal .button-project");
    $project_btn.click(function() {
        $(".task-modal .project-modal").css("display", "block");
        $(this).find("img").css("transform", "rotate(180deg)");
    })

    let $project_options = $(".task-modal .project-modal div")
    $project_options.click(function() {
        $this = $(this);

        $project_btn.text($this.text())
        $(".task-modal .project-modal").css("display", "none");
        $project_btn.find("img").css("transform", "rotate(360deg)");
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
        let $due_date_val = $(".task-modal .content .button-due-date").data("content");
        let $project_num = $(".task-modal .content .button-project").text();
        let $priority_val = $(".task-modal .content .button-priority").text();

        markup = "<tr>\
        <td>" + $name_val + "</td> \
        <td>" + $project_num + "</td> \
        <td> <img src='./assets/in-progress-status.svg' /> </td> \
        <td>" + $priority_val + "</td> \
        <td>" + $due_date_val + "</td> \
        <td> <img src='./assets/request-button.svg' /> </td> \
        </tr>"
        
        $(".task-manager .non-hidden").append(markup)
    })
})