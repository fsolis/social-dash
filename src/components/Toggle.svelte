<script>
  import { darkMode } from "../store";

  let isDarkMode;

  const unsubscribe = darkMode.subscribe(v => {
    isDarkMode = v;
  });

  const handleClick = () => {
    darkMode.update(d => !d);
  };
</script>

<style type="text/scss">
  @import "../styles/variables";

  .dark-mode .toggle__btn:after {
    background-color: $drk-blue-bg;
  }

  .toggle {
    display: flex;
    flex-direction: row;

    &__description {
      font-weight: 700;
      margin: auto 1rem auto 0;
      color: $toggle-light;
    }

    &__btn {
      position: relative;
      background: $toggle-light;
      width: 60px;
      height: 30px;
      border-radius: 50px;

      &:active {
        background: $toggle-dark;
      }

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

    &.toggled {
      .toggle__btn {
        background: $toggle-dark;
      }

      .toggle__btn:after {
        right: 0;
        left: 3px;
      }
    }
  }
</style>

<div class="toggle" class:toggled={isDarkMode === true}>
  <div class="toggle__description">Dark Mode</div>
  <div class="toggle__btn" on:click={handleClick} />
</div>
