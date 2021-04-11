import { Header } from '../app/components/header';
import { Main } from '../app/components/main';
import { Footer } from '../app/components/footer';

export function App() {
    const app = document.createDocumentFragment();
    app.append(Header(), Main(), Footer());

    return app;
}