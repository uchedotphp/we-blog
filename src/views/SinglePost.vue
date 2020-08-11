<template>
  <div>
    <Header />
    <SinglePostComponent />
    <Footer />
  </div>
</template>

<script>
import SinglePostComponent from "@/components/SinglePost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "SinglePost",
  components: {
    SinglePostComponent,
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
