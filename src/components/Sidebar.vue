<template>
  <div class="home">
    <sidebar-menu
      :menu="menu"
      @toggle-collapse="onToggleCollapse"
      @item-click="onItemClick"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Manage GITHUB",
          hiddenOnCollapse: false
        },
        {
          href: "/",
          title: "Home",
          icon: "fa fa-user"
        },
        {
          href: "/followers",
          title: "Followers",
          icon: "fa fa-users"
        },
        {
          href: "/repo",
          title: "Repo",
          icon: "fa fa-database"
        }
      ]
    };
  },
  methods: {
    onToggleCollapse(collapsed) {
      console.log(collapsed);
    },
    onItemClick(item) {
      if (item.target.textContent === "Followers") {
        var count = this.Followers + 10;
        this.$store.dispatch("followerCountSeting", count);
      }
    }
  },
  mounted() {},
  computed: {
    ...mapGetters(["UserData", "FollowerData", "Followers"])
  }
};
</script>
<style scoped>
.v-sidebar-menu .vsm-arrow:after {
  content: "\f105";
  font-family: "Font Awesome 5 Free";
}

.v-sidebar-menu .collapse-btn:after {
  content: "\f337";
  font-family: "Font Awesome 5 Free";
}
</style>
