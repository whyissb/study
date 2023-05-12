<template>
    <div>
    <Table class="table" :tableColumn="tableColumn" :tableData="tableData" :border="true"></Table>
    
    <el-pagination
      class="paginatuin"
     =
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :hide-on-single-page="value"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  
    </div>
</template>

<script>
import Table from '../components/com/table/table.vue'
export default {
    name: 'eWeq',
    components:{Table},
    data() {
        return {
            tableColumn: [
        {
          prop: "date",
          label: "日期",
          width: "180",
          align:'center'
        },
        {
          prop: "name",
          label: "姓名",
          width: "180",
          align:'center'
        },
        {
          prop: "age",
          label: "年龄",
          width: "180",
          align:'center'
        },
        {
          prop: "sex",
          label: "性别",
          width: "180",
          align:'center'
        },
        {
          prop: "address",
          label: "地址",
          width:"300",
          align:'center',
        },
        {
          label: "操作",
          width: "180",
          align:'center'
        },
      ],tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          age:18,
          sex:'男'
        },{
          date: '2016-05-01',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1519 弄',
        }, 
        {
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          age:18,
          sex:'男',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        ],
        };
    },

    mounted() {
        
    },

    methods: {
        eee(){
            this.a++
        }

        
    },
};
</script>

<style  scoped>
.paginatuin{
  margin-left: 50%;
}
.table{
  width: 80%;
  margin: 10px;
}
</style>