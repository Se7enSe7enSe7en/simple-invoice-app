<template>
  <q-page class="bg-grey-4" padding>
    <InvoiceContainer>
      <form @submit="submit">
        <h5>From</h5>
        <q-input class="q-mt-sm" outlined dense label="Company Name" />
        <q-input class="q-mt-sm" outlined dense label="Company Email" />

        <h5>To</h5>
        <q-input class="q-mt-sm" outlined dense label="Client Name" />
        <q-input class="q-mt-sm" outlined dense label="Client Email" />

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

              <p class="q-pt-sm q-pl-sm">
                Amount: ₱{{ itemCard.amount(index) }}
              </p>
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
          <div style="min-width: 130px; text-align: right">₱{{ total }}</div>
        </div>
      </form>
    </InvoiceContainer>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed, ComputedRef } from 'Vue';
import InvoiceContainer from 'src/components/InvoiceContainer.vue';
import { Item } from 'src/models/item';

export default defineComponent({
  components: {
    InvoiceContainer,
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
          accumulator + current.quantity * current.price,
        0
      )
    );

    return {
      addItem,
      deleteItem,
      toggleDeleteConfirmation,
      itemCardList,
      total,
    };
  },
});
</script>
