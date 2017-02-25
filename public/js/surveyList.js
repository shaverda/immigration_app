function getPosts() {
  $.get("/api/survey", function(data) {
    console.log("Survey", data);
    survey = data;
  });
}