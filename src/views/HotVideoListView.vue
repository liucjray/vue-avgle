<template>
  <el-container>
    <el-header class="hotvideo-search">
    </el-header>
    <el-main> 
      <HotVideoList />
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import HotVideoList from "@/components/HotVideoList.vue";

export default {
  name: "HotVideoListView",
  components: {
    HotVideoList,
  },
  data() {
    return {};
  },
};
</script>
