<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const messages = {
  hello: "world"
}
 
type langs = 'en';
type MessageSchema = typeof messages;

const i18n = useI18n<MessageSchema, langs>({ useScope: 'global' });
i18n.setLocaleMessage('en', messages)
// alert(i18n.t('hello'))

</script>

<template>
  <main>
    {{ $t('hello') }}
  </main>
</template>

<style scoped>
</style>
