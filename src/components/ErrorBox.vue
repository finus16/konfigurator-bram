<template>
  <div v-if="errors && errors.length>0" class="row justify-content-center">
    <div class="col-6">
      <div class="alert alert-danger">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{error}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorBox',
  props: [
    'errors'
  ]
}
</script>

<style scoped>

</style>
