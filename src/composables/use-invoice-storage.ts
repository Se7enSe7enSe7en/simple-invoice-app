import { Invoice } from 'src/models/invoice'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const _invoiceList = ref<Array<Invoice>>([])

export function useInvoiceStrorage() {
    
    const invoiceList = computed(() => _invoiceList.value)

    function addInvoice(data: Invoice) {
        _invoiceList.value.push(data)
    }

    function getInvoiceById(id: number) {
        return _invoiceList.value.find(obj => obj.id === id)
    }

    function deleteInvoiceById(id: number) {
        _invoiceList.value.splice(_invoiceList.value.findIndex(obj => obj.id === id))
    }

    // TMP: Edit Invoice function

    return {
        invoiceList,
    }
}