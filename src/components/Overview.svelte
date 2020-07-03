<script>
  import OverviewCard from "./OverviewCard.svelte";

  const overviewCards = [
    {
      title: "Page Views",
      icon: "../assets/icon-facebook.svg",
      count: 87,
      change: 3,
      increase: true
    },
    {
      title: "Likes",
      icon: "../assets/icon-facebook.svg",
      count: 52,
      change: 2,
      increase: false
    },
    {
      title: "Likes",
      icon: "../assets/icon-instagram.svg",
      count: 5462,
      change: 2257,
      increase: false
    },
    {
      title: "Profile Views",
      icon: "../assets/icon-instagram.svg",
      count: 52000,
      change: 1375,
      increase: true
    },
    {
      title: "Retweets",
      icon: "../assets/icon-twitter.svg",
      count: 117,
      change: 303,
      increase: true
    },
    {
      title: "Likes",
      icon: "../assets/icon-twitter.svg",
      count: 507,
      change: 553,
      increase: true
    },
    {
      title: "Likes",
      icon: "../assets/icon-youtube.svg",
      count: 107,
      change: 19,
      increase: false
    },
    {
      title: "Total Views",
      icon: "../assets/icon-youtube.svg",
      count: 1407,
      change: 12,
      increase: false
    }
  ];
</script>

<style type="text/scss">
  @import "../styles/styles";

  .overview {
    display: flex;
    flex-direction: column;

    &__heading {
      color: $dark-gray-blue;
    }

    &__cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>

<section class="overview">
  <h2 class="overview__heading">Overview - Today</h2>
  <div class="overview__cards">
    {#each overviewCards as overviewCard}
      <OverviewCard {...overviewCard} />
    {/each}
  </div>
</section>
