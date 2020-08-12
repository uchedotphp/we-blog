<template>
  <div>
    <Header />
    <SinglePostComponent v-bind:post="post" v-bind:comments="comments" />
    <Footer />
  </div>
</template>

<script>
import SinglePostComponent from "@/components/SinglePost";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "SinglePost",
  props: {
    post: {
      type: Object,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  },
  components: {
    SinglePostComponent,
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
