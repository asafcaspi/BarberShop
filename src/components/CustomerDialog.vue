<template>
  <el-dialog title="Add New Customer" :visible.sync="show" width="30%" center>
    <div class="CustName">
      <el-input placeholder="Customer Name" v-model="CustomerName"></el-input>
      <el-input placeholder="Customer LastName" v-model="CustomerLastName"></el-input>

      <el-input
        type="number"
        placeholder="CustomerID"
        v-model="CustomeID"
        minlength="9"
        maxlength="10"
        show-word-limit
      ></el-input>
      <el-input
        type="number"
        placeholder="Phone Number"
        v-model="PhoneNumber"
        minlength="9"
        maxlength="10"
        show-word-limit
      ></el-input>
      <el-input type="email" placeholder="Email" v-model="Email"></el-input>
      <el-switch
        style="display: block"
        v-model="Gender"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="Male"
        inactive-text="Female"
      ></el-switch>
      <el-date-picker v-model="DateOfBirth" type="date" placeholder="Date Of Birth"></el-date-picker>
      <br>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="addNewCustomer({firstName: CustomerName, lastName: CustomerLastName, custId: CustomeID, phoneNumb:PhoneNumber,dateOfbirth:DateOfBirth,email:Email})"
        >Confirm</el-button>
      </span>
    </div>
  </el-dialog>
  <!-- <el-button
      type="success"
      round
      @click="$emit('addNewCustomer',{firstName: CustomerName, lastName: CustomerLastName, custId: CustomeID, phoneNumb:PhoneNumber,dateOfbirth:DateOfBirth,email:Email})"
    >Save</el-button>
  <el-button type="danger" round>Cancel</el-button>-->
</template>

<script>
import { METHODS } from "http";

export default {
  props: ["show"],
  data() {
    return {
      CustomerName: "",
      CustomeID: "",
      CustomerLastName: "",
      PhoneNumber: "",
      DateOfBirth: "",
      Gender: "",
      Email: ""
    };
  },
  methods: {}
};
</script>

