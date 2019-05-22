<template>
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
    <el-button
      type="success"
      round
      @click="$emit('addNewCustomer',{firstName: CustomerName, lastName: CustomerLastName, custId: CustomeID, phoneNumb:PhoneNumber,dateOfbirth:DateOfBirth,email:Email})"
    >Save</el-button>
    <el-button type="danger" round>Cancel</el-button>
  </div>
</template>

<script>
import { METHODS } from "http";
export default {
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

