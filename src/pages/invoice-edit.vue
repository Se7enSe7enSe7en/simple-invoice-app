<template>
  <q-page padding class="bg-grey-4">
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
                v-model="itemCard.item.description"
              />

              <q-input
                class="q-mt-sm"
                outlined
                dense
                label="Item Price"
                v-model="itemCard.item.price"
              />

              <q-input
                class="q-mt-sm"
                outlined
                dense
                label="Item Quantity"
                v-model="itemCard.item.quantity"
              />

              <p class="q-pt-sm">Amount: ${{ itemCard.amount }}</p>
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
                  @click.stop="deleteItem(index)"
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
      </form>
    </InvoiceContainer>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed, ComputedRef } from 'Vue';
import InvoiceContainer from 'src/components/InvoiceContainer.vue';
import { Item } from 'src/models/item';

export default defineComponent({
  components: {
    InvoiceContainer,
  },
  setup() {
    const itemList = ref<Array<Item>>([
      {
        description: '',
        price: 0,
        quantity: 1,
      },
    ]);

    interface ItemCard {
      item: Item;
      isDeleteConfirm: boolean;
      amount: ComputedRef<number>;
    }

    // function computedAmount(index: number) {
    //   return itemList.value[index].price * itemList.value[index].quantity;
    // }
    // const computedAmount = computed((index: number) => {
    //   return itemList.value[index].price * itemList.value[index].quantity;
    // });

    const itemCardList = ref<Array<ItemCard>>([
      {
        item: itemList.value[0],
        isDeleteConfirm: false,
        amount: computed(() => {
          return itemList.value[0].price * itemList.value[0].quantity;
        }),
      },
    ]);

    function addItem() {
      itemList.value.push({
        description: '',
        price: 0,
        quantity: 1,
      });

      const newAddedItemIndex = itemList.value.length - 1;
      const newAddedItem = itemList.value[newAddedItemIndex];

      itemCardList.value.push({
        item: newAddedItem,
        isDeleteConfirm: false,
        amount: computed(() => {
          return (
            itemList.value[newAddedItemIndex].price *
            itemList.value[newAddedItemIndex].quantity
          );
        }),
      });
    }

    function deleteItem(index: number) {
      itemList.value.splice(index, 1);
      itemCardList.value.splice(index, 1);
    }

    function toggleDeleteConfirmation(index: number) {
      itemCardList.value[index].isDeleteConfirm =
        !itemCardList.value[index].isDeleteConfirm;
    }

    return {
      addItem,
      deleteItem,
      toggleDeleteConfirmation,
      itemCardList,
    };
  },
});
</script>
