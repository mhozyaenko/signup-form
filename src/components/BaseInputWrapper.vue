<template>
  <div
      class="field field-required pt-3"
      :class="{'field-required': required}"
  >
    <span class="p-float-label w-full">
      <slot name="input">

      </slot>
      <label :for="name">{{ label }}</label>
    </span>

    <div v-if="invalid">
      <small
          v-for="(error, idx) in errorMessage"
          :key="idx"
          class="p-error"
      >
        {{error.$message}}
      </small>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";
import {ErrorObject} from "@vuelidate/core";

interface InputGroupProps {
  required: boolean,
  name: string,
  invalid: boolean,
  errorMessage: Array<ErrorObject>,
  label: string,
}

const {required, name, invalid, errorMessage, label} = defineProps<InputGroupProps>();

</script>

<style scoped lang="less">
::v-deep(.p-password input) {
  width: 100%;
}
.field-required {
  label:after {
    content: "*";
    font-size: 1em;
    margin-bottom: .5em;
  }
}
small {
  display: block;
}
</style>
