<template>
  <div>
    <div>
      <h3>视频播放列表</h3>
    </div>
    <div class="control">
      <p>sintel</p>
      <vue3VideoPlay v-bind="options" title="sintel"
                         poster="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F8eb1e3dac82b4a0b8d9cb18b5858fdf1d4f63610.jpg&refer=http%3A%2F%2Fi1.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652943931&t=9e508fc486a03852cdc54e6c8446a80b"
                         src="https://media.w3.org/2010/05/sintel/trailer.mp4"
      />
    </div>
    <div class="control" >
      <p>big_buck_bunny</p>
      <vue3VideoPlay v-bind="options" title="big_buck_bunny"
                     poster="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.51vimeo.com%2Fdata%2Fattachment%2Fitem%2F1807%2F28%2F5b5c29c445015.jpg&refer=http%3A%2F%2Fwww.51vimeo.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652944087&t=6c02c9844fd85bfb9471ceb430d3e654"
                     src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      />
    </div>
    <div class="control">
      <p>brown bear</p>
      <vue3VideoPlay v-bind="options" title="brown bear"
                     poster="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg31.mtime.cn%2Fpi%2F2014%2F04%2F28%2F103350.45295542_1000X1000.jpg&refer=http%3A%2F%2Fimg31.mtime.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652944188&t=8029b6d10b4c2f3094e979b2175e3af0"
                     src="https://www.w3schools.com/html/movie.mp4"
      />
    </div>
  </div>
</template>

<script>
import "vue3-video-play/dist/style.css";
import  vue3VideoPlay  from "vue3-video-play";
import { reactive, toRefs } from "vue";
export default {
  components: {
    vue3VideoPlay
  },
  props:['video_url','poster'],
  setup(props){
    let data = reactive({
      options:{
        width: "100%", //播放器宽度
        height: "200px", //播放器高度
        color: "#409eff", //主题色
        //title: "", //视频名称
        //src:"https://media.w3.org/2010/05/sintel/trailer.mp4", //单个视频url地址可添加到这里
        //poster: "", //封面
        muted: true, //静音
        webFullScreen: false,
        speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
        autoPlay: false, //自动播放
        loop: false, //循环播放
        mirror: false, //镜像画面
        ligthOff: false, //关灯模式
        volume: 0.2, //默认音量大小
        control: true, //是否显示控制
        controlBtns: [
          "audioTrack",
          "quality",
          "speedRate",
          "volume",
          "setting",
          "pip",
          "pageFullScreen",
          "fullScreen",
        ], //显示所有按钮,
      },
      poster:props.poster
    });
    return {
      ...toRefs(data)  //  ...扩展运算符符
    }
  }
}
</script>

<style>
p{
  margin:0px;
  color:royalblue;
}
.control{
  text-align:left;
  margin-top:10px;
  padding-bottom:10px;
  background: aliceblue;
  border-bottom:2px solid royalblue
}
</style>
