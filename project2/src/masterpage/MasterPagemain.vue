<template>
  <div>
    <div>
      <slot name="header"> HELLO! </slot>
    </div>
    <div>
      <slot>
        <h1>Super company!</h1>
      </slot>
    </div>
    <div>
      <slot name="footer"> CONTACTS! </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterPagemain",
};
</script>

<style lang="scss" scoped></style>
