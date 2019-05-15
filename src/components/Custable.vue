<template>
  <div>
    <el-button type="primary">Add New Customer</el-button>

    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="Date" prop="date"></el-table-column>
      <el-table-column label="First Name" prop="firstName"></el-table-column>
      <el-table-column label="Last Name" prop="lastName"></el-table-column>
      <el-table-column label="Phone Number" prop="phoneNumb"></el-table-column>
      <el-table-column label="CustomerID" prop="custId"></el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
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
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          firstName: "Tom",
          lastName: "Caspi",
          phoneNumb: "0585566288",
          custId: "asda@asda.com",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-02",
          firstName: "John",
          lastName: "Caspi",
          phoneNumb: "0585566288",
          custId: "asda@asda.com",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-04",
          firstName: "Morgan",
          lastName: "Caspi",
          phoneNumb: "0585566288",
          custId: "asda@asda.com",
          address: "No. 189, Grove St, Los Angeles"
        },
        {
          date: "2016-05-01",
          firstName: "Jessy",
          lastName: "Caspi",
          phoneNumb: "0585566288",
          custId: "asda@asda.com",
          address: "No. 189, Grove St, Los Angeles"
        }
      ],
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