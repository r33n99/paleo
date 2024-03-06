<template>
  <v-row class="ma-0">
    <v-col class="pa-0" cols="12">
      <div id="top" style="background: #0D0D0D">
        <v-card color="transparent" elevation="0" class="rounded-0 page-wrapper pa-0 pb-80">
          <v-card-text
              class="pa-0 pt-10 px-5 pb-8 d-flex align-center justify-space-between">
            <div @click="$router.push('/')" class="cursor-pointer">
              <img width="79" height="26" src="/static/images/logo.svg" alt="logo">
            </div>

            <div @click="toggleMenu" class="cursor-pointer">
              <Icon name="humbleicons:bars" style="color: white;width: 24px;height: 24px"/>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <v-navigation-drawer style="border-radius: 24px 0 0 24px; z-index: 9999" width="100%" rounded="2" class="mt-60" color="#0D0D0D" absolute floating temporary
                           v-model="menu" location="top">
        <v-card elevation="0" rounded="0" color="transparent" class="pt-14 pl-5">
          <v-card-text class="pa-0">
            <div class="d-flex flex-column mb-80">
              <NuxtLink @click="scrollToBlock('projects')">
                <span class="text-uppercase cursor-pointer text-24 text-white">ПРОЕКТЫ</span>
              </NuxtLink>
              <NuxtLink class="my-7" @click="scrollToBlock('info')">
                <span class="text-uppercase cursor-pointer text-24 text-white">О НАС</span>
              </NuxtLink>
              <NuxtLink class="mb-7" @click="scrollToBlock('services')">
                <span class="text-uppercase cursor-pointer text-24 text-white">УСЛУГИ</span>
              </NuxtLink>
              <NuxtLink @click="scrollToBlock('contacts')">
                <span class="text-uppercase cursor-pointer text-24 text-white">КОНТАКТЫ</span>
              </NuxtLink>
            </div>
            <div class="d-flex flex-column">
              <div class="d-flex flex-column mb-8">
                <span class="text-white opacity-70 font-weight-300 text-16">почта</span>
                <a style="color: #ECEEEC" href="mailto:hello@paleo.studio" target="_blank" rel="noreferrer" class="font-text text-20 mt-3 text-decoration-none cursor-pointer">
                  hello@paleo.studio
                </a>
              </div>
              <div class="d-flex flex-column">
                <span class="text-white opacity-70 font-weight-300 text-16">телеграмм</span>
                <a style="color: #ECEEEC" href="https://t.me/paleostudio" target="_blank" rel="noreferrer" class="font-text text-20 mt-3 text-decoration-none cursor-pointer">
                  @paleostudio
                </a>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>
      <v-navigation-drawer style="border-radius: 16px 16px 0 0" class="mt-80" width="100%"
                           color="#F4F4F4" floating temporary
                           v-model="sendForm" location="top">
        <v-card elevation="0" rounded="0" color="transparent" class="pt-15 px-5">
          <v-card-text class="pa-0">
            <div class="d-flex flex-column">
              <span class="text-black-grey text-20">Привет! <span class="opacity-60">Заполните анкету, <br> чтобы обсудить проект</span></span>
            </div>
            <div class="mt-12">
              <v-text-field hide-details label="Как вас зовут?" variant="underlined"/>
              <v-text-field class="my-10" hide-details label="Почта, телефон номер или любой мессенджер"
                            variant="underlined"/>
              <v-textarea no-resize hide-details label="Расскажите о задаче или любой комментарий" variant="underlined"/>
            </div>
            <v-btn style="border-radius: 100px !important;" width="100%" height="100%" variant="flat"
                   class="mt-12 py-4 mb-6">
              <p class="text-uppercase text-16 text-white">ОБСУДИТЬ ПРОЕКТ</p>
            </v-btn>
            <span class="text-black-grey text-10 font-text">Нажимая кнопку “Отправить”, я даю согласие на обработку своих персональных данных и соглашаюсь с Условиями использования и <span
                class="text-decoration-underline cursor-pointer">Политикой конфиденциальности</span></span>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>
    </v-col>
    <v-col cols="12" class="pa-0">
      <div style="background: #0D0D0D" class="pb-80">
        <v-card color="transparent" elevation="0" class="pt-15 rounded-0 page-wrapper">
          <v-card-text class="pa-0 d-flex justify-center px-5">
            <v-row class="ma-0 pa-0">
              <v-col cols="12" class="pa-0 text-center">
                <div class="d-flex justify-center flex-column text-center gradient-text mb-6">
                  <p class="ma-0 text-32 text-uppercase">CREATIVE
                    DIGITAL</p>
                  <p class="ma-0 text-32 text-uppercase">
                    PRODUCTION</p>
                </div>
                <p style="line-height: 22px" class="font-text opacity-70 text-16 ma-0">В Paleo мы специализируемся на разработке
                  веб-сервисов высокого уровня, приносящих бизнес-результаты для вашего успеха.</p>
              </v-col>
              <v-col style="position: relative;z-index: 1;height: 300px" class="pa-0 d-flex justify-center" cols="12">
                <div style="width: 100%" class="d-flex justify-center">
                  <v-btn @click="toggleForm" :width="windowWidth > 500 ? '300' : '100%'" style="border-radius: 100px !important;"
                         class="px-6 pt-5 pb-12 mt-12 hover-white"
                         variant="outlined">
                    <span class="text-uppercase text-16 font-weight-400">ОБСУДИТЬ ПРОЕКТ</span>
                  </v-btn>
                </div>
                <img style="position: absolute;z-index: -1;right: -150px" width="262" height="262" src="/static/images/sphere.webp" alt="sphere">
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text id="info" class="pa-0 px-5 mt-16">
            <span style="line-height: 14px" class="text-uppercase text-14 opacity-70 font-weight-300 text-white">ПРИНЦИПЫ</span>
            <div class="d-flex flex-column mt-4">
              <span style="line-height: 24px" class="text-white text-20">Индивидуальный подход к каждому проекту – это</span>
              <span style="line-height: 24px" class="opacity-60 text-20"> ключевой принцип нашей работы </span>
            </div>
            <div :class="windowWidth <= 960 ? 'mt-12' : 'mt-80'" class="d-flex flex-wrap">
              <div class="info_card d-flex flex-column">
                <div class="d-flex">
                  <div class="info_card__img">
                    <img  width="56" height="56" src="/static/images/gem.webp" alt="gem">
                  </div>
                </div>
                <div class="d-flex flex-column mt-6">
                  <span style="line-height: 25px" class="text-uppercase text-18 text-white">Соблюдаем правила и дедлайны</span>
                  <span style="line-height: 21px" class="mt-3  text-15 font-text opacity-70">Наша команда строго придерживается установленных правил и дедлайнов, гарантируя своевременную и качественную реализацию проекта</span>
                </div>
              </div>
              <div class="info_card d-flex flex-column mt-12">
                <div class="d-flex">
                  <div class="info_card__img">
                    <img width="56" height="56" src="/static/images/comb.webp" alt="comb">
                  </div>
                </div>
                <div class="d-flex flex-column mt-6">
                  <span style="line-height: 25px" class="text-uppercase text-18 text-white">Создаем digital-решения </span>
                  <span style="line-height: 21px" class="mt-3  text-15 font-text opacity-70">Мы специализируемся на разработке современных digital-решений, учитывая последние технологические тенденции, чтобы обеспечить ваш бизнес передовыми инструментами</span>
                </div>
              </div>
              <div class="info_card d-flex flex-column mt-12">
                <div class="d-flex">
                  <div class="info_card__img">
                    <img width="56" height="56" src="/static/images/plus.webp" alt="plus">
                  </div>
                </div>
                <div class="d-flex flex-column mt-6">
                  <span style="line-height: 25px" class="text-uppercase text-18 text-white">С нами вы экономите</span>
                  <span style="line-height: 21px" class="mt-3  text-15 font-text opacity-70">Работая с нами, вы получаете не только высококачественное digital-решение, но и экономите ресурсы благодаря оптимизации процессов и снижению издержек</span>
                </div>
              </div>
              <div class="info_card d-flex flex-column mt-12">
                <div class="d-flex">
                  <div class="info_card__img">
                    <img width="56" height="56" src="/static/images/plane.webp" alt="plane">
                  </div>
                </div>
                <div class="d-flex flex-column mt-6">
                  <span style="line-height: 25px" class="text-uppercase text-18 text-white">лучшие решения для вашего бизнеса</span>
                  <span style="line-height: 21px" class="mt-3  text-15 font-text opacity-70">Наша команда активно исследует и предлагает лучшие решения, адаптированные под особенности вашего бизнеса, с целью обеспечения максимальной эффективности и успеха вашего проекта</span>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div id="projects" style="background: #F4F4F4">
        <v-card color="transparent" elevation="0" class="pt-80 rounded-0 page-wrapper mb-80">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <span style="line-height: 14px" class="text-uppercase text-black-grey text-14 font-weight-300 opacity-70">ЧТО МЫ УМЕЕМ</span>
              <span style="line-height: 24px" class="text-20 text-black-grey mt-5">Цифровые продукты, современные сайты <br> и приложения, решение бизнес задач</span>
            </div>
            <div class="cursor-pointer">
              <div style="position: relative" class="mt-12">
                <!--           <img src="/static/videos/kipish/kipish_prev1.mp4"/>-->
                <div @mouseenter="handleMouseOver('kipish')"
                     @mouseleave="handleMouseOut('kipish')" class="project_hover">
                  <div style="height: 100%;width: 100%" class="d-flex justify-center align-center"
                       v-if="isHoveredKipish">
                    <div @click="$router.push('/kipish')" class="hovered_block">
                      <Icon name="f7:arrow-up-right" style="color: #222222;width: 20px;height: 20px"/>
                    </div>
                  </div>
                </div>
                <div class="projects_block__video" style="border-radius: 16px;overflow: hidden">
                  <video style="object-fit: cover" width="100%" height="100%" loop autoplay :controls="false" muted>
                    <source src="/static/videos/kipish/kipish_prev.webm" type="video/webm">
                  </video>
                </div>
              </div>
              <div class="d-flex justify-space-between align-center">
                <div class="mt-6 d-flex flex-column">
                  <span style="line-height: 21px" class="text-black-grey text-18">КИПИШ</span>
                  <span style="line-height: 21px" class="font-text  text-black-grey text-15 mt-3 opacity-70">Платформа о ночной жизни города, где человек может смотреть <br> все топовые заведения города и актуальные репортажи с вечеринок</span>
                </div>
              </div>
            </div>
            <div class="mt-10 projects_block">
              <div class="projects_block__card cursor-pointer">
                <div style="position: relative" class="projects_block__video">
                  <div @mouseenter="handleMouseOver('parcel')"
                       @mouseleave="handleMouseOut('parcel')" class="project_hover">
                    <div style="height: 100%;width: 100%" class="d-flex justify-center align-center"
                         v-if="isHoveredParcel">
                      <div @click="$router.push('/parcel')" class="hovered_block">
                        <Icon name="f7:arrow-up-right" style="color: #222222;width: 20px;height: 20px"/>
                      </div>
                    </div>
                  </div>
                  <video style="object-fit: cover" width="100%" height="100%" loop autoplay :controls="false" muted>
                    <source src="/static/videos/parcel.webm" type="video/webm">
                  </video>
                </div>
                <div class="d-flex flex-column mt-7">
                  <span style="line-height: 25px" class="text-18 text-black-grey">Улучшаем работу складов в США</span>
                  <span style="line-height: 21px" class="text-black-grey  font-text text-15 mt-3 opacity-70">Cделали удобный личный кабинет для клиентов, а также ускорили отправку посылок за счет ускорения процессов.</span>
                </div>
              </div>
              <div class="projects_block__card mt-10">
                <img width="100%" src="/static/images/cover.webp" alt="cover">
                <div class="d-flex flex-column mt-6">
                  <span style="line-height: 21px" class="text-18 text-black-grey">Cover- Flow</span>
                  <span style="line-height: 21px" class="text-black-grey  font-text text-15 mt-3 opacity-70">Инновационное решение для составления сопроводительных писем высшего уровня. Эта умная система учитывает не только формальные </span>
                </div>
              </div>
              <div class="projects_block__card mt-10 cursor-pointer">
                <div style="position: relative" class="projects_block__video">
                  <div @mouseenter="handleMouseOver('silkway')"
                       @mouseleave="handleMouseOut('silkway')" class="project_hover">
                    <div style="height: 100%;width: 100%" class="d-flex justify-center align-center"
                         v-if="isHoveredSilkway">
                      <div @click="$router.push('/silkway')" class="hovered_block">
                        <Icon name="f7:arrow-up-right" style="color: #222222;width: 20px;height: 20px"/>
                      </div>
                    </div>
                  </div>
                  <video style="object-fit: cover" width="100%" height="100%" loop autoplay :controls="false" muted>
                    <source src="/static/videos/silk.webm" type="video/webm">
                  </video>
                </div>
                <div class="d-flex flex-column mt-7">
                  <span style="line-height: 21px" class="text-18 text-black-grey">Silkway Rally</span>
                  <span style="line-height: 21px" class="text-black-grey  font-text text-15 mt-3 opacity-70">Помогаем с платформой для регистрации участников и транспортных средств</span>
                </div>
              </div>
<!--              <div class="projects_block__card mt-10">-->
<!--                <img width="100%" src="/static/images/none.webp" alt="none">-->
<!--                <div class="d-flex flex-column mt-6">-->
<!--                  <span class="text-18 text-black-grey">Неизвестно</span>-->
<!--                  <span class="text-black-grey  font-text text-15 mt-3 opacity-70">Оставили место для Вашего проекта</span>-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div id="services" style="background: #0D0D0D">
        <v-card color="transparent" elevation="0" class="pt-80 rounded-0 page-wrapper pb-80">
          <v-card-text class="pa-0">
            <div>
              <span style="line-height: 14px" class="text-uppercase text-14 font-weight-300 text-white opacity-70 px-5">УСЛУГИ</span>
              <div class="mt-5 px-5">
                <p style="line-height: 24px" class="text-20 ma-0">Мы — ваш надежный партнер для создания уникальных <br> <span class="opacity-60">веб-приложений и современных веб-решений</span>
                </p>
              </div>
              <div class="services_block px-5">
                <div class="services_block__card mt-12 d-flex flex-column">
                  <div style="max-width: 740px" class="d-flex flex-column">
                    <span style="line-height: 25px" class="text-18 text-white">Разработка веб-приложений</span>
                    <span style="line-height: 21px" class="text-15 font-text  text-white opacity-70 mt-3">Разрабатываем веб-приложения для среднего и крупного бизнесы, которые, нацелены на комплексную автоматизацию бизнес-процессов и повышение эффективности на всех уровнях вашей организации</span>
                  </div>
                  <div class="d-flex flex-column mt-6">
                    <span class="text-16 text-white">от 500000 ₽</span>
                    <span
                        class="text-14  font-text text-white opacity-70 mt-2">Срок работы индивидуальный</span>
                  </div>
                </div>
                <div class="services_block__card mt-10 d-flex flex-column">
                  <div style="max-width: 740px" class="d-flex flex-column">
                    <span style="line-height: 25px" class="text-18 text-white">Разработка веб-сайтов</span>
                    <span style="line-height: 21px" class="text-15 font-text  text-white opacity-70 mt-3">Разрабатываем веб-сайты любой сложности. От лендингов до корпоративных страниц, и интренет магазинов</span>
                  </div>
                  <div class="d-flex flex-column mt-6">
                    <span class="text-16 text-white">от 100000 ₽</span>
                    <span
                        class="text-14  font-text text-white opacity-70 mt-2">Срок работы индивидуальный</span>
                  </div>
                </div>
                <div class="services_block__card mt-10 d-flex flex-column">
                  <div style="max-width: 740px" class="d-flex flex-column">
                    <span style="line-height: 25px" class="text-18 text-white">Разработка мобильных приложений</span>
                    <span style="line-height: 21px" class="text-15 font-text  text-white opacity-70 mt-3">Разрабатываем интуитивно понятные и удобные мобильные приложения, которые помогут вам установить прочную связь с вашей аудиторией</span>
                  </div>
                  <div class="d-flex flex-column mt-6">
                    <span class="text-16 text-white">от 600000 ₽</span>
                    <span
                        class="text-14  font-text text-white opacity-70 mt-2">Поддержка выпущенных продуктов</span>
                  </div>
                </div>
                <div class="services_block__card mt-10 d-flex flex-column">
                  <div style="max-width: 740px" class="d-flex flex-column">
                    <span style="line-height: 25px" class="text-18 text-white">Поддержка выпущенных продуктов</span>
                    <span style="line-height: 21px" class="text-15 font-text  text-white opacity-70 mt-3">Наша команда готова обеспечить непрерывную поддержку и обновление ваших цифровых продуктов, гарантируя их бесперебойную работу и соответствие текущим требованиям рынка</span>
                  </div>
                  <div class="d-flex flex-column mt-6">
                    <span class="text-16 text-white">от 2100 ₽ / час</span>
                    <span
                        class="text-14  font-text text-white opacity-70 mt-2">Срок работы индивидуальный</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div id="contacts" style="background: #F4F4F4">
        <v-card color="transparent" elevation="0" class="pt-80 pb-80 rounded-0 page-wrapper">
          <v-card-text class="pa-0 px-5">
            <div class="d-flex flex-column">
              <span style="line-height: 14px" class="text-uppercase text-14 font-weight-300 text-black-grey opacity-70">контакты</span>
              <span style="line-height: 24px" class="text-black-grey text-20 mt-8">Поговорите с нами о задачах и целях вашего бизнеса. <span
                  class="opacity-60">Поболтаем, обсудим, или просто давайте знакомиться</span> </span>
            </div>
            <div class="contacts_block mt-12">
              <div class="contacts_block__card">
                <div class="d-flex flex-column">
                  <span class="opacity-60 text-14 font-weight-300">почта</span>
                  <a style="color: #ECEEEC" href="mailto:hello@paleo.studio" target="_blank" rel="noreferrer" class="font-text text-20 mt-3 text-decoration-none cursor-pointer text-black">
                    hello@paleo.studio
                  </a>
                </div>
                <div class="contacts_block__img">
                  <img width="140px" src="/static/images/chain.webp" alt="chain">
                </div>
              </div>
              <div class="contacts_block__card mt-8">
                <div class="d-flex flex-column">
                  <span class="opacity-60 text-14 font-weight-300">телеграм</span>
                  <a href="https://t.me/paleostudio" target="_blank" rel="noreferrer" class="font-text text-20 mt-3 text-decoration-none cursor-pointer text-black">
                    @paleostudio
                  </a>
                </div>
                <div class="contacts_block__img_bott">
                  <img width="140px" src="/static/images/icosphere.webp" alt="chain">
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
useHead({
  titleTemplate: 'Paleo Studio'
})
useSeoMeta({
  ogTitle: 'Paleo Studio - Ваш партнер в веб-разработке',
  description: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
  ogDescription: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
})

const {scrollToAnchor} = useAnchorScroll()

const menu = ref(false);
const sendForm = ref(false);
const windowWidth = ref(0);
const isHoveredKipish = ref(false)
const isHoveredParcel = ref(false)
const isHoveredSilkway = ref(false)

const toggleMenu = () => {
  menu.value = !menu.value;
};

const toggleForm = () => {
  sendForm.value = !sendForm.value;
};

const scrollToBlock = (target) => {
  scrollToAnchor(target)
  menu.value = false
};

const handleMouseOver = (target) => {
  switch (target) {
    case 'kipish':
      isHoveredKipish.value = true
      break;
    case 'parcel':
      isHoveredParcel.value = true
      break;
    case 'silkway':
      isHoveredSilkway.value = true
      break;
  }
};
const handleMouseOut = (target) => {
  switch (target) {
    case 'kipish':
      isHoveredKipish.value = false
      break;
    case 'parcel':
      isHoveredParcel.value = false
      break;
    case 'silkway':
      isHoveredSilkway.value = false
      break;
  }
};

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<style scoped>
.gradient-text {
  background: rgb(0, 0, 0);
  background: linear-gradient(70deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info_card {
  width: 100%;
  border-radius: 24px;
  padding: 24px 16px 28px 20px;
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
    width: 100%;

    img {

    }
  }

  .projects_block__video {
    width: 100%;
    overflow: hidden;

    video {
      border-radius: 16px;
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
    padding: 24px 16px 28px 16px;
  }
}

.contacts_block {
  display: flex;
  flex-wrap: wrap;

  .contacts_block__card {
    position: relative;
    width: 100%;
    height: 120px;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 24px 32px;
    color: #222222;
    img {
      width: 140px !important;
    }
  }

  .contacts_block__img {
    position: absolute;
    right: 0;
    top: 0;
  }

  .contacts_block__img_bott {
    position: absolute;
    right: 0;
    bottom: -5px;
  }
}

.project_hover {
  position: absolute;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  z-index: 2;
  &:hover {
    background: rgba(0, 0, 0, 0.4) !important;
    z-index: 2;
  }

  .hovered_block {
    z-index: 3;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 1440px) {


}

@media screen and (max-width: 1024px) {
  .projects_block__card {
    width: 100%;
    img {
      height: 520px;
    }
  }

  .projects_block__video {
    width: 100%;
    height: 520px;
    overflow: hidden;

    video {
      border-radius: 16px;

    }
  }
}

@media screen and (max-width: 768px) {
  .projects_block__card {
    width: 100%;

    img {
      height: 370px;
    }
  }

  .projects_block__video {
    width: 100%;
    height: 370px;
    overflow: hidden;

    video {
      border-radius: 16px;

    }
  }
}

@media screen and (max-width: 576px) {
  .projects_block__card {
    width: 100%;

    img {
      height: 280px;
    }
  }

  .projects_block__video {
    width: 100%;
    height: 280px;
    overflow: hidden;

    video {
      border-radius: 16px;

    }
  }
}
</style>