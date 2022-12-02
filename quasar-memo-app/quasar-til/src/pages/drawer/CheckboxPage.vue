<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Checkbox</div>
    <q-list class="row items-start q-gutter-x-md">
      <q-item>
        <q-item-section class="q-gutter-y-md">
          <q-item-label header class="text-weight-bold">basic</q-item-label>
          <q-checkbox v-model="basic" />
          <q-checkbox
            v-model="basic"
            checked-icon="star"
            unchecked-icon="star_border"
            indeterminate-icon="help"
            color="teal"
          />
          <q-checkbox label="label on right" v-model="basic" />
          <q-checkbox
            label="label on left"
            left-label
            v-model="basic"
            color="cyan"
          />
          <q-checkbox
            v-model="basic"
            label="Swipe"
            checked-icon="swipe_left"
            unchecked-icon="swipe_right"
            color="purple"
            keep-color
          />
          <q-checkbox
            left-label
            v-model="basic"
            label="I agree"
            checked-icon="task_alt"
            unchecked-icon="highlight_off"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>array</q-item-label>
          <q-checkbox
            v-model="selection"
            val="teal"
            label="Teal"
            color="teal"
          />
          <q-checkbox
            v-model="selection"
            val="orange"
            label="Orange"
            color="orange"
          />
          <q-checkbox v-model="selection" val="red" label="Red" color="red" />
          <q-checkbox
            v-model="selection"
            val="cyan"
            label="Cyan"
            color="cyan"
          />
          <div class="text-subtitle1 text-primary full-width">
            {{ selection }}
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>custom model value</q-item-label>
          <q-checkbox
            v-model="custom"
            label="agree?"
            true-value="yes"
            false-value="no"
          />
          <div class="text-subtitle1 text-primary full-width">
            {{ custom }}
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>option group</q-item-label>
          <q-option-group type="checkbox" v-model="group" :options="options" />
          <div class="text-subtitle1 text-primary full-width">
            {{ group }}
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <div class="text-h6 text-weight-bold q-mt-md">Toggle</div>
    <q-list class="row items-start q-gutter-x-md">
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <q-toggle v-model="basic" />
          <q-toggle v-model="basic" label="on right" />
          <q-toggle v-model="basic" label="on left" left-label />
          <q-toggle
            v-model="basic"
            label="keep color"
            keep-color
            color="orange"
          />
          <q-toggle
            v-model="basic"
            color="pink"
            checked-icon="mail"
            unchecked-icon="alarm"
            label="icon"
            keep-color
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>custom model, indeterminate-state</q-item-label>
          <q-toggle
            :label="custom2"
            color="pink"
            false-value="Disagreed"
            true-value="Agreed"
            v-model="custom2"
          />
          <q-toggle
            v-model="indeter"
            toggle-indeterminate
            :label="JSON.stringify(indeter)"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>array</q-item-label>
          <q-toggle v-model="selection" val="teal" label="Teal" color="teal" />
          <q-toggle
            v-model="selection"
            val="orange"
            label="Orange"
            color="orange"
          />
          <q-toggle v-model="selection" val="red" label="Red" color="red" />
          <q-toggle v-model="selection" val="cyan" label="Cyan" color="cyan" />
          <div class="text-subtitle1 text-primary full-width">
            {{ selection }}
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>option group</q-item-label>
          <q-option-group type="toggle" v-model="group" :options="options" />
          <div class="text-subtitle1 text-primary full-width">
            {{ group }}
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const basic = ref(true);
const selection = ref(["teal"]);
const custom = ref("yes");
const custom2 = ref("Agreed");
const indeter = ref(null);
const group = ref(["bat"]);
const options = ref([
  { label: "Battery too low", value: "bat" },
  { label: "Friend request", value: "friend", color: "green" },
  { label: "Picture uploaded", value: "upload", color: "red" },
]);
</script>

<style lang="scss" scoped>
.q-item {
  width: 300px;
  border: 1px solid #ddd;
}
</style>
