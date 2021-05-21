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

    <dv>
      <!-- v-model = v-bind + v-on -->
      <input type="button" @click="doSome()" />
      <input type="text" v-model="inputMsg" placeholder="输入内容" />
      <p>{{ inputMsg }}</p>
      <div v-for="(val, index) in numbers" :key="index">
        {{ val }} {{ reversedMessage }}
      </div>
    </dv>
  </div>
</template>

<script>
export default {
  name: "Common00",
  data() {
    return {
      inputMsg: "initMsg",
      numbers: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  computed: {
    reversedMessage: function () {
      return this.inputMsg;
    },
  },
  watch: {
    // watch String
    inputMsg: {
      handler(val, oldVal) {
        console.log("---------------");
        console.log("val: " + val);
        console.log("oldVal:" + oldVal);
        console.log("---------------");
      },
      deep: false,
      // 绑定监听时 是否执行
      immediate: true,
    },
  },
  methods: {
    doSome: function () {
      this.inputMsg += "asdf";
      this.$emit('childFn', 'this is a message from child_common00');
    },
  },
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
