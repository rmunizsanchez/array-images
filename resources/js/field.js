import 'viewerjs/dist/viewer.css';
import VueViewer from 'v-viewer';
Nova.booting((app, store) => {
    app.use(VueViewer);
    app.component('index-array-images', require('./components/IndexField'));
    app.component('detail-array-images', require('./components/DetailField'));
    app.component('form-array-images', require('./components/FormField'));
})
