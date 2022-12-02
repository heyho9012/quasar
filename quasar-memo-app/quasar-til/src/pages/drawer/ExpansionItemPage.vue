<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold text-grey-7">Expansion Item</div>
    <q-list class="flex items-start">
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <q-list bordered class="rounded-borders" style="width: 250px">
            <q-expansion-item label="one" caption="one" icon="perm_identity">
              <q-card>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item label="two" caption="two" icon="perm_identity">
              <q-card>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              label="three"
              caption="three"
              icon="perm_identity"
            >
              <q-card>
                <q-card-section>
                  {{ lorem }}
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>header setting, switch toggle</q-item-label>
          <q-list>
            <q-expansion-item
              label="item"
              style="width: 250px; border-radius: 30px"
              class="overflow-hidden shadow-1"
              header-class="bg-primary text-white"
              expand-icon-class="text-white"
              expand-icon-toggle
              switch-toggle-side
            >
              <q-card>
                <q-card-section> {{ lorem }}</q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>accordion mode</q-item-label>
          <q-list bordered class="rounded-borders" style="width: 250px">
            <q-expansion-item
              v-for="(n, index) in 3"
              :key="index"
              :label="`${n}`"
              group="accordian"
              :default-opened="n == 1"
            >
              <q-card>
                <q-card-section>{{ lorem }}</q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>popup mode, inset label</q-item-label>
          <q-list style="width: 300px">
            <template v-for="n in 3" :key="n">
              <q-expansion-item
                :label="`${n}`"
                caption="popup"
                popup
                group="popup"
                :default-opened="n == 3"
              >
                <q-expansion-item
                  :header-inset-level="1"
                  :content-inset-level="1"
                  label="inset level 1"
                >
                  <q-card>
                    <q-card-section>{{ lorem }}</q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-expansion-item>
            </template>
          </q-list>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="text-h6 text-weight-bold text-grey-7 q-mt-md">
      Floating Action Button - 페이지의 기본작업 (q-page)
    </div>
    <q-list class="flex items-start">
      <q-item style="width: 300px">
        <q-item-section>
          <q-item-label header>Non-Expandabel</q-item-label>
          <q-scroll-area style="height: 200px">
            <p v-for="n in 5" :key="n">{{ lorem }}</p>
            <q-page-sticky :offset="[10, 10]">
              <q-btn icon="add" round color="accent" />
            </q-page-sticky>
          </q-scroll-area>
        </q-item-section>
      </q-item>
      <q-item class="col-grow">
        <q-item-section class="q-gutter-md">
          <q-item-label header
            >Expandable, Internal&External label</q-item-label
          >
          <div class="q-gutter-x-sm">
            <q-fab color="primary" push icon="keyboard_arrow_up" direction="up">
              <q-fab-action icon="mail" color="secondary" />
              <q-fab-action icon="alarm" color="secondary" />
            </q-fab>
            <q-fab
              color="primary"
              push
              icon="keyboard_arrow_right"
              direction="right"
              label="route"
              label-position="left"
            >
              <q-fab-action
                label="main"
                color="secondary"
                icon="router"
                to="/main"
              />
              <q-fab-action
                label="setting"
                color="secondary"
                icon="router"
                to="/color-settings"
              />
            </q-fab>
          </div>
          <div class="q-gutter-x-sm">
            <q-toggle v-model="hideLabels" label="Hide Labels" />
            <q-fab
              color="purple"
              push
              icon="keyboard_arrow_down"
              direction="down"
              label="actions"
              :hide-label="hideLabels"
            >
              <q-fab-action
                color="orange"
                icon="mail"
                label="mail"
                :hide-label="hideLabels"
              />
              <q-fab-action
                color="orange"
                icon="alarm"
                label="alarm"
                :hide-label="hideLabels"
              />
            </q-fab>
            <q-fab
              class="q-ml-"
              color="deep-orange"
              push
              icon="keyboard_arrow_down"
              direction="down"
              vertical-actions-align="right"
              label="vertical"
            >
              <q-fab-action
                icon="mail"
                color="secondary"
                label="verticla-right"
              />
              <q-fab-action
                icon="alarm"
                color="secondary"
                label="verticla-right"
              />
            </q-fab>
            <q-fab
              label="down"
              padding="xs xl"
              color="primary"
              hide-icon
              direction="down"
            >
              <q-fab-action label="mail" hide-icon color="info" />
              <q-fab-action label="alarm" hide-icon color="info" />
            </q-fab>
            <q-fab
              color="blue"
              label="External Actions"
              external-label
              label-position="top"
              direction="right"
              square
            >
              <template v-slot:icon="{ opened }">
                <q-icon
                  :class="{ 'example-fab-animate--hover': !opened }"
                  name="keyboard_arrow_right"
                />
              </template>
              <template v-slot:active-icon="{ opened }">
                <q-icon
                  :class="{ 'example-fab-animate': opened }"
                  name="keyboard_arrow_left"
                />
              </template>
              <q-fab-action
                color="primary"
                external-label
                label-position="top"
                label="mail"
                icon="mail"
                square
              />
              <q-fab-action
                square
                color="primary"
                external-label
                label-position="top"
                label="alarm"
                icon="alarm"
              />
            </q-fab>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis voluptatum dignissimos molestias explicabo alias,
  nemoquibusdam optio reprehenderit!
  Maxime officia dicta atque,sequi illo blanditiis eveniet omnis vero tempora ab?`;

const hideLabels = ref(false);
</script>

<style lang="scss" scoped>
.example-fab-animate,
.q-fab:hover .example-fab-animate--hover {
  animation: example-fab-animate 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes example-fab-animate {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
