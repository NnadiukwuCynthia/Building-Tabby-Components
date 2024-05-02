const Tabby = document.querySelector('.Tabby_container')
const Tabs = Array.from(Tabby.querySelectorAll('.tab'));
const tabContents = Array.from(Tabby.querySelectorAll('.tabs'));

Tabs.forEach(eachTab =>
    eachTab.addEventListener('click', () => {

        const target = eachTab.dataset.target
        const tabContent = Tabby.querySelector('#' + target)
        
        Tabs.forEach(eachTab => eachTab.classList.remove('is-selected'));
        eachTab.classList.add('is-selected')

        tabContents.forEach(eachTab => eachTab.classList.remove('is-selected'));
        tabContent.classList.add('is-selected')
        
    })
)

