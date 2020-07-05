<script>
  import { formatFollowers } from "../common";

  export let title;
  export let icon;
  export let count;
  export let change;
  export let increase;

  const formattedCount = formatFollowers(count);
</script>

<style type="text/scss">
  @import "../styles/styles";

  :global(.dark-mode) {
    .overview-card {
      background-color: $drk-card;

      &__title {
        color: $drk-txt;
      }
    }
  }

  .overview-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: $light-card;
    border-radius: 5px;
    margin-bottom: 1.5rem;

    @include tablet {
      width: 48%;

      &:nth-child(odd) {
        margin-right: 4%;
      }
    }

    @include desktop {
      width: 23%;

      &:nth-child(odd) {
        margin-right: 0;
      }
    }

    &__top,
    &__bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 1.5rem;
    }

    &__top {
      margin-top: 1rem;
    }

    &__title {
      font-weight: 600;
      color: $light-dark-txt;
      font-size: 0.9rem;
    }

    &__img {
      height: 20px;
      width: 20px;
      margin: auto 0;
    }

    &__count {
      font-size: 2.1rem;
      margin: 1rem 0;
    }

    &__change {
      display: flex;
      flex-direction: row;
      position: relative;
      margin: auto 0;
      font-weight: 600;
      font-size: 0.8rem;
      top: 5px;

      &--increase {
        color: $lime-green;
      }

      &--decrease {
        color: $bright-red;
      }
    }

    &__increase {
      @include arrow_up();
      position: relative;
      margin: auto 5px auto 0;
    }

    &__decrease {
      @include arrow_down();
      position: relative;
      margin: auto 3px auto 0;
      top: 2px;
    }
  }
</style>

<section class="overview-card">
  <div class="overview-card__top">
    <p class="overview-card__title">{title}</p>
    <img class="overview-card__img" src={icon} alt="platform icon" />
  </div>
  <div class="overview-card__bottom">
    <h3 class="overview-card__count">{formattedCount}</h3>
    <div
      class="overview-card__change"
      class:overview-card__change--increase={increase}
      class:overview-card__change--decrease={!increase}>
      {#if increase}
        <span class="overview-card__increase" />
      {:else}
        <span class="overview-card__decrease" />
      {/if}
      <p>{change}%</p>
    </div>
  </div>
</section>
