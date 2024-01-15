<template>
  <div
    class="notification"
    :class="{
      'notification_active': $notification.active()
    }"
    :style="{
      'background-color': options.backgroundColor || 'green'
    }"
  >
    <svg-icon
      v-show="options.icon"
      :name="options.icon"
      width="12"
      height="12"
      class="notification__icon"
    />
    <span class="notification__label">{{ options.label }}</span>
  </div>
</template>

<script setup>
const $notification = inject('$notification');

const options = computed(() => $notification.options());
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  z-index: 4;
  padding: 1rem;
  border-radius: 1rem;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%) translateY(20px);
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color:green;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;

  &_active {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.notification__icon {
  flex-shrink: 0;
}

.notification__label {
  color: white;
  font-size: 1rem;
  font-family: Ubuntu;
  font-size: 1rem;
  font-weight: 300;
}
</style>
