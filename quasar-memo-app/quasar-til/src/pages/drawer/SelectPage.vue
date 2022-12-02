<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold text-grey-7">Select</div>
    <q-list class="row items-start q-gutter-x-md">
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <q-select label="basic" v-model="value" :options="options" />
          <q-select
            v-model="value"
            label="transition"
            :options="options"
            options-selected-class="text-orange bg-primary"
            clearable
            transition-show="scale"
            transition-hide="scale"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>lazy + filter, dialog</q-item-label>
          <q-select
            label="filter"
            v-model="value"
            use-input
            input-debounce="0"
            :options="optionsRef"
            @filter="filterOptions"
            behavior="menu"
          >
            <template #no-option>
              <q-item>
                <q-item-section> No Results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-select
            v-model="value"
            :options="optionsRef"
            use-input
            label="dialog"
            behavior="dialog"
          >
            <template #no-option
              ><q-item>
                <q-item-section>No Results</q-item-section>
              </q-item></template
            >
          </q-select>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>multiple, count, max</q-item-label>
          <q-select
            v-model="multipleValue"
            :options="optionsRef"
            multiple
            label="mutiple chips"
            use-chips
            counter
          />
          <q-select
            v-model="multipleValue"
            :options="optionsRef"
            multiple
            label="mutiple counter max"
            counter
            max-values="2"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>option type</q-item-label>
          <q-badge :label="`Model: ${value}`" multi-line />
          <q-select v-model="value" :options="optionsRef" />
          <q-badge multi-line> Model: {{ objValue }} </q-badge>
          <q-select v-model="objValue" :options="objOptions" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>emit value</q-item-label>
          <q-badge multi-line>Model: {{ emitValue }}</q-badge>
          <q-select v-model="emitValue" :options="emitOptions" emit-value />
          <q-badge multi-line>Model: {{ emitValue }}</q-badge>
          <q-select
            v-model="emitValue"
            :options="mapOptions"
            emit-value
            map-options
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>add value</q-item-label>
          <q-select
            v-model="addValue"
            :options="addRefOptions"
            multiple
            use-chips
            use-input
            input-debounce="0"
            @new-value="createValue"
          />
          <!-- new-value-mode="add-unique" -->
        </q-item-section>
      </q-item>
    </q-list>
    <div class="q-mt-lg text-h6 text-weight-bold text-grey-7">File Picker</div>
    <q-list class="row items-start q-gutter-x-md">
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <q-file label="basic" v-model="file" />
          <q-file label="deco" v-model="decofile" clearable>
            <template #prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
          <q-file label="multiple" multiple v-model="multifile" use-chips />
          <q-file
            label="counter"
            multiple
            v-model="cntfile"
            counter
            clearable
          />
          <q-file
            label="max"
            multiple
            v-model="maxfile"
            counter
            max-files="3"
            use-chips
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>slot-custom</q-item-label>
          <q-file
            label="progress"
            :model-value="progressFile"
            @update:model-value="updateFiles"
            multiple
            :clearble="!isUploading"
          >
            <template #file="{ index, file }">
              <q-chip
                class="full-width q-my-xs"
                :removable="isUploading && uploadProgress[index].percent < 1"
                square
                @remove="cancelFile(index)"
              >
                <q-linear-progress
                  class="absolute-full full-height"
                  :value="uploadProgress[index].percent"
                  :color="uploadProgress[index].color"
                  track-color="grey-2"
                />
                <q-avatar>
                  <q-icon :name="uploadProgress[index].icon" />
                </q-avatar>
                <div class="ellipsis relative-position">{{ file.name }}</div>
                <q-tooltip>
                  {{ file.name }}
                </q-tooltip>
              </q-chip>
            </template>
            <template #after v-if="canUpload">
              <q-btn
                color="primary"
                dense
                icon="cloud_upload"
                round
                @click="upload"
                :disable="!canUpload"
                :loading="isUploading"
              />
            </template>
          </q-file>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>restrict</q-item-label>
          <q-file
            v-model="fileImages"
            label="restrict image"
            accept=".jpg, image/*"
            @rejected="onRejected"
            multiple
          />
          <q-file
            v-model="filesMaxSize"
            label="max file size (2k)"
            @rejected="onRejected"
            multiple
            counter
            max-file-size="2048"
          />
          <q-file
            v-model="filesMaxTotalSize"
            label="max total file size (4k)"
            max-total-size="4096"
            @rejected="onRejected"
            counter
            multiple
          />
          <q-file
            v-model="filesMaxNumber"
            label="max number of files (3)"
            multiple
            @rejected="onRejected"
            counter
            max-files="3"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
import { computed } from "vue";
import { onBeforeUnmount, ref } from "vue";

const $q = useQuasar();

// NOTE: Select
const value = ref(null);
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const optionsRef = ref(options);
const multipleValue = ref(null);

const objValue = ref(null);
const objOptions = [
  {
    label: "Google",
    value: "Google",
    description: "google",
    category: "1",
  },
  {
    label: "Facebook",
    value: "Facebook",
    description: "facebook",
    category: "2",
  },
  {
    label: "Twitter",
    value: "Twitter",
    description: "twitter",
    category: "3",
  },
  {
    label: "Apple",
    value: "Apple",
    description: "apple",
    category: "4",
  },
  {
    label: "Oracle",
    value: "Oracle",
    description: "oracle",
    category: "5",
  },
];
const emitValue = ref(null);
const emitOptions = [
  {
    label: "Google",
    value: "goog",
    description: "google",
    category: "1",
  },
  {
    label: "Facebook",
    value: "fb",
    description: "facebook",
    category: "2",
  },
  {
    label: "Twitter",
    value: "twt",
    description: "twitter",
    category: "3",
  },
  {
    label: "Apple",
    value: "app",
    description: "apple",
    category: "4",
  },
  {
    label: "Oracle",
    value: "ora",
    description: "oracle",
    category: "5",
  },
];
const mapOptions = [
  {
    label: "Google",
    value: "goog",
  },
  {
    label: "Facebook",
    value: "fb",
  },
  {
    label: "Twitter",
    value: "twt",
  },
  {
    label: "Apple",
    value: "app",
  },
  {
    label: "Oracle",
    value: "ora",
  },
];
const addValue = ref(null);
const addOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const addRefOptions = ref(addOptions);

const createValue = (val, done) => {
  if (val.length > 0) {
    if (!addOptions.includes(val)) {
      addRefOptions.value.push(val);
    }
    done(val, "toggle");
  }
};

const filterOptions = (val, update) => {
  setTimeout(() => {
    update(() => {
      if (val === "") {
        optionsRef.value = options;
      } else {
        const needle = val.toLowerCase();
        optionsRef.value = options.filter(
          (x) => x.toLowerCase().indexOf(needle) > -1
        );
      }
    });
  }, 1000);
};

// NOTE: File Picker
const file = ref(null);
const decofile = ref(null);
const multifile = ref(null);
const cntfile = ref(null);
const maxfile = ref(null);
const progressFile = ref(null);

const uploading = ref(null);
const uploadProgress = ref([]);

const cleanUp = () => {
  clearTimeout(uploading.value);
};
const updateUploadProgress = () => {
  let done = true;
  uploadProgress.value = uploadProgress.value.map((progress) => {
    if (progress.percent === 1 || progress.error === true) {
      return progress;
    }

    const percent = Math.min(1, progress.percent + Math.random() / 10);
    const error = percent < 1 && Math.random() > 0.95;

    if (error === false && percent < 1 && done === true) {
      done = false;
    }

    return {
      ...progress,
      error,
      color: error === true ? "red-2" : "green-2",
      percent,
    };
  });

  uploading.value =
    done !== true ? setTimeout(updateUploadProgress, 300) : null;
};
onBeforeUnmount(cleanUp);

const isUploading = computed(() => uploading.value !== null);
const canUpload = computed(() => progressFile.value !== null);

const cancelFile = (index) => {
  uploadProgress[index] = {
    ...uploadProgress[index],
    error: true,
    color: "orange-2",
  };
};
const updateFiles = (newFiles) => {
  progressFile.value = newFiles;
  uploadProgress.value = (newFiles || []).map((file) => ({
    error: false,
    color: "green-2",
    percent: 0,
    icon:
      file.type.indexOf("video/") === 0
        ? "movie"
        : file.type.indexOf("image/") === 0
        ? "photo"
        : file.type.indexOf("audio/") === 0
        ? "audiotrack"
        : "insert_drive_file",
  }));
};

const upload = () => {
  cleanUp();

  const allDone = uploadProgress.value.every(
    (progress) => progress.percent === 1
  );

  uploadProgress.value = uploadProgress.value.map((progress) => ({
    ...progress,
    error: false,
    color: "green-2",
    percent: allDone === true ? 0 : progress.percent,
  }));

  updateUploadProgress();
};

const fileImages = ref(null);
const filesMaxSize = ref(null);
const filesMaxTotalSize = ref(null);
const filesMaxNumber = ref(null);

const onRejected = (reject) => {
  $q.notify({
    type: "negative",
    message: `${reject.length} file(s) did not pass validation constraints`,
  });
};
</script>

<style lang="scss" scoped>
.q-select,
.q-badge,
.q-file {
  width: 240px;
}
</style>
