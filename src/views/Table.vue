<template>
  <div id="table-b">
    <a-table 
    :columns='columns' 
    :data-source='data' 
    id="table" 
    :scroll="{ y: 300 }" 
    :pagination="{ pageSize: 8 }" 
    bordered>
      <span slot="action" slot-scope="record" id="userAction">
        <a href="javascript:" @click='del(record.name, record.key)'>删除</a><a @click="more">关于{{record.name}}</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import Vue from 'vue'
import { Table } from 'ant-design-vue'
Vue.use (Table)

const columns = [
  {
    title: '名字',
    dataIndex: 'name',
    width: '10%',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: '10%'
  },
  {
    title: '学历',
    colSpan: 2,
    dataIndex: 'education',
    width: '20%',
    // scopedSlots: { customRender: 'action' }
  },
  {
    title: '学校',
    colSpan: 0,
    width: '30%',
    dataIndex: 'school'
  },
  {
    title: '操作',
    key: 'action',
    width: '30%',
    scopedSlots: { customRender: 'action' }
  }
]
const data = [
  {
    key: '0',
    name: 'xxx',
    age: 30,
    education: '本科',
    school: '成都信息工程大学'
  },
  {
    key: '1',
    name: 'xxx',
    age: 32,
    education: '本科',
    school: '成都信息工程大学'
  },
  {
    key: '2',
    name: 'xxx',
    age: 25,
    education: '研究生',
    school: '成都信息工程大学'
  },
  {
    key: '3',
    name: 'xxx',
    age: 17,
    education: '本科',
    school: '成都信息工程大学'
  },
  {
    key: '4',
    name: 'xxx',
    age: 20,
    education: '本科',
    school: '成都信息工程大学'
  },
  {
    key: '5',
    name: 'xxx',
    age: 28,
    education: '研究生',
    school: '成都信息工程大学'
  },
  {
    key: '6',
    name: 'xxx',
    age: 23,
    education: '本科',
    school: '成都信息工程大学'
  },
  {
    key: '7',
    name: 'xxx',
    age: 32,
    education: '本科',
    school: '成都信息工程大学'
  },
  {
    key: '8',
    name: 'xxx',
    age: 25,
    education: '专科',
    school: '成都信息工程大学'
  },
  {
    key: '9',
    name: 'xxx',
    age: 26,
    education: '本科',
    school: '成都信息工程大学'
  },
  {
    key: '10',
    name: 'xxx',
    age: 31,
    education: '本科',
    school: '成都信息工程大学'
  },
  {
    key: '11',
    name: 'xxx',
    age: 28,
    education: '研究生',
    school: '成都信息工程大学'
  },
]
export default {
  name: 'Table',
  data() {
    return {
      columns,
      data
    }
  },
  mounted() {
    
  },
  methods: {
    del(name, index) {
      const result = confirm('确定删除' + name + '?')
        if (result) {
          this.data.splice(index, 1);
          console.log('已删除')
        }
    },
    more() {
      window.open('https://www.antdv.com/components/table-cn/')
    }
  }
}
</script>

<style>
  #table {
    width: 700px;
    margin-top: 50px;
    margin-left: 450px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .3);
  }
  #userAction a {
    display: inline-block;
    text-align: center;
    height: 34px;
    background-color: #fff;
    border: 1px solid rgb(204, 204, 204);
    margin-right: 10px;
    padding: 5px;
    border-radius: 6px;
    box-sizing: border-box;
    transition: all 1s;
  }
  #userAction a:first-child:hover {
    background-color: rgb(248, 90, 90);
    /* color: #fff; */
  }
  #userAction a:last-child:hover {
    background-color: rgb(84, 188, 230);
    color: #fff
  }
</style>