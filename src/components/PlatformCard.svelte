<script>
  import { formatFollowers } from "../common";
  export let className;
  export let change;
  export let followers;
  export let followerLabel;
  export let handle;
  export let icon;
  export let increase;
  export let platformName;

  const formattedFollowers = formatFollowers(followers);
</script>

<style type="text/scss">
  @import "../styles/styles";

  .platform-card {
    background-color: $light-gray-blue;
    width: 23%;
    margin: 15px;
    height: 225px;
    border-radius: 5px;
    position: relative;

    &.facebook::after {
      @include platform-card-decorator();
      background-color: $facebook;
    }

    &.twitter::after {
      @include platform-card-decorator();
      background-color: $twitter;
    }

    &.instagram::after {
      @include platform-card-decorator();
      background: $instagram;
    }

    &.youtube::after {
      @include platform-card-decorator();
      background-color: $youtube;
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &__header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 1rem;
    }

    &__img {
      height: 20px;
      width: 20px;
      margin: auto 10px auto 0;
    }

    &__handle {
      color: $dark-gray-blue;
      font-size: 0.8rem;
      font-weight: 700;
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      text-align: center;
    }

    &__count {
      font-size: 3.5rem;
      font-weight: bold;
      margin: 1rem 0 0 0;
    }

    &__count-label {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 0.8rem;
      letter-spacing: 0.25rem;
      margin-top: 0.25rem;
    }

    &__change {
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-weight: 600;
      font-size: 0.85rem;

      &--decrease {
        color: $bright-red;
      }
      &--increase {
        color: $lime-green;
      }
    }

    &__increase {
      @include arrow_up();
      position: relative;
      margin: auto 5px auto 0;
      top: 1px;
    }

    &__decrease {
      @include arrow_down();
      position: relative;
      height: 1px;
      margin: auto 5px auto 0;
      top: 2px;
    }
  }
</style>

<div class="platform-card {className}">
  <div class="platform-card__header">
    <img class="platform-card__img" src={icon} alt={platformName} />
    <p class="platform-card__handle">{handle}</p>
  </div>
  <div class="platform-card__info">
    <p class="platform-card__count">{formattedFollowers}</p>
    <p class="platform-card__count-label">{followerLabel}</p>
    <div
      class="platform-card__change"
      class:platform-card__change--increase={increase}
      class:platform-card__change--decrease={!increase}>
      {#if increase}
        <span class="platform-card__increase" />
      {:else}
        <span class="platform-card__decrease" />
      {/if}
      <p>{change} Today</p>
    </div>
  </div>
</div>
