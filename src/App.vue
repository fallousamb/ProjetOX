<template>
  <div id="app">
    <header>
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link class="navbar-brand" :to="{name: 'root'}">OX_Archivage</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" :to="{name: 'recherche'}">Recherche <span class="sr-only">(current)</span></router-link>
            </li>
          </ul>
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="#">Se connecter</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Begin page content -->
    <main role="main" class="flex-shrink-0" style="padding-top: 75px;">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
