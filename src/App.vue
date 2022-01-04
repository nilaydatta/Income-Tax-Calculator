<template>
  <section class="index-section" id="index-section">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand"
          >Income Tax Calculator</router-link
        >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/old" class="nav-link">Old Tax Regime</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/new" class="nav-link">New Tax Regime</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">References</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
.index-section {
  .navbar-nav {
    align-items: center;
    .nav-link.router-link-active {
      color: rgba(255, 255, 255, 0.75);
    }
  }
}
</style>
