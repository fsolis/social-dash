<script>
  import PageHeader from "./components/PageHeader.svelte";
  import Footer from "./components/Footer.svelte";
  import PlatformStats from "./components/PlatformStats.svelte";
  import Overview from "./components/Overview.svelte";

  import { darkMode } from "./store";

  let isDarkMode;

  const unsub = darkMode.subscribe(v => {
    isDarkMode = v;
  });
</script>

<style type="text/scss">
  @import "./styles/styles";

  .social-dash {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    position: relative;

    &:after {
      content: "";
      background-color: $light-top-bg;
      height: 20%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }

    .page,
    .content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .page {
      margin: 2rem 10%;
    }
  }

  .dark-mode.social-dash {
    color: $drk-white-txt;
    background-color: $drk-bg;

    &:after {
      content: "";
      background-color: $drk-top-bg;
      height: 20%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }
  }
</style>

<main class="social-dash" class:dark-mode={isDarkMode === true}>
  <section class="page">
    <PageHeader />
    <section class="content">
      <PlatformStats />

      <Overview />
    </section>
    <Footer />
  </section>
</main>
