<script>
  const handleClick = () => {
    console.log("Clicked");
  };
</script>

<style type="text/scss">
  .toggle {
    display: flex;
    flex-direction: row;

    $toggle-color: hsl(230, 22%, 74%);

    &__description {
      font-weight: 700;
      margin: auto 1rem auto 0;
      color: $toggle-color;
    }

    &__btn {
      position: relative;
      background: $toggle-color;
      width: 60px;
      height: 30px;
      border-radius: 50px;

      &:after {
        content: "";
        position: absolute;
        height: 24px;
        width: 24px;
        background-color: white;
        border-radius: 50%;
        top: 3px;
        right: 3px;
      }
    }
  }
</style>

<div class="toggle">
  <div class="toggle__description">Dark Mode</div>
  <div class="toggle__btn" on:click={handleClick} />
</div>
