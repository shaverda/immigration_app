$(document).ready(function() {

    function getPosts() {
        $.get("/api/surveyList", function(surveyList) {
            console.log(surveyList);
            initializeRows(surveyList);
        });
    }

    function initializeRows(list) {
        for (var i = 0; i < list.length; i++) {
            var query_url = "/api/show_survey/" + list[i].email;
            var html = `<tr onclick="document.location = '${query_url}';"><th scope="row">${i+1}</th><td>first name</td><td> last name </td><td>${list[i].email}</td></tr>`
            $('tbody').append(html);
        };

    };
    getPosts();

});