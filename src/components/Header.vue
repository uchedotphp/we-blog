<template>
  <el-row>
    <el-col :span="24">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <el-dropdown>
                  <i class="el-icon-setting" style="margin-right: 15px"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <router-link :to="{ name: 'Home' }">
                        Go Home
                      </router-link>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span>ucheDotPhp</span>
              </div></el-col
            >
          </el-row>
        </el-header>
      </el-container>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>
