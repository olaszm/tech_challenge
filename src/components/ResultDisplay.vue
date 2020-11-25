<template>
  <div v-if="calculatedIncome.bandName">
    <h2>Tax Calculation Results</h2>

    <h3>Gross Salary: {{ initialSalary }}</h3>

    <div class="table-container">
      <table>
        <thead>
          <th>Band Name</th>
          <th>Rate</th>
          <th>Net Salary</th>
          <th>Tax</th>
          <th>National Insurance</th>
        </thead>
        <tbody>
          <tr>
            <td>
              {{ calculatedIncome.bandName }}
            </td>
            <td>{{ calculatedIncome.rate }}%</td>
            <td>£{{ calculatedIncome.netIncome }}</td>
            <td>£{{ calculatedIncome.lost }}</td>
            <td>£{{ insuranceLoss }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["calculatedIncome", "insuranceLoss", "initialSalary"]),
  },
};
</script>

<style lang='scss' scoped>
@import "../styles/_variables.scss";

.table-container {
  @media (max-width: $mobile) {
    overflow-x: scroll;

    * {
      scrollbar-width: thin;
    }
    *::-webkit-scrollbar {
      width: 12px;
    }
  }
}

h3 {
  margin: 2rem 0;
}

table {
  margin: 1rem 0;
  width: 100%;
  text-align: left;
  border: 1px solid #ced4da;
  border-radius: 4px;
  border-collapse: collapse;

  th {
    background-color: $primary;
    color: $white;
    padding: 0.5em 0.3em;
  }
  tbody {
    tr {
      &:nth-child(2) {
        background-color: #ced4da8f;
      }
    }
    td {
      padding: 0.5em 0.3em;
    }
  }
}
</style>