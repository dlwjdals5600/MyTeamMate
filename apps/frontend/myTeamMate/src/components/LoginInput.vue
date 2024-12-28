<template>
  <div class="input-group">
    <label :for="id" class="label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    id: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    modelValue: String, // 읽기 전용 속성
  },
  emits: ['update:modelValue'], // 부모에게 값 변경 알림
};
</script>

<style scoped>
.input-group {
  margin-bottom: 16px;
}
.label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s;
}
.input:focus {
  border-color: #007bff;
  outline: none;
}
</style>