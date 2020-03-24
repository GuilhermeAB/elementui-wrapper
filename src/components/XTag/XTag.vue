<template>
  <el-tag v-bind='$attrs' v-on='$listeners'>
    <slot />
  </el-tag>
</template>

<script>
  export default {
    name: 'XTag',
    data: function () {
      return {
      };
    },
  };
</script>
