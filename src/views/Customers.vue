<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Test</h1>
    <el-row>
      <el-button>lakohot UPDATE</el-button>
      <el-button type="primary">Primary</el-button>
    </el-row>
    <el-button type="primary" @click="centerDialogVisible = true">Add New Customer</el-button>

    <el-dialog title="Add New Customer" :visible.sync="centerDialogVisible" width="30%" center>
      <span>It should be noted that the content will not be aligned in center by default</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="$emit('addNewCustomer',{firstName: CustomerName, lastName: CustomerLastName, custId: CustomeID, phoneNumb:PhoneNumber,dateOfbirth:DateOfBirth,email:Email})"
        >Confirm</el-button>
      </span>
      <CustomerMenu @addNewCustomer="saveData"></CustomerMenu>
    </el-dialog>
    <Custable :customers="customers"></Custable>
  </div>
</template>

<script>
import Custable from "@/components/Custable.vue";
import CustomerMenu from "@/components/CustomerMenu.vue";
import { customers } from "../data/data.js";

export default {
  data() {
    return {
      customers,
      centerDialogVisible: false
    };
  },
  components: {
    Custable,
    CustomerMenu
  },
  methods: {
    saveData(obj) {
      customers.push(obj);
      centerDialogVisible = false;
    }
  }
};
</script>