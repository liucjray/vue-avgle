<template>
  <el-container>
    <el-header class="date-time-picker">
      <TimePickerDate />
      <TimePickerTime />
    </el-header>
    <el-main> 

    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import TimePickerDate from "@/components/TimePickerDate.vue";
import TimePickerTime from "@/components/TimePickerTime.vue";

export default {
  name: "DateTimePickerView",
  components: {
    TimePickerDate,
    TimePickerTime,
  },
  data() {
    return {};
  },
};
</script>
