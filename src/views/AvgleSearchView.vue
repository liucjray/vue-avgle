<template>
  <el-container>
    <el-header class="avgle-search">
      <AvgleSearch />
      <AvgleSearchList />
    </el-header>
    <el-main> 

    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import AvgleSearch from "@/components/AvgleSearch.vue";
import AvgleSearchList from "@/components/AvgleSearchList.vue";

export default {
  name: "AvgleSearchView",
  components: {
    AvgleSearch,
    AvgleSearchList,
  },
  data() {
    return {};
  },
};
</script>
