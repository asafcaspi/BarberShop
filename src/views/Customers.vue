<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Test</h1>
    <el-row>
      <el-button>lakohot UPDATE</el-button>
      <el-button type="primary">Primary</el-button>
    </el-row>
    <Custable :customers="customers"></Custable>
    <CustomerMenu @addNewCustomer="saveData"></CustomerMenu>
  </div>
</template>

<script>
import Custable from "@/components/Custable.vue";
import CustomerMenu from "@/components/CustomerMenu.vue";
import { customers } from "../data/data.js";
export default {
  data() {
    return {
      customers
    };
  },
  components: {
    Custable,
    CustomerMenu
  },
  methods: {
    saveData(obj) {
      customers.push(obj);
    }
  }
};
</script>