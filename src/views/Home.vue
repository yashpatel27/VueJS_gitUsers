<template>
  <div class="mb-4">
    <div class="card" style="width:400px">
  <img class="card-img-top" :src="UserData.avatar_url" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">{{ UserData && UserData.login }}</h4>
    <p class="card-text">{{ Followers }} Followers</p>
  </div>
</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import APISERVICE from "@/services/apiService";

export default {
  name: "Home",
  data() {
    return {
      followers: null,
      // menu: [
      //   {
      //     header: true,
      //     title: "Main Navigation",
      //     hiddenOnCollapse: true
      //   },
      //   {
      //     href: "/",
      //     title: "Dashboard",
      //     icon: "fa fa-user"
      //   },
      //   {
      //     href: "/charts",
      //     title: "Charts",
      //     icon: "fa fa-chart-area"
      //   }
      // ]
    };
  },
  methods: {
    getFollowers(name) {
      APISERVICE.getGFollowers(name)
        .then(res => {
          if (res.status === 200) {
            this.$store.dispatch("followersSeting", res.data);
          }
          console.log(res, "followerdata");
        })
        .catch(error => console.dir(error));
    }
  },
  mounted() {
    if(!this.Followers) {
      this.$store.dispatch("followerCountSeting", this.UserData.followers);
    }
    this.getFollowers(this.UserData.login)
  },
  computed: {
    ...mapGetters(["UserData","Followers"]),
  },
};
</script>
