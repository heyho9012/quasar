import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useListStore } from "stores/list";
import { useUserStore } from "stores/user";
import { useItemStore } from "stores/item";
import { Loading, QSpinnerGears } from "quasar";

const { getList: list } = storeToRefs(useListStore());
const { FETCH_LIST } = useListStore();
const { getUser: user } = storeToRefs(useUserStore());
const { FETCH_USER } = useUserStore();
const { getItem: item } = storeToRefs(useItemStore());
const { FETCH_ITEM } = useItemStore();
const options = {
  message: "loading...",
  spinnerSize: "100px",
  spinnerColor: "orange",
  messageColor: "orange",
  backgroundColor: "transparent",
  spinner: QSpinnerGears,
};

const useFetch = () => {
  Loading.show(options);
  onMounted(async () => {
    const { path } = useRoute();
    await FETCH_LIST(path);
    setTimeout(() => Loading.hide(), 300);
  });
  return list;
};
const useUser = () => {
  Loading.show(options);
  onMounted(async () => {
    const route = useRoute();
    await FETCH_USER(route.params.id);
  });
  setTimeout(() => Loading.hide(), 300);
  return user;
};
const useItem = () => {
  Loading.show(options);
  onMounted(async () => {
    const route = useRoute();
    await FETCH_ITEM(route.params.id);
  });
  setTimeout(() => Loading.hide(), 300);
  return item;
};

export { useFetch, useUser, useItem };
