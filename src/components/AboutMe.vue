<template>
  <el-row :gutter="20">
    <div class="intro-pane">
      <el-col :span="8">
        <div class="img-section">
          <div class="img-inner">
            <div class="img-container"></div>
            <img class="img" src="./../assets/uchedotphp.jpeg" />
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple intro">
          <h1>
            Hey! I’m
            <b>Uche</b>
          </h1>
          <p
            class="description"
          >I am Nwulu Uchechukwu. Looking to step thoroughly into this frontend development skill. Hopefully i work up to my fullest potentials.</p>
        </div>
      </el-col>
    </div>
  </el-row>
</template>

<script>
export default {
  name: "AboutMeComponent"
};
</script>

<style scoped>
.img-section {
  width: 270px;
  height: 270px;
  padding: 30px;
  border-radius: 50%;
  margin: 0px auto;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(237, 237, 237);
  border-image: initial;
}

.img-section .img-inner {
  position: relative;
  overflow: hidden;
}

.img-section .img-inner > div {
  border-radius: 50%;
}

.img-section .img-inner .img-container {
  width: 100%;
  padding-bottom: 100%;
}

.img-section .img-inner .img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition-delay: 500ms;
  border-radius: 50%;
}

.intro-pane {
  padding: 120px 10px;
  align-items: center;
  margin: 0 auto;
  width: 940px;
  max-width: 100%;
  display: flex;
}
.intro {
}

.intro h1 {
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 400;
}

.intro-pane p {
  font-size: 15px;
}
</style>
