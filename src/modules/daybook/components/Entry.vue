<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name:'entry',params:{id:10}})">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">14</span>
        <span class="mx-1 fs-5">Febrero</span>
        <span class="mx-2 fw-light">2023 Martes</span>
    </div>

    <div class="entry-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat cum accusantium! Possimus assumenda, animi, molestiae atque quae, nam cumque repellendus commodi eos libero recusandae nobis similique at ratione numquam!
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryComponent",
};
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: gray, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description{
        font-size: 12px;
    }
}
</style>
