let upload_img = document.querySelector(".img__up");
let upload_inp = document.querySelector(".upload_inp");
let img_link = "dwq";

upload_inp.addEventListener("change", function (e) {
  //   console.log(upload_inp.files[0]);
  let file = upload_inp.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    upload_img.src = reader.result;
    console.log(reader.result);
  });

  reader.readAsDataURL(file);
});
