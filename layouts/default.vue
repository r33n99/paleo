<template>
  <v-app style="background: #F4F4F4">
    <v-main class="pa-0">
      <slot></slot>
    </v-main>
    <v-footer v-if="windowWidth > 1024" color="#0D0D0D" class="pa-0 ma-0">
      <v-card color="transparent" class="page-wrapper pt-120 pb-16" rounded="0" elevation="0">
        <v-card-text class="pa-0 px-16 mx-8 d-flex flex-column">
          <div class="d-flex justify-space-between align-center">
            <span class="text-48 text-white">Написать нам</span>
            <div>
                <span style="color: #ECEEEC" class="font-weight-300 text-20"><NuxtLink
                    :to="{ path: '/', hash: '#projects' }" class="cursor-pointer nav-item text-decoration-none text-white-second"
                >Проекты</NuxtLink><span
                    style="color: #3C403C"
                    class="font-weight-400 mx-5">/</span><NuxtLink :to="{ path: '/', hash: '#info' }"
                                                                   class="cursor-pointer nav-item text-decoration-none text-white-second"
                >Кто мы такие</NuxtLink><span
                    style="color: #3C403C" class="font-weight-400 mx-5">/</span><NuxtLink
                    :to="{ path: '/', hash: '#services' }"
                    class="cursor-pointer nav-item text-decoration-none text-white-second"
                >Услуги</NuxtLink>
                  <span
                      style="color: #3C403C" class="font-weight-400 mx-5">/</span>
                <NuxtLink :to="{ path: '/', hash: '#contacts' }" class="cursor-pointer nav-item text-decoration-none text-white-second"
                >Контакты</NuxtLink>
                </span>
            </div>

          </div>
          <div class="d-flex align-center justify-space-between">
            <div class="mt-10 d-flex">
              <div class="d-flex flex-column mr-10">
                <span class="text-16 font-weight-300 opacity-70 text-white">почта</span>
                <a href="mailto:hello@paleo.studio" target="_blank" rel="noreferrer"
                   style="color: #ECEEEC;text-decoration: none;font-size: 24px !important;"
                   class="mt-3 font-text">hello@paleo.studio</a>
              </div>
              <div class="d-flex flex-column">
                <span class="text-16 font-weight-300 opacity-70 text-white">телеграмм</span>
                <a href="https://t.me/paleostudio" target="_blank" rel="noreferrer"
                   style="color: #ECEEEC;text-decoration: none;font-size: 24px !important;"
                   class="mt-3 font-text">@paleostudio</a>
              </div>
            </div>
            <div class="d-flex justify-end mt-11">
              <NuxtLink class="ma-0 pa-0 mt-1" @click="scrollToAnchor('top')">
                <div class="arrow">
                  <img width="32px" height="32px" src="/assets/images/arrowTop.svg" alt="arrowTop">
                </div>
              </NuxtLink>
            </div>
          </div>
          <v-divider class="mt-80"/>
          <div class="mt-6 d-flex justify-space-between">
            <div>
              <img src="/assets/images/logo.svg" alt="logo">
            </div>
            <div class="d-flex">
              <span class="text-16 font-text opacity-70 text-white mr-6">© 2024. Все права защищены</span>
              <span class="text-16 font-text opacity-70 text-white">Политика конфидециальности</span>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
    <v-footer v-if="windowWidth <= 1024" color="#0D0D0D" class="pa-0 ma-0">
      <v-card color="transparent" class="page-wrapper pt-80 pb-12" rounded="0" elevation="0">
        <v-card-text class="pa-0 px-5 d-flex flex-column">
          <div>
            <div class="d-flex justify-space-between">
              <span class="text-22 text-white">Написать нам</span>
              <NuxtLink class="ma-0 pa-0 mt-1" @click="scrollToAnchor('top')">
                <div class="arrow_mobile">
                  <img width="24px" height="24px" src="/assets/images/arrowTop.svg" alt="arrowTop">
                </div>
              </NuxtLink>
            </div>
            <div class="mt-12 d-flex flex-column">
              <div class="d-flex flex-column mr-10">
                <span class="text-14 font-weight-300 opacity-70 text-white">почта</span>
                <a href="mailto:hello@paleo.studio" target="_blank" rel="noreferrer"
                   style="color: #ECEEEC;text-decoration: none" class="mt-3 text-18 font-text">hello@paleo.studio</a>
              </div>
              <div class="d-flex flex-column mt-7">
                <span class="text-14 font-weight-300 opacity-70 text-white">телеграмм</span>
                <a href="https://t.me/paleostudio" target="_blank" rel="noreferrer"
                   style="color: #ECEEEC;text-decoration: none" class="mt-3 text-18 font-text">@paleostudio</a>
              </div>
            </div>
          </div>
          <v-divider class="mt-11"/>
          <div class="mt-8 d-flex flex-column">
            <div>
              <img width="70" src="/assets/images/logo.svg" alt="logo">
            </div>
            <div class="d-flex flex-column mt-5">
              <span class="text-14 font-text opacity-70 text-white mb-4">© 2024. Все права защищены</span>
              <span
                  class="text-14 font-text opacity-70 text-white text-decoration-underline">Политика конфидециальности</span>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script setup>
import {onMounted, onUnmounted} from 'vue'
import {useScreenStore} from '~/stores/screen.ts'

const {scrollToAnchor, scrollToTop} = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    }
  },
})
const store = useScreenStore()
const windowWidth = computed(() => store.screenWidth);

const width = ref(0);

onMounted(() => {
  updateScreenSize();
})

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})

function updateScreenSize() {
  store.updateScreenSize(window.innerWidth);
}
</script>

<style scoped>
.arrow {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 2px solid #FFFFFFB2;
  border-radius: 50%;
}

.arrow_mobile {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #FFFFFFB2;
  border-radius: 50%;
}
</style>