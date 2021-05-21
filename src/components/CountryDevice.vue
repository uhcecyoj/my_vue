<template>
  <div>
    <div class="bcolor" 
    ></div>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

export default {
  name: "CountryDevice",
  data() {
    return {
      value1: "",
      value2: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select.btn-mini {
  height: auto;
  line-height: 14px;
}

/* this is optional (see below) */
select.btn {
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  padding-right: 16px;

  width: 10px;
  background-color: green;
}

select.btn-mini + .caret {
  margin-left: -20px;
  margin-top: 9px;
}

.bcolor {
  width: 200px;
  height: 200px;
  background-color: #E6030B1E;
}
</style>

<style>
.hide_header .el-date-picker__header {
  display: none !important;
}

.hide_header .el-picker-panel__body {
    background-color: blue;
}
</style>