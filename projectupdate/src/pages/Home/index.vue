<template>
  <div>
    <h1 class="info">Information</h1>
    <div class="wrapper">
      <div class="digital-ltext">
        <span class="line-on-text"></span>
        <p class="text-near-img">Digital Art</p>
        <p class="text">
          Digital art refers to as any artistic work or practice that uses
          digital technology as part of the creative or presentation process, or
          more specifically as computational art that uses and engages with
          digital media. Since the 1960s, various names have been used to
          describe digital art, including computer art, multimedia art and new
          media art.
        </p>
        <hr class="line1" />
      </div>
      <div class="imageshome">
        <div class="image3"><img src="@/assets/Evil.jpg" /></div>
        <div class="image2"><img src="@/assets/GhostGirl.jpg" /></div>
        <div class="image1"><img src="@/assets/SavedUkraine.jpg" /></div>
      </div>
      <div class="digital-ltext2">
        <p class="text-near-img2">Sketch</p>
        <p class="text1">
          A sketch is a rapidly executed freehand drawing that is not usually
          intended as a finished work. A sketch may serve a number of purposes:
          it might record something that the artist sees, it might record or
          develop an idea for later use or it might be used as a quick way of
          graphically demonstrating an image, idea or principle.<br />
          Time: 1 Day;
        </p>
        <hr class="line2" />
      </div>
      <div class="imageshome1">
        <div class="image4"><img src="@/assets/Sketch3.png" /></div>
        <div class="image5"><img src="@/assets/Sketch2.png" /></div>
        <div class="image6"><img src="@/assets/Sketch1.png" /></div>
      </div>
      <div class="digital-ltext3">
        <p class="text-near-img3">Line Art</p>
        <p class="text2">
          Line art or line drawing is any image that consists of distinct
          straight lines or curves placed against a background (usually plain),
          without gradations in shade (darkness) or hue (color) to represent
          two-dimensional or three-dimensional objects. Line art can use lines
          of different colors, although line art is usually monochromatic.<br />
          Time: 2 Days;
        </p>
        <hr class="line3" />
      </div>
      <div class="imageshome2">
        <div class="image7"><img src="@/assets/line3art.png" /></div>
        <div class="image8"><img src="@/assets/line2art.png" /></div>
        <div class="image9"><img src="@/assets/linaart1.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
};
</script>

<style>
.imageshome {
  position: absolute;
  width: 65%;
  margin-top: 45px;
  top: 40px;
  margin-left: 25px;
}

.image3 img {
  position: absolute;
  width: 470px;
  height: 350px;
  left: 35px;
  top: 220px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 1);
}
.image2 img {
  position: absolute;
  width: 460px;
  height: 350px;
  left: 75px;
  top: 250px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 1);
}
.image1 img {
  position: absolute;
  width: 460px;
  height: 350px;
  left: 120px;
  top: 280px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 1);
}
.text-near-img {
  position: relative;
  font-size: 28px;
  width: 200px;
  height: 150px;
  left: 65%;
  top: -42%;
  color: #d8bfd8;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
.text {
  font-family: Comic Sans MS, Comic Sans, cursive;
  position: relative;
  font-size: 22px;
  text-align: left;
  width: 500px;
  height: 230px;
  left: 54%;
  bottom: 110px;
  color: #cfb2cdea;
}
.wrapper {
  margin-top: 30px;
}
.info {
  margin-top: 35px;
  color: #1a0e20e7;
}
.line-on-text {
  top: 560px;
  left: -100%;
  width: 70px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #d8bfd8);
}
.line1 {
  position: relative;
  left: 23%;
  bottom: 90px;
  width: 355px;
  height: 4px;
  background-color: #d8bfd8;
  border: 1px solid #d8bfd8;
  border-radius: 55%;
  opacity: 0.7;
}
.line2 {
  position: relative;
  bottom: 55px;
  right: 20%;
  width: 350px;
  height: 4px;
  background-color: #d8bfd8;
  border: 1px solid #d8bfd8;
  border-radius: 55%;
  opacity: 0.7;
}
.line3 {
  position: relative;
  top: 60px;
  left: 23%;
  width: 350px;
  height: 4px;
  background-color: #d8bfd8;
  border: 1px solid #d8bfd8;
  border-radius: 55%;
  opacity: 0.7;
}
</style>
