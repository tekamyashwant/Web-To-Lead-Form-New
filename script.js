function beforeSubmit() {
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  console.log("inputdate", inputdate.value);

  //convert string inputdate into date(en_US)
  let formatteddate = new Date(inputdate.value).toLocaleDateString("en-US");
  outputdate.value = formatteddate;
}
