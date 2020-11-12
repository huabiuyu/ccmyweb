<template>
	<div>
		<el-pagination
		    layout="prev, pager, next"
		    :total="total"
		    :page-size='pageSize'
		    :current-page="currentPage"
			class="page"
			@current-change="changePage"
		   >
		 </el-pagination>
	</div>
</template>

<script>
export default{
	name:'pagination',
	props:['Total'],
	data(){
		return{
			pageSize:8,
			total:40,
			currentPage: 1,
		}
	},
	created(){
		this.total=this.Total*this.pageSize;
		//console.log(this.Total);
	},
	watch:{
		Total(val){
			this.total=this.Total*this.pageSize;
			//console.log(this.total);
		}
	},
	methods:{
		changePage(page){
			this.currentPage=page;
			this.$emit('currentpage',this.currentPage);
		},
	}
}
</script>

<style scoped>
.page{

}
</style>