<template>
  <CardNumber />
  <CurrencyRates />
</template>

<script>
import CardNumber    from '@/components/CardNumber.vue'
import CurrencyRates from '@/components/CurrencyRates.vue'

export default {
  name: 'PaymentView',
  components: { CardNumber, CurrencyRates }
}
</script>