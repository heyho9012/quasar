<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Radio</div>
    <q-list class="row items-start q-gutter-x-md">
      <q-item>
        <q-item-section class="q-gutter-y-md">
          <q-item-label header>basic</q-item-label>
          <div>
            <q-field :model-value="shape" outlined>
              <template #control>
                <q-radio v-model="shape" val="line" label="Line" />
                <q-radio v-model="shape" val="rectangle" label="Rectangle" />
                <q-radio
                  v-model="shape"
                  val="ellipse"
                  label="Ellipse"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  color="deep-orange"
                />
                <q-radio
                  v-model="shape"
                  val="polygon"
                  label="Polygon"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  color="purple"
                />
                <div class="text-subtitle1 text-primary full-width">
                  {{ shape }}
                </div>
              </template>
            </q-field>
          </div>
          <div>
            <q-field :model-value="shape" outlined>
              <template #control>
                <q-radio v-model="shape" val="line" label="Line" left-label />
                <q-radio
                  v-model="shape"
                  val="rectangle"
                  label="Rectangle"
                  left-label
                />
                <q-radio
                  v-model="shape"
                  val="ellipse"
                  label="Ellipse"
                  left-label
                />
                <q-radio
                  v-model="shape"
                  val="polygon"
                  label="Polygon"
                  left-label
                />
                <div class="text-subtitle1 text-primary full-width">
                  {{ shape }}
                </div>
              </template>
            </q-field>
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header> size </q-item-label>
          <q-field outlined>
            <template #control>
              <q-radio v-model="sizeValue" label="xs" val="xs" size="xs" />
              <q-radio v-model="sizeValue" label="sm" val="sm" size="sm" />
              <q-radio v-model="sizeValue" label="md" val="md" size="md" />
              <q-radio v-model="sizeValue" label="lg" val="lg" size="lg" />
              <q-radio v-model="sizeValue" label="xl" val="xl" size="xl" />
              <q-radio
                v-model="sizeValue"
                label="custom"
                val="150px"
                size="150px"
              />
              <div class="text-subtitle1 text-primary full-width">
                {{ sizeValue }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>group{{`(<q-option-group>)`}}</q-item-label>
          <q-field outlined :model-value="group">
            <template #control>
              <q-option-group v-model="group" type="radio" :options="options" />
              <div class="text-subtitle1 text-primary full-width">
                {{ group }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>with QItem</q-item-label>
          <q-field outlined :model-value="color" class="color-field" >
            <template #control>
              <q-list>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-radio v-model="color" val="teal" color="teal"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Teal</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-radio v-model="color" val="orange" color="orange"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Orange</q-item-label>
                    <q-item-label caption>With description</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                  <q-item-section>
                    <q-radio v-model="color" val="cyan" color="cyan"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Cyan</q-item-label>
                    <q-item-label>
                      {{lorem}}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              <div class="text-subtitle1 text-primary full-width">
                {{ color }}
              </div>
            </template>
          </q-field>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const shape = ref("line");
const sizeValue = ref("line");

const group = ref(null);
const options = [
  { label: "Battery too low", value: "bat" },
  { label: "Friend request", value: "friend", color: "green" },
  { label: "Picture uploaded", value: "upload", color: "red" },
];

const color = ref('cyan')

const lorem = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  Maiores dolorum atque fugiat exercitationem.
  Repellendus laborum consequuntur consequatur similique,`
</script>

<style lang="scss" scoped>
.q-field {
  width: 400px;
}
</style>
