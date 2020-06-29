<script>
  import PageHeader from "./components/PageHeader.svelte";
  import Footer from "./components/Footer.svelte";

  import { darkMode } from "./store";

  let isDarkMode;

  const unsub = darkMode.subscribe(v => {
    isDarkMode = v;
  });
</script>

<style type="text/scss">
  @import "./styles/variables";

  .social-dash {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;

    &.dark-mode {
      color: $drk-white;
      background-color: $drk-blue-bg;
    }
  }
</style>

<main class="social-dash" class:dark-mode={isDarkMode === true}>
  <PageHeader />
  <Footer />
</main>
