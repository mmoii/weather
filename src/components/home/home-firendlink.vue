<template>
  <div class="firendlink">
    <titleContent :titlearray="titlefirenlink"/>
    <div class="footer-firendlink">
      <div class="big-firend">
        <ul>
          <li>
            <Select
              v-model="model1"
              style="width:230px"
              placeholder="佛山辖区气象网站"
              @on-change="changecitylist">
              <Option
                v-for="item in cityList"
                :value="item.name"
                :key="item.index"
              >{{ item.name }}</Option>
            </Select>
          </li>
          <li>
            <Select
              v-model="model2"
              style="width:230px"
              placeholder="气象网站"
              @on-change="changewzlist">
              <Option
                v-for="item in wzList"
                :value="item.name"
                :key="item.index">{{ item.name }}</Option>
            </Select>
          </li>
          <li>
            <Select
              v-model="model3"
              style="width:230px"
              placeholder="气象微博"
              @on-change="changewblist">
              <Option
                v-for="item in wbList"
                :value="item.name"
                :key="item.index">{{ item.name }}</Option>
            </Select>
          </li>
          <li>
            <Select
              v-model="model4"
              style="width:230px"
              placeholder="政务网站"
              @on-change="changezwlist">
              <Option
                v-for="item in zwList"
                :value="item.name"
                :key="item.index">{{ item.name }}</Option>
            </Select>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部logo文字 -->

  </div>
</template>

<script>
import titleContent from './titlecontent'
import axios from 'axios'
import * as api from 'api/config'

export default {
  components: {
    titleContent
  },
  data () {
    return {
      titlefirenlink: '友情链接',
      model1: '',
      model2: '',
      model3: '',
      model4: '',
      cityList: [],
      wzList: [],
      wbList: [],
      zwList: []
    }
  },
  methods: {
    // 获取接口数据
    Getfirend () {
      axios.get(api.request_init).then(res => {
        // console.log(res)
        if (res.data && res.data.data) {
          const data = res.data.data.friendlyLinks
          for (var i = 0; i < data.length; i++) {
            if (data[i].parentId === 73) {
              this.cityList.push(data[i])
            }
            if (data[i].parentId === 78) {
              this.wzList.push(data[i])
            }
            if (data[i].parentId === 83) {
              this.wbList.push(data[i])
            }
            if (data[i].parentId === 90) {
              this.zwList.push(data[i])
            }
          }
        }
      })
    },
    // 选择下拉触发
    changecitylist (val) {
      for (var i = 0; i < this.cityList.length; i++) {
        if (this.cityList[i].name === val) {
          location.href = this.cityList[i].jumpUrl
        }
      }
    },
    changewzlist (val) {
      for (var i = 0; i < this.wzList.length; i++) {
        if (this.wzList[i].name === val) {
          location.href = this.wzList[i].jumpUrl
        }
      }
    },
    changewblist (val) {
      for (var i = 0; i < this.wbList.length; i++) {
        if (this.wbList[i].name === val) {
          location.href = this.wbList[i].jumpUrl
        }
      }
    },
    changezwlist (val) {
      for (var i = 0; i < this.zwList.length; i++) {
        if (this.zwList[i].name === val) {
          location.href = this.zwList[i].jumpUrl
        }
      }
    }
  },
  created () {
    this.Getfirend()
  }
}
</script>

<style lang="scss" scoped>
.firendlink {
  width: 1144px;
  margin: 0 auto;
  > .footer-firendlink {
    width: 100%;
    height: 104px;
    border-bottom: 1px solid #e3e3e3;
    overflow: hidden;
    margin-bottom: 10px;
    > .big-firend {
      width: 100%;
      > ul {
        > li {
          width: 24%;
          display: inline-block;
          margin-top: 38px;
          text-align: center;
        }
      }
    }
  }
}
</style>
