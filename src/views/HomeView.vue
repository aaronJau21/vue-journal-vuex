<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
    <button @click="gotoDaybook" type="button" class="btn btn-primary">Primary</button>
    <button @click="gotoDaybook" type="button" class="btn btn-secondary">Secundary</button>
    <button @click="gotoDaybook" type="button" class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods:{
    gotoDaybook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>