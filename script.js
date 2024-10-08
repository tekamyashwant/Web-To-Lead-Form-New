let captchaChecked = false;

function beforeSubmit(event) {
  if (captchaChecked) {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate", inputdate.value);

    //convert string inputdate into date(en_US)
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formatteddate;
  } else {
    alert("Please check captcha before submit");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function successCaptcha() {
  captchaChecked = true;
}
