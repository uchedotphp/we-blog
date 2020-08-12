<template>
  <div>
    <Header />
    <SinglePostComponent v-bind:id="id" />
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
    id: Number,
  },
  created() {
    console.log(`this is the id: ${this.id} and type of: ${typeof this.id}`);
    console.log(`this is the type recieved: ${typeof this.$route.params.id}`);
  },
  components: {
    SinglePostComponent,
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
