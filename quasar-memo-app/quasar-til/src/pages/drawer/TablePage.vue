<template>
  <q-page padding>
    <div class="text-h6 text-weight-bold">Table</div>
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label header>basic</q-item-label>
          <q-option-group v-model="separator" :options="options" class="flex" />
          <q-table
            title="Basic"
            :columns="columns"
            :rows="rows"
            :separator="separator"
            row-key="name"
          >
            <template v-slot:top-right>
              <q-btn
                color="primary"
                icon-right="archive"
                label="Export to csv"
                no-caps
                @click="exportTable"
              />
            </template>
          </q-table>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>omitting columns definition</q-item-label>
          <q-table :rows="rows" row-key="name" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>styling</q-item-label>
          <q-table
            color="primary"
            card-class="bg-deep-orange text-white"
            table-class="text-black"
            table-header-class="text-blue"
            flat
            bordered
            title="Styling"
            :columns="columns"
            :rows="rows"
            row-key="name"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>select</q-item-label>
          <q-table
            title="Select"
            :columns="columns"
            :rows="rows"
            row-key="name"
            selection="multiple"
            v-model:selected="selected"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header
            >visible columns, top and fullscreen</q-item-label
          >
          <q-table
            title="visible columns"
            :columns="columns"
            :rows="rows"
            row-key="name"
            :visible-columns="visibleColumns"
          >
            <template #top="props">
              <q-select
                v-model="visibleColumns"
                multiple
                outlined
                dense
                options-dense
                :display-value="$q.lang.table.columns"
                emit-value
                map-options
                :options="columns"
                option-value="name"
                options-cover
                style="min-width: 150px"
              />
              <q-space />
              <q-btn
                flat
                round
                dense
                :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="props.toggleFullscreen"
                class="q-ml-md"
              />
            </template>
          </q-table>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>popup editing</q-item-label>
          <q-table
            title="Popup Editing"
            :columns="columns"
            :rows="rowsRef"
            row-key="name"
            binary-state-sort
          >
            <template #body="props">
              <q-tr :props="props">
                <q-td key="name" :props="props">
                  {{ props.row.name }}
                  <q-popup-edit v-model="props.row.name" v-slot="scope" buttons>
                    <q-input v-model="scope.value" dense autofocus counter />
                  </q-popup-edit>
                </q-td>
                <q-td key="calories" :props="props">
                  {{ props.row.calories }}
                  <q-popup-edit
                    v-model="props.row.calories"
                    title="Update calories"
                    buttons
                    v-slot="scope"
                  >
                    <q-input
                      type="number"
                      v-model="scope.value"
                      dense
                      autofocus
                    />
                  </q-popup-edit>
                </q-td>
                <q-td key="fat" :props="props">
                  <div class="text-pre-wrap">{{ props.row.fat }}</div>
                  <q-popup-edit v-model="props.row.fat" v-slot="scope">
                    <q-input
                      type="textarea"
                      v-model="scope.value"
                      dense
                      autofocus
                    />
                  </q-popup-edit>
                </q-td>
                <q-td key="carbs" :props="props">
                  {{ props.row.carbs }}
                  <q-popup-edit
                    v-model="props.row.carbs"
                    title="Update carbs"
                    buttons
                    persistent
                    v-slot="scope"
                  >
                    <q-input
                      type="number"
                      v-model="scope.value"
                      dense
                      autofocus
                      hint="Use buttons to close"
                    />
                  </q-popup-edit>
                </q-td>
                <q-td key="protein" :props="props">{{
                  props.row.protein
                }}</q-td>
                <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
                <q-td key="calcium" :props="props">{{
                  props.row.calcium
                }}</q-td>
                <q-td key="iron" :props="props">{{ props.row.iron }}</q-td>
              </q-tr>
            </template>
          </q-table>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label header>Grid Style</q-item-label>
          <q-table
            title="Grid Style"
            grid
            :filter="filter"
            :columns="columns"
            :rows="rows"
            row-key="name"
            hide-header
            grid-header
            card-class="bg-primary text-white"
          >
            <template #top-right>
              <q-input
                borderless
                dense
                debounce="300"
                v-model="filter"
                placeholder="Search"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>
          </q-table>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { useQuasar, exportFile } from "quasar";
import { ref } from "vue";
const $q = useQuasar();
const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];
const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

const options = [
  { label: "Horizontal (default)", value: "horizontal" },
  { label: "Vertical", value: "vertical" },
  { label: "Cell", value: "cell" },
  { label: "None", value: "none" },
];
const separator = ref("horizontal");
const selected = ref([]);

const visibleColumns = ref([
  "calories",
  "desc",
  "fat",
  "carbs",
  "protein",
  "sodium",
  "calcium",
  "iron",
]);

const rowsRef = ref(rows);
const filter = ref("");
const wrapCsvValue = (val, formatFn, row) => {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`;
};
const exportTable = () => {
  // naive encoding to csv format
  const content = [columns.map((col) => wrapCsvValue(col.label))]
    .concat(
      rows.map((row) =>
        columns
          .map((col) =>
            wrapCsvValue(
              typeof col.field === "function"
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
              col.format,
              row
            )
          )
          .join(",")
      )
    )
    .join("\r\n");

  const status = exportFile("table-export.csv", content, "text/csv");

  if (status !== true) {
    $q.notify({
      message: "Browser denied file download...",
      color: "negative",
      icon: "warning",
    });
  }
};
</script>

<style lang="scss" scoped></style>
