let tabs = document.querySelectorAll('.tab'),
    contents = document.querySelectorAll('.content'),
    content1Modules = document.querySelectorAll('.content-1 .row .col-container'),
    content2Modules = document.querySelectorAll('.content-2 .row .col-container'),
    content3Modules = document.querySelectorAll('.content-3 .row .col-container'),
    descriptions = document.querySelectorAll('.description-division'),
    description1Next = document.querySelectorAll('.description-1 .next'),
    description2Next = document.querySelectorAll('.description-2 .next'),
    description3Next = document.querySelectorAll('.description-3 .next');

tabs.forEach((tab, index) => {
    tab.onclick = () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        contents.forEach(content => {
            content.classList.remove('active');
        })
        descriptions.forEach(description => {
            description.classList.remove('active');
        })
        let visibleContent = document.querySelector(`.content-${index + 1}`);
        visibleContent.classList.add('active');
        let visibleDescription = document.querySelector(`.description-${index + 1}`);
        visibleDescription.classList.add('active');
    }
})

content1Modules.forEach((module, index) => {
    module.onclick = () => {
        content1Modules.forEach(module => {
            module.parentElement.classList.remove('active');
        })
        module.parentElement.classList.add('active');
        let content1Descriptions = document.querySelectorAll('.description-1 .description-wrapper');
        content1Descriptions.forEach(description => {
            description.classList.remove('active');
        })
        let visibleDescription = document.querySelector(`.description-1 .module-${index + 1}`);
        visibleDescription.classList.add('active');
    }
})

content2Modules.forEach((module, index) => {
    module.onclick = () => {
        content2Modules.forEach(module => {
            module.parentElement.classList.remove('active');
        })
        module.parentElement.classList.add('active');
        let content1Descriptions = document.querySelectorAll('.description-2 .description-wrapper');
        content1Descriptions.forEach(description => {
            description.classList.remove('active');
        })
        let visibleDescription = document.querySelector(`.description-2 .module-${index + 1}`);
        visibleDescription.classList.add('active');
    }
})

content3Modules.forEach((module, index) => {
    module.onclick = () => {
        content3Modules.forEach(module => {
            module.parentElement.classList.remove('active');
        })
        module.parentElement.classList.add('active');
        let content1Descriptions = document.querySelectorAll('.description-3 .description-wrapper');
        content1Descriptions.forEach(description => {
            description.classList.remove('active');
        })
        let visibleDescription = document.querySelector(`.description-3 .module-${index + 1}`);
        visibleDescription.classList.add('active');
    }
})

//beginner next btn
description1Next.forEach((next, index) => {
    if (index != description1Next.length - 1) {

        next.onclick = (e) => {

            content1Modules.forEach(module => {
                module.parentElement.classList.remove('active');
                let description = document.querySelector('.description-1');

                description.querySelectorAll('.description-wrapper').forEach(wrapper => {
                    wrapper.classList.remove('active');
                })

            })

            let nextRow = document.querySelector(`.content-1 .row:nth-child(${index + 2})`);
            nextRow.classList.add('active');
            let nextModule = document.querySelector(`.description-1 .module-${index + 2}`);
            nextModule.classList.add('active');
        }

    }

})

//intermediate next btn
description2Next.forEach((next, index) => {
    if (index != description2Next.length - 1) {

        next.onclick = (e) => {

            content2Modules.forEach(module => {
                module.parentElement.classList.remove('active');
                let description = document.querySelector('.description-2');

                description.querySelectorAll('.description-wrapper').forEach(wrapper => {
                    wrapper.classList.remove('active');
                })

            })

            let nextRow = document.querySelector(`.content-2 .row:nth-child(${index + 2})`);
            nextRow.classList.add('active');
            let nextModule = document.querySelector(`.description-2 .module-${index + 2}`);
            nextModule.classList.add('active');
        }

    }

})

//advanced next btn

description3Next.forEach((next, index) => {
    if (index != description3Next.length - 1) {

        next.onclick = (e) => {

            content3Modules.forEach(module => {
                module.parentElement.classList.remove('active');
                let description = document.querySelector('.description-3');

                description.querySelectorAll('.description-wrapper').forEach(wrapper => {
                    wrapper.classList.remove('active');
                })

            })

            let nextRow = document.querySelector(`.content-3 .row:nth-child(${index + 2})`);
            nextRow.classList.add('active');
            let nextModule = document.querySelector(`.description-3 .module-${index + 2}`);
            nextModule.classList.add('active');
        }

    }

})

//on small size window tabs js
function smallWindow() {
    if (window.innerWidth <= 768) {

        // content1 modules js 

        content1Modules.forEach((module, index) => {
            content1Modules.forEach((module) => {
                module.parentElement.classList.remove('active');
            })
            module.onclick = () => {
                if (module.parentElement.classList.contains('active')) {
                    module.parentElement.classList.remove('active');
                } else {
                    module.parentElement.classList.add('active');
                }

                content1Modules.forEach(module2 => {
                    if (module2.parentElement.classList.contains('active') && module.parentElement.classList.contains('active')) {
                        if (module2.parentElement != module.parentElement) {
                            module2.parentElement.classList.remove('active');
                        }
                    }
                })
            }
        })

        // content2 module js 
        content2Modules.forEach((module, index) => {
            content2Modules.forEach((module) => {
                module.parentElement.classList.remove('active');
            })
            module.onclick = () => {
                if (module.parentElement.classList.contains('active')) {
                    module.parentElement.classList.remove('active');
                } else {
                    module.parentElement.classList.add('active');
                }

                content2Modules.forEach(module2 => {
                    if (module2.parentElement.classList.contains('active') && module.parentElement.classList.contains('active')) {
                        if (module2.parentElement != module.parentElement) {
                            module2.parentElement.classList.remove('active');
                        }
                    }
                })
            }
        })

        //content 3 module js 

        content3Modules.forEach((module, index) => {
            content3Modules.forEach((module) => {
                module.parentElement.classList.remove('active');
            })
            module.onclick = () => {
                if (module.parentElement.classList.contains('active')) {
                    module.parentElement.classList.remove('active');
                } else {
                    module.parentElement.classList.add('active');
                }

                content3Modules.forEach(module2 => {
                    if (module2.parentElement.classList.contains('active') && module.parentElement.classList.contains('active')) {
                        if (module2.parentElement != module.parentElement) {
                            module2.parentElement.classList.remove('active');
                        }
                    }
                })
            }
        })

    }
}

smallWindow();
window.onresize = () => {
    smallWindow();
}