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

          <header style="padding: 5px">
            <strong>{{comments.length}} comments</strong>
          </header>
          <div class="conversation-area">
            <div class="conversation-box">
              <el-row :gutter="10">
                <el-col :xs="4" :sm="8" :md="8" :lg="8" :xl="2">
                  <div class="grid-content bg-purple">
                    <div class="avatar-box">
                      <img src="./../assets/wejapa.png" height="40" alt srcset />
                    </div>
                  </div>
                </el-col>
                <el-col :xs="20" :sm="16" :md="16" :lg="16" :xl="22">
                  <div class="grid-content bg-purple-light">
                    <div class="comment-text-area">
                      <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="Please input"
                        v-model="writtenComment"
                      ></el-input>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="conversation-posts" v-for="comment in comments" :key="comment.id">
              <el-row :gutter="10">
                <el-col :xs="4" :sm="2" :md="4" :lg="8" :xl="2">
                  <div class="grid-content bg-purple">
                    <div class="avatar-box">
                      <img src="./../assets/wejapa.png" height="40" alt srcset />
                    </div>
                  </div>
                </el-col>
                <el-col :xs="20" :sm="22" :md="20" :lg="16" :xl="22">
                  <div class="grid-content bg-purple-light">
                    <div class="posted-comments">
                      <h6 style="color: #3771EE; padding: 3px 5px">{{comment.name}}</h6>
                      <p style="padding: 5px">{{comment.body}}</p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "SinglePostComponent",
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
  data() {
    return {
      writtenComment: ""
    };
  }
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

// comment styles
.conversation-area {
  // border: 2px solid red;
}

.conversation-area .conversation-box {
  margin-bottom: 10px;
}

.conversation-area .conversation-box .avatar-box {
  background: green;
  padding: 5px;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
