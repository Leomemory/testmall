<template>
    <div class="cart">
        <my-header>确认订单</my-header>

        <!-- 收货地址 -->
        <div class="address" @click="gotoAddress()">
            <div class="address_left">
                <i class="iconfont address_left_icon">&#xe64e;</i>
                <span>请填写收货地址</span>
            </div>
            <div class="address_right">
                <i class="iconfont address_right_icon">&#xe65f;</i>
            </div>
        </div>
    </div>
</template>

<script>
import myHeader from "@/components/myHeader.vue";
export default {
    name:'cart',
    components:{
        myHeader
    },
    methods:{
        // 回退
        goBack() {
            this.$router.go(-1);
        },
        // 回到首页
        goHome() {
            this.$router.push({
                path: "/"
            });
        },
        // 去购物车
        gotoAddress() {
            this.$router.push({
                path: "/address"
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";
.cart{
    // 收货地址
  .address {
    box-sizing: border-box;
    width: 100%;
    height: 46px;
    padding: 0 0.24rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #656c89;
    .address_left {
      font-size: @sizeM;
      color: #fff;
      line-height: 18px;
      .address_left_icon {
        color: #fff;
        font-weight: bold;
      }
    }
    .address_right {
      .address_right_icon {
        font-size: @sizeM;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
