<style lang="less" scoped>
@import '~@/styles/colors.less';

.container {
  padding-bottom: calc(100px + env(safe-area-inset-bottom));
  max-height: 500px;
  overflow-y: auto;
}

.my-tags-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.my-tag {
  width: fit-content;
  // height: 24px;
  padding: 4px 12px;
  color: #4F5077;
  font-size: 14px;
  line-height: 24px;
  background: #EEE;
  border-radius: 18px;
  margin-right: 10px;
  margin-top: 10px;
  border: 1px solid #fff;
}

.my-tag-active {
  color: #00C35A;
  background: #fff;
  border: 1px solid #00C35A;
}

.search-result-panel {
  width: 100%;

}

.search-container {
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  margin-top: 32px;
  width: 100%;
}

.title-panel {
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}

.search-result-panel {
  width: 100%;
  background: #fff;
  margin-top: 50px;
  position: absolute;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
}

.item {
  width: 100%;
  height: 52px;
  border-bottom: 1px solid #F3F3F3;
  box-sizing: border-box;
  color: #000;
  display: flex;
  align-items: center;
}

.custom-search {
  border-radius: 16px;
  opacity: 0.6;
}

.category_panel {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  margin-top: 16px;
}

.category_text {
  font-size: 18px;
  color: #000;
  font-weight: 700;
  margin-left: 6px;
}
</style>

<template>
  <div class="container">
    <div class="search-panel">
      <van-search v-model="value" placeholder="请输入订单号" shape="round" focus="true" use-action-slot @input="onChange"
        @search="onSearch" @cancel="onCancel" @clear="onClear">
        <view slot="action" @tap="onCancel">取消</view>
      </van-search>
    </div>
    <div class="search-result-panel" v-if="showSearchResult">
      <div class="item" v-for="(item, index) in searchResults" :key="index" :index="index" @click="chooseProduct(item)">
        {{ item.displayName }}
      </div>
    </div>

    <!-- <div class="search-container" v-if="searchHistory.length > 0">
      <div class="title-panel">
        <div class="title">历史搜索</div>
      </div>

      <div class="my-tags-wrapper">
        <div class="my-tag text-overflow--1" v-for="(tag, index) in searchHistory" :key="index"
          @click="chooseHistoryTag(tag, index)">
          {{ tag }}
        </div>
      </div>
    </div> -->
  </div>
</template>


<script>
const HistoryCount = 10;

export default {
  name: 'SearchProduction',
  components: {},
  data() {
    return {
      value: "",
      searchResults: [],
      searchHistory: [],
      showSearchResult: true,
      currentHistory: {},
      mockData: [
        { name: "test1", displayName: "订单序列号1" },
        { name: "test2", displayName: "订单序列号12" },
        { name: "test7", displayName: "订单序列号33" },
        { name: "test8", displayName: "订单序列号46" },
        { name: "test9", displayName: "订单序列号44" },
        { name: "test10", displayName: "订单序列号90" },
        { name: "test11", displayName: "订单序列号34" },
        { name: "test12", displayName: "订单序列号33" },
      ],
      productName: ""
    }
  },
  mounted() {
    // 1级分类
    var searchHistory = localStorage.getItem("searchOrderHistory")
    console.log(searchHistory)
    this.searchHistory = searchHistory ? JSON.parse(searchHistory) : []
    this.searchResults = this.mockData;
  },
  created() {

  },
  onLoad(options) {
  },
  methods: {
    confirmParam() {
      //const pages = getCurrentPages()
      //const pervPage = pages[pages.length-2]
      // pervPage.setData({
      //     productName: this.productName
      // })
      console.log(this.productName)
      this.$router.push({
        path: "/publish-order",
        query: {
          productionName: this.productName
        }
      })
    },
    closeSearchPanel() {
      // this.showSearchResult = false;
      this.value = "";
    },
    async onChange(e) {
      // this.showSearchResult = true;
      this.value = e;
      if (this.value == "") {
        this.closeSearchPanel();
      }
      console.log(this.value)
      const result = this.mockData.filter(item => item.displayName.includes(this.value))
      this.searchResults = result
      console.log(this.searchResults)
    },
    onCancel() {
      this.closeSearchPanel();
      this.$router.back()
    },
    onClear() {

    },
    // 查重历史记录
    recheck(value) {
      for (let i = 0; i < this.searchHistory.length; ++i) {
        if (this.searchHistory[i] == value) return true;
      }
      return false;
    },
    addHistory(value) {
      if (this.recheck(value)) return;
      if (this.searchHistory.length == HistoryCount) {
        this.searchHistory.shift();
      }
      this.searchHistory.push(value);
      console.log(this.searchHistory)
      localStorage.setItem("searchOrderHistory", JSON.stringify(this.searchHistory))
    },
    onSearch(e) {
      let params_1 = { value: this.value };
      let params_2 = {
        value: this.value,
        rootCategory: this.rootCategory,
        category: this.category,
        rootCategoryId: this.rootCategoryId,
        categoryId: this.categoryId,
        distanceValue: this.distanceValue,
        sortModel: this.sortModel
      };

      this.addHistory(this.value);
      this.closeSearchPanel();

    },
    chooseHistoryTag(tag, index) {
      this.currentHistoryTagIndex = index;
      this.currentHistory = tag;
      // to detail page
      //this.goProductionList(tag);
    },
    chooseRecommendTag(tag, index) {
      this.currentRecommendTagIndex = index;
      // to detail page
      // this.goProductionList(tag);
    },
    chooseProduct(data) {
      this.$emit('item-click', data);
    },
    removeCategory() {
      this.isCategory = false;
      this.categoryId = 0;
      this.rootCategoryId = 0;
      this.rootCategory = "";
      this.category = "";
    }

  }

}

</script>
