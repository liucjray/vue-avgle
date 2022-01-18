<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <!-- <el-pagination
          style="width: 100%"
          background
          layout="prev, pager, next, sizes, jumper, total"
          :page-size="listLimit"
          :page-sizes="[8, 16, 24]"
          :total="listTotal"
          :current-page="listCurrentPage"
          @current-change="listPageChange"
          @prev-click="listPrevClick"
          @next-click="listNextClick"
        >
        </el-pagination> -->
        <el-table
          :data="list"
          v-loading="isLoading"
          v-infinite-scroll="listInfiniteLoad"
          element-loading-text="載入中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <el-table-column
            prop="data.title"
            label="標題"
          ></el-table-column>
          <el-table-column
            prop="data.title"
            label="標題"
          ></el-table-column>


          <el-table-column
            prop="data.description"
            label="描述"
          ></el-table-column>
          <el-table-column label="標籤">
            <template slot-scope="scope">
              <el-tag size="mini"
                      v-for="metag in scope.row.data.tags" 
                      :key="metag.id">
                      {{metag.name}}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="data.playurl" label="片源">
            <template slot-scope="scope">
              <el-link type="success"
                       size="medium"
                       @click.prevent="videolinkclick(scope.row.data)"
                       v-show="scope.row.data.playurl"
                       >查看
              </el-link>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-dialog :visible.sync="dialogVideoVisible"
               :width="(videoWidth+50)+'px'"
               :height="(videoHeight+50)+'px'"
               >
      <video controls autoplay
             v-if="dialogVideoVisible" 
             :width="videoWidth" 
             :height="videoHeight" 
             :poster="videoPoster">
        <source :src="videoSource" type="video/mp4">
      </video>
    </el-dialog>

  </div>
</template>


<script>
export default {
  name: "HotVideoList",
  data() {
    return {

      // 是否讀取
      isLoading: false,

      // 資料 
      list: [],
      listLimit: 8,
      listTotal: 0,
      listCurrentPage: 0,
      listPerPage: 50,
      listOffset: 0,

      // 影片彈窗
      dialogVideoVisible: false,
      videoTitle: "",
      videoWidth: 0,
      videoHeight: 0,
      videoPoster: "",
      videoSource: "",

    };
  },
  beforeMount() {
    this.getList();
  },
  methods: {
    // 動態更新 videos 資料
    getList() {
      this.isLoading = true;
      
      let url = `https://hotvideo.rabby.cc/api/v4/discovery/hot?start=${this.listOffset}&num=${this.listPerPage}`;

      console.log(url);
      axios
        .get(url)
        .then(({ data }) => {

          this.isLoading = false;

          this.listTotal = data.itemList.length || 0;
          this.list = data.itemList;
          // Array.prototype.push.apply(this.list, data.itemList)
          console.log(this.list);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // 跳轉上頁
    listPrevClick() {
      this.listCurrentPage -= 1;
      this.getList();
    },
    // 跳轉下頁
    listNextClick() {
      this.listCurrentPage += 1;
      this.getList();
    },
    // 跳轉頁碼
    listPageChange(page) {
      this.listCurrentPage = page - 1;
      this.getList();
    },
    listSizeChange(val) {
      this.listLimit = val;
      this.listPageChange(1);
    },
    videoLinkClick(row) {
      this.dialogVideoVisible = true;
      this.videoPoster = row['cover']['feed'];
      this.videoTitle = row['titlePgc'];
      this.videoWidth = row['playInfo'][0]['width'];
      this.videoHeight = row['playInfo'][0]['height'];
      this.videoSource = row['playInfo'][0]['urlList'][0]['url'];
      console.log(this.videoSource);
    },
    listInfiniteLoad() {
      // this.listOffset += this.listPerPage;
      // this.getList();
    }
  },
  computed: {},
};
</script>