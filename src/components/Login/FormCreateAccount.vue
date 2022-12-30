<template lang="">
  <div>
    <form action="" class="w-full">
      <LabelForm for="name" label="Nome Completo" class="w-full">
        <InputForm
          input_type="text"
          input_id="name"
          :model="name"
          holder="Ex: Mateus Lopes Albao"
        />
      </LabelForm>
      <LabelForm for="tel" label="Telefone" class="w-full">
        <InputForm
          input_type="tel"
          input_id="tel"
          :model="tel"
          holder="Ex: (47) 999180331"
        />
      </LabelForm>
      <LabelForm for="address" label="Endereço" class="w-full">
        <InputForm
          input_type="text"
          input_id="address"
          :model="address"
          holder="Ex: Rua Valdemaro S. Maia, 116"
        />
      </LabelForm>
      <LabelForm for="email" label="Email" class="w-full">
        <InputForm
          input_type="email"
          input_id="email"
          :model="email"
          holder="Ex: emailexample@email.com"
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
