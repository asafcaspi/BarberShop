<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Test</h1>
    <el-row>
      <el-button>lakohot UPDATE</el-button>
      <el-button type="primary">Primary</el-button>
    </el-row>
    <el-button type="primary" @click="addNewCustomer()">Add New Customer</el-button>

    <CustomerDialog
      :customer="customer"
      :show="showDialog"
      @saveCustomer="saveCustomer"
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
      customer: {},
      customers,
      showDialog: false
    };
  },
  components: {
    Custable,
    CustomerDialog
  },
  methods: {
    addNewCustomer() {
      this.customer = {};
      this.showDialog = true;
    },
    saveCustomer(obj) {
      customers.push(obj);
    },
    editCustomer(custId) {
      this.customer = customers.find(function(element, index) {
        return element.custId === custId;
      });
      this.showDialog = true;
    }
  }
};
</script>