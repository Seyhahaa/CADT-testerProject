<template>
  <div class="" style="background: linear-gradient(130deg, #231a6f, #0f054c)">
    <div class="hero_bg_box"></div>

    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span> Finexo </span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">{{ $t('Home') }}</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              <li class="nav-item active">
                <router-link to="/service" class="nav-link">Service</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="why.html">Why Us</a>
              </li>
              <li class="nav-item">
                <router-link to="/team" class="nav-link">Team</router-link>
              </li>
              <button @click="changeLocale('khm')">English</button>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-user" aria-hidden="true"></i> Login</a
                >
              </li>
              <form class="form-inline">
                <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
  </div>
</template>
<script>
export default {
  methods: {
    changeLocale() {
      if (this.$i18n.locale == 'en'){
      this.$i18n.locale = 'khm'
    }else{
      this.$i18n.locale = 'en'
    }
  }
  }
};
</script>