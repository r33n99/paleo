<template>
  <v-row class="ma-0">
    <v-col class="pa-0" cols="12">
      <v-navigation-drawer style="border-radius: 24px 0  0 24px" width="1000" color="#0D0D0D" floating temporary
                           v-model="menu" location="right">
        <v-card elevation="0" rounded="0" color="transparent" class="pt-120 pl-80">
          <v-card-text class="pa-0">
            <div class="d-flex flex-column mb-80">
              <NuxtLink :to="{ path: '/', hash: '#projects' }">
                <span class="text-uppercase cursor-pointer nav-item text-32 text-white">ПРОЕКТЫ</span>
              </NuxtLink>
              <NuxtLink class="my-10" :to="{ path: '/', hash: '#info' }">
                <span class="text-uppercase cursor-pointer nav-item text-32 text-white">О НАС</span>
              </NuxtLink>
              <NuxtLink class="mb-10" :to="{ path: '/', hash: '#services' }">
                <span class="text-uppercase cursor-pointer nav-item text-32 text-white">УСЛУГИ</span>
              </NuxtLink>
              <NuxtLink :to="{ path: '/', hash: '#contacts' }">
                <span class="text-uppercase cursor-pointer nav-item text-32 text-white">КОНТАКТЫ</span>
              </NuxtLink>
            </div>
            <div class="d-flex">
              <div class="d-flex flex-column mr-10">
                <span class="text-white opacity-70 font-weight-300 text-18">почта</span>
                <a style="color: #ECEEEC" href="mailto:hello@paleo.studio" target="_blank" rel="noreferrer" class="font-text text-24 mt-4 text-decoration-none">
                  hello@paleo.studio
                </a>
              </div>
              <div class="d-flex flex-column cursor-pointer">
                <span class="text-white opacity-70 font-weight-300 text-18">телеграмм</span>
                <a style="color: #ECEEEC" href="https://t.me/paleostudio" target="_blank" rel="noreferrer" class="font-text text-24 mt-4 text-decoration-none">
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
        <v-card color="transparent" elevation="0" class="rounded-0">
          <div class="bg_container">
            <div class="bg_content page-wrapper d-flex flex-column justify-space-between">
              <div style="height: 100px">
                <v-card-text class="pt-10 pb-8 px-16 mx-8 d-flex align-center justify-space-between">
                  <div @click="$router.push('/')" class="cursor-pointer">
                    <img width="107" height="26" src="/assets/images/logo.svg" alt="logo">
                  </div>
                  <div>
                    <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#projects' }">
                      <span style="color: #ababab" class="text-uppercase nav-item cursor-pointer font-weight-300">ПРОЕКТЫ</span>
                    </NuxtLink>
                    <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#info' }">
                      <span style="color: #ababab" class="mx-10 text-uppercase nav-item cursor-pointer font-weight-300">О НАС</span>
                    </NuxtLink>
                    <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#services' }">
                      <span style="color: #ababab" class="mr-10 text-uppercase nav-item cursor-pointer font-weight-300">Услуги</span>
                    </NuxtLink>
                    <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#contacts' }">
                      <span style="color: #ababab" class="text-uppercase nav-item cursor-pointer font-weight-300">КОНТАКТЫ</span>
                    </NuxtLink>
                  </div>
                  <div @click="toggleMenu" class="cursor-pointer">
                    <Icon name="humbleicons:bars" style="color: white;width: 24px;height: 24px"/>
                  </div>
                </v-card-text>
              </div>
              <v-card-text class="pa-0 d-flex justify-center align-end mt-14">
                <img class="mac" src="/assets/images/parcel/mac-parcel.webp" alt="mac-parcel">
              </v-card-text>
            </div>
          </div>
        </v-card>
      </div>
      <div style="background: #FFFFFF">
        <v-card elevation="0" rounded="0" color="transparent" class="page-wrapper pt-120 pb-120">
          <v-card-text class="pa-0 px-16 mx-8">
            <span style="line-height: 18px" class="text-uppercase opacity-70 text-18 font-weight-300 text-black-grey">О ПРОЕКТЕ</span>
            <div class="d-flex justify-space-between align-center mt-8">
              <span style="line-height: 48px" class="text-black-grey text-40">Веб-приложение для логистики <br> по улучшению работы складов</span>
              <!--              <div class="d-flex align-center">-->
              <!--                <span class="text-uppercase text-24 text-black-grey mr-3">KIPISH</span>-->
              <!--                <Icon name="f7:arrow-up-right" style="color: #222222;width: 24px;height: 24px"/>-->
              <!--              </div>-->
            </div>
            <div class="d-flex justify-end mt-160">
              <v-row class="ma-0 pa-0">
                <v-col class="pa-0" cols="5">
                </v-col>
                <v-col class="pa-0 pl-10" cols="7">
                  <div>
                    <span style="line-height: 30px" class="text-black-grey font-text  text-20">Компании требовались цифровые решения для оптимизации логистических процессов, включая приемку товаров на склад, консолидацию, а также удобное инструментарий для обеспечения упрощенной работы с B2B-клиентами</span>
                    <v-divider color="#000000" class="mt-10 mb-6"/>
                    <div class="d-flex flex-column">
                      <div class="d-flex ">
                        <span class="text-black opacity-70 text-18 font-text "><span
                            class="mr-3">●</span>Проектирование</span>
                        <span class="text-black opacity-70 text-18 font-text  mx-10"><span
                            class="mr-3">●</span>Серверная разработка</span>
                      </div>
                      <div class="d-flex mt-6">
                        <span class="text-black opacity-70 text-18 font-text "><span
                            class="mr-3">●</span>Клиентская разработка</span>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <v-card rounded="0" elevation="0" color="#FFFFFF">
        <v-card-text class="pa-0">
          <div class="video_container">
            <video loop autoplay muted>
              <source src="/static/videos/parcel.mp4" type="video/mp4">
            </video>
          </div>
        </v-card-text>
      </v-card>
      <!--      <v-card rounded="0" elevation="0" color="transparent">-->
      <!--        <v-card-text class="pa-0">-->
      <!--          <div class="video_container">-->
      <!--            <video loop autoplay muted>-->
      <!--              <source src="/static/videos/kipish/kipish-rell.mp4" type="video/mp4">-->
      <!--            </video>-->
      <!--          </div>-->
      <!--        </v-card-text>-->
      <!--      </v-card>-->
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-120 pb-160 rounded-0 page-wrapper pb-140">
          <v-card-text class="pa-0 px-16 mx-8">
            <v-row class="pa-0 ma-0">
              <v-col class="pa-0" cols="5">
                <span class="text-black-grey text-40">Задача</span>
              </v-col>
              <v-col class="pa-0" cols="7">
                <span style="line-height: 30px" class="text-black-grey text-20  font-text">Разработать масштабируемое веб-приложение для комплексного управления логистическими процессами</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4" class="pb-140">
        <v-card color="transparent" rounded="0" elevation="0" class="page-wrapper pt-120 pb-8">
          <v-card-text class="pa-0 px-16 mx-8">
            <div class="d-flex justify-center">
              <div class="mr-16">
                <img class="parcel-item" src="/assets/images/parcel/parcel-1.webp" alt="parcel-1">
              </div>
              <div style="height: 700px" class="d-flex align-end mt-120">
                <img class="parcel-item" src="/assets/images/parcel/parcel-2.webp" alt="parcel-2">
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-120 pb-160 rounded-0 page-wrapper pb-140">
          <v-card-text class="pa-0 px-16 mx-8">
            <v-row class="pa-0 ma-0">
              <v-col class="pa-0" cols="5">
                <span class="text-black-grey text-40">Бизнес кабинет</span>
              </v-col>
              <v-col class="pa-0" cols="7">
                <span style="line-height: 30px" class="text-black-grey text-20  font-text">Бизнес-кабинет предлагает удобные инструменты для загрузки и обработки посылок через Excel-файлы, включая проверку на дубли, группировку и присвоение индивидуальных трекинг-номеров для каждой посылки</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4" class="pb-140 pt-120">
<!--        <swiper-->
<!--            height="100%"-->
<!--            :initial-slide="1"-->
<!--            :effect="'coverflow'"-->
<!--            :grabCursor="true"-->
<!--            :centeredSlides="true"-->
<!--            :slidesPerView="'auto'"-->
<!--            :autoplay="{-->
<!--      delay: 2500,-->
<!--      disableOnInteraction: false,-->
<!--    }"-->
<!--            :coverflowEffect="{-->
<!--    rotate: 0,-->
<!--    stretch: -100,-->
<!--    depth: 200,-->
<!--    modifier: 1,-->
<!--    slideShadows: false-->
<!--  }"-->
<!--            :modules="modules"-->
<!--            class="mySwiper"-->
<!--        >-->
<!--          <swiper-slide style="height : 800px !important;width: 1105px !important;border-radius: 16px !important;"-->
<!--                        v-for="slide in slides">-->
<!--            <img :src="slide.path" alt="slide">-->
<!--          </swiper-slide>-->
<!--        </swiper>-->
        <div class="d-flex flex-column align-center px-5" v-for="slide in slides">
          <img width="1006" :src="slide.path" alt="slide">
        </div>
      </div>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-120 pb-220 rounded-0 page-wrapper pb-140">
          <v-card-text class="pa-0 px-16 mx-8">
            <v-row class="pa-0 ma-0">
              <v-col class="pa-0" cols="5">
                <span class="text-black-grey text-40">Итог</span>
              </v-col>
              <v-col class="pa-0" cols="7">
                <span style="line-height: 30px" class="text-black-grey text-20  font-text">Разработано масштабируемое веб-приложение для комплексного управления логистическими процессами, включающее интеграцию с системами отслеживания для обеспечения прозрачности и контроля</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {EffectCoverflow, Pagination} from 'swiper/modules';
import slide from '~/assets/images/parcel/parcel-slide.webp'

useSeoMeta({
  title: 'Paleo Studio - ParcelPoint',
  ogTitle: 'Paleo Studio - Ваш партнер в веб-разработке',
  description: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
  ogDescription: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
})

const {scrollToAnchor} = useAnchorScroll()

const menu = ref(false);
const showReel = ref(false)
const slides = [
  {name: 'slide', path: slide},
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
  height: 820px;
  overflow: hidden;
  background: url('~/assets/images/kipish/bg-kipish.webp') bottom/cover no-repeat;

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
  background: url('~/assets/images/parcel/mac2-parcel.webp') center/cover no-repeat;

  .show_reel {
    cursor: pointer;
    width: 160px;
    height: 160px;
    position: absolute;
    right: 400px;
    bottom: 400px;
    border-radius: 50%;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.bg_content {
  position: relative;
  height: 100%;
  z-index: 1;
  text-align: center;
}

.video_container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.video_container video {
  width: 100%;
  z-index: -1;
}
@media screen and (max-width: 1440px) {
  .parcel-item {
    width: 550px
  }
}
@media screen and (max-width: 1280px) {
  .mac {
    width: 850px;
  }
  .parcel-item {
    width: 420px
  }
  .parcel-slide {
    width: 800px;
  }
}

@media screen and (max-width: 1080px) {
  .mac {
    width: 850px;
  }
  .parcel-item {
    width: 350px
  }
  .parcel-slide {
    width: 800px;
  }
}
</style>