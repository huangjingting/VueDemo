<template>
  <div>
    <h2>{{city}}</h2>
    <h4>{{date}}</h4>
    <h4>{{message}}</h4>
    <ul>
      <li v-for="item in obj" :key="item.id">
        <div>
          <h3>{{item.date}}</h3>
          <h3>{{item.week}}</h3>
          <img :src="require('./../assets/durian/'+item.wea_img+'.png')" alt="">
          <h3>{{item.wea}}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'VueWeather',
  data () {
    return {
      city: '',
      obj: [],
      date: '',
      week: '',
      message: ''
    }
  },
  created () {
    var that = this
    //
    // this.$axios.get('/api?unescape=1&version=v9&cityid=101210101&appid=55462564&appsecret=nt9joYW4')
    this.$axios.get('/api', {
      params: {
        unescape: 1,
        version: 'v9',
        cityid: '101210101',
        appid: '14459691',
        appsecret: 'RQoahOG6'
      }
    }
    )
      .then(function (response) {
        // 处理数据
        that.city = response.data.city
        that.obj = response.data.data
        that.date = response.data.data[0].date
        that.week = response.data.data[0].week
        that.message = response.data.data[0].air_tips
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h1,h3{
   text-align:center;
   }
 h2,h4{
    text-align: center;
   }
 li{
    float: left;
    list-style: none;
    width: 200px;
    text-align: center;
    border: 0;
   }
</style>
