<template>
    <div>
        <h1>เพิ่มข้อมูล</h1>
        <form v-on:submit.prevent="createWater">
            <p>ชื่อสวนน้ำ : <input type="text" v-model="water.waterparkname"></p>
            <p>พิกัด : <input type="text" v-model="water.location"> </p>
            <p>เวลาเปิด-ปิด : <input type="text" v-model="water.date"> </p>
            <p>เบอร์โทรศัพท์ : <input type="text" v-model="water.telephone"> </p>
            <p>เว็บไซต์ : <input type="text" v-model="water.website"> </p>
            <p>เรทราคา : <input type="text" v-model="water.rateprice"> </p>
            <p><button type="submit">ยืนยัน</button></p>
        </form>
    </div>
</template>
<script>

import WaterService from '@/services/WaterService'
export default {
    data() {
        return {

            water: {
                waterparkname: "",
                location: "",
                date: "",
                telephone: "",
                website: "",
                rateprice: ""

            }
        }
    },
    methods: {
        async createWater() {
            try {
                await WaterService.post(this.water)
                this.$router.push({
                    name: 'waters',
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped></style>