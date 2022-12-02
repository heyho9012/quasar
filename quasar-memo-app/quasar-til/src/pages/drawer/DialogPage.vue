<template>
  <q-page padding>
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label header class="text-h6">Dialog</q-item-label>
          <div class="q-gutter-x-md">
            <q-btn label="prompt" @click="prompt = true" />
            <q-btn
              label="bottom"
              @click="
                position = 'bottom';
                dialog = true;
              "
            />
            <q-btn
              label="right"
              @click="
                position = 'right';
                dialog = true;
              "
            />
            <q-btn
              label="maximized"
              @click="
                max = true;
                maximized = true;
              "
            />
            <q-btn label="persistent" @click="persistent = true" />

            <q-dialog v-model="prompt">
              <q-card style="min-width: 300px">
                <q-card-section>
                  <div class="text-h6">prompt</div>
                </q-card-section>
                <q-card-section>
                  <q-input
                    autofocus
                    @keyup.enter="prompt = false"
                    label="address"
                    hint="add address"
                  />
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn label="Add" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
            <q-dialog
              v-model="dialog"
              :position="position"
              :seamless="position == 'right' ? true : false"
            >
              <q-card style="width: 350px">
                <q-linear-progress :value="0.7" color="negative" />
                <q-card-section class="row items-center no-wrap">
                  <div>
                    <div class="text-weight-bold">The Walker</div>
                    <div class="text-grey">Fitz & The Tantrums</div>
                  </div>
                  <q-space />
                  <q-btn flat round icon="fast_rewind" />
                  <q-btn flat round icon="pause" />
                  <q-btn flat round icon="fast_forward" />
                  <q-btn
                    v-if="position == 'right'"
                    flat
                    round
                    icon="close"
                    v-close-popup
                  />
                </q-card-section>
              </q-card>
            </q-dialog>
            <q-dialog
              v-model="max"
              :maximized="maximized"
              transition-show="slide-up"
              transition-hide="slide-down"
            >
              <q-card>
                <q-card-section class="row"
                  ><div class="text-h6">maximized</div>
                  <q-space />
                  <q-btn icon="close" v-close-popup />
                </q-card-section>
                <q-card-actions>
                  <q-btn
                    label="close"
                    @click="
                      max = false;
                      maximized = false;
                    "
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
            <q-dialog v-model="persistent" persistent>
              <q-card>
                <q-card-section
                  ><div class="text-h6">persistent</div></q-card-section
                >
                <q-card-section> Dialog Test Page </q-card-section>
                <q-card-actions>
                  <q-btn v-close-popup label="close" />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header
            ><div class="text-h6">Editor</div>
            <div class="q-gutter-y-md">
              <q-editor v-model="editor"></q-editor>
              <q-card flat bordered>
                <q-card-section>
                  <pre style="white-space: pre-line">{{ editor }}</pre>
                </q-card-section>
              </q-card>
            </div>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const prompt = ref(false);

const dialog = ref(false);
const position = ref("top");

const max = ref(false);
const maximized = ref(false);

const persistent = ref(false);

const editor = ref("test");
const $q = useQuasar();
</script>

<style lang="scss" scoped></style>
