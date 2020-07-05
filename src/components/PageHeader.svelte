<script>
  import Toggle from "./Toggle.svelte";
</script>

<style type="text/scss">
  @import "../styles/styles";

  .page-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__left > h1,
    &__left > h4 {
      font-weight: $bold;
      margin: 0.25rem 0;
    }

    &__left > h4 {
      color: $light-dark-txt;
    }

    &__right {
      margin: auto 0;
    }
  }
</style>

<div class="page-header">
  <div class="page-header__left">

    <h1>Social Media Dashboard</h1>
    <h4>Total Followers: 23,004</h4>

  </div>

  <div class="page-header__right">
    <Toggle />
  </div>
</div>
