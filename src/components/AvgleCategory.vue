<template>
  <el-row :gutter="20">
    <el-col :span="20">
      <el-tabs
        style="100%"
        type="card"
        tabPosition="left"
        v-model="activeCHID"
        @tab-click="switchCategory"
      >
        <el-tab-pane
          v-for="category in categories"
          :key="category.CHID"
          :label="category.shortname"
          :name="category.CHID"
        >
          <el-pagination
            style="width: 50%"
            background
            layout="prev, pager, next, total, sizes, jumper"
            :page-size="videosLimit"
            :total="videosTotal"
            :current-page="videosCurrentPage"
            :page-sizes="[8, 16, 24, 32]"
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
            <el-table-column width="200px" prop="preview_url" label="預覽圖">
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
            <el-table-column width="100px" prop="duration" label="時長">
              <template slot-scope="scope">
                <el-tag size="medium" type="success" 
                        v-text="transformHumanTime(scope.row.duration)">
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column
              prop="title"
              label="片名"
              width="500px"
            ></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>


<script>
export default {
  name: "categories",
  data() {
    return {
      // 是否讀取
      isLoading: false,
      // 影片分類
      activeCHID: "1",
      categories: [],
      // 影片
      videos: [],
      videosLimit: 8,
      videosTotal: 0,
      videosCurrentPage: 0,
    };
  },
  beforeMount() {
    // 取得分類
    this.getCategories();
    // 預設第一個分類
    this.switchCategory(this.activeCHID);
  },
  methods: {
    switchCategory() {
      this.videosCurrentPage = 0;
      this.getVideos();
    },
    // 更新 categories 資料
    getCategories() {
      this.isLoading = true;
      axios
        .get("https://api.avgle.com/v1/categories")
        .then(({ data }) => {
          this.isLoading = data.success != true;
          this.categories = data.response.categories;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // 動態更新 videos 資料
    getVideos() {
      this.isLoading = true;
      let url = `https://api.avgle.com/v1/videos/${this.videosCurrentPage}?c=${this.activeCHID}&limit=${this.videosLimit}`;
      // console.log(url);
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