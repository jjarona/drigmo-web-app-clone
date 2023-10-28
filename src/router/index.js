import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth"

const auth = getAuth();

const routes = [
    {
      path: "/",
      name: "LogInPage",
      component: LogInPage,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUpPage,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let isAuthenticated = false;

const authPromise = new Promise((resolve) => {
  onAuthStateChanged(auth, (user) => {
    isAuthenticated = !!user;
    resolve();
  });
});


export default router;


