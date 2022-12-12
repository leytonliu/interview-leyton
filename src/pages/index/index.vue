<template>
  <Page>
    <Navbar> 首页 </Navbar>
    <Content>
      <view v-for="(item, index) in 200" :key="index">
        {{ index + 1 }}
      </view>
    </Content>
  </Page>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
