<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 内部组件 -->
    <in-component00 v-bind:ic00tip="listObj00"></in-component00>
    <!-- 外部组件 -->
    <common-00 v-bind:data01="data01" static-data="static data">
      <span slot="slot00" style="background-color: green"
        >common00 插槽内容</span
      >

      <span slot="slot01" style="background-color: blue"
        >common01 插槽内容</span
      >
    </common-00>
  </div>
</template>

<script>
import common00 from "../view/common/Common00";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      data00: "data00_val",
      data01: "data01_val",
      listObj00: [
        { id: 0, val: "北京" },
        { id: 1, val: "天津" },
        { id: 2, val: "上海" },
      ],
    };
  },
  methods: {},
  components: {
    // ============================================================
    // 内部组件
    inComponent00: {
      // 组件使用是峰驼转横杠 -> <in-component00></in-component00>
      props: ["ic00tip"], // 对应v-bind 所绑定得key
      template: "<li>来自内部组件 {{ ic00tip[1].val }}</li>",
    },
    // ============================================================
    // 外部组件
    common00: common00,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
