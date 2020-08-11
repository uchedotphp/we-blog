<template>
  <el-row>
    <el-col :span="24">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <router-link :to="{ name: 'Home' }">Go Home</router-link>
              </div>
            </el-col>
          </el-row>
        </el-header>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>
