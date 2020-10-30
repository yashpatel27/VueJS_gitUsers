<template>
  <div id="app">
    <div class="row" v-if="UserData !== ''">
      <div class="col-sm-3"><Sidebar /></div>
      <div class="col-sm-9">
        <div id="search" @click="searchAgain()">Search Again</div><router-view />
      </div>
    </div>
    <div v-else>
          
          <div v-if="nodata!==''" class="bg-warning text-white">
    <div class="card-body">{{ nodata }}</div>
  </div>  <span class="red"></span>
<div class="middle">
            Please enter name to Search
      <input
        v-on:keyup.enter="validateUserName($event)"
        type="text"
        v-model="username"
      />
</div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import APISERVICE from "@/services/apiService";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { Sidebar },
  data() {
    return {
      data: false,
      username: "",
      nodata: ""
    };
  },
  methods: {
    getGITUser(name) {
      APISERVICE.getGUser(name)
        .then((res) => {
          if(res.status === 200){ 
            this.$store.dispatch("usernameSeting", res.data);
          }
          console.log(res);
        })
        .catch((error) => {
          this.nodata = `No User Found with ${this.username}`
          console.dir(error)});
    },
    searchAgain() {
      this.$router.push("/")
      this.username = "";
      this.resetStore();
    },
    resetStore() {
      this.$store.dispatch("usernameSeting", "");
      this.$store.dispatch("followerCountSeting", "");
      this.$store.dispatch("followersSeting", "");
    },
    validateUserName: function(e) {
      console.log(e);
      if (e.keyCode === 13) {
        this.getGITUser(this.username);
      }
    },
  },
  computed: {
    ...mapGetters(["UserData"]),
  },
};
</script>
<style>
.red {
  color: red;
}
#search {
    text-align: right;
    margin: 0 0 10px -10px;
    width: 98%;
    font-weight: 700;
    color: #0b45b0;
    cursor: pointer;
}
.middle {
  margin: auto;
  text-align: center;
  width: 250px;
  height: 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 20%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 20px -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #ffffff;
}
</style>
