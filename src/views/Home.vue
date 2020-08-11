<template>
  <div class="home">
    <el-container>
      <Header />
      <AboutMe />
      <AllPosts />
      <Footer />
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import AllPosts from "@/components/AllPosts";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    AboutMe,
    AllPosts,
    Footer
  }
};
</script>
