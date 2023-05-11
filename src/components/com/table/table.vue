<template>
  <div>
    <el-table :data="tableData" :border="border" :height="height">
      <template v-for="(column, index) in tableColumn"
        >{{ tableColumn }}
        <el-table-column
          v-if="column.label !== '操作'"
          :align="column.align"
          :prop="column.prop"
          :fixed="fixed"
          :label="column.label"
          :width="column.width"
          :key="index"
        ></el-table-column>
        <el-table-column
          v-if="column.label === '操作'"
          :key="index"
          label="操作"
          ><template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tableDemo",
  props: {
    tableData: Array,
    tableColumn: Array,
    border: Boolean,
    height: Number,
    width: Number,
    fixed: String,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
</style>