<template>
  <div class="avgle">
    <AvgleCategory />
    <AvgleSearch />
  </div>
</template>

<script>
import AvgleCategory from "@/components/AvgleCategory.vue";
import AvgleSearch from "@/components/AvgleSearch.vue";

export default {
  name: "AvgleView",
  components: {
    AvgleCategory,
    AvgleSearch,
  },
  data() {
    return {};
  },
};
</script>
