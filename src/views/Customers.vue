<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Test</h1>
    <el-row>
      <el-button>lakohot UPDATE</el-button>
      <el-button type="primary">Primary</el-button>
    </el-row>
    <el-button type="primary" @click="showDialog = true">Add New Customer</el-button>

    <CustomerDialog
      :show="showDialog"
      @addNewCustomer="addNewCustomer"
      @hide="showDialog = false"
      @close="showDialog= false"
    ></CustomerDialog>

    <Custable :customers="customers" @edit="editCustomer($event)"></Custable>;
  </div>
</template>

<script>
import Custable from "@/components/Custable.vue";
import CustomerDialog from "@/components/CustomerDialog.vue";
import { customers } from "../data/data.js";

export default {
  data() {
    return {
      customers,
      showDialog: false
    };
  },
  components: {
    Custable,
    CustomerDialog
  },
  methods: {
    addNewCustomer(obj) {
      customers.push(obj);
    },
    editCustomer(obj) {
      console.log(obj);
      customers.find;
    }
  }
};
</script>