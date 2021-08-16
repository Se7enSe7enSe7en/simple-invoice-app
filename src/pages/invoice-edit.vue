<template>
  <q-page padding>
    <InvoiceContainer>
      <form @submit="submit">
        <h5>From</h5>
        <q-input class="q-mt-sm" outlined dense label="Company Name" />
        <q-input class="q-mt-sm" outlined dense label="Company Email" />

        <h5>To</h5>
        <q-input class="q-mt-sm" outlined dense label="Client Name" />
        <q-input class="q-mt-sm" outlined dense label="Client Email" />

        <h5>Items</h5>
        <q-card class="my-card">
          <q-card-section>
            <q-input
              class="q-mt-sm bg-white"
              outlined
              dense
              label="Item Description"
            />

            <q-input class="q-mt-sm" outlined dense label="Item Price" />

            <q-input class="q-mt-sm" outlined dense label="Item Quantity" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn flat>Delete</q-btn>
          </q-card-actions>
        </q-card>
      </form>
    </InvoiceContainer>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'Vue';
import InvoiceContainer from 'src/components/InvoiceContainer.vue';

export default defineComponent({
  components: {
    InvoiceContainer,
  },
  setup() {
    return {
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };
  },
});
</script>
