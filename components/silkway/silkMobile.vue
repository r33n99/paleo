<template>
  <v-row class="ma-0">
    <v-col class="pa-0" cols="12">
      <v-navigation-drawer style="border-radius: 24px 0  0 24px; z-index: 9999" width="1000" class="mt-80" color="#0D0D0D" floating temporary
                           v-model="menu" location="top">
        <v-card elevation="0" rounded="0" color="transparent" class="pt-14 pl-5">
          <v-card-text class="pa-0">
            <div class="d-flex flex-column mb-80">
              <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#projects' }">
                <span class="text-uppercase cursor-pointer text-24 text-white">ПРОЕКТЫ</span>
              </NuxtLink>
              <NuxtLink class="my-7 text-decoration-none" :to="{ path: '/', hash: '#info' }">
                <span class="text-uppercase cursor-pointer text-24 text-white">О НАС</span>
              </NuxtLink>
              <NuxtLink class="mb-7 text-decoration-none" :to="{ path: '/', hash: '#services' }">
                <span class="text-uppercase cursor-pointer text-24 text-white">УСЛУГИ</span>
              </NuxtLink>
              <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#contacts' }">
                <span class="text-uppercase cursor-pointer text-24 text-white">КОНТАКТЫ</span>
              </NuxtLink>
            </div>
            <div class="d-flex flex-column">
              <div class="d-flex flex-column mb-8">
                <span class="text-white opacity-70 font-weight-300 text-16">почта</span>
                <a style="color: #ECEEEC" href="mailto:hello@paleo.studio" target="_blank" rel="noreferrer" class=" font-text text-20 mt-3 text-decoration-none">
                  hello@paleo.studio
                </a>
              </div>
              <div class="d-flex flex-column">
                <span class="text-white opacity-70 font-weight-300 text-16">телеграмм</span>
                <a style="color: #ECEEEC" href="https://t.me/paleostudio" target="_blank" rel="noreferrer" class=" font-text text-20 mt-3 text-decoration-none">
                  @paleostudio
                </a>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>
    </v-col>
    <v-col cols="12" class="pa-0">
      <div id="top" style="background: #0D0D0D">
        <v-card color="transparent" elevation="0" class="rounded-0 ">
          <div class="bg_container">
            <div class="bg_content page-wrapper d-flex flex-column justify-space-between">
              <div style="height: 100px">
                <v-card-text class="pt-10 pb-8 px-5 d-flex align-center justify-space-between">
                  <div @click="$router.push('/')" class="cursor-pointer">
                    <img width="79" height="26" src="/static/images/logo.svg" alt="logo">
                  </div>
                  <div @click="toggleMenu" class="cursor-pointer">
                    <Icon name="humbleicons:bars" style="color: white;width: 24px;height: 24px"/>
                  </div>
                </v-card-text>
              </div>
              <v-card-text class="pa-0 d-flex align-end justify-center">
                <div class="d-flex align-center">
                  <span class="text-uppercase text-16 text-white mr-2">Silkway Rally</span>
                  <Icon name="f7:arrow-up-right" style="color: #FFFFFF;width: 18px;height: 18px"/>
                </div>
              </v-card-text>
              <v-card-text class="pa-0 px-5 d-flex align-end justify-center">
                <img class="mac" width="335" src="/static/images/silk/mac-silk.webp" alt="mac-silk">
              </v-card-text>
            </div>
          </div>
        </v-card>
      </div>
      <div style="background: #FFFFFF">
        <v-card elevation="0" rounded="0" color="transparent" class="page-wrapper pt-15 pb-80">
          <v-card-text class="pa-0 px-5">
            <span style="line-height: 14px" class="text-uppercase opacity-70 text-14 font-weight-300 text-black-grey">О ПРОЕКТЕ</span>
            <div class="d-flex justify-space-between align-center mt-4">
              <span style="line-height: 24px" class="text-black-grey text-20">Платформа для гонок <br> ралли Silkway Rally </span>
            </div>
            <div class="d-flex flex-column mt-15">
              <span style="line-height: 24px" class="text-black-grey font-text  text-16">Каждый год компания проводит ралли, и возникла неотложная потребность в разработке эффективной системы для самостоятельной регистрации клиентами и их транспортных средств. Требовалась также удобная административная панель для легкого управления этим процессом</span>
              <v-divider color="#000000" class="mt-8 mb-5"/>
              <div class="d-flex flex-column">
                        <span class="text-black opacity-70 text-16 font-text "><span
                            class="mr-3">●</span>Проектирование</span>
                <span class="text-black opacity-70 text-16 font-text  my-4"><span
                    class="mr-3">●</span>Серверная разработка</span>
                <span class="text-black opacity-70 text-16 font-text "><span
                    class="mr-3">●</span>Клиентская разработка</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <v-card rounded="0" elevation="0" color="transparent">
        <v-card-text class="pa-0">
          <div class="video_container">
            <video loop autoplay muted>
              <source src="/static/videos/silk.webm" type="video/webm">
            </video>
          </div>
        </v-card-text>
      </v-card>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-15 pb-80 rounded-0 page-wrapper">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <span style="line-height: 24px" class="text-black-grey text-20">Задача</span>
              <span style="line-height: 22px" class="text-black-grey text-16  font-text mt-5">Спроектировать удобную платформу для регистрации и вести организационную работу для гонок ралли </span>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4">
        <v-card color="transparent" rounded="0" elevation="0" class="py-15 page-wrapper">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <img src="/static/images/silk/silk-1.webp" alt="silk-1">
              <img src="/static/images/silk/silk-2.webp" alt="silk-2">
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-15 pb-80 rounded-0 page-wrapper">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <span style="line-height: 24px" class="text-black-grey text-20">Решение</span>
              <span style="line-height: 22px" class="text-black-grey text-16  font-text mt-5">Разработали платформу для регистрации участников и транспортных средств на ралли, включая модули для бухгалтерии, регистрации медиа и участников. Административная панель позволяет удобно управлять всеми аспектами мероприятия, обеспечивая эффективное администрирование и организацию </span>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4" class="pt-80 pb-80 px-5">
        <div class="d-flex flex-column" v-for="slide in slides">
          <<img :src="slide.path" alt="slide">
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {EffectCoverflow, Pagination} from 'swiper/modules';
import slideOne from '~/static/images/silk/slide-1.webp'
import slideTwo from '~/static/images/silk/slide-2.webp'
import slideThree from '~/static/images/silk/slide-3.webp'


useHead({
  titleTemplate: 'Paleo Studio | SilkWay'
})
useSeoMeta({
  ogTitle: 'Paleo Studio - Ваш партнер в веб-разработке',
  description: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
  ogDescription: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
})


const menu = ref(false);
const isMouseOver = ref(false)
const slides = [
  {name: 'slide', path: slideOne},
  {name: 'slide', path: slideTwo},
  {name: 'slide', path: slideThree},
];
const projects = [
  {name: 'Kipish', path: '/kipish'},
  {name: 'SilkWay', path: '/silkway'},
  {name: 'ParcelPoint', path: '/parcel'},
]
const modules = [
  EffectCoverflow, Pagination
]
const toggleMenu = () => {
  menu.value = !menu.value;
};
const handleMouseOver = () => {
  isMouseOver.value = true
}
const handleMouseLeave = () => {
  isMouseOver.value = false
}
</script>

<style scoped>
.gradient-text {
  background: rgb(0, 0, 0);
  background: linear-gradient(70deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info_card {
  width: 600px;
  border-radius: 24px;
  padding: 32px 32px 40px 32px;
  border: 2px solid #FFFFFF1A;
  background: #1b1b1b;

  .info_card__img {
    display: flex;
    padding: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #FFFFFF1A;
    background: #121315;
  }
}

.projects_block {
  display: flex;
  flex-wrap: wrap;

  .projects_block__card {
    width: 600px;
  }

  .projects_block__video {
    width: 600px;
    height: 404px;
    overflow: hidden;

    video {
      border-radius: 20px;

    }
  }
}

.services_block {
  display: flex;
  flex-wrap: wrap;

  .services_block__card {
    width: 100%;
    border: 2px solid #FFFFFF1A;
    border-radius: 24px;
    background: #1d1d1d;
    padding: 48px 32px;
  }
}

.contacts_block {
  display: flex;
  flex-wrap: wrap;

  .contacts_block__card {
    position: relative;
    width: 600px;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 24px 32px;
    color: #222222;
  }

  .contacts_block__img {
    position: absolute;
    right: 0;
    top: 0;
  }

  .contacts_block__img_bott {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

.bg_container {
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;
  background: url('~/static/images/silk/bg-silk.svg') bottom/cover no-repeat;

  .bg_container__image {
    position: absolute;
    background-position: top;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
    z-index: -1;
  }
}

.bg_container_second {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: url('~/static/images/silk/bg-silk.svg') bottom/cover no-repeat;

  .bg_container__image {
    position: absolute;
    background-position: top;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
    z-index: -1;
  }
}

.img_container {
  position: relative;
  width: 100%;
  height: 1300px;
  overflow: hidden;
}

.bg_content {
  position: relative;
  height: 100%;
  z-index: 1;
  text-align: center;

  .bg_content__spiral {
    position: absolute;
    right: 0;
    top: 100px;
    z-index: -1;
  }

  .bg_content__comb {
    position: absolute;
    left: 0;
    bottom: -150px;
    z-index: 1;
  }

  .show_reel {
    z-index: 2;
    cursor: pointer;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 40px;
    border-radius: 50%;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.video_container {
  position: relative;
  width: 100%;
  min-height: 200px;
  overflow: hidden;
}

.video_container video {
  width: 100%;
  z-index: -1;
}
@media screen and (max-width: 1024px) {
.mac {
  width: 550px;
}
}
@media screen and (max-width: 735px) {
  .mac {
    width: 500px;
  }
}
@media screen and (max-width: 600px) {
  .mac {
    width: 480px;
  }
}

@media screen and (max-width: 500px) {
  .mac {
    width: 420px;
  }
}

@media screen and (max-width: 450px) {
  .mac {
    width: 360px;
  }
}
@media screen and (max-width: 375px) {
  .mac {
    width: 335px;
  }
}
</style>