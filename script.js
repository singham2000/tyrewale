var displayDiv= `<div class="desc-container">
<div class="tag">
  <i class="fa-solid fa-circle-notch"></i>
  <h5>featured</h5>
  <h6>product</h6>
</div>
<div class="flex-container">
  <img src="./images/tyre.jpeg" alt="tyre" class="tyre"/>
  <div style="text-align: center">
    <div class="border">
      <i class="fa-solid fa-gas-pump"></i>
    </div>
    Fuel Efficient
  </div>
  <div style="text-align: center">
    <div class="border">
      <i class="fa-solid fa-align-justify"></i>
    </div>
    Excellent <br />Braking/Grip
  </div>
  <div style="text-align: center">
    <div class="border">
      <i class="fa-solid fa-volume-high"></i>
    </div>
    Low Noise
  </div>
</div>
<div
  class="flex-container"
  style="
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    width: 350px;
  "
>
  <div class="one-line">
    <img
      src="./images/Bridgestone-logo-image.png.crdownload"
      width="280"
      alt="Bridgestone logo"
    />
    <div
      style="
        display: flex;
        justify-content: space-around;
        width: 100px;
      "
    >
      <i
        class="fa-solid fa-share-nodes"
        style="font-size: 1.5rem"
      ></i>
      <i
        class="fa-solid fa-heart"
        style="font-size: 1.5rem; color: rgb(255, 82, 82)"
      ></i>
    </div>
  </div>
  <div style="width: 100%; font-size: 1.4rem; color: black">
    Bridgestone
  </div>
  <div style="width: 100%; font-size: 1.4rem; color: black">
    B290
  </div>
  <div
    style="
      width: 100%;
      font-size: 1.4rem;
      color: rgb(122, 122, 122);
    "
  >
    145/80 R12
  </div>
  <div
    style="
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    "
  >
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <div style="font-size: 1.4rem; color: rgb(122, 122, 122)">
      (137)
    </div>
  </div>
  <div class="line"></div>
  <div
    style="
      width: 100%;
      font-size: 1.4rem;
      color: rgb(176, 176, 176);
    "
  >
    Price
  </div>
  <div style="width: 100%; font-size: 1.4rem; display: flex">
    <div
      style="
        width: 40%;
        font-size: 1.8rem;
        font-weight: 600;
        color: rgb(0, 0, 0);
      "
    >
      ₹ 2000
    </div>
    <div
      style="
        width: 50%;
        font-size: 1.5rem;
        font-weight: 200;
        color: rgb(184, 184, 184);
        text-decoration: line-through;
      "
    >
      ₹ 3500
    </div>
  </div>
  <div
    style="
      width: 100%;
      font-size: 1.4rem;
      display: flex;
      justify-content: space-between;
    "
  >
    <div
      style="
        width: 15%;
        border: 2px solid rgb(149, 149, 149);
        display: flex;
        justify-content: center;
        border-radius: 12px;
        color: rgb(155, 155, 155);
      "
    >
      4
    </div>
    <button
      style="
        width: 35%;
        border: none;
        background-color: rgb(4, 63, 145);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: rgb(255, 255, 255);
      "
    >
      Buy Now
    </button>
    <button
      style="
        width: 15%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: rgb(155, 155, 155);
      "
    >
      <i class="fa-regular fa-cart-shopping"></i>
    </button>
  </div>
  <div class="line"></div>
  <div style="width: 100%; font-size: 1.4rem; display: flex; flex-direction:row; justify-content: space-between;">
    <button
      style="
        width: fit-content;
        height: 50px;
        border: 2px solid rgb(221, 221, 221);
        display: flex;
        font-size: 0.7rem;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: rgb(155, 155, 155);
        padding: 0 1vw 0 1vw;
      "
    >
      <h5>Product specifications</h5>
    </button>
    <button
      style="
        width: fit-content;
        height: 50px;
        border: 2px solid rgb(221, 221, 221);
        display: flex;
        font-size: 00.7rem;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: rgb(155, 155, 155);
        padding: 0 2vw 0 2vw;
      "
    >
      <h5>Vehicle Compatibility</h5>
    </button>
  </div>               
</div>
</div>`;

var displayDivWithoutTag= `<div class="desc-container">
<div class="flex-container">
  <img src="./images/tyre.jpeg" alt="tyre" class="tyre"/>
  <div style="text-align: center">
    <div class="border">
      <i class="fa-solid fa-gas-pump"></i>
    </div>
    Fuel Efficient
  </div>
  <div style="text-align: center">
    <div class="border">
      <i class="fa-solid fa-align-justify"></i>
    </div>
    Excellent <br />Braking/Grip
  </div>
  <div style="text-align: center">
    <div class="border">
      <i class="fa-solid fa-volume-high"></i>
    </div>
    Low Noise
  </div>
</div>
<div
  class="flex-container"
  style="
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    width: 350px;
  "
>
  <div class="one-line">
    <img
      src="./images/Bridgestone-logo-image.png.crdownload"
      width="280"
      alt="Bridgestone logo"
    />
    <div
      style="
        display: flex;
        justify-content: space-around;
        width: 100px;
      "
    >
      <i
        class="fa-solid fa-share-nodes"
        style="font-size: 1.5rem"
      ></i>
      <i
        class="fa-solid fa-heart"
        style="font-size: 1.5rem; color: rgb(255, 82, 82)"
      ></i>
    </div>
  </div>
  <div style="width: 100%; font-size: 1.4rem; color: black">
    Bridgestone
  </div>
  <div style="width: 100%; font-size: 1.4rem; color: black">
    B290
  </div>
  <div
    style="
      width: 100%;
      font-size: 1.4rem;
      color: rgb(122, 122, 122);
    "
  >
    145/80 R12
  </div>
  <div
    style="
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    "
  >
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <i
      class="fa-solid fa-star"
      style="color: rgb(255, 174, 0); font-size: 1rem"
    ></i>
    <div style="font-size: 1.4rem; color: rgb(122, 122, 122)">
      (137)
    </div>
  </div>
  <div class="line"></div>
  <div
    style="
      width: 100%;
      font-size: 1.4rem;
      color: rgb(176, 176, 176);
    "
  >
    Price
  </div>
  <div style="width: 100%; font-size: 1.4rem; display: flex">
    <div
      style="
        width: 40%;
        font-size: 1.8rem;
        font-weight: 600;
        color: rgb(0, 0, 0);
      "
    >
      ₹ 2000
    </div>
    <div
      style="
        width: 50%;
        font-size: 1.5rem;
        font-weight: 200;
        color: rgb(184, 184, 184);
        text-decoration: line-through;
      "
    >
      ₹ 3500
    </div>
  </div>
  <div
    style="
      width: 100%;
      font-size: 1.4rem;
      display: flex;
      justify-content: space-between;
    "
  >
    <div
      style="
        width: 15%;
        border: 2px solid rgb(149, 149, 149);
        display: flex;
        justify-content: center;
        border-radius: 12px;
        color: rgb(155, 155, 155);
      "
    >
      4
    </div>
    <button
      style="
        width: 35%;
        border: none;
        background-color: rgb(4, 63, 145);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: rgb(255, 255, 255);
      "
    >
      Buy Now
    </button>
    <button
      style="
        width: 15%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: rgb(155, 155, 155);
      "
    >
      <i class="fa-regular fa-cart-shopping"></i>
    </button>
  </div>
  <div class="line"></div>
  <div style="width: 100%; font-size: 1.4rem; display: flex; flex-direction:row; justify-content: space-between;">
    <button
      style="
        width: fit-content;
        height: 50px;
        border: 2px solid rgb(221, 221, 221);
        display: flex;
        font-size: 0.7rem;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: rgb(155, 155, 155);
        padding: 0 1vw 0 1vw;
      "
    >
      <h5>Product specifications</h5>
    </button>
    <button
      style="
        width: fit-content;
        height: 50px;
        border: 2px solid rgb(221, 221, 221);
        display: flex;
        font-size: 00.7rem;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: rgb(155, 155, 155);
        padding: 0 2vw 0 2vw;
      "
    >
      <h5>Vehicle Compatibility</h5>
    </button>
  </div>               
</div>
</div>`;

for(var i = 0; i < 8;i++){
    console.log(i);
    document.getElementById("side-view").innerHTML+=displayDiv;
}
const a=Array.from(document.getElementsByClassName("grid2"));
a.forEach(element => {
  for(var i = 0; i < 6;i++){
    console.log(i);
    element.innerHTML+=displayDivWithoutTag;
  }
});


