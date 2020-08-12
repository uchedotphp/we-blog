import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";
import ErrorPage from "@/views/ErrorPage";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/posts/:id",
    name: "SinglePost",
    props: true,
    beforeEnter: (to, from, next) => {
      const URLs = [
        "https://jsonplaceholder.typicode.com/posts/" + to.params.id,
        "https://jsonplaceholder.typicode.com/posts/" +
          to.params.id +
          "/comments",
      ];

      const requestOne = axios.get(URLs[0]);
      const requestTwo = axios.get(URLs[1]);

      axios
        .all([requestOne, requestTwo])
        .then(
          axios.spread((...responses) => {
            to.params.post = responses[0].data;
            to.params.comments = responses[1].data;
            next();
          })
        )
        .catch((errors) => {
          console.error(errors);
        });
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/SinglePost.vue"),
  },
  {
    path: "*",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
