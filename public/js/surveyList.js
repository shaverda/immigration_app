$(document).ready(function() { //could never get async code to work, fail

    function getPosts() {
        $.get("/api/surveyList", function(surveyList) {
            console.log(surveyList);
            initializeRows(surveyList);
        });
    }

    function initializeRows(list) {
        for (var i = 0; i < list.length; i++) {
            var query_url = "/api/show_survey?email=" + list[i].email;
            var html = `<tr onclick="document.location = '${query_url}';"><th scope="row">${i+1}</th><td class="table-links" id="table-first-name">first name</td><td class="table-links" id="table-last-name"> last name </td><td class="table-links email-holder">${list[i].email}</td></tr>`
            $('tbody').append(html);
        };
        $("tr .email-holder").each(function(email) {
            var emailText = $(this).text();
            $.get("/api/individual_survey/" + emailText, (data) => {
                console.log(data);
                $("#table-first-name").text(data.first_name);
                $("#table-last-name").text(data.last_name);
            })
        })
    };
    getPosts();
})


// $(document).ready(function() {
//     domMethods.initializeRows((crud.get("/api/surveyList")), domMethods.emailText);
// });

// var thing;
// var crud = {
//     get: function(url) {
//         $.get(url, function(data) {
//             console.log(data);
//             console.log(typeof(data));
//             thing = data;
//             return data;
//         })
//     }
// }

// var domMethods = {
//     initializeRows: function(list, callback) {
//         for (var i = 0; i < list.length; i++) {
//             var query_url = "/api/show_survey?email=" + list[i].email;
//             var html = `<tr onclick="document.location = '${query_url}';"><th scope="row">${i+1}</th><td class="table-links">first name</td><td class="table-links"> last name </td><td class="table-links email-holder">${list[i].email}</td></tr>`
//             $.when($('tbody').append(html)).done(function() {
//                 callback();
//             })
//         };
//     },
//     emailText: function() {
//         $.each($("tr .email-holder"), function(email) {
//             var emailText = $(this).text();
//             var url = "/api/individual_survey/" + emailText;
//             crud.get(url);
//         });
//     }
// }




