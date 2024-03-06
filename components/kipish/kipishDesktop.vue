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
                <a style="color: #ECEEEC" href="mailto:hello@paleo.studio" target="_blank" rel="noreferrer"
                  class=" font-text text-24 mt-4 text-decoration-none">
                  hello@paleo.studio
                </a>
              </div>
              <div class="d-flex flex-column cursor-pointer">
                <span class="text-white opacity-70 font-weight-300 text-18">телеграмм</span>
                <a style="color: #ECEEEC" href="https://t.me/paleostudio" target="_blank" rel="noreferrer"
                  class=" font-text text-24 mt-4 text-decoration-none">
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
                <v-card-text class="pt-10 pb-8 px-16 mx-8 d-flex align-center justify-space-between">
                  <div @click="$router.push('/')" class="cursor-pointer">
                    <img width="107" height="26" src="/static/images/logo.svg" alt="logo">
                  </div>
                  <div>
                    <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#projects' }">
                      <span style="color: #ababab"
                        class="text-uppercase nav-item cursor-pointer font-weight-300">ПРОЕКТЫ</span>
                    </NuxtLink>
                    <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#info' }">
                      <span style="color: #ababab"
                        class="mx-10 text-uppercase nav-item cursor-pointer font-weight-300">О НАС</span>
                    </NuxtLink>
                    <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#services' }">
                      <span style="color: #ababab"
                        class="mr-10 text-uppercase nav-item cursor-pointer font-weight-300">Услуги</span>
                    </NuxtLink>
                    <NuxtLink class="text-decoration-none" :to="{ path: '/', hash: '#contacts' }">
                      <span style="color: #ababab"
                        class="text-uppercase nav-item cursor-pointer font-weight-300">КОНТАКТЫ</span>
                    </NuxtLink>
                  </div>
                  <div @click="toggleMenu" class="cursor-pointer">
                    <Icon name="humbleicons:bars" style="color: white;width: 24px;height: 24px" />
                  </div>
                </v-card-text>
              </div>
              <v-card-text class="pa-0 d-flex align-end justify-center mt-14">
                <img class="mac" src="/static/images/kipish/mac-kipish.webp" alt="mac-kipish">
              </v-card-text>
            </div>
          </div>
        </v-card>
      </div>
      <div style="background: #FFFFFF">
        <v-card elevation="0" rounded="0" color="transparent" class="page-wrapper pt-120 pb-120">
          <v-card-text class="pa-0 px-16 mx-8">
            <span style="line-height: 18px" class="text-uppercase opacity-70 text-18 font-weight-300 text-black-grey">О
              ПРОЕКТЕ</span>
            <div class="d-flex justify-space-between align-end mt-8">
              <span style="line-height: 48px" class="text-black-grey text-40">Медиа ресурс о светской, <br> вечерней и
                ночной жизни города.</span>
              <div class="d-flex align-center mb-n1 cursor-pointer">
                <span class="text-uppercase text-24 text-black-grey mr-3 hover-item">KIPISH</span>
                <Icon name="f7:arrow-up-right" style="color: #222222;width: 24px;height: 24px" />
              </div>
            </div>
            <div class="d-flex justify-end mt-160">
              <v-row class="ma-0 pa-0">
                <v-col class="pa-0" cols="5">
                </v-col>
                <v-col class="pa-0 pl-5" cols="7">
                  <div>
                    <span style="line-height: 30px" class="text-black-grey font-text  text-20">Платформа служит
                      центральным хабом для публикации репортажей из разнообразных заведений, предоставляя динамичное
                      пространство для размещения фото и видео контента, а также новостей и анонсов предстоящих
                      событий</span>
                    <v-divider color="#000000" class="mt-10 mb-6" />
                    <div class="d-flex flex-column">
                      <div class="d-flex ">
                        <span class="text-black opacity-70 text-18 font-text "><span class="mr-3">●</span>UX-UI</span>
                        <span class="text-black opacity-70 text-18 font-text  mx-10"><span
                            class="mr-3">●</span>Корпоративные сайты</span>
                        <span class="text-black opacity-70 text-18 font-text "><span
                            class="mr-3">●</span>Проектирование</span>
                      </div>
                      <div class="d-flex mt-6">
                        <span class="text-black opacity-70 text-18 font-text "><span class="mr-3">●</span>Серверная
                          разработка</span>
                        <span class="text-black opacity-70 text-18 font-text mx-10"><span
                            class="mr-3">●</span>Клиентская разработка</span>
                        <span class="text-black opacity-70 text-18 font-text "><span
                            class="mr-3">●</span>Анимация</span>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <v-card rounded="0" elevation="0" color="transparent">
        <v-card-text class="pa-0 mb-n2">
          <div class="video_container">
            <video loop autoplay muted>
              <source src="/static/videos/kipish/kipish-rell.webm" type="video/webm">
            </video>
          </div>
        </v-card-text>
      </v-card>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-120 pb-160 rounded-0 page-wrapper pb-140">
          <v-card-text class="pa-0 px-16 mx-8">
            <v-row class="pa-0 ma-0">
              <v-col class="pa-0" cols="5">
                <span class="text-black-grey text-40">Задача</span>
              </v-col>
              <v-col class="pa-0" cols="7">
                <span style="line-height: 30px" class="text-black-grey text-20  font-text">Активный рост компании,
                  расширение пула клиентов и сервисов повлекло за собой необходимость расширения присутствия в digital
                  среде. ТЭК-Торг обратился к нам с задачей обновить сайт, который должен учитывать разнообразие
                  предоставляемых услуг и обеспечивать для каждого сегмента аудитории быстрый и интуитивно-понятный
                  процесс закупок.</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <v-card rounded="0" elevation="0" color="transparent">
        <v-card-text class="pa-0">
          <div class="video_container">
            <video preload="auto" loop autoplay muted>
              <source src="/static/videos/kipish/kipish_prev.webm" type="video/webm">
            </video>
          </div>
        </v-card-text>
      </v-card>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-120 pb-160 rounded-0 page-wrapper pb-140">
          <v-card-text class="pa-0 px-16 mx-8">
            <v-row class="pa-0 ma-0">
              <v-col class="pa-0" cols="5">
                <span class="text-black-grey text-40">Исследования</span>
              </v-col>
              <v-col class="pa-0" cols="7">
                <span style="line-height: 30px" class="text-black-grey text-20  font-text">Для исследования мы поставили
                  перед собой цель охватить как можно больше аспектов городской жизни. Мы провели обширный опрос
                  жителей, а также туристов, чтобы получить представление о том, что они ценят в городской культуре,
                  какие места посещают и как проводят время вечером и ночью</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4" class="page-wrapper d-flex justify-center">
        <img class="kit" src="/static/images/kipish/kipish_kit.webp" alt="kipish_kit">
      </div>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-120 pb-160 rounded-0 page-wrapper pb-140">
          <v-card-text class="pa-0 px-16 mx-8">
            <v-row class="pa-0 ma-0">
              <v-col class="pa-0" cols="5">
                <span class="text-black-grey text-40">Дизайн</span>
              </v-col>
              <v-col class="pa-0" cols="7">
                <span style="line-height: 30px" class="text-black-grey text-20  font-text">Важным шагом является
                  обновление дизайна, делая его более современным и адаптивным для устройств разного типа. При этом
                  особое внимание уделяется улучшению навигации, чтобы пользователи могли легко находить интересующую
                  информацию</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4">
        <v-card color="transparent" rounded="0" elevation="0" class="page-wrapper pt-120 pb-8">
          <v-card-text class="pa-0 px-16 mx-8">
            <v-row class="ma-0 pa-0">
              <v-col cols="4" class="pa-0 pr-lg-10">
                <img class="kipish-item" src="/static/images/kipish/main.webp" alt="main">
              </v-col>
              <v-col cols="4" class="pa-0">
                <img class="kipish-item" src="/static/images/kipish/reports.webp" alt="reports">
                <img class="kipish-item" src="/static/images/kipish/estab.webp" alt="estab">
              </v-col>
              <v-col cols="4" class="pa-0">
                <img class="kipish-item" src="/static/images/kipish/report.webp" alt="estab">
                <img class="kipish-item" src="/static/images/kipish/estab-info.webp" alt="estab">
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-120 pb-160 rounded-0 page-wrapper pb-140">
          <v-card-text class="pa-0 px-16 mx-8">
            <v-row class="pa-0 ma-0">
              <v-col class="pa-0" cols="5">
                <span class="text-black-grey text-40">Админка</span>
              </v-col>
              <v-col class="pa-0" cols="7">
                <span style="line-height: 30px" class="text-black-grey text-20  font-text">Главная цель, сделать простую
                  но в тоже время инновационную веб-административную панель, представляющую собой мощный инструмент
                  управления веб-пространством. Наша админка сочетает в себе интуитивно понятный интерфейс с широким
                  спектром функциональных возможностей, обеспечивая полный контроль</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4" class="pb-140 pt-120">
        <swiper height="100%" :initial-slide="1" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true"
          :slidesPerView="'auto'" :pagination="{
          clickable: true,
        }" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" :coverflowEffect="{
          rotate: 0,
          stretch: -100,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }" :modules="modules" class="mySwiper">
          <swiper-slide style="height : 850px !important;width: 1030px !important;border-radius: 16px !important;"
            v-for="slide in slides">
            <img :src="slide.path" alt="slide">
          </swiper-slide>
        </swiper>
      </div>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-120 pb-220 rounded-0 page-wrapper pb-140">
          <v-card-text class="pa-0 px-16 mx-8">
            <v-row class="pa-0 ma-0">
              <v-col class="pa-0" cols="5">
                <span class="text-black-grey text-40">Итог</span>
              </v-col>
              <v-col class="pa-0" cols="7">
                <span style="line-height: 30px" class="text-black-grey text-20  font-text">По итогу - создали
                  обновленный, гибкий и привлекательный веб-ресурс, который эффективно предоставляет информацию о
                  городских событиях, новостях, а также предоставляет индивидуальные лендинги для заведений, что сделает
                  сайт более интересным и удобным как для пользователей, так и для бизнеса</span>
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
import { EffectCoverflow, Pagination } from 'swiper/modules';

import slideOne from '~/static/images/kipish/slide-1.webp';
import slideTwo from '~/static/images/kipish/slide-2.webp';
import slideThree from '~/static/images/kipish/slide-3.webp';

useHead({
  titleTemplate: 'Paleo Studio | Kipish'
})
useSeoMeta({
  ogTitle: 'Paleo Studio - Ваш партнер в веб-разработке',
  description: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
  ogDescription: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
})

const scrollToAnchor = (anchor) => {
  this.$router.push('/').then(() => {
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  });
}

const showReel = ref(false)
const projects = [
  { name: 'Kipish', path: '/kipish' },
  { name: 'SilkWay', path: '/silkway' },
  { name: 'ParcelPoint', path: '/parcel' },
]

const menu = ref(false);
const sendForm = ref(false);

const slides = [
  { name: 'slide', path: slideOne },
  { name: 'slide', path: slideTwo },
  { name: 'slide', path: slideThree },
];
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
  background: url('~/static/images/kipish/bg-kipish.webp') bottom/cover no-repeat;

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

.kipish-item {
  width: 100%;
}

.img_container {
  position: relative;
  width: 100%;
  height: 1080px;
  overflow: hidden;
  background: url('~/static/images/kipish/mac2-kipish.webp') center/cover no-repeat;

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

@media screen and (max-width: 1800px) {
  .kipish-item {
    width: 500px
  }
}

@media screen and (max-width: 1700px) {
  .kipish-item {
    width: 420px
  }
}

@media screen and (max-width: 1440px) {
  .kipish-item {
    width: 370px
  }
}

@media screen and (max-width: 1280px) {
  .mac {
    width: 850px;
  }

  .kit {
    width: 850px;

  }

  .kipish-item {
    width: 300px
  }

  .kipish-slide {}
}

@media screen and (max-width: 1080px) {
  .mac {
    width: 850px;
  }

  .kit {
    width: 850px;

  }

  .kipish-item {
    width: 240px
  }

  .kipish-slide {}
}
</style>