<template>
  <q-page class="bg-grey-4" padding>
    <q-btn-toggle
      class="my-custom-toggle q-mb-md"
      toggle-color="primary"
      color="white"
      text-color="primary"
      v-model="editMode"
      :options="[
        { label: 'Edit', value: true },
        { label: 'Preview', value: false },
      ]"
    />

    <Invoice :editMode="editMode" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'Vue';
import Invoice from 'src/components/Invoice.vue';

export default defineComponent({
  components: {
    Invoice,
  },
  setup() {
    return {
      editMode: ref(true),
    };
  },
});
</script>
