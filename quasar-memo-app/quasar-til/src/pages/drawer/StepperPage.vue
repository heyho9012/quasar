<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Stepper</div>
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label header>
            <div class="text-weight-bold">basic</div>
          </q-item-label>
          <div>
            <q-stepper v-model="step" ref="stepper" color="primary" animated>
              <q-step
                v-for="(n, index) in 4"
                :key="index"
                :name="n"
                :title="`Step ${n}`"
                :done="step > n"
                icon="create_new_folder"
              >
                q-stepper : q- step : Step {{ step }}
              </q-step>
              <template #navigation>
                <q-stepper-navigation>
                  <q-btn
                    :label="step === 4 ? 'Finish' : 'Continue'"
                    color="primary"
                    @click="stepper.next()"
                  />
                  <q-btn
                    v-if="step > 1"
                    class="q-ml-sm"
                    label="Back"
                    flat
                    color="primary"
                    @click="stepper.previous()"
                  />
                </q-stepper-navigation>
              </template>
            </q-stepper>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>
            <div class="text-weight-bold">vertical & reset</div>
          </q-item-label>
          <div>
            <q-btn
              label="Reset"
              push
              color="white"
              text-color="primary"
              @click="step = 1"
              class="q-mb-md"
            />

            <q-stepper
              v-model="step"
              ref="stepper"
              color="primary"
              animated
              vertical
            >
              <q-step
                v-for="(n, index) in 4"
                :key="index"
                :name="n"
                :title="`Step ${n}`"
                :done="step > n"
                icon="create_new_folder"
              >
                q-stepper : q- step : Step {{ step }}
                <q-stepper-navigation>
                  <q-btn
                    :label="step === 4 ? 'Finish' : 'Continue'"
                    color="primary"
                    @click="stepper.next()"
                  />
                  <q-btn
                    v-if="step > 1"
                    class="q-ml-sm"
                    label="Back"
                    flat
                    color="primary"
                    @click="stepper.previous()"
                  />
                </q-stepper-navigation>
              </q-step>
            </q-stepper>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>
            <div class="text-weight-bold">header navigation</div>
          </q-item-label>
          <div>
            <q-btn
              label="Reset"
              push
              color="white"
              text-color="primary"
              @click="reset"
              class="q-mb-md"
            />
            <q-stepper
              v-model="step"
              ref="stepper"
              color="primary"
              animated
              header-nav
            >
              <q-step
                v-for="(n, index) in 4"
                :key="index"
                :name="n"
                :title="`Step ${n}`"
                :done="done[index]"
                icon="create_new_folder"
                :caption="n.toString()"
                :prefix="n"
              >
                q-stepper : q- step : Step {{ step }}
                <q-stepper-navigation>
                  <q-btn
                    :label="step === 4 ? 'Finish' : 'Continue'"
                    color="primary"
                    @click="
                      done[index] = true;
                      step === 4 ? '' : (step = n + 1);
                    "
                  />
                  <q-btn
                    v-if="step > 1"
                    class="q-ml-sm"
                    label="Back"
                    flat
                    color="primary"
                    @click="step = n - 1"
                  />
                </q-stepper-navigation>
              </q-step>
              <template #message>
                <q-banner v-if="step == 4" class="bg-blue-8 text-white q-px-lg">
                  The final step is creating the ad...
                </q-banner>
              </template>
            </q-stepper>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const step = ref(1);
const stepper = ref(null);

const done = ref([false, false, false, false]);
const reset = () => {
  done.value.forEach((el, index) => {
    done.value[index] = false;
  });
  step.value = 1;
};
const show = ref(false);
</script>

<style lang="scss" scoped></style>
