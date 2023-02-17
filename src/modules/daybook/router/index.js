export default{

    name:'daybook',
    component: () =>import('@/modules/daybook/layouts/DayBookLayout.vue'),
    children:[
        {
            path:'',
            name: 'no-entry',
            component: () =>import('../view/NoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component: () =>import('../view/EntryView.vue')
        }
    ]
}