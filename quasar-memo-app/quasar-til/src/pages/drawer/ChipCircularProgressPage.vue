<template>
  <q-page padding>
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label header class="text-h6">Chip</q-item-label>
          <div>
            <q-chip
              icon="event"
              label="Add to calendar"
              color="primary"
              text-color="white"
            />
            <q-chip
              icon="bookmark"
              label="Bookmark"
              color="teal"
              text-color="white"
            />
            <q-chip square>
              <q-avatar color="red" text-color="white">27</q-avatar>
              birthday
            </q-chip>
            <q-chip
              icon="cake"
              color="deep-orange"
              text-color="white"
              clickable
              removable
              @remove="remove"
              label="Cake"
              v-model:selected="cake"
              v-model="del"
            />
            <q-chip
              :class="{ toggle: !toggle }"
              v-model="vanilla"
              icon="cake"
              color="secondary"
              text-color="white"
              :label="vanillaLabel"
            >
              <q-tooltip>{{ vanillaLabel }}</q-tooltip>
            </q-chip>
            <q-toggle v-model="toggle" label="toggle" />
          </div>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header class="text-h6">CircularProgress</q-item-label>
          <div class="q-gutter-x-md">
            <q-circular-progress size="50px" color="orange" :value="value" />
            <q-circular-progress
              size="50px"
              center-color="grey-5"
              :thickness="0.2"
              color="orange"
              :value="value"
            />
            <q-circular-progress
              size="50px"
              track-color="orange"
              :thickness="1"
              color="grey-5"
              :value="value"
            />
            <q-circular-progress
              reverse
              size="50px"
              track-color="grey-5"
              color="orange"
              :value="value"
            />
            <q-circular-progress
              :angle="180"
              size="50px"
              track-color="grey-5"
              color="orange"
              :value="value"
            />
            <q-circular-progress
              :angle="240"
              size="50px"
              track-color="grey-5"
              color="orange"
              :value="value"
            />
            <q-circular-progress
              :min="55"
              :max="90"
              size="50px"
              track-color="grey-5"
              color="orange"
              :value="value"
            />
            <q-circular-progress
              show-value
              size="50px"
              color="light-blue"
              class="text-light-blue text-weight-bold"
              :value="value"
            />
            <q-circular-progress
              show-value
              size="50px"
              color="light-blue"
              class="text-light-blue text-weight-bold"
              :value="value"
              >{{ value }}%</q-circular-progress
            >
            <q-circular-progress
              indeterminate
              show-value
              size="50px"
              color="light-blue"
              class="text-light-blue text-weight-bold"
              :value="value"
              >{{ value }}%</q-circular-progress
            >
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const cake = ref(false);
const del = ref(true);

const toggle = ref(false);

const vanilla = ref(true);
const vanillaLabel = "I want vanilla flavoured ice cream";

const value = 71;

const remove = () => {
  console.log("remove");
};
</script>

<style lang="scss" scoped>
.toggle {
  max-width: 140px;
}
</style>
