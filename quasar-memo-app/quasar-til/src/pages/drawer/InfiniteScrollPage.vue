<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Infinite Scroll</div>
    <q-list class="row items-start">
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <div class="wrapper">
            <q-infinite-scroll @load="onLoad" :offset="250">
              <div v-for="(item, index) in items" :key="index">
                <p>{{ lorem }}</p>
              </div>
              <template #loading>
                <div class="row justify-center q-my-md">
                  <q-spinner-dots color="primary" size="40px" />
                </div>
              </template>
            </q-infinite-scroll>
          </div>
        </q-item-section>
      </q-item>
      <q-item class="custom">
        <q-item-section>
          <q-item-label header>custom scroll target</q-item-label>
          <div class="row q-gutter-x-lg">
            <div ref="scrollTargetRef" class="wrapper">
              <q-infinite-scroll
                :offset="250"
                :scroll-target="scrollTargetRef"
                @load="onLoadRef"
              >
                <div v-for="(item, index) in itemsRef" :key="index">
                  {{ lorem }}
                </div>
                <template #loading>
                  <div class="row justify-center q-my-md">
                    <q-spinner-dots color="primary" size="40px" />
                  </div>
                </template>
              </q-infinite-scroll>
            </div>
            <div id="scroll-target-id" class="wrapper">
              <q-infinite-scroll
                :offset="250"
                scroll-target="#scroll-target-id"
                @load="onLoadId"
              >
                <div v-for="(item, index) in itemsId" :key="index">
                  {{ lorem }}
                </div>
                <template #loading>
                  <div class="row justify-center q-my-md">
                    <q-spinner-dots color="primary" size="40px" />
                  </div>
                </template>
              </q-infinite-scroll>
            </div>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>usage in qmenu</q-item-label>
          <q-btn label="menu width q-infinite-scroll">
            <q-menu anchor="bottom middle" self="top middle" :offset="[0, 8]">
              <q-item-label header>Notifications</q-item-label>
              <q-separator />
              <q-list ref="menuScrollTargetRef">
                <q-infinite-scroll
                  @load="onLoadMenu"
                  :offset="250"
                  :scroll-target="menuScrollTargetRef"
                >
                  <q-item v-for="(item, index) in menuItems" :key="index">
                    <q-item-section>
                      {{ lorem }}
                    </q-item-section></q-item
                  >
                  <template #loading>
                    <div class="row justify-center q-my-md">
                      <q-spinner-dots color="primary" size="40px" />
                    </div>
                  </template>
                </q-infinite-scroll>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="text-h6 text-weight-bold q-mt-lg">Inner Loading</div>
    <q-list class="row">
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <div>
            <q-btn label="show" @click="showTextLoading" />
            <q-card
              class="bg-grey-3 relative-position q-mt-md"
              style="height: 300px"
            >
              <q-card-section class="q-pb-none">
                <div class="text-h6">Lorem Ipsum</div>
              </q-card-section>
              <q-card-section>
                <transition
                  appear
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                >
                  <div v-show="showSimulatedReturnData">
                    {{ lorem }}
                  </div>
                </transition>
              </q-card-section>
              <q-inner-loading :showing="visible"
                ><q-spinner-gears size="50px" color="primary"
              /></q-inner-loading>
            </q-card>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>label props</q-item-label>
          <div>
            <q-btn label="show" @click="showTextLoading2" />
            <q-card
              class="bg-grey-3 relative-position q-mt-md"
              style="height: 300px"
            >
              <q-card-section class="q-pb-none">
                <div class="text-h6">Lorem Ipsum</div>
              </q-card-section>
              <q-card-section>
                <transition
                  appear
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                >
                  <div v-show="showSimulatedReturnData2">
                    {{ lorem }}
                  </div>
                </transition>
              </q-card-section>
              <q-inner-loading
                :showing="visible2"
                color="teal"
                label="Please wait..."
                label-class="text-teal"
                label-style="font-size: 1.1em"
              />
            </q-card>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi rerum eum, enim similique in vero,
  doloremque atque accusamus natus deleniti pariatur? Aliquid blanditiis architecto cupiditate ex, numquam veniam. Totam?`;
// Infinite Scroll
const items = ref([{}, {}, {}, {}, {}, {}]);
const onLoad = (index, done) => {
  setTimeout(() => {
    items.value.push({}, {}, {}, {}, {}, {});
    done();
  }, 2000);
};

const itemsRef = ref([{}, {}, {}, {}, {}, {}]);
const scrollTargetRef = ref(null);
const onLoadRef = (index, done) => {
  setTimeout(() => {
    itemsRef.value.push({}, {}, {}, {}, {}, {});
    done();
  }, 2000);
};
const itemsId = ref([{}, {}, {}, {}, {}, {}]);
const onLoadId = (index, done) => {
  setTimeout(() => {
    itemsId.value.push({}, {}, {}, {}, {}, {});
    done();
  }, 2000);
};
const menuItems = ref([{}, {}, {}, {}, {}, {}]);
const menuScrollTargetRef = ref(null);
const onLoadMenu = (index, done) => {
  if (index > 1) {
    setTimeout(() => {
      menuItems.value.push({}, {}, {}, {}, {}, {});
      done();
    }, 2000);
  } else {
    setTimeout(() => {
      done();
    }, 200);
  }
};
// Inner Loading
const visible = ref(false);
const showSimulatedReturnData = ref(false);
const showTextLoading = () => {
  visible.value = true;
  showSimulatedReturnData.value = false;

  setTimeout(() => {
    visible.value = false;
    showSimulatedReturnData.value = true;
  }, 2000);
};
const visible2 = ref(false);
const showSimulatedReturnData2 = ref(false);
const showTextLoading2 = () => {
  visible2.value = true;
  showSimulatedReturnData2.value = false;

  setTimeout(() => {
    visible2.value = false;
    showSimulatedReturnData2.value = true;
  }, 2000);
};
</script>

<style lang="scss" scoped>
.q-item {
  width: 300px;
}
.q-item.custom {
  width: 720px;
  .wrapper {
    width: 300px;
  }
}
.wrapper {
  max-height: 400px;
  overflow-y: auto;
}
</style>
