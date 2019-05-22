<template>
  <div>
    <el-button type="primary">Add New Customer</el-button>

    <el-table
      :data="customers.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Date of birth" prop="dateOfbirth"></el-table-column>
      <el-table-column label="First Name" prop="firstName"></el-table-column>
      <el-table-column label="Last Name" prop="lastName"></el-table-column>
      <el-table-column label="Phone Number" prop="phoneNumb"></el-table-column>
      <el-table-column label="CustomerID" prop="custId"></el-table-column>
      <el-table-column label="Email" prop="email"></el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="Type to search"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { customers } from "../data/data";
export default {
  props: ["customers"],
  data() {
    return {
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>