<template>
  <div class="app-layout">
    <app-header />
    <main>
      <div class="container">
        <slot />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
.app-layout {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header {
  flex-shrink: 0;
}

main {
  flex-grow: 1;
  flex-shrink: 0;
}

footer {
  flex-shrink: 0;
}
</style>
