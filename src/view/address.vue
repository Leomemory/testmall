<template>
    <div class="address">
        <!-- 导航栏 -->
        <div class="topNav">
            <span class="iconfont" @click="goBack()">&#xe660;</span>
            <div class="title">选择收货地址</div>
        </div>
        <!-- 地址列表内容 -->
        <div class="content">
            <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd()" @edit="onEdit()" add-button-text="新增地址" />
        </div>
    </div>
</template>

<script>
export default {
    name:'Address',
    data(){
        return{
            chosenAddressId:"1",
            list:[
                {
                    id:"1",
                    name:'张三',
                    tel:'234253611',
                    address:'浙江省杭州市'
                }
            ]
        }
    },
    methods:{
        // 回退
        goBack() {
            this.$router.push({
                path: "/cart"
            });
        },
        // 地址新增
        onAdd() {
            this.$router.push({
                path: "/addressedit"
            });
        },
    }
}
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.address{
  // 导航栏
  .topNav {
    box-sizing: border-box;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.24rem;
    background: #fff;
    border-bottom: 1px solid @bgColor;
    .title {
      font-size: @sizeL;
      margin-left: 2.8rem;
    }
    .iconfont {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
