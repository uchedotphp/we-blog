<template>
  <el-row>
    <el-col :span="24">
      <div class="blog-wrapper">
        <header class="title">Latest Stories</header>
        <div v-for="post in posts" :key="post.id" class="post-card">
          <div class="post-details">
            <div class="post-content">
              <h2 class="post-title">
                <router-link :to="{name: 'SinglePost', params:{id: post.id}}">{{ post.title }}</router-link>
              </h2>
              <p class="post-excerpt">{{ post.body }}</p>
              <div class="read-more">
                <router-link :to="{name: 'SinglePost', params:{id: post.id}}">Read More</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <div class="prev">
            <a href="#">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"
                />
              </svg>
            </a>
          </div>
          <div class="number">Page 1 of 3</div>
          <div class="next">
            <a href="#">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
export default {
  name: "AllPostsComponent",
  data() {
    return {
      posts: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=20&_limit=5")
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        debugger;
        error;
      });
  }
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  // position: relative;
  margin: 0 auto;
  width: 940px;
  max-width: 100%;
}

.blog-wrapper header {
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
  letter-spacing: 0.17em;
  position: relative;
  margin-bottom: 30px;
}

.post-card {
  margin-bottom: 120px;
  // position: relative;
}

.post-card .post-details {
  display: flex;
}

.post-card .post-details .post-title {
  font-size: 21px;
  font-weight: 700;
  line-height: 1.53;
  margin-bottom: 10px;
  font-family: "Fira Sans", sans-serif;
}

.post-card .post-details .post-title a {
  // TODO:: fix active links
  color: rgb(41, 41, 41);
}

.post-card .post-details .post-excerpt {
  font-size: 15px;
  font-weight: 400;
  line-height: 2;
  margin-bottom: 0px;
}

.post-card .post-details .read-more {
  margin-top: 16px;
}

.post-card .post-details .read-more a {
  font-size: 13px;
  font-weight: 500;
  transition: all 0.15s ease-in-out 0s;
}

.blog-wrapper .pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.blog-wrapper .pagination .prev {
  min-width: 32px;
}

.blog-wrapper .pagination .prev a {
  width: 32px;
  height: 32px;
  color: rgb(41, 41, 41);
  background-color: rgb(243, 243, 243);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.15s ease-in-out 0s;
}

.blog-wrapper .pagination .next {
  min-width: 32px;
}

.blog-wrapper .pagination .next a {
  width: 32px;
  height: 32px;
  color: rgb(41, 41, 41);
  background-color: rgb(243, 243, 243);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.15s ease-in-out 0s;
}

a svg {
  display: block;
}

.blog-wrapper .pagination .number {
}
</style>
