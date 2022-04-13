<template>
  <div class="grid align-items-center justify-content-center h-screen">
    <Card class="md:col-6 sm:col-9 col-10">
      <template #title>
        <h3 class="text-center">
          {{ message.common.signUp }}
        </h3>
      </template>
      <template #content>
        <form @submit.prevent="handleSubmit()">
          <BaseInputWrapper
              :required="true"
              name="firstName"
              :label="message.signupLabels.firstName"
              :invalid="v$.firstName.$invalid"
              :error-message="v$.firstName.$errors"
          >
            <template #input>
              <InputText
                  type="text"
                  v-model="v$.firstName.$model"
                  class="w-full"
                  :class="{'p-invalid': v$.firstName.$invalid}"
              />
            </template>
          </BaseInputWrapper>
          <BaseInputWrapper
              :required="true"
              name="lastName"
              :label="message.signupLabels.lastName"
              :invalid="v$.lastName.$invalid"
              :error-message="v$.lastName.$errors"
          >
            <template #input>
              <InputText
                  type="text"
                  v-model="v$.lastName.$model"
                  class="w-full"
                  :class="{'p-invalid': v$.lastName.$invalid}"
              />
            </template>
          </BaseInputWrapper>
          <BaseInputWrapper
              :required="true"
              name="firstName"
              :label="message.signupLabels.email"
              :invalid="v$.email.$invalid"
              :error-message="v$.email.$errors"
          >
            <template #input>
              <InputText
                  type="text"
                  v-model="v$.email.$model"
                  class="w-full"
                  :class="{'p-invalid': v$.email.$invalid}"
              />
            </template>
          </BaseInputWrapper>
          <BaseInputWrapper
              :required="true"
              name="firstName"
              :label="message.signupLabels.password"
              :invalid="v$.password.$invalid"
              :error-message="v$.password.$errors"
          >
            <template #input>
              <Password
                  v-model="v$.password.$model"
                  class="w-full"
                  :class="{'p-invalid': v$.password.$invalid}"
                  :feedback="false"
                  :toggleMask="true"
              />
            </template>
          </BaseInputWrapper>
          <Button
              type="submit"
              label="Submit"
              :disabled="!v$.$dirty || v$.$invalid"
          />
        </form>
      </template>
    </Card>
  </div>

</template>

<script lang="ts" setup>
import {computed, reactive} from "vue";

import { useVuelidate } from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import {customRules} from "#app/helpers/validation";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import BaseInputWrapper from "../components/BaseInputWrapper.vue";
import * as message from "#app/messages/base.json";


interface SignUpInterface {
  firstName: string,
  lastName: string,
  password: string,
  email: string,
}

const signUpModel:SignUpInterface = reactive( {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
});

const arr = computed(() => [signUpModel.firstName, signUpModel.lastName])

const rules = computed(() => ({
  firstName: {
    required: helpers.withMessage(message.signUpValidation.firstNameReq, required),
  },
  lastName: {
    required: helpers.withMessage(message.signUpValidation.lastNameReq, required),
  },
  password: {
    required: helpers.withMessage(message.signUpValidation.passwordInvalid, required),
    isValid: helpers.withMessage(
        message.signUpValidation.passwordInvalid,
        helpers.withParams(
            {names: [signUpModel.firstName, signUpModel.lastName]},
            customRules.password([signUpModel.firstName, signUpModel.lastName])
        )
    ),
  },
  email: {
    required: helpers.withMessage(message.signUpValidation.emailReq, required),
    isValid: helpers.withMessage(message.signUpValidation.emailInvalid, customRules.email)
  }
}));

const v$ = useVuelidate(rules, signUpModel, {$lazy: true});

const handleSubmit = ():void => {
  console.log(signUpModel);
}

</script>

<style scoped lang="less">

</style>
