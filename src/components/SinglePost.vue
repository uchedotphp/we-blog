<template>
  <el-container>
    <el-main>
      <div class="blog-post-details-wrapper">
        <div class="post-details-wrapper">
          <div class="post-description-wrapper">
            <h1 class="post-title">{{ post.title }}</h1>
          </div>
          <div class="post-description">
            <p>{{ post.body }}</p>
          </div>

          <!-- comments section -->

          <!-- <div class="comments-wrapper">
        <div class="compose-wrapper">
          <div class="textarea-outer-wrapper">
            <div class="textarea-wrapper">
              <div>
                <span class="placeholder" style="color: black">Start the discussion</span>
              </div>
            </div>
          </div>
        </div>
      </div>-->
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
export default {
  name: "SinglePostComponent",
  props: {
    id: Number,
  },
  data() {
    return {
      post: {},
    };
  },
  created() {
    console.log(
      `this is the id in singlePost: ${this.id} and type of: ${typeof this.id}`
    );
    console.log(
      `this is the type recieved in singlePost: ${typeof this.$route.params.id}`
    );
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then((response) => {
        this.post = response.data;
      })
      .catch((error) => {
        debugger;
        error;
      });
    console.log(this.id);
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  min-height: 100%;
}

.blog-post-details-wrapper {
  width: 860px;
  max-width: 100%;
  margin: 0 auto;
  padding: 90px 0 120px;
}

.blog-post-details-wrapper .post-details-wrapper {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: center;
  //   align-items: flex-start;
  position: relative;
}

.blog-post-details-wrapper .post-details-wrapper .post-description-wrapper {
  max-width: 100%;
  width: 870px;
}

.blog-post-details-wrapper
  .post-details-wrapper
  .post-description-wrapper
  .post-title {
  font-size: 30px;
  font-weight: 700;
  line-height: 1.53;
  margin-bottom: 10px;
}

.blog-post-details-wrapper
  .post-details-wrapper
  .post-description-wrapper
  .post-description {
  margin-top: 60px;
  font-size: 16px;
}

.blog-post-details-wrapper
  .post-details-wrapper
  .post-description-wrapper
  .post-description
  p {
  font-size: 16px;
  margin-bottom: 2em;
}

.comments-wrapper {
  max-width: 42%;
  padding-right: 60px;
}

.comments-wrapper .compose-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-shrink: 0;
}

.comments-wrapper .compose-wrapper .textarea-outer-wrapper {
  margin: 0 0 0 48px;
  margin-left: 12px;
}

.comments-wrapper .compose-wrapper .textarea-outer-wrapper .textarea-wrapper {
  background: #fff;
  border: 2px solid red;
  position: relative;
  border-radius: 4px;
  margin: 0;
}

.textarea-outer-wrapper .textarea-wrapper::before {
  display: table;
  content: "";
  line-height: 0;
}

.placeholder {
  color: #687a86;
  line-height: 30px;
  font-size: 18px;
  position: absolute;
  top: 7px;
  left: 10px;
  right: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: text;
}
</style>
