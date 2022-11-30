<template>
  <q-page padding>
    <q-list class="q-gutter-y-md">
      <q-item>
        <q-item-section class="row q-col-gutter-md">
          <q-item-label class="text-h6">Indeterminate progress</q-item-label>
          <q-item-label class="row q-gutter-x-md">
            <q-btn
              :loading="loading[0]"
              @click="simulateProgress(0)"
              label="button"
            >
            </q-btn>
            <q-btn
              :loading="loading[1]"
              @click="simulateProgress(1)"
              label="button"
            >
              <template #loading> Loading... </template>
            </q-btn>
            <q-btn
              :loading="loading[2]"
              @click="simulateProgress(2)"
              label="button"
            >
              <template #loading>
                <q-spinner-radio />
              </template>
            </q-btn>
            <q-btn
              :loading="loading[3]"
              @click="simulateProgress(3)"
              label="button"
            >
              <template #loading>
                <q-spinner-hourglass />
              </template>
            </q-btn>
            <q-btn
              :loading="loading[4]"
              @click="simulateProgress(4)"
              label="button"
            >
              <template #loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
            <q-btn
              :loading="loading[5]"
              @click="simulateProgress(5)"
              label="button"
            >
              <template #loading>
                <q-spinner-gears />
              </template>
            </q-btn>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="row q-col-gutter-md">
          <q-item-label class="text-h6">Tooltip & Ripple</q-item-label>
          <q-item-label class="row q-gutter-x-md">
            <q-btn label="tooltip">
              <q-tooltip class="bg-accent">tooltip</q-tooltip>
            </q-btn>
            <q-btn label="no ripple" :ripple="false" />
            <q-btn label="color ripple" :ripple="{ color: 'yellow' }" />
            <q-btn
              label="center ripple"
              :ripple="{ color: 'yellow', center: true }"
            />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="row q-col-gutter-md">
          <q-item-label class="text-h6">Button Group</q-item-label>
          <q-item-label class="row q-gutter-x-md">
            <q-btn-group>
              <q-btn label="button1" glossy />
              <q-btn label="button2" glossy />
              <q-btn label="button3" glossy />
            </q-btn-group>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section class="row q-col-gutter-md">
          <q-item-label class="text-h6">Button Dropdown</q-item-label>
          <q-item-label class="row q-gutter-x-md">
            <q-btn-dropdown label="Dropdown">
              <q-list>
                <q-item clickable v-close-popup
                  ><q-item-section>
                    <q-item-label>1</q-item-label>
                  </q-item-section></q-item
                >
                <q-item clickable v-close-popup
                  ><q-item-section>
                    <q-item-label>2</q-item-label>
                  </q-item-section></q-item
                >
                <q-item clickable v-close-popup
                  ><q-item-section>
                    <q-item-label>3</q-item-label>
                  </q-item-section></q-item
                >
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown split label="dropdown split" color="accent">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>1</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>2</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown v-model="menu" label="using v-model">
              <q-list>
                <q-item clickable v-close-popup
                  ><q-item-section>
                    <q-item-label>1</q-item-label>
                  </q-item-section></q-item
                >
                <q-item clickable v-close-popup
                  ><q-item-section>
                    <q-item-label>2</q-item-label>
                  </q-item-section></q-item
                >
              </q-list>
            </q-btn-dropdown>
            <q-toggle v-model="menu" color="accent" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

// Indeterminate progress
const loading = ref([false, false, false, false, false, false]);
const simulateProgress = (num) => {
  loading.value[num] = true;
  setTimeout(() => {
    loading.value[num] = false;
  }, 3000);
};
const menu = ref(false);
</script>

<style lang="scss" scoped>
.q-btn {
  background-color: $accent;
  color: white;
}
</style>
