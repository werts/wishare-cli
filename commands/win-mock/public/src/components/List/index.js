export default {
	name: 'app-list',
	data() {
		return {

		}
	},
	methods: {
		getInterface(id) {
			if (undefined == id){
				return;
			}

			this.$router.push({
				name: 'interface',
				params: {
					iid: id
				}
			});
		}
	}
}