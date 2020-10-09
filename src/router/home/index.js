
const Home = () => import('views/home/Home')
const Material = () => import('views/home/material/Material')
const Carry = () => import('views/home/carry/Carry')
const Servant = () => import('views/home/servant/Servant')
const Rubbish = () => import('views/home/rubbish/Rubbish')


export default {
  path: 'home',
  component: Home,
  children: [
    {
      path: '',
      redirect: '/main/home/material'
    },
    {
      path: 'material',
      component: Material
    },
    {
      path: 'carry',
      component: Carry
    },
    {
      path: 'servant',
      component: Servant
    },
    {
      path: 'rubbish',
      component: Rubbish
    },

  ]
}