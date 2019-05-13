<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
export default {
  data() {
    return {
      chartSettings: {
        labelMap: {
          balance: "b",
          age: "a"
        }
      },
      chartData: {
        columns: ["date", "balance", "age"],
        rows: [
          { date: "01/01", balance: 123, age: 3 },
          { date: "01/02", balance: 1223, age: 6 },
          { date: "01/03", balance: 2123, age: 9 },
          { date: "01/04", balance: 4123, age: 12 },
          { date: "01/05", balance: 3123, age: 15 },
          { date: "01/06", balance: 7123, age: 20 }
        ]
      }
    };
  }
};
</script>