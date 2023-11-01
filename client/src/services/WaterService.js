import Api from '@/services/Api'

export default {
    index(search) {
        return Api().get('waters')
    },
    show(waterId) {
        return Api().get('water/' + waterId)
    },
    post(water) {
        return Api().post('water', water)
    },
    put(water) {
        return Api().put('water/' + water.id, water)
    },
    delete(water) {
        return Api().delete('water/' + water.id, water)
    },
}