<template>
  <div>
    <el-table :data="tableData" :border="border" :height="height" style="width: 80%">
      <template  v-for="(column,index) in tableColumn">{{tableColumn}}
            <el-table-column  :prop="column.prop" :fixed="fixed" :label="column.label" :width="column.width"  :key="index"></el-table-column>
        </template>
    </el-table>
  </div>
</template>

<script>
export default {  

  name: "tableDemo",
   props: {
     tableData:Array,
     tableColumn:Array,
     border:Boolean,
     height:Number,
     width:Number,
     fixed:String
  },
  data() {
    return {
      
      
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
</style>