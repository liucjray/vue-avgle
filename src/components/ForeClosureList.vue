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
          :page-size="fcsLimit"
          :page-sizes="[8, 16, 24]"
          :total="fcsTotal"
          :current-page="fcsCurrentPage"
          @size-change="fcsSizeChange"
          @current-change="fcsPageChange"
          @prev-click="fcsPrevClick"
          @next-click="fcsNextClick"
        >
        </el-pagination>
        <el-table
          :data="fcs"
          v-loading="isLoading"
          element-loading-text="載入中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <el-table-column
            prop="crtid"
            label="crtid"
          ></el-table-column>
          <el-table-column
            prop="crmid"
            label="crmid"
          ></el-table-column>
          <el-table-column
            prop="crmyy"
            label="crmyy"
          ></el-table-column>
          <el-table-column
            prop="crmno"
            label="crmno"
          ></el-table-column>
          <el-table-column prop="land" label="土地">
            <template slot-scope="scope">
              <el-link type="success"
                       size="medium"
                       v-show="scope.row.land.length > 0"
                       @click.prevent="showLand(scope.row.land)">查看({{scope.row.land.length}})
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="house" label="建物">
            <template slot-scope="scope">
              <el-link type="success"
                       size="medium"
                       v-show="scope.row.house.length > 0"
                       @click.prevent="showHouse(scope.row.house)">查看({{scope.row.house.length}})
              </el-link>
            </template>
          </el-table-column>
          <el-table-column prop="house" label="動產">
            <template slot-scope="scope">
              <el-link type="success"
                       size="medium"
                       v-show="scope.row.movable_decide.length > 0"
                       @click.prevent="showMV(scope.row.movable_decide)">查看({{scope.row.movable_decide.length}})
              </el-link>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <!-- 土地資料彈窗 -->
    <el-dialog title="土地详细" :visible.sync="dialogLandVisible">
      <el-descriptions v-for="land in dialogLandList"
                       style="margin-top:25px;"
                       :column="3" 
                       size="mini" border>
        <el-descriptions-item>
          <template slot="label">
            <i class=""></i>
            checkyn 
          </template>
          {{land.checkyn}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class=""></i>
            registeno 
          </template>
          {{land.registeno}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class=""></i>
            range
          </template>
          {{land.range}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class=""></i>
            saleno 
          </template>
          {{land.saleno}}
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>

    <!-- 建物資料彈窗 -->
    <el-dialog title="建物详细" :visible.sync="dialogHouseVisible">
      <el-descriptions v-for="house in dialogHouseList"
                       :column="3" size="mini" border>
        <el-descriptions-item>
          <template slot="label">
            <i class=""></i>
            checkyn 
          </template>
          {{house.checkyn}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class=""></i>
            ordno 
          </template>
          {{house.ordno}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class=""></i>
            range
          </template>
          {{house.range}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class=""></i>
            saleno 
          </template>
          {{house.saleno}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class=""></i>
            budadd 
          </template>
          {{house.budadd}}
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>

    <!-- 動產 -->
    <el-dialog title="動產" :visible.sync="dialogMVVisible">
      <el-descriptions v-for="mv in dialogMVList" 
                       :column="3" 
                       style="margin-top:25px;" 
                       size="mini" border>
        <el-descriptions-item>
          <template slot="label">
            tlog
          </template>
          {{mv.tlot}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            registeno 
          </template>
          {{mv.registeno}}
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>


  </div>
</template>


<script>
export default {
  name: "FCList",
  data() {
    return {
      // 是否讀取
      isLoading: false,
      // 關鍵字
      keyword: "",
      // 影片
      fcs: [],
      fcsLimit: 8,
      fcsTotal: 0,
      fcsCurrentPage: 0,

      dialogLandList:[],
      dialogLandVisible: false,

      dialogHouseList: [], 
      dialogHouseVisible: false,
      
      dialogMVList: [], 
      dialogMVVisible: false,
    };
  },
  beforeMount() {
    this.fcs = this.getFCs();
  },
  watch: {
    // watcher
    keyword(val, old_val) {
      console.log(val, old_val);
      if (val !== old_val && val !== "") {
        this.getVideos();
      }
      if (val.length === 0) {
          this.fcs = [];
      }
    },
  },
  methods: {
    // 動態更新 videos 資料
    getFCs() {
      this.isLoading = true;

      let keyword = encodeURIComponent(this.keyword);

      let url = `https://foreclosure.rabby.cc/api/FilesetLists/15422/file?preview=true`;

      console.log(url);
      axios
        .get(url)
        .then(({ data }) => {

          console.log(data);
          this.isLoading = false;

          this.fcsTotal = data.data.length || 0;
          this.fcs = data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // 跳轉上頁
    fcsPrevClick() {
      this.fcsCurrentPage -= 1;
      this.getFCs();
    },
    // 跳轉下頁
    fcsNextClick() {
      this.fcsCurrentPage += 1;
      this.getFCs();
    },
    // 跳轉頁碼
    fcsPageChange(page) {
      this.fcsCurrentPage = page - 1;
      this.getFCs();
    },
    fcsSizeChange(val) {
      this.fcsLimit = val;
      this.fcsPageChange(1);
    },
    showLand(landList) {
      this.dialogLandVisible = true;
      this.dialogLandList = landList;
      console.log(landList);
    },
    showHouse(houseList) {
      this.dialogHouseVisible = true;
      this.dialogHouseList = houseList;
      console.log(houseList);
    },
    showMV(mvList) {
      this.dialogMVVisible = true;
      this.dialogMVList = mvList;
      console.log(mvList);
    },
  },
  computed: {},
};
</script>