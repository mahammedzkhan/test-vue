<script>
export default {
  props: {
    label: String,
  },
};
</script>

<template>
  <label for="{{label.toLowerCase()}}">{{ label }}</label
  ><input
    type="checkbox"
    name="{{label.toLowerCase()}}"
    id="{{label.toLowerCase()}}"
/>
</template>