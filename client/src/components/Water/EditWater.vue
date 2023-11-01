<template>
    <div>
        <h1>Edit Water</h1>
        <form v-on:submit.prevent="editWater">
            <p>ชื่อสวนน้ำ : <input type="text" v-model="water.waterparkname"></p>
            <p>พิกัด : <input type="text" v-model="water.location"> </p>
            <p>เวลาเปิด-ปิด : <input type="text" v-model="water.date"> </p>
            <p>เบอร์โทรศัพท์ : <input type="text" v-model="water.telephone"> </p>
            <p>เว็บไซต์ : <input type="text" v-model="water.website"> </p>
            <p>เรทราคา : <input type="text" v-model="water.rateprice"> </p>
            <p><button type="submit">แก้ไขข้อมูล</button></p>
        </form>
        <hr>
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
        async editWater() {
            try {
                await WaterService.put(this.water)
                this.$router.push({
                    name: 'waters'
                })
            } catch (err) {
                console.log(err)
            }
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