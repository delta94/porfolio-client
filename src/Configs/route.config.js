export default [
  {
    key: 'about',
    path: '/about',
    name: 'About Me',
    icon: 'user',
    component: 'About/About',
  },
  {
    key: 'projects',
    path: '/projects',
    name: 'Projects',
    icon: 'code',
    component: 'Projects/Projects',
  },
  {
    key: 'blogs',
    path: '/blogs',
    name: 'Blogs',
    icon: 'solution',
    component: 'Blogs/Blogs',
  }, 
  {
    key: 'contact',
    path: '/contact',
    name: 'Contact',
    icon: 'phone',
    component: 'Contact/Contact',
  },
  {
    key: 'more-pages',
    path: '/more-pages',
    name: 'More Pages',
    icon: 'setting',
    routes: [
      {
        key: 'resume',
        path: '/resume',
        name: 'Resume',
        icon: 'profile',
        component: 'MorePages/Resume',
      },
      {
        key: 'quotations',
        path: '/quotations',
        name: 'Quotations',
        icon: 'coffee',
        component: 'MorePages/Quotations',
      },
      {
        key: 'default',
        path: '',
        redirect: '/more-pages/resume',
      },
      {
        key: 'failed',
        redirect: '/exception/404',
      }
    ]
  },
  {
    key: 'exception',
    path: '/exception',
    name: 'Exception',
    hideInMenu: true,
    routes: [
      {
        key: '404',
        path: '/404',
        component: 'Exception/404',
      },
      {
        key: '500',
        path: '/500',
        component: 'Exception/500',
      },
      {
        key: 'default',
        redirect: '/exception/404',
      },
    ]
  },
  {
    key: 'home',
    path: '/',
    redirect: '/about',
  },
  {
    key: 'notfound',
    redirect: '/exception/404',
  }
];