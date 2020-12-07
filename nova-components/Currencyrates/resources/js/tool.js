Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'currencyrates',
      path: '/currencyrates',
      component: require('./components/Tool'),
    },
  ])
})
