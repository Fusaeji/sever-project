<template>

    <div>
        <h1>Get Water By Id</h1>
        <hr>
        <p>ชื่อสวนน้ำ : {{ water.waterparkname }}</p>
        <p>พิกัด : {{ water.location }}</p>
        <p>เวลาเปิด-ปิด : {{ water.date }}</p>
        <p>เบอร์โทรศัพท์ : {{ water.telephone }}</p>
        <p>เว็บไซต์ : {{ water.website }}</p>
        <p>เรทราคา : {{ water.rateprice }}</p>
        <p>
        <button v-on:click="navigateTo('/water/edit/'+water.id)">แก้ไขข้อมูล</button>
        <button v-on:click="navigateTo('/waters')">กลับ</button>
        </p>
        <hr>
    </div>

</template>

<script>

import WaterService from '@/services/WaterService'

export default {

    data() {
        return {
            water: null
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

    async created() {
        try {
            let waterId = this.$route.params.waterId
            this.water = (await WaterService.show(waterId)).data
        } catch (error) {
            console.log(error)
        }
    }

}

</script>

<style scoped></style>