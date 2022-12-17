<template>
  <Page>
    <Navbar> 设置 </Navbar>
    <Content>
      {{ counterStore.count }}
      <button @click="onAdd">增加</button>

      <button @tap="onLogin">登录</button>

      <view>accessToken: {{ persistStore.accessToken }}</view>
      <view> openId : {{ persistStore.openId }}</view>
      <button open-type="chooseAvatar" @chooseavatar="onChooseAvatar">获取头像</button>
    </Content>
  </Page>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { usePersistStore } from '@/stores/persist';
import useCustomTabBar from '@/utils/composition/useCustomTabBar';
import { storeToRefs } from 'pinia';

useCustomTabBar();

const counterStore = storeToRefs(useCounterStore());
const onAdd = () => {
  counterStore.count.value = counterStore.count.value + 1;
};

const onChooseAvatar = (e) => {
  console.log(e);
};

const persistStore = usePersistStore();
const onLogin = async () => {
  console.log('login');
  persistStore.getAccessToken();
  // persistStor
};
// 通过 jscode2session 接口获取openId
// {
//   "session_key": "eX4P1VcwZsvIYjo78BetUw==",
//   "openid": "oR2Iw5aXc8fu-K0HRMPqA3XgOTw8"
// }
</script>
<style lang="scss" scoped></style>
