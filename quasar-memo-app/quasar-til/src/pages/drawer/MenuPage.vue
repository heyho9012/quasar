<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Menu</div>
    <q-list class="row items-start">
      <q-item>
        <q-item-section class="q-gutter-y-md">
          <q-item-label header>
            <div class="text-weight-bold">basic</div>
          </q-item-label>
          <q-btn label="basic menu" color="primary">
            <q-menu fit :offset="[0, 8]" auto-close>
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  v-for="(item, index) in 4"
                  :key="index"
                >
                  <q-item-section>Tab</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn label="touch position" color="primary">
            <q-menu fit :offset="[0, 8]" touch-position>
              <q-list>
                <template v-for="(item, index) in 4" :key="index">
                  <q-item clickable v-close-popup>
                    <q-item-section>New Tab</q-item-section>
                  </q-item>
                  <q-separator />
                </template>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="q-gutter-y-md">
          <q-item-label header>
            <div class="text-weight-bold">toggle through v-model</div>
          </q-item-label>
          <div class="row">
            <q-btn
              @click="show = true"
              label="show"
              class="col-grow"
              color="primary"
            ></q-btn>
            <q-btn
              @click="show = fasel"
              label="hide"
              class="col-grow"
              color="secondary"
            ></q-btn>
          </div>
          <q-btn label="menu" color="deep-orange">
            <q-menu
              :offset="[0, 4]"
              v-model="show"
              transition-show="rotate"
              transition-hide="rotate"
            >
              <q-list>
                <template v-for="(item, index) in 4" :key="index">
                  <q-item clickable v-close-popup>
                    <q-item-section>New Tab</q-item-section>
                  </q-item>
                  <q-separator v-if="index == 1" />
                </template>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="q-gutter-y-md">
          <q-item-label header>
            <div class="text-weight-bold">menus in menus</div>
          </q-item-label>
          <q-bar class="rounded-borders bg-teal text-white">
            <div>
              <q-btn label="file" flat dense>
                <q-menu transition-show="jump-down" transition-hide="jump-up">
                  <q-list>
                    <template v-for="(item, index) in 4" :key="index">
                      <q-item clickable v-close-popup="index !== 2" dense>
                        <q-item-section>New Tab</q-item-section>
                        <template v-if="index == 2">
                          <q-item-section side>
                            <q-icon name="keyboard_arrow_right"></q-icon
                          ></q-item-section>
                          <q-menu anchor="top end" self="top start">
                            <q-list dense>
                              <q-item v-for="n in 3" :key="n" clickable>
                                <q-item-section>Submenu Label</q-item-section>
                                <q-item-section side>
                                  <q-icon name="keyboard_arrow_right" />
                                </q-item-section>
                                <q-menu
                                  auto-close
                                  anchor="top end"
                                  self="top start"
                                >
                                  <q-list dense>
                                    <q-item v-for="n in 3" :key="n" clickable>
                                      <q-item-section
                                        >3rd level Label</q-item-section
                                      >
                                    </q-item>
                                  </q-list>
                                </q-menu>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </template>
                      </q-item>
                      <q-separator v-if="index == 1 || index == 2" />
                    </template>
                  </q-list>
                </q-menu>
              </q-btn>
              <q-btn label="edit" flat dense>
                <q-menu
                  max-height="160px"
                  class="bg-purple text-white"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-list>
                    <template v-for="(item, index) in 8" :key="index">
                      <q-item clickable v-close-popup dense>
                        <q-item-section>New Tab</q-item-section>
                      </q-item>
                      <q-separator v-if="index == 2" dark />
                    </template>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
            <q-space />
            <q-btn icon="minimize" flat dense />
            <q-btn icon="crop_square" flat dense />
            <q-btn icon="close" flat dense />
          </q-bar>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="q-gutter-y-md">
          <q-item-label header>
            <div class="text-weight-bold">persistent</div>
          </q-item-label>
          <q-btn label="persistent" color="orange">
            <q-menu
              fit
              persistent
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-list>
                <q-item
                  clickable
                  v-close-popup
                  v-for="(item, index) in 4"
                  :key="index"
                >
                  <q-item-section>Tab</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="text-h6 text-weight-bold q-mt-lg">Resize Observer</div>
    <q-list class="row">
      <q-item class="column">
        <q-item-section>
          <q-item-label header
            ><div class="text-weight-bold">basic</div></q-item-label
          >
        </q-item-section>
        <q-item-section>
          <q-btn
            label="set random size"
            push
            class="q-mb-md resize-btn"
            color="deep-orange"
            @click="setRandomSize"
          />
          <div class="container bg-amber rounded-borders glossy" :style="style">
            <q-resize-observer @resize="onResize" />
          </div>
          <div v-if="report" class="q-mt-md q-gutter-x-sm">
            <q-badge>width: {{ report.width }}</q-badge>
            <q-badge>height: {{ report.height }}</q-badge>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="text-h6 text-weight-bold q-mt-lg">Scroll Observer</div>
    <q-list class="row">
      <q-item class="column">
        <q-item-section>
          <q-item-label header
            ><div class="text-weight-bold">basic</div></q-item-label
          >
        </q-item-section>
        <pre class="q-ma-none container">{{ scrollInfo }}</pre>
        <q-scroll-observer @scroll="onScroll" />
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);

const style = ref({ width: "200px", height: "200px" });
const report = ref(null);

const onResize = (size) => {
  report.value = size;
};
const setRandomSize = () => {
  style.value.width = Math.floor(100 + Math.random() * 200) + "px";
  style.value.height = Math.floor(100 + Math.random() * 200) + "px";
};
const scrollInfo = ref({});
const onScroll = (info) => {
  scrollInfo.value = info;
};
</script>

<style lang="scss" scoped>
.q-page > .q-list > .q-item {
  width: 300px;
}
.q-bar {
  > div .q-btn {
    width: 36px;
  }
  > .q-btn {
    width: 20px;
  }
}
.container {
  transition: width 0.3s, height 0.3s;
}
.resize-btn {
  width: 200px;
}
</style>
