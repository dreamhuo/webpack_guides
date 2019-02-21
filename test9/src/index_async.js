
async function getComponent() {
    var element = document.createElement('div');
    const _ = await import(/* webpackChunkName: 'lodash' */ 'lodash');
    element.innerHTML = _.join(['Hello1212', ' Hello', ' webpack'], '');
    return element;
}
setTimeout(() => {
    getComponent().then(component => {
        document.body.appendChild(component);
    });
}, 5000);
