<template>
  <Page>
    <Navbar>
      <view class="switch">
        <view
          class="switch__item"
          :class="activeTabIndex === index ? 'switch__item--active' : ''"
          v-for="(tab, index) in tabs"
          :key="tab.key"
          @click="toggleTab(index)"
          :style="{ color: activeTabIndex === index ? tabs[activeTabIndex].color : '' }"
        >
          {{ tab.value }}
        </view>
        <view
          class="active-line"
          :style="{ left: activeTabIndex * 60 + 'px', background: tabs[activeTabIndex].color }"
        />
      </view>
    </Navbar>
    <Content> </Content>
  </Page>
</template>

<script lang="ts" setup>
import useCustomTabBar from '@/utils/composition/useCustomTabBar';
import variables from '../../static/css/var.module.scss';
import { ref } from 'vue';
useCustomTabBar();
console.log('purple', variables);

const tabs = [
  { key: 'cost', value: '支出', color: variables.red },
  { key: 'income', value: '收入', color: variables.green },
  { key: 'transfer', value: '转账', color: variables.purple },
];
const activeTabIndex = ref(0);

const toggleTab = (index) => {
  activeTabIndex.value = index;
};
</script>
<style lang="scss" scoped>
@import '@/static/css/var.module.scss';
.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
}
.active-line {
  position: absolute;
  left: 0px;
  bottom: 0;
  height: 3px;
  width: 40px;
  margin-left: 10px;
  background: $red;
  border-radius: 2px;
  transition: all 0.3s;
}
.switch__item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  color: $gray;
  font-weight: normal;
  height: 100%;
}
.switch__item--active {
  width: 60px;
  color: $red;
}
</style>
