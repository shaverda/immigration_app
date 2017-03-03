$(document).ready(function() {

    function getPosts() {
        $.get("/api/surveyList", function(surveyList) {
            console.log(surveyList);
            initializeRows(surveyList);
        });
    }

    function initializeRows(list) {
        for (var i = 0; i < list.length; i++) {
            $('.list').append(`<button type="button" class="btn btn-secondary">${list[i].email}</button>`);
        };
        $('button').click(function() {
            var data = {email: this.textContent}
            data = JSON.stringify(data);
            $.ajax({
                url: "/api/individual_survey",
                type: "POST",
                data: data,
                contentType: "application/json",
                complete: function(data) {
                    console.log("posting complete, returned to front end");
                    var data = JSON.parse(data.responseText);
                    console.log(data);
                    $.post("/show_survey", data);
                }
            });
        })
    };
    getPosts();
});



