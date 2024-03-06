<template>
  <v-row class="ma-0">
    <v-col cols="12" class="pa-0">
      <div style="background: #0D0D0D">
        <v-card color="transparent" elevation="0" class="rounded-0 ">
          <div class="bg_container">
            <div class="bg_content page-wrapper d-flex flex-column justify-space-between">
              <div id="top" style="height: 100px">
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
                <div class="d-flex align-center cursor-pointer">
                  <span class="text-uppercase text-16 text-white mr-2">KIPISH</span>
                  <Icon name="f7:arrow-up-right" style="color: #FFFFFF;width: 18px;height: 18px"/>
                </div>
              </v-card-text>
              <v-card-text class="pa-0 px-5 d-flex align-end justify-center">
                <img class="mac" width="350" src="/static/images/kipish/mac-kipish.webp" alt="mac-kipish">
              </v-card-text>
            </div>
          </div>
        </v-card>
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
      </div>
      <div style="background: #FFFFFF">
        <v-card elevation="0" rounded="0" color="transparent" class="page-wrapper pt-15 pb-80">
          <v-card-text class="pa-0 px-5">
            <span style="line-height: 14px" class="text-uppercase opacity-70 text-14 font-weight-300 text-black-grey">О ПРОЕКТЕ</span>
            <div class="d-flex justify-space-between align-center mt-3">
              <span style="line-height: 24px" class="text-black-grey text-20">Медиа ресурс о светской, <br> вечерней и ночной жизни города.</span>
            </div>
            <div class="mt-15">
              <span style="line-height: 24px" class="text-black-grey font-text  text-16">Платформа служит центральным хабом для публикации репортажей из разнообразных заведений, предоставляя динамичное пространство для размещения фото и видео контента, а также новостей и анонсов предстоящих событий</span>
              <v-divider color="#000000" class="mt-10 mb-6"/>
              <div class="d-flex flex-column">
                <div class="d-flex">
                        <span class="text-black opacity-70 text-16 font-text  mr-5"><span
                            class="mr-3">●</span>UX-UI</span>
                  <span class="text-black opacity-70 text-16 font-text "><span
                      class="mr-2">●</span>Клиентская разработка</span>
                </div>
                <div class="d-flex mt-4">
                            <span class="text-black opacity-70 text-16 font-text  mr-3"><span
                                class="mr-3">●</span>Корпоративные сайты</span>
                </div>
                <div class="d-flex mt-4">
                  <span class="text-black opacity-70 text-16 font-text "><span
                      class="mr-2">●</span>Анимация</span>
                </div>
                <div class="d-flex mt-4">
                        <span class="text-black opacity-70 text-16 font-text "><span
                            class="mr-3">●</span>Серверная разработка</span>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <v-card rounded="0" elevation="0" color="transparent">
        <v-card-text class="pa-0 mb-n2">
          <div class="video_container">
            <video preload="auto" loop autoplay muted>
              <source src="/static/videos/kipish/kipish-rell.webm" type="video/webm">
            </video>
          </div>
        </v-card-text>
      </v-card>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-15 pb-80 rounded-0 page-wrapper">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <span style="line-height: 24px" class="text-black-grey text-20">Задача</span>
              <span style="line-height: 22px" class="text-black-grey text-16  font-text mt-5">Активный рост компании, расширение пула клиентов и сервисов повлекло за собой необходимость расширения присутствия в digital среде. ТЭК-Торг обратился к нам с задачей обновить сайт, который должен учитывать разнообразие предоставляемых услуг и обеспечивать для каждого сегмента аудитории быстрый и интуитивно-понятный процесс закупок.</span>
            </div>
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
        <v-card color="transparent" elevation="0" class="pt-80 pb-80 rounded-0 page-wrapper">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <span style="line-height: 24px" class="text-black-grey text-20">Исследования</span>
              <span style="line-height: 22px" class="text-black-grey text-16  font-text mt-5">Перед началом исследования мы поставили перед собой цель охватить как можно больше аспектов городской жизни. Мы провели обширный опрос жителей, а также туристов, чтобы получить представление о том, что они ценят в городской культуре, какие места посещают и как проводят время вечером и ночью</span>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4">
        <img width="100%" src="/static/images/kipish/kipish_kit_mobile.svg" alt="kipish_kit_mobile">
      </div>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-80 pb-80 rounded-0 page-wrapper">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <span style="line-height: 24px" class="text-black-grey text-20">Дизайн</span>
              <span style="line-height: 22px" class="text-black-grey text-16  font-text mt-5">Важным шагом является обновление дизайна, делая его более современным и адаптивным для устройств разного типа.При этом особое внимание уделяется улучшению навигации, чтобы пользователи могли легко находить интересующую информацию</span>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4">
        <v-card color="transparent" rounded="0" elevation="0" class="page-wrapper pt-80 pb-80">
          <v-card-text class="pa-0 px-5 d-flex justify-center">
            <div class="d-flex flex-column mr-5">
              <img class="kipish-item" width="100%" src="/static/images/kipish/main.webp" alt="main">
              <img  class="kipish-item" width="100%" src="/static/images/kipish/estab-info.webp" alt="estab-info">
            </div>
            <div class="d-flex flex-column">
              <img class="kipish-item" width="100%" src="/static/images/kipish/reports.webp" alt="estab-info">
              <img class="kipish-item" width="100%" src="/static/images/kipish/estab.webp" alt="estab-info">
              <img class="kipish-item" width="100%" src="/static/images/kipish/report.webp" alt="estab-info">
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-80 pb-80 rounded-0 page-wrapper">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <span style="line-height: 24px" class="text-black-grey text-20">Админка</span>
              <span style="line-height: 22px" class="text-black-grey text-16  font-text mt-5">Главная цель, сделать простую но в тоже время инновационную веб-административную панель, представляющую собой мощный инструмент управления веб-пространством. Наша админка сочетает в себе интуитивно понятный интерфейс с широким спектром функциональных возможностей, обеспечивая полный контроль</span>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4" class="pt-80 pb-80 px-5">
        <div class="d-flex flex-column slide-item" v-for="slide in slides">
          <img width="100%" :src="slide.path" alt="slide">
        </div>
      </div>
      <div style="background: #FFFFFF">
        <v-card color="transparent" elevation="0" class="pt-80 pb-80 rounded-0 page-wrapper">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <span style="line-height: 24px" class="text-black-grey text-20">Итого</span>
              <span style="line-height: 22px" class="text-black-grey text-16  font-text mt-5">По итогу - создали обновленный, гибкий и привлекательныйвеб-ресурс, который эффективно предоставляет информациюо городских событиях, новостях, а также предоставляет индивидуальные лендинги для заведений, что сделает сайт более интересным и удобным как для пользователей, так и для бизнеса</span>
            </div>
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
import slideOne from '~/static/images/kipish/slide-1.webp'
import slideTwo from '~/static/images/kipish/slide-2.webp'
import slideThree from '~/static/images/kipish/slide-3.webp'
useHead({
  titleTemplate: 'Paleo Studio | Kipish'
})
useSeoMeta({
  ogTitle: 'Paleo Studio - Ваш партнер в веб-разработке',
  description: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
  ogDescription: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
})

const showReel = ref(false)

const menu = ref(false);
const slides = [
  {name: 'slide', path: slideOne},
  {name: 'slide', path: slideTwo},
  {name: 'slide', path: slideThree},
];
const modules = [
  EffectCoverflow, Pagination
]
const toggleMenu = () => {
  menu.value = !menu.value;
};

const windowWidth = ref(0);

onMounted(() => {
  windowWidth.value = window.innerWidth;

  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<style scoped>
@use '@static/scss/settings.scss';
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
  min-height: 210px;
  overflow: hidden;
}

.video_container video {
  width: 100%;
  z-index: -1;
}
.img_container {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background: url('~/static/images/kipish/mac2-kipish.webp') center/cover no-repeat;

  .show_reel {
    cursor: pointer;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 150px;
    right: 50px;
    border-radius: 50%;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
.slide-item {
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 1024px) {
  .mac {
    width: 500px;
  }
  .kipish-item {
    width: 320px;
  }
}
@media screen and (max-width: 735px) {
  .mac {
    width: 400px;
  }
  .kipish-item {
    width: 280px;
  }
}
@media screen and (max-width: 600px) {
  .mac {
    width: 400px;
  }
  .kipish-item {
    width: 240px;
  }
}

@media screen and (max-width: 500px) {
  .mac {
    width: 400px;
  }
  .kipish-item {
    width: 205px;
  }
}

@media screen and (max-width: 450px) {
  .mac {
    width: 320px;
  }
  .kipish-item {
    width: 180px;
  }
}
@media screen and (max-width: 400px) {
  .kipish-item {
    width: 160px;
  }
}
@media screen and (max-width: 375px) {
  .kipish-item {
    width: 150px;
  }
}
</style>