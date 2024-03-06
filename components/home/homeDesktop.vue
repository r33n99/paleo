<template>
  <v-row class="ma-0 pb-180">
    <v-col class="pa-0" cols="12">
      <div id="top" style="background: #0D0D0D">
        <v-card color="transparent" elevation="0" class="rounded-0 page-wrapper pa-0 pb-80">
          <v-card-text
              class="pa-0 pt-10 px-16 pb-8 mx-8 d-flex align-center justify-space-between">
            <div @click="$router.push('/')" class="cursor-pointer">
              <img width="107" height="26" src="/static/images/logo.svg" alt="logo">
            </div>
            <div>
              <NuxtLink @click="scrollToAnchor('projects')">
                <span style="color: #ababab"
                      class="text-uppercase cursor-pointer font-weight-300 nav-item">ПРОЕКТЫ</span>
              </NuxtLink>
              <NuxtLink @click="scrollToAnchor('info')">
                <span style="color: #ababab"
                      class="mx-10 text-uppercase cursor-pointer font-weight-300 nav-item">О НАС</span>
              </NuxtLink>
              <NuxtLink @click="scrollToAnchor('services')">
                <span style="color: #ababab"
                      class="mr-10 text-uppercase cursor-pointer font-weight-300 nav-item">Услуги</span>
              </NuxtLink>
              <NuxtLink @click="scrollToAnchor('contacts')">
                <span style="color: #ababab"
                      class="text-uppercase cursor-pointer font-weight-300 nav-item">КОНТАКТЫ</span>
              </NuxtLink>
            </div>
            <div @click="toggleMenu" class="cursor-pointer">
              <Icon name="humbleicons:bars" style="color: white;width: 24px;height: 24px"/>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <v-navigation-drawer style="border-radius: 24px 0  0 24px" width="1000" color="#F4F4F4" floating temporary
                           v-model="sendForm" location="right">
        <v-card elevation="0" rounded="0" color="transparent" class="pt-140 pl-90 pr-140">
          <v-card-text class="pa-0">
            <div class="d-flex flex-column">
              <span class="text-black-grey text-40">Привет! <span class="opacity-60">Заполните анкету, <br> чтобы обсудить проект</span></span>
              <span class="text-black-grey text-18 font-text mt-6">Заполните анкету, и расскажите о вашей задаче <br> или давайте просто знакомится </span>
            </div>
            <div class="mt-80">
              <v-text-field hide-details label="Как вас зовут?" variant="underlined"/>
              <v-text-field class="my-15" hide-details label="Почта, телефон номер или любой мессенджер"
                            variant="underlined"/>
              <v-textarea no-resize hide-details label="Расскажите о задаче или любой комментарий"
                          variant="underlined"/>
            </div>
            <v-btn style="border-radius: 100px !important;" width="100%" height="100%" variant="flat"
                   class="mt-15 py-8 mb-6">
              <p class="text-uppercase text-16 text-white">ОТПРАВИТЬ ЗАЯВКУ</p>
            </v-btn>
            <span class="text-black-grey text-12 font-text">Нажимая кнопку “Отправить”, я даю согласие на обработку своих персональных данных и соглашаюсь с Условиями использования и <span
                class="text-decoration-underline cursor-pointer">Политикой конфиденциальности</span></span>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>
      <v-navigation-drawer style="border-radius: 24px 0  0 24px" width="1000" color="#0D0D0D" floating temporary
                           v-model="menu" location="right">
        <v-card elevation="0" rounded="0" color="transparent" class="pt-120 pl-80">
          <v-card-text class="pa-0">
            <div class="d-flex flex-column mb-80">
              <NuxtLink @click="scrollToAnchor('projects')">
                <span class="text-uppercase cursor-pointer nav-item text-32 text-white">ПРОЕКТЫ</span>
              </NuxtLink>
              <NuxtLink class="my-10" @click="scrollToAnchor('info')">
                <span class="text-uppercase cursor-pointer nav-item text-32 text-white">О НАС</span>
              </NuxtLink>
              <NuxtLink class="mb-10" @click="scrollToAnchor('services')">
                <span class="text-uppercase cursor-pointer nav-item text-32 text-white">УСЛУГИ</span>
              </NuxtLink>
              <NuxtLink @click="scrollToAnchor('contacts')">
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
      <div style="background: #0D0D0D" class="pb-140">
        <v-card color="transparent" elevation="0" class="pt-15 rounded-0 page-wrapper">
          <v-card-text class="pa-0 pr-16 mr-8 d-flex justify-center">
            <v-row class="ma-0 pa-0">
              <v-col class="pa-0 d-flex align-end" cols="3">
                <div class="mt-16">
                  <img loading="lazy" width="400" height="400" src="/static/images/sphere.webp" alt="sphere">
                </div>
              </v-col>
              <v-col cols="7" class="pa-0 text-center">
                <div class="d-flex justify-center flex-column text-center gradient-text">
                  <p class="ma-0 text-72 text-uppercase">CREATIVE
                    DIGITAL</p>
                  <p class="ma-0 text-72 text-uppercase">
                    PRODUCTION</p>
                </div>
                <div style="width: 100%" class="d-flex justify-center">
                  <span style="max-width: 536px;line-height: 22px"
                        class=" mt-6 font-text opacity-70 text-16">В Paleo мы специализируемся на разработке веб-сервисов высокого уровня, приносящих бизнес-результаты для вашего успеха.</span>
                </div>
              </v-col>
              <v-col class="pa-0 d-flex align-center" cols="2">
                <div class="mt-16 pt-16">
                  <v-btn @click="toggleForm" style="border-radius: 100px !important;"
                         class="px-6 pt-5 pb-12 hover-white"
                         variant="outlined">
                    <span class="text-uppercase text-16 font-weight-400">ОБСУДИТЬ ПРОЕКТ</span>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text id="info" class="pa-0 px-16 mx-8 mt-16">
            <span style="line-height: 16px" class="text-uppercase text-16 opacity-70 font-weight-300 text-white">ПРИНЦИПЫ</span>
            <div class="d-flex flex-column mt-7">
              <span style="line-height: 38px"
                    class="text-white text-32">Индивидуальный подход к каждому проекту <br> <span
                  class="opacity-60 text-32">– это ключевой принцип нашей работы </span></span>
            </div>
            <div class="d-flex flex-wrap mt-80">
              <div class="info_card d-flex flex-column mr-lg-12 mr-md-10 mr-xl-16">
                <div class="d-flex">
                  <div class="info_card__img">
                    <img loading="lazy" width="120" height="120" src="/static/images/gem.webp" alt="gem">
                  </div>
                </div>
                <div class="d-flex flex-column mt-10">
                  <span style="line-height: 24px"
                        class="text-uppercase text-20 text-white">Соблюдаем правила и дедлайны</span>
                  <span style="line-height: 22px" class="mt-4  text-16 font-text opacity-70">Наша команда строго придерживается установленных правил и дедлайнов, гарантируя своевременную и качественную реализацию проекта</span>
                </div>
              </div>
              <div class="info_card d-flex flex-column">
                <div class="d-flex">
                  <div class="info_card__img">
                    <img loading="lazy" width="120" height="120" src="/static/images/comb.webp" alt="comb">
                  </div>
                </div>
                <div class="d-flex flex-column mt-10">
                  <span style="line-height: 24px"
                        class="text-uppercase text-20 text-white">Создаем digital-решения</span>
                  <span style="line-height: 22px" class="mt-4  text-16 font-text opacity-70">Мы специализируемся на разработке современных digital-решений, учитывая последние технологические тенденции, чтобы обеспечить ваш бизнес передовыми инструментами</span>
                </div>
              </div>
              <div class="info_card d-flex flex-column mt-80 mr-lg-12 mr-md-10 mr-xl-16">
                <div class="d-flex">
                  <div class="info_card__img">
                    <img loading="lazy" width="120" height="120" src="/static/images/plus.webp" alt="plus">
                  </div>
                </div>
                <div class="d-flex flex-column mt-10">
                  <span style="line-height: 24px" class="text-uppercase text-20 text-white">С нами вы экономите</span>
                  <span style="line-height: 22px" class="mt-4  text-16 font-text opacity-70">Работая с нами, вы получаете не только высококачественное digital-решение, но и экономите ресурсы благодаря оптимизации процессов и снижению издержек</span>
                </div>
              </div>
              <div class="info_card d-flex flex-column mt-80">
                <div class="d-flex">
                  <div class="info_card__img">
                    <img loading="lazy" width="120" height="120" src="/static/images/plane.webp" alt="plane">
                  </div>
                </div>
                <div class="d-flex flex-column mt-10">
                  <span style="line-height: 24px" class="text-uppercase text-20 text-white">лучшие решения для вашего бизнеса</span>
                  <span style="line-height: 22px" class="mt-4  text-16 font-text opacity-70">Наша команда активно исследует и предлагает лучшие решения, адаптированные под особенности вашего бизнеса, с целью обеспечения максимальной эффективности и успеха вашего проекта</span>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div id="projects" style="background: #F4F4F4">
        <v-card color="transparent" elevation="0" class="pt-140 pb-140 rounded-0 page-wrapper">
          <v-card-text class="pa-0 px-16 mx-8">
            <div class="d-flex flex-column">
              <span style="line-height: 16px" class="text-uppercase text-black-grey text-16 font-weight-300 opacity-70">ЧТО МЫ УМЕЕМ</span>
              <span style="line-height: 38px" class="text-32 text-black-grey mt-7">Цифровые продукты, современные сайты <br> и приложения, решение бизнес задач</span>
            </div>
            <div class="mt-80">
              <div
                  style="height: 640px;border-radius: 24px;overflow: hidden;position: relative" class="cursor-pointer"
              >
                <div @mouseenter="handleMouseOver('kipish')"
                     @mouseleave="handleMouseOut('kipish')" class="project_hover">
                  <div style="height: 100%;width: 100%" class="d-flex justify-center align-center"
                       v-if="isHoveredKipish">
                    <div @click="$router.push('/kipish')" class="hovered_block">
                      <Icon name="f7:arrow-up-right" style="color: #222222;width: 40px;height: 40px"/>
                    </div>
                  </div>
                </div>
                <video preload="auto" style="object-fit: cover" width="100%" height="100%" loop autoplay :controls="false" muted>
                  <source src="/static/videos/kipish/kipish_prev.webm" type="video/webm">
                </video>
              </div>
            </div>
            <div class="d-flex justify-space-between align-end">
              <div class="mt-12 d-flex flex-column">
                <span style="line-height: 48px" class="text-black-grey text-40">КИПИШ</span>
                <span style="line-height: 25px"
                      class="font-text  text-black-grey text-18 mt-3 opacity-70">Платформа о ночной жизни города, где человек может смотреть <br> все топовые заведения города и актуальные репортажи с вечеринок</span>
              </div>
              <div class="d-flex align-center mb-n1">
                <span class="text-black-grey text-24 font-text mr-3">●</span>
                <span class="text-black-grey text-24 font-text">2023-2024</span>
              </div>
            </div>
            <div class="mt-100 projects_block">
              <div class="projects_block__card mr-lg-12 mr-md-10 mr-xl-16">
                <div style="position: relative" class="projects_block__video cursor-pointer">
                  <div @mouseenter="handleMouseOver('parcel')"
                       @mouseleave="handleMouseOut('parcel')" class="project_hover">
                    <div style="height: 100%;width: 100%" class="d-flex justify-center align-center"
                         v-if="isHoveredParcel">
                      <div @click="$router.push('/parcel')" class="hovered_block">
                        <Icon name="f7:arrow-up-right" style="color: #222222;width: 40px;height: 40px"/>
                      </div>
                    </div>
                  </div>
                  <video preload="auto" style="object-fit: cover" width="100%" height="100%" loop autoplay :controls="false" muted>
                    <source src="/static/videos/parcel.webm" type="video/webm">
                  </video>
                </div>
                <div class="d-flex flex-column mt-8">
                  <span style="line-height: 29px" class="text-24 text-black-grey">Улучшаем работу складов в США</span>
                  <span style="line-height: 22px"
                        class="text-black-grey  font-text text-16 mt-3 opacity-70">Cделали удобный личный кабинет для клиентов, а также ускорили отправку посылок за счет ускорения процессов.</span>
                </div>
              </div>
              <div class="projects_block__card">
                <div style="position: relative" class="projects_block__video cursor-pointer">
                  <div @mouseenter="handleMouseOver('silkway')"
                       @mouseleave="handleMouseOut('silkway')" class="project_hover">
                    <div style="height: 100%;width: 100%" class="d-flex justify-center align-center"
                         v-if="isHoveredSilkway">
                      <div @click="$router.push('/silkway')" class="hovered_block">
                        <Icon name="f7:arrow-up-right" style="color: #222222;width: 40px;height: 40px"/>
                      </div>
                    </div>
                  </div>
                  <video preload="auto" style="object-fit: cover" width="100%" height="100%" loop autoplay :controls="false" muted>
                    <source src="/static/videos/silk.webm" type="video/webm">
                  </video>
                </div>
                <div class="d-flex flex-column mt-8">
                  <span style="line-height: 29px" class="text-24 text-black-grey">Silkway Rally</span>
                  <span style="line-height: 22px"
                        class="text-black-grey  font-text text-16 mt-3 opacity-70">Помогаем с платформой для регистрации участников и транспортных средств</span>
                </div>
              </div>
              <div class="projects_block__card mt-80">
                <img height="80%" width="100%" src="/static/images/cover.webp" alt="cover">
                <div class="d-flex flex-column mt-7">
                  <span style="line-height: 29px" class="text-24 text-black-grey">Cover- Flow</span>
                  <span style="line-height: 22px"
                        class="text-black-grey  font-text text-16 mt-3 opacity-70">Инновационное решение для составления сопроводительных писем высшего уровня. Эта умная система учитывает не только формальные </span>
                </div>
              </div>
              
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div id="services" style="background: #0D0D0D">
        <v-card color="transparent" elevation="0" class="pt-140 rounded-0 page-wrapper pb-140">
          <v-card-text class="pa-0 px-16 mx-8">
            <div>
              <span style="line-height: 16px" class="text-uppercase text-16 font-weight-300 text-white opacity-70">УСЛУГИ</span>
              <div class="mt-8">
                <span style="line-height: 38px"
                      class="text-32">Мы — ваш надежный партнер для <br> создания уникальных <span class="opacity-60">веб-приложений <br> и современных веб-решений</span></span>
              </div>
              <div class="services_block">
                <div class="services_block__card mt-80 d-flex justify-space-between">
                  <div style="max-width: 740px" class="d-flex flex-column">
                    <span style="line-height: 38px" class="text-32 text-white">Разработка веб-приложений</span>
                    <span style="line-height: 25px" class="text-18 font-text  text-white opacity-70 mt-7">Разрабатываем веб-приложения для среднего и крупного бизнесы, которые, нацелены на комплексную автоматизацию бизнес-процессов и повышение эффективности на всех уровнях вашей организации</span>
                  </div>
                  <div class="d-flex flex-column justify-space-between">
                    <span style="line-height: 38px" class="text-32 text-white">от 500000 ₽</span>
                    <span
                        class="text-18  font-text text-white opacity-70">Срок работы индивидуальный</span>
                  </div>
                </div>
                <div class="services_block__card mt-80 d-flex justify-space-between">
                  <div style="max-width: 740px" class="d-flex flex-column">
                    <span style="line-height: 38px" class="text-32 text-white">Разработка веб-сайтов</span>
                    <span style="line-height: 25px" class="text-18 font-text  text-white opacity-70 mt-7">Разрабатываем веб-сайты любой сложности. От лендингов до корпоративных страниц, и интренет магазинов.</span>
                  </div>
                  <div class="d-flex flex-column justify-space-between">
                    <span style="line-height: 38px" class="text-32 text-white">от 80000 ₽</span>
                    <span
                        class="text-18  font-text text-white opacity-70">Срок работы индивидуальный</span>
                  </div>
                </div>
                <div class="services_block__card mt-80 d-flex justify-space-between">
                  <div style="max-width: 740px" class="d-flex flex-column">
                    <span style="line-height: 38px" class="text-32 text-white">Разработка мобильных приложений</span>
                    <span style="line-height: 25px" class="text-18 font-text  text-white opacity-70 mt-7">Разрабатываем интуитивно понятные и удобные мобильные приложения, которые помогут вам установить прочную связь с вашей аудиторией</span>
                  </div>
                  <div class="d-flex flex-column justify-space-between">
                    <span style="line-height: 38px" class="text-32 text-white">от 400000 ₽</span>
                    <span
                        class="text-18  font-text text-white opacity-70">Срок работы индивидуальный</span>
                  </div>
                </div>
                <div class="services_block__card mt-80 d-flex justify-space-between">
                  <div style="max-width: 740px" class="d-flex flex-column">
                    <span style="line-height: 38px" class="text-32 text-white">Поддержка выпущенных продуктов</span>
                    <span style="line-height: 25px" class="text-18 font-text  text-white opacity-70 mt-7">Наша команда готова обеспечить непрерывную поддержку и обновление ваших цифровых продуктов, гарантируя их бесперебойную работу и соответствие текущим требованиям рынка</span>
                  </div>
                  <div class="d-flex flex-column justify-space-between">
                    <span style="line-height: 38px" class="text-32 text-white">от 1700 ₽ / час</span>
                    <span
                        class="text-18  font-text text-white opacity-70">Срок работы индивидуальный</span>
                  </div>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div style="background: #F4F4F4">
        <v-card color="transparent" elevation="0" class="pt-140 rounded-0 page-wrapper pb-140">
          <v-card-text id="contacts" class="px-16 pa-0 mx-8">
            <div class="d-flex flex-column">
              <span style="line-height: 16px" class="text-uppercase text-16 font-weight-300 text-black-grey opacity-70">контакты</span>
              <span style="line-height: 38px" class="text-black-grey text-32 mt-8">Поговорите с нами о задачах и целях вашего <br> бизнеса. <span
                  class="opacity-60">Поболтаем, обсудим, или просто давайте знакомиться</span> </span>
            </div>
            <div class="contacts_block mt-15">
              <div class="contacts_block__card mr-lg-12 mr-md-10 mr-xl-16">
                <div class="mt-80 d-flex flex-column">
                  <span class="opacity-60 text-18 font-weight-300">почта</span>
                  <a href="mailto:hello@paleo.studio" target="_blank" rel="noreferrer"
                     class="text-black font-text  text-32 text-decoration-underline mt-4">
                    hello@paleo.studio
                  </a>
                </div>
                <div class="contacts_block__img">
                  <img src="/static/images/chain.webp" alt="chain">
                </div>
              </div>
              <div class="contacts_block__card">
                <div class="mt-80 d-flex flex-column">
                  <span class="opacity-60 text-18 font-weight-300">телеграм</span>
                  <a href="https://t.me/paleostudio" target="_blank" rel="noreferrer"
                     class="font-text text-black text-decoration-none  text-32 mt-4">
                    @paleostudio
                  </a>
                </div>
                <div class="contacts_block__img_bott">
                  <img src="/static/images/icosphere.webp" alt="chain">
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
  title: 'Paleo Studio',
  ogTitle: 'Paleo Studio - Ваш партнер в веб-разработке',
  description: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
  ogDescription: 'Paleo Studio - это креативная веб-студия, специализирующаяся на разработке современных и функциональных веб-сайтов. Мы создаем уникальные и инновационные веб-решения, которые помогут вашему бизнесу выделиться в интернете.',
})
const {scrollToAnchor} = useAnchorScroll()

const isHoveredKipish = ref(false)
const isHoveredParcel = ref(false)
const isHoveredSilkway = ref(false)
const sendForm = ref(false);
const menu = ref(false);
const projects = [
  {name: 'Kipish', path: '/kipish'},
  {name: 'SilkWay', path: '/silkway'},
  {name: 'ParcelPoint', path: '/parcel'},
]

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
const toggleMenu = () => {
  menu.value = !menu.value;
};
const toggleForm = () => {
  sendForm.value = !sendForm.value;
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
  max-width: 48%;
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
    border-radius: 20px;
    width: 48%;
  }

  .projects_block__video {
    width: 100%;
    height: 80%;
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
    background: linear-gradient(rgba(32, 32, 32, 1), rgba(20, 20, 20, 1));
    padding: 44px 30px 54px 30px;
  }
}

.contacts_block {
  display: flex;
  flex-wrap: wrap;

  .contacts_block__card {
    width: 48%;
    position: relative;
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
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


@media screen and (max-width: 1920px) {

  .info_card {
    width: 48%;

  }

  .projects_block {
    display: flex;
    flex-wrap: wrap;

    .projects_block__card {
      width: 48%;
    }

  }

  .contacts_block__card {
    width: 48%;

    img {
      width: 270px;
    }
  }
}

@media screen and (max-width: 1440px) {

  .info_card {
    width: 48%;
  }

  .projects_block {
    .projects_block__card {
      width: 48%;
    }

  }

  .contacts_block__card {
    width: 48%;

    img {
      width: 200px;
    }
  }
}

@media screen and (max-width: 1391px) {

  .info_card {
    width: 47.5%;
  }

  .projects_block {
    .projects_block__card {
      width: 47.5%;
    }

  }

  .contacts_block__card {
    width: 47.5% !important;

    img {
      width: 200px;
    }
  }
}

@media screen and (max-width: 1280px) {
  .info_card {
    width: 47.5%;
  }

  .projects_block {
    .projects_block__card {
      width: 47.5%;

    }

  }

  .contacts_block__card {
    width: 47.5%;


    img {
      width: 200px;
    }
  }
}

@media screen and (max-width: 1080px) {
  .info_card {
    width:47.5%;
  }

  .projects_block {
    .projects_block__card {
      width:47.5%;
    }

  }

  .contacts_block__card {
    width:47.5%;
    img {
      width: 130px;
    }
  }
}

</style>