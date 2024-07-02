/** @format */

console.log("Products frontend javascript file");

$(function () {
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();
    if (selectedValue === "DRINK") {
      $("#product-volume").show();
      $("#product-collection").hide();
    } else {
      $("#product-collection").show();
      $("#product-volume").hide();
    }
  });
  $("#process-btn").on("click", () => {
    $(".dish-container").slideToggle(500);
    $(".process-btn").css("display", "none");
  });

  $("#cancel-btn").on("click", () => {
    $(".dish-container").slideToggle(100);
    $(".process-btn").css("display", "flex");
  });

  $(".new-product-status").on("change", async function (e) {
    const id = e.target.id;
    const productStatus = $(`#${id}.new-product-status`).val();
    console.log(id);
    console.log("productStatus", productStatus);
    try {
      const response = await axios.post(`/admin/product/${id}`, { productStatus: productStatus });
      console.log("response", response);
      const result = response.data;
      if (response.data) {
        console.log("Product updated");
        $(".new-product-status").blur();
      } else alert("Product update failed");
    } catch (err) {
      console.log(err);
      alert("Product update failed");
    }
  });
});

function validateForm() {
  const productName = $(".product-name").val();
  const productPrice = $(".product-price").val();
  const productLeftCount = $(".product-left-count").val();
  const productCollection = $(".product-collection").val();
  const productDesc = $(".product-desc").val();
  const productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all details !");
    return false;
  } else {
    return true;
  }
}
function previewFileHandler(input, order) {
  const imageClassName = input.className;
  console.log("input", input);

  const file = $(`.${imageClassName}`).get(0).files[0];
  const filetype = file["type"];
  const validImageType = ["image/jpeg", "image/jpg", "image/png"];
  if (!validImageType.includes(filetype)) {
    alert("Please insert only jpeg , jpg and png");
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}
