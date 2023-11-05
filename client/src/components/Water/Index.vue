<template>
    <div>
        <div class="background-image">
        <h2>ข้อมูลแนะนำสวนน้ำ</h2>
        <h4>จํานวนผู้ใช้งาน {{ waters.length }}</h4>
        <button v-on:click="navigateTo('/water/create')">เพิ่มข้อมูล</button>
        <hr>
        <div v-for="water in waters" v-bind:key="water.id">
            <p>ชื่อสวนน้ำ : {{ water.waterparkname }}</p>
            <p>วันเวลาเปิดปิด : {{ water.date }} </p>
            <p>เรทราคา : {{ water.rateprice }}</p>
            <p>
                <button v-on:click="navigateTo('/water/' + water.id)">ดูข้อมูลสวนน้ำ</button>
                <button v-on:click="navigateTo('/water/edit/' + water.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deleteWater(water)">ลบข้อมูล</button>

            </p>
            <hr>
        </div>
    </div>
    </div>
</template>

<script>

import WaterService from '@/services/WaterService'

export default {
    data() {
        return {
            waters: []
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteWater(water) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await WaterService.delete(water)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData() {
            this.waters = (await WaterService.index()).data
        }
    },

    async created() {
        this.waters = (await WaterService.index()).data
    }

}

</script>

<style scoped>
.background-image {
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(0, 191, 255);
  background-image: url('~@/pic/bg3.jpg');
  height: 100vh;
}

</style>
   