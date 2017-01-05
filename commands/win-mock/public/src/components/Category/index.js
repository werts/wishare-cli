export default {
	name: 'app-category',
	data() {
		return {

		}
	},
	methods: {
		getList(id) {
			if(undefined == id) {
				return;
			}
			this.$router.push({
				name: 'list',
				params: {
					lid: id
				}
			});
		}
	}
}