export default {
	name: 'app-aside',
	data() {
		return {
			isEdit: false
		}
	},
	created(){
		this.cats = [{
			id:1,
			name:'a'
		},{
			id:2,
			name:'b'
		}];
	},
	methods: {
		toggleInput() {
			this.isEdit = !this.isEdit;
		},
		addProject() {
			this.isEdit = false;
		},
		getCategory(cate) {
			if(undefined == cate) {
				return;
			}
			this.$router.push({
				name: 'category',
				params: {
					cate: cate
				}
			});
		}
	}
}