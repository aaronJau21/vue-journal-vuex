import { defineAsyncComponent } from '@vue/runtime-core';
<template>
  <div class="entr-title d-flex justify-content-between p-2">
    <div>
        <span class="text-succes fs-3 fw-bold">16</span>
        <span class="mx-1 fs-3">Febrero</span>
        <span class="mx-2 fs-4 fw-light">2023</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>

        <button class="btn btn-primary">
            Subir foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Ingrese" class="form-control">

        </textarea>
    </div>
    <Fab 
        icon="fa-save"/>

    <img src="https://i.pinimg.com/originals/c5/be/16/c5be16a922f811931f3a37592f8532a6.png" alt="entry-picture" class="img-thumbnail">

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    name:'EntryView',
    components:{
        Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border:none;
    height: 100%;

    &:focus{
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>