import App from './App.vue'
import AppCategory from './components/Category/Category.vue'
import AppList from './components/List/List.vue'
import AppInterface from './components/Interface/Interface.vue'
import AppDashboard from './components/Dashboard/Dashboard.vue'
import Welcome from './Welcome.vue'

const routes = [{
	path: '/',
	component: App,
	children: [{
		path: '/category/:cate',
		name: 'category',
		component: AppCategory,
		children: [{
			path: '/list/:lid',
			component: AppList,
			name: 'list',
			children: [{
				path: '/interface/:iid',
				component: AppInterface,
				name: 'interface'
			}]
		}]
	}, {
		path: '/dashboard',
		name: 'dashboard',
		component: AppDashboard
	}, {
		path: '',
		component: Welcome
	}]
}];

export default routes;