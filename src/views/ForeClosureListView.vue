<template>
  <el-container>
    <el-header class="foreclosure-search">
    </el-header>
    <el-main> 
      <ForeClosureList />
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import ForeClosureList from "@/components/ForeClosureList.vue";

export default {
  name: "ForeClosureSearchView",
  components: {
    ForeClosureList,
  },
  data() {
    return {};
  },
};
</script>
