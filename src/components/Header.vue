<template>
    <div><div>
            <el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple">Date</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">Welcome</div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">Logo</div></el-col>
 </el-row>
</div>
<div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">לקוחות</el-menu-item>
  <el-menu-item index="2">סידור עבודה</el-menu-item>
  <el-menu-item index="3">כספים ותשלומים</el-menu-item>
    </el-menu>
</div>
    </div>


</template>

<script>
    export default {
        name:"Header",

    }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #ff5e00;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-menu.el-menu--horizontal>.el-menu-item {
      float: right;
  }  
</style>