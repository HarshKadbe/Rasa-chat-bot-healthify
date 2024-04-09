
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"3c85028f92295fa19eddb3cc921c4810b","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */



function saveResponseToDatabase(query, response) {
    fetch('/api/save-response/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({
            query: query,
            response: response
        })
    }).then(response => {
        if (response.ok) {
            console.log('Response saved successfully');
        } else {
            console.error('Failed to save response');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}
