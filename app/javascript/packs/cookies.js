function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function cookieConsent() {
  // if user hasn't accepted then show toast
  if (!getCookie('allowCookies')) {
      $('.toast').toast('show');

  // else remove (delete) element
  } else {
    $('.fixed-bottom').remove();
  }
}

function removeCookies() {
  eraseCookie('allowCookies')
  $('#cookies-toast').remove();
}

// load
$(document).ready(function(){

  $('#btnDeny').click(removeCookies);

  $('#btnAccept').click(()=>{
    setCookie('allowCookies','1',7)
    $('#cookies-toast').remove();
  })

  cookieConsent()
});
