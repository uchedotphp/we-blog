<template>
  <el-row>
    <el-col :span="24">
      <el-footer>
        <img src="./../assets/wejapa.png" height="50" alt="wejapa" srcset=""
      /></el-footer>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.el-footer {
  position: relative;
  font-size: 15px;
  text-align: center;
  margin-top: 120px;
  overflow: hidden;
  // padding: 30px 15px;
  border-top: 1px solid rgb(243, 243, 243);
}
</style>
