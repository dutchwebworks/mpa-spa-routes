const Step1 = { template: '<p>Step 1 of orderflow</p>' }
const Step2 = { template: '<p>Step 2 of orderflow</p>' }
const Step3 = { template: '<p>Step 3 of orderflow</p>' }

const router = new VueRouter({
    mode: "history",
    base: "/orderflow",
    routes : [
        {
            path: "/",
            component: Step1
        },
        {
            path: "/step-2",
            component: Step2
        },
        {
            path: "/step-3",
            component: Step3
        }
    ]
});

const app = new Vue({
    router: router
}).$mount("#app");