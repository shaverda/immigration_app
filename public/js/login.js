var AUTH0_CLIENT_ID = 'aYQBFES351HrymxuMCJ0vAnog1mDxA0h';
var AUTH0_DOMAIN = 'shaverda.auth0.com';
var AUTH0_CALLBACK_URL = location.href;

window.addEventListener('load', function() {
    var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);

    // // { for if i decide to go with additional sign up fields rather than doing all thru google too!
    //   additionalSignUpFields: [{
    //     name: "user_type",
    //     placeholder: "Enter lawyer or user",
    //     validator: (value) =>  {
    //       return (value.toLowerCase() === "lawyer" || value.toLowerCase() === "user");
    //     }
    //   }]
    // }

    document.getElementById('btn-login').addEventListener('click', function() {
        lock.show();
    });

    document.getElementById('btn-logout').addEventListener('click', function() {
        logout();
    });

    lock.on("authenticated", function(authResult) {
        lock.getProfile(authResult.idToken, function(err, profile) {
            if (err) {
                // Remove expired token (if any)
                localStorage.removeItem('id_token');
                // Remove expired profile (if any)
                localStorage.removeItem('profile');
                return alert('There was an error getting the profile: ' + err.message);
            } else {
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                showUserProfile(profile);
            }
        });
    });

    var parseHash = function() {
        var id_token = localStorage.getItem('id_token');
        if (null != id_token) {
            var user_profile = JSON.parse(localStorage.getItem('profile'));
            showUserProfile(user_profile);
        } // else: not authorized
    };

    var showUserProfile = function(profile) {
        document.getElementById('login').style.display = "none";
        document.getElementById('logged').style.display = "inline-block";
        document.getElementById('avatar').src = profile.picture;
        document.getElementById('name').textContent = profile.name;
        document.getElementById('email').textContent = profile.email;
        document.getElementById('nickname').textContent = profile.nickname;
        document.getElementById('created_at').textContent = profile.created_at;
        document.getElementById('updated_at').textContent = profile.updated_at;
        document.getElementById('country').textContent = profile.country;

        var user_info = ({
                email: profile.email
            })
            //takes user email to post to page to 
            //attach to our own db metadatha
        $.post("/user", user_info).then((data) => {
            console.log(data);
            if (data.userType == "immigrant") {
                if (data.completedSurvey == false) {
                    // $.get("/survey", (data) => {
                    //     //to do anything here? idk
                    // })
                    window.location.href = "/survey";
                } else if (data.completedSurvey == true) {
                    //if they are an immigrant and have completed survey, direct them to documents portal

                } else { //if user is a lawyer, directs them to list of surveys
                }
            }
        });
    };

    var logout = function() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        window.location.href = "/";
    };

    parseHash();
});
