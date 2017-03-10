$(document).ready(function() {

    function getPosts() {
        $.get("/api/surveyList", function(surveyList) {
            console.log(surveyList);
            initializeRows(surveyList);
        });
    }

    function initializeRows(list) {
        for (var i = 0; i < list.length; i++) {
            var query_url = "/api/show_survey?email=" + list[i].email;
            var html = `<tr onclick="document.location = '${query_url}';"><th scope="row">${i+1}</th><td class="table-links">first name</td><td class="table-links"> last name </td><td class="table-links">${list[i].email}</td></tr>`
            $('tbody').append(html);
        };
    };
    getPosts();

});