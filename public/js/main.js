$( document ).ready(function() {    //TODO: find out if user insnt logged in, then display:none this logout button if so
	var logout = function() {
		localStorage.removeItem('id_token');
		localStorage.removeItem('profile');
		window.location.href = "/";
	};
    $( "#btn-logout" ).click(function() {
        logout();
    });
});