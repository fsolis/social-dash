<script>
  import PlatformCard from "./PlatformCard.svelte";

  const platforms = [
    {
      className: "facebook",
      change: 12,
      followers: 1987,
      followerLabel: "followers",
      handle: "@nathanf",
      icon: "../assets/icon-facebook.svg",
      increase: true,
      platformName: "Facebook"
    },
    {
      className: "twitter",
      change: 99,
      followers: 1044,
      followerLabel: "followers",
      handle: "@nathanf",
      icon: "../assets/icon-twitter.svg",
      increase: true,
      platformName: "Twitter"
    },
    {
      className: "instagram",
      change: 1099,
      followers: 11000,
      followerLabel: "followers",
      handle: "@realnathanf",
      icon: "../assets/icon-instagram.svg",
      increase: true,
      platformName: "Instagram"
    },
    {
      className: "youtube",
      change: 144,
      followers: 8239,
      followerLabel: "subscribers",
      handle: "Nathan F.",
      icon: "../assets/icon-youtube.svg",
      increase: false,
      platformName: "Twitter"
    }
  ];
</script>

<style type="text/scss">
  @import "../styles/styles";

  .platform-stats {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    flex-wrap: wrap;

    @include desktop {
      justify-content: space-between;
      flex-wrap: nowrap;
    }
  }
</style>

<div class="platform-stats">
  {#each platforms as platform}
    <PlatformCard {...platform} />
  {/each}
</div>
