<template>
  <el-dialog title="Add New Customer" :visible.sync="show" width="30%" center>
    <div class="CustName">
      <el-input placeholder="Customer Name" v-model="editedCustomer.firstName"></el-input>
      <el-input placeholder="Customer LastName" v-model="editedCustomer.lastName"></el-input>

      <el-input
        type="number"
        placeholder="CustomerID"
        v-model="editedCustomer.custId"
        minlength="9"
        maxlength="10"
        show-word-limit
      ></el-input>
      <el-input
        type="number"
        placeholder="Phone Number"
        v-model="editedCustomer.phoneNumb"
        minlength="9"
        maxlength="10"
        show-word-limit
      ></el-input>
      <el-input type="email" placeholder="Email" v-model="editedCustomer.email"></el-input>
      <el-switch
        style="display: block"
        v-model="Gender"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="Male"
        inactive-text="Female"
      ></el-switch>
      <el-date-picker v-model="editedCustomer.dateOfbirth" type="date" placeholder="Date Of Birth"></el-date-picker>
      <br>
      <span slot="footer" class="dialog-footer">
        <el-button @click="$emit('close')">Cancel</el-button>
        <el-button type="primary" @click="save">Save</el-button>
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
import { close } from "fs";
import Custable from "@/components/Custable.vue";

export default {
  props: ["customer", "show"],
  watch: {
    customer() {
      console.log("WATCHED", JSON.stringify(this.customer));

      this.editedCustomer = {
        firstName: this.customer.firstName,
        custId: this.customer.custId,
        lastName: this.customer.lastName,
        phoneNumb: this.customer.phoneNumb,
        dateOfbirth: this.customer.dateOfbirth,
        email: this.customer.email
      };
    }
  },
  data() {
    return {
      editedCustomer: {
        custId: "",
        firstName: ""
      },
      CustomerName: "",
      CustomeID: "",
      CustomerLastName: "",
      PhoneNumber: "",
      DateOfBirth: "",
      Gender: "",
      Email: ""
    };
  },
  methods: {
    save() {
      this.$emit("saveCustomer", {
        firstName: this.CustomerName,
        lastName: this.CustomerLastName,
        custId: this.CustomeID,
        phoneNumb: this.PhoneNumber,
        dateOfbirth: this.DateOfBirth,
        email: this.Email
      });

      this.$emit("hide");
    }
  }
};
</script>

