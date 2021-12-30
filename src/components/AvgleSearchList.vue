<template>
  <div>
  <el-row type="flex" justify="center">
    <el-col :span="10">
      <el-input
        style="margin-bottom: 20px"
        size="medium"
        placeholder="請輸入搜尋文字"
        suffix-icon="el-icon-search"
        v-model="keyword"
      ></el-input>
    </el-col>
  </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-pagination
          style="width: 100%"
          background
          layout="prev, pager, next, sizes, jumper, total"
          :page-size="videosLimit"
          :page-sizes="[8, 16, 24]"
          :total="videosTotal"
          :current-page="videosCurrentPage"
          @size-change="videoSizeChange"
          @current-change="vidoePageChange"
          @prev-click="videosPrevClick"
          @next-click="videosNextClick"
        >
        </el-pagination>
        <el-table
          :data="videos"
          v-loading="isLoading"
          element-loading-text="載入中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <el-table-column prop="preview_url" label="預覽圖">
            <template slot-scope="scope">
              <a target="_blank" :href="scope.row.video_url">
                <img
                  :src="scope.row.preview_url"
                  height="80"
                  content="no-referrer"
                />
              </a>
            </template>
          </el-table-column>
          <el-table-column
            prop="title"
            label="片名"
            width="500px"
          ></el-table-column>
          <el-table-column prop="duration" label="時長">
            <template slot-scope="scope">
              <el-button icon="el-icon-timer" effect="dark">
                {{ transformHumanTime(scope.row.duration) }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: "AvgleSearchList",
  data() {
    return {
      // 是否讀取
      isLoading: false,
      // 關鍵字
      keyword: "",
      // 影片
      videos: [],
      videosLimit: 8,
      videosTotal: 0,
      videosCurrentPage: 0,
    };
  },
  beforeMount() {},
  watch: {
    // watcher
    keyword(val, old_val) {
      console.log(val, old_val);
      if (val !== old_val && val !== "") {
        this.getVideos();
      }
      if (val.length === 0) {
          this.videos = [];
      }
    },
  },
  methods: {
    // 動態更新 videos 資料
    getVideos() {
      this.isLoading = true;

      let keyword = encodeURIComponent(this.keyword);

      let url = `https://api.avgle.com/v1/search/${keyword}/${this.videosCurrentPage}?limit=${this.videosLimit}`;
      console.log(url);
      axios
        .get(url)
        .then(({ data }) => {
          this.isLoading = data.success != true;
          this.videosTotal = data.response.total_videos;
          this.videos = data.response.videos;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // 跳轉上頁
    videosPrevClick() {
      this.videosCurrentPage -= 1;
      this.getVideos();
    },
    // 跳轉下頁
    videosNextClick() {
      this.videosCurrentPage += 1;
      this.getVideos();
    },
    // 跳轉頁碼
    vidoePageChange(page) {
      this.videosCurrentPage = page - 1;
      this.getVideos();
    },
    videoSizeChange(val) {
      this.videosLimit = val;
      this.vidoePageChange(1);
    },
    // 將秒數替換成 時時:分分:秒秒 格式
    transformHumanTime(seconds) {
      let s = new Date(seconds * 1000).toISOString().substr(11, 8);
      return s;
    },
  },
  computed: {},
};
</script>