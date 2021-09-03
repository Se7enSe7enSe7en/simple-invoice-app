<template>
  <q-page class="bg-grey-4" padding>
    <InvoiceContainer>
      <div class="bg-orange-3 row justify-between" style="height: 175px">
        <h5>INVOICE</h5>
        <div
          class="bg-brown-3"
          style="
            width: 175px;
            height: 175px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          Company Logo
        </div>
      </div>
      <div class="bg-blue-2 row justify-between">
        <div class="bg-green-4">
          <h7>From:</h7>
          <h6>Jedden Mendoza</h6>
          <p>jedden.mendoza@gmail.com</p>
        </div>

        <div class="bg-pink-4">
          <h7>Bill to:</h7>
          <h6>Dwayne "The Rock" Johnson</h6>
          <p>stone@gmail.com</p>
        </div>

        <div class="bg-teal-3">
          <div class="bg-teal-9">
            <b>INVOICE</b>
            <p>INV0001</p>
          </div>
          <div class="bg-teal-7">
            <b>DATE</b>
            <p>23 Aug 2021</p>
          </div>
          <div class="bg-teal-5">
            <b>DUE</b>
            <p>On Receipt</p>
          </div>
        </div>
      </div>
      <q-table
        class="item-table"
        dense
        :rows="rows"
        :columns="columns"
        row-key="description"
        :rows-per-page-options="[0]"
        :hide-bottom="true"
      />
      <!-- <q-markup-table dense>
        <thead class="bg-primary text-white">
          <tr>
            <th class="text-left">Description</th>
            <th class="text-right">Price</th>
            <th class="text-right">Quantity</th>
            <th class="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">Frozen Yogurt</td>
            <td class="text-right">159</td>
            <td class="text-right">6</td>
            <td class="text-right">24</td>
          </tr>
          <tr>
            <td class="text-left">Ice cream sandwich</td>
            <td class="text-right">237</td>
            <td class="text-right">9</td>
            <td class="text-right">37</td>
          </tr>
          <tr>
            <td class="text-left">Eclair</td>
            <td class="text-right">262</td>
            <td class="text-right">16</td>
            <td class="text-right">23</td>
          </tr>
          <tr>
            <td class="text-left">Cupcake</td>
            <td class="text-right">305</td>
            <td class="text-right">3.7</td>
            <td class="text-right">67</td>
          </tr>
          <tr>
            <td class="text-left">Gingerbread</td>
            <td class="text-right">356</td>
            <td class="text-right">16</td>
            <td class="text-right">49</td>
          </tr>
        </tbody>
      </q-markup-table> -->
    </InvoiceContainer>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InvoiceContainer from 'src/components/InvoiceContainer.vue';

export default defineComponent({
  components: {
    InvoiceContainer,
  },
  setup() {
    const columns = [
      {
        name: 'description',
        required: true,
        label: 'DESCRIPTION',
        align: 'left',
        field: (row) => row.name,
        sortable: true,
      },
      {
        name: 'price',
        align: 'right',
        label: 'PRICE',
        field: 'calories',
        format: (val) => `₱${val}`,
        sortable: true,
      },
      {
        name: 'quantity',
        align: 'right',
        label: 'QUANTITY',
        field: 'calories',
        format: (val) => `✕${val}`,
        sortable: true,
      },
      {
        name: 'amount',
        align: 'right',
        label: 'AMOUNT',
        field: 'calories',
        format: (val) => `₱${val}`,
        sortable: true,
      },
    ];

    const rows = [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%',
      },
      {
        name: 'DONUT',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%',
      },
    ];
    return {
      rows,
      columns,
    };
  },
});
</script>

<style lang="sass">
@import "src/css/css-toolbox.scss"
.item-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    $bg-clr: $primary
    background: $bg-clr
    color: adapt-text-color($bg-clr)

  thead tr th
    position: sticky
    z-index: 1

  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
