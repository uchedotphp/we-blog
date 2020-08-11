<template>
  <el-row>
    <el-col :span="24">
      <el-container>
        <el-footer>Wejapa . Internship</el-footer>
      </el-container>
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
  // position: relative;
  font-size: 15px;
  text-align: center;
  margin-top: 120px;
  overflow: hidden;
  padding: 30px 15px;
  border-top: 1px solid rgb(243, 243, 243);
}
</style>
