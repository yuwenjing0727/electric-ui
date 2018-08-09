import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/root'

//系统管理
import user from '@/components/content/struTable/admin/user'
import menu from '@/components/content/struTable/admin/menu'
import role from '@/components/content/struTable/admin/role'
import dict from '@/components/content/struTable/admin/dict'
import org from '@/components/content/struTable/admin/org'
import route from '@/components/content/struTable/admin/route'
import client from '@/components/content/struTable/admin/client'


//系统管理>日志管理
import loginlog from '@/components/content/struTable/admin/log/loginlog'
import handlelog from '@/components/content/struTable/admin/log/handlelog'
import auditlog from '@/components/content/struTable/admin/log/auditlog'
import exceptionlog from '@/components/content/struTable/admin/log/exceptionlog'
import facelog from '@/components/content/struTable/admin/log/facelog'

//基础数据管理
import marketmember from '@/components/content/struTable/basicdata/marketmember'
import settlementunit from '@/components/content/struTable/basicdata/settlementunit'
import meter from '@/components/content/struTable/basicdata/meter'
import tranchannel from '@/components/content/struTable/basicdata/tranchannel'
import tradepath from '@/components/content/struTable/basicdata/tradepath'
import settlementobj from '@/components/content/struTable/basicdata/settlementobj'




Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Root,
			redirect: 'user',
			children: [
			
				{
					path: 'user',
					component: user
				}, 
				{
					path: 'menu',
					component: menu
				},
				{
					path: 'menu',
					component: menu
				},
				{
					path: 'role',
					component: role
				},
				{
					path: 'dict',
					component: dict
				},
				{
					path: 'org',
					component: org
				},
				{
					path: 'loginlog',
					component: loginlog
				},
				{
					path: 'handlelog',
					component: handlelog
				},
				{
					path: 'auditlog',
					component: auditlog
				},
				{
					path: 'exceptionlog',
					component: exceptionlog
				},
				{
					path: 'facelog',
					component:facelog
				},

				//系统监控下
				{
					path: 'client',
					component: client
				},
				{
					path: 'route',
					component: route
				},


				//基础数据管理
				{
					path: 'marketmember',
					component: marketmember
				},
				{
					path: 'settlementunit',
					component: settlementunit
				},
				{
					path: 'meter',
					component: meter
				},
				{
					path: 'tranchannel',
					component: tranchannel
				},
				{
					path: 'tradepath',
					component: tradepath
				},
				{
					path: 'settlementobj',
					component: settlementobj
				},


			]
		}
	]
})
