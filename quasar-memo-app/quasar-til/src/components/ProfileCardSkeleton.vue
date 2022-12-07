<template>
  <q-card class="profile-card" flat bordered>
    <q-card-section horizontal>
      <q-card-section>
        <q-skeleton type="QAvatar" size="5rem" animation="fade" />
      </q-card-section>
      <q-card-section>
        <span class="text-uppercase text-overline text-grey"> Written By </span>
        <q-skeleton
          type="text"
          animation="fade"
          class="text-h3 q-my-lg"
          width="360px"
        />
        <q-skeleton
          type="text"
          animation="fade"
          class="text-subtitle1"
          width="440px"
        />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.profile-card {
  width: 100%;
  max-width: 700px;
  min-height: 180px;
}
</style>
