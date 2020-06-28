<script>
  import Toggle from "./Toggle.svelte";
</script>

<style type="text/scss">
  .page-header {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;

    &__left > h1,
    h5 {
      margin: 0.25rem 0;
    }

    &__right {
      margin: auto 0;
    }
  }
</style>

<div class="page-header">
  <div class="page-header__left">

    <h1>Social Media Dashboard</h1>
    <h5>Total Followers: 23,004</h5>

  </div>

  <div class="page-header__right">
    <Toggle />
  </div>
</div>
