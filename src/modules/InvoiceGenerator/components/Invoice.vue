<template>
  <InvoiceContainer>
    <form v-if="editMode" class="edit">
      <h5>From</h5>
      <q-input
        class="q-mt-sm"
        outlined
        dense
        label="Company Name"
        v-model="invoice.company.name"
      />
      <q-input
        class="q-mt-sm"
        outlined
        dense
        label="Company Email"
        v-model="invoice.company.email"
      />

      <h5>To</h5>
      <q-input
        class="q-mt-sm"
        outlined
        dense
        label="Client Name"
        v-model="invoice.client.name"
      />
      <q-input
        class="q-mt-sm"
        outlined
        dense
        label="Client Email"
        v-model="invoice.client.email"
      />

      <h5>Items</h5>
      <div
        class="q-mt-sm"
        v-for="(itemCard, index) in itemCardList"
        :key="index"
      >
        <q-card class="my-card">
          <div class="bg-primary" style="height: 5px"></div>
          <q-card-section>
            <q-input
              class="q-mt-sm bg-white"
              outlined
              dense
              label="Item Description"
              v-model="itemCard.description"
            />

            <div class="row">
              <q-input
                class="q-mt-sm"
                outlined
                dense
                label="Item Price"
                v-model="itemCard.price"
                style="width: 100px"
              />

              <div
                class="text-primary q-pt-md q-pl-sm q-pr-sm"
                style="font-size: 1em"
              >
                ✕
              </div>

              <q-input
                class="q-mt-sm"
                outlined
                dense
                label="Item Quantity"
                v-model="itemCard.quantity"
                style="width: 100px"
              />
            </div>

            <p class="q-pt-sm q-pl-sm">Amount: {{ itemCard.amount(index) }}</p>
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn
              class="q-pl-sm q-pr-sm"
              color="negative"
              flat
              @click="toggleDeleteConfirmation(index)"
              icon="delete"
              v-if="!itemCard.isDeleteConfirm"
            >
              delete
            </q-btn>

            <div v-else>
              <q-btn
                class="q-pl-sm q-pr-sm"
                color="negative"
                @click="deleteItem(index)"
                icon="delete"
              >
                confirm
              </q-btn>

              <q-btn
                class="q-pl-sm q-pr-sm"
                color="negative"
                flat
                @click="toggleDeleteConfirmation(index)"
                icon="cancel"
              >
                cancel
              </q-btn>
            </div>
          </q-card-actions>
        </q-card>
      </div>

      <div
        style="
          margin: auto;
          display: flex;
          justify-content: center;
          width: 100%;
        "
      >
        <q-btn
          class="q-mt-sm q-pr-sm"
          color="positive"
          dense
          @click="addItem"
          icon="add"
        >
          Add
        </q-btn>
      </div>

      <div
        class="row"
        style="width: 100%; display: flex; justify-content: flex-end"
      >
        Total:
        <div style="min-width: 130px; text-align: right">
          {{ invoice.total }}
        </div>
      </div>
    </form>

    <div v-else class="preview">
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
          <h6 class="q-my-none">From:</h6>
          <h5 class="q-mt-sm q-mb-md">
            <!-- <b>Jedden Mendoza</b> -->
            <b>{{ invoice.company.name }}</b>
          </h5>
          <!-- <p>jedden.mendoza@gmail.com</p> -->
          <p>{{ invoice.company.email }}</p>
        </div>

        <div class="bg-pink-4">
          <h6 class="q-my-none">Bill to:</h6>
          <h5 class="q-mt-sm q-mb-md">
            <!-- <b>Dwayne "The Rock" Johnson</b> -->
            <b>{{ invoice.client.name }} </b>
          </h5>
          <!-- <p>stone@gmail.com</p> -->
          <p>{{ invoice.client.email }}</p>
        </div>
      </div>
      <div class="bg-teal-3">
        <div class="bg-teal-9">
          <b>INVOICE ID:</b>
          <!-- <p>INV0001</p> -->
          <p>{{ invoice.id }}</p>
        </div>
        <div class="bg-teal-7">
          <b>DATE:</b>
          <p>23 Aug 2021</p>
        </div>
        <div class="bg-teal-5">
          <b>DUE:</b>
          <p>On Receipt</p>
        </div>
      </div>
      <!-- <q-table
        class="item-table"
        dense
        :rows="rows"
        :columns="columns"
        row-key="description"
        :rows-per-page-options="[0]"
        :hide-bottom="true"
      /> -->
      <q-markup-table dense>
        <thead class="bg-primary text-white">
          <tr>
            <th class="text-left">Description</th>
            <th class="text-right">Price</th>
            <th class="text-right">Quantity</th>
            <th class="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in invoice.itemList" :key="item.description">
            <td class="text-left">{{ item.description }}</td>
            <td class="text-right">{{ item.price }}</td>
            <td class="text-right">{{ item.quantity }}</td>
            <td class="text-right">{{ item.price * item.quantity }}</td>
          </tr>
        </tbody>
      </q-markup-table>
      <div class="bg-red-5 row justify-end">
        <!-- <div class="text-h6 text-right">Total: {{ invoice.total }}</div> -->
        <!-- <tr>
          <td class="text-right">Total</td>
          <td class="text-h6 text-right">{{ invoice.total }}</td>
        </tr> -->
        <div class="col-shrink text-h6 text-right bg-red-3">Total:</div>
        <div
          class="col-auto text-h6 text-right bg-red-2"
          style="min-width: 30%"
        >
          {{ invoice.total }}
        </div>
      </div>
    </div>
  </InvoiceContainer>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, watchEffect } from 'Vue';
import InvoiceContainer from 'src/modules/InvoiceGenerator/components/InvoiceContainer.vue';
import { Item } from 'src/modules/InvoiceGenerator/models/item';
import { Invoice } from 'src/modules/InvoiceGenerator/models/invoice';
import { unextendObject } from 'src/utils/typeScriptToolBox';
import { Money } from 'src/modules/InvoiceGenerator/models/money';
// import currency from 'currency.js';

export default defineComponent({
  components: {
    InvoiceContainer,
  },
  props: {
    editMode: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    interface ItemCard extends Item {
      isDeleteConfirm: boolean;
      amount: Ref;
      // amount: Ref<(index: number) => number>;
      // amount(index: number): number;
    }

    const computedAmount = ref(
      (index: number) =>
        itemCardList.value[index].price * itemCardList.value[index].quantity
      // itemCardList.value[index].price.multiply(
      //   itemCardList.value[index].quantity
      // )
    );

    const itemCardList: Ref<Array<ItemCard>> = ref<Array<ItemCard>>([
      {
        description: '',
        price: 0,
        quantity: 1,
        isDeleteConfirm: false,
        amount: computedAmount,
      },
    ]);

    function addItem() {
      itemCardList.value.push({
        description: '',
        price: 0,
        quantity: 1,
        isDeleteConfirm: false,
        amount: computedAmount,
      });
      // console.log(invoice.value); // DEBUG
    }

    function deleteItem(index: number) {
      itemCardList.value.splice(index, 1);
    }

    function toggleDeleteConfirmation(index: number) {
      itemCardList.value[index].isDeleteConfirm =
        !itemCardList.value[index].isDeleteConfirm;
    }

    const total = computed(() =>
      itemCardList.value.reduce(
        (accumulator: number, current: ItemCard) =>
          accumulator + current.price * current.quantity,
        0
      )
    );

    function itemCardToItem(itemCard: ItemCard): Item {
      return {
        description: itemCard.description,
        price: itemCard.price,
        quantity: itemCard.quantity,
      };
    }

    const itemList = ref(() =>
      itemCardList.value.map((itemCard) => itemCardToItem(itemCard))
    );

    // const itemList = ref(
    //   itemCardList.value.map((itemCard) => itemCardToItem(itemCard))
    // );

    // const itemList = computed(() =>
    //   // itemCardList.value.map((itemCard) => itemCardToItem(itemCard))
    //   itemCardList.value.map((itemCard) =>
    //     unextendObject(itemCard, {
    //       description: '',
    //       quantity: 0,
    //       price: 0,
    //     })
    //   )
    // );

    const invoice = ref<Invoice>({
      id: Date.now(),
      company: {
        id: Date.now(),
        name: '',
        email: '',
      },
      client: {
        id: Date.now(),
        name: '',
        email: '',
      },
      itemList: itemList.value(),
      total: total.value,
    });

    // watchEffect(() => {
    //   invoice.value = {
    //     id: Date.now(),
    //     company: {
    //       id: Date.now(),
    //       name: '',
    //       email: '',
    //     },
    //     client: {
    //       id: Date.now(),
    //       name: '',
    //       email: '',
    //     },
    //     itemList: itemList.value,
    //     total: total.value,
    //   };
    // });

    // function currencyFormat(n: number) {
    //   return new Intl.NumberFormat('es-US', {
    //     style: 'currency',
    //     currency: 'PHP',
    //   }).format(n);
    // }

    watchEffect(() => {
      invoice.value.itemList = itemList.value();
      invoice.value.total = total.value;
    });

    return {
      addItem,
      deleteItem,
      toggleDeleteConfirmation,
      itemCardList,
      total,
      invoice,
    };
  },
});
</script>
