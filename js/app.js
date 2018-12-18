const Step1 = { template: '<div>Step 1</div>' }
const Step2 = { template: '<div>Step 2</div>' }
const Step3 = { template: '<div>Step 3</div>' }

const router = new VueRouter({
    mode: "history",
    base: "/orderflow",
    routes : [
        {
            path: "/step-1",
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
    router,
}).$mount("#app");