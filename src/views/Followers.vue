<template>
  <div class="about">
    <h1>Followers</h1>
    <paginate name="items" :list="FollowerData" class="paginate-list" :per="10">
      <div class="card_list" v-for="item in paginated('items')" :key="item.id">
        <img :src=item.avatar_url  width="80px"/>
      <a :href=item.html_url class="heading">  {{ item.login }}</a>
      </div>
    </paginate>
    <paginate-links
    class="mt-4"
    v-if="FollowerData.length > 10"
      for="items"
      :simple="{
        next: 'Next »',
        prev: '« Back',
      }"
    ></paginate-links>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import APISERVICE from "@/services/apiService";

export default {
  name: "Followers",
  data() {
    return {
      paginate: ['items']
    };
  },
  mounted() {
    console.log(this.FollowerData, "ddd")
  },
  computed: {
    ...mapGetters(["UserData", "FollowerData"]),
  },
};
</script>
<style scoped>
.heading {
font-size: 22px;
font-weight: 700
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  background-color:#f6f6f6 !important;

}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}

.paginate-list {
  width: 450px;
  margin: 0 auto;
  text-align: left;
} 

.card_list{
  width: 100%;
  height: 100px;
  text-align: left;
  border: 1px solid #f6f6f6;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
-webkit-box-shadow: 10px 17px 42px -15px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 17px 42px -15px rgba(0,0,0,0.75);
box-shadow: 10px 17px 42px -15px rgba(0,0,0,0.75);
}

paginate-links li {
      list-style: none;
    width: 15%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
  user-select: none;
  display: block;
    float: left;
}
ul{
list-style:none;
}
  a {
    cursor: pointer;
  }
  li.active a {
    font-weight: bold;
  }
  li.next:before {
    content: ' | ';
    margin-right: 13px;
    color: #ddd;
  }
  li.disabled a {
    color: #ccc;
    cursor: no-drop;
  }

a {
  color: #42b983;
}
</style>
