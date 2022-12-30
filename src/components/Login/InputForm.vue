<template lang="">
  <div>
    <input
      :type="input_type"
      :id="input_id"
      :placeholder="holder"
      v-model="model"
      required="true"
      class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      // model: '',
    };
  },
  props: {
    input_type: String,
    input_id: String,
    holder: String,
    model: String,
  },
  methods: {
    enterInput() {},
  },
};
</script>
<style lang=""></style>
