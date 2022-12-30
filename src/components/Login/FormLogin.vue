<template lang="">
  <div>
    <form action="" class="w-full">
      <LabelForm for="email" label="Email" class="w-full">
        <InputForm
          input_type="email"
          input_id="email"
          :model="email"
          holder="emailexample@email.com"
        />
      </LabelForm>
      <LabelForm for="password" label="Senha" class="w-full">
        <InputForm
          input_type="text"
          input_id="password"
          :model="password"
          holder="*************"
        />
      </LabelForm>
    </form>
  </div>
</template>
<script>
import InputForm from "./InputForm.vue";
import LabelForm from "./LabelForm.vue";

export default {
  components: {
    InputForm,
    LabelForm,
  },
};
</script>
<style lang=""></style>
