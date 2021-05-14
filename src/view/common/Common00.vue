<template>
  <div class="box00">
    <p>来自common00 component 的内容</p>

    <div>
      <span>插槽00 begin</span>
      <slot name="slot00"></slot>
      <span>插槽00 end</span>
    </div>

    <div>
      <span>插槽01 begin</span>
      <slot name="slot01"></slot>
      <span>插槽01 end</span>
    </div>

    <div class="yellowBGC">
      来自父组件的动态data： {{ data01 }}<br />来自父组件的静态data：{{
        staticData
      }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Common00",
  data() {
    return {};
  },
  computed: {},
  props: {
    data01: {
      type: String, //指定传入的类型
      //type 也可以是一个自定义构造器函数，使用 instanceof 检测。
      default: "default_string", //这样可以指定默认的值
    },
    staticData: String,
  },
};
</script>

<style scoped>
.box00 {
  height: 30px;
  background-color: red;
}

.yellowBGC {
  background-color: yellow;
}

.greenBGC {
  background-color: green;
}
</style>
