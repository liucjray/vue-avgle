<template>
  <div>
    <!-- 送出按鈕 -->
    <el-row type="flex" justify="space-around">
      <el-col :lg="10" :xs="10">
        <el-button
          type="primary"
          plain
          icon="el-icon-circle-plus-outline"
          effect="dark"
          @click="addNotifyText"
        >
          新增提醒
        </el-button>
      </el-col>
    </el-row>

    <!-- 提醒文字輸入框 -->
    <el-row type="flex" justify="center">
      <el-col :lg="3" :xs="16">
        <el-input v-model.trim="notifyText" placeholder="提醒文字"></el-input>
      </el-col>
    </el-row>

    <!-- 日期選擇器 -->
    <el-row type="flex" justify="space-around">
      <el-col :lg="16" :xs="16">
        <el-date-picker
          v-model.trim="datetime2"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
          value-format="yyyy-MM-dd HH:mm:ss"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-col>
    </el-row>

    <!-- 提示送出訊息，默認隱藏 -->
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <span>指令: {{ cmd }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addNotifyTextConfirm"
          >确 定</el-button
        >
        <el-button @click="addNotifyTextCancel">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style>
.el-col {
  margin-bottom: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      // 提醒文字
      notifyText: "",
      // 彈窗是否顯示
      centerDialogVisible: false,
      cmd: "",
      datetime2: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "1小時後",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 1);
              picker.$emit("pick", date);
            },
          },
          {
            text: "3小時後",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 3);
              picker.$emit("pick", date);
            },
          },
          {
            text: "6小時後",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 6);
              picker.$emit("pick", date);
            },
          },
          {
            text: "12小時後",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 12);
              picker.$emit("pick", date);
            },
          },
          {
            text: "明天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 1);
              picker.$emit("pick", date);
            },
          },
          {
            text: "後天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 2);
              picker.$emit("pick", date);
            },
          },
          {
            text: "1周後",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
          {
            text: "2周後",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 14);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一個月後(30d)",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
              picker.$emit("pick", date);
            },
          },
        ],
      },
    };
  },
  methods: {
    addNotifyText() {
      if (this.datetime2.length === 0 || this.notifyText.length === 0) {
        alert("文字或日期輸入不完全");
        return false;
      }
      this.centerDialogVisible = true;
      this.cmd = `${this.notifyText} | ${this.datetime2}`;
    },
    addNotifyTextConfirm() {
      // call api
      this.centerDialogVisible = false;
    },
    addNotifyTextCancel() {
      this.centerDialogVisible = false;
    },
  },
};
</script>