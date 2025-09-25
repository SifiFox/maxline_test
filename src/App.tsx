import { Layout, Header, Bonus, Hero } from './components';
import { FormLayout } from './components/widgets/form-layout';

function App() {
  return (
    <Layout>
      <Header />
      <Bonus />
      <div className="flex flex-col relative md:flex-row flex-1">
        <Hero className="w-full absolute inset-0 -top-20 md:-top-70 xl:bottom-0 xl:top-auto -left-4 md:-left-80 xl:left-10 -z-10" />
        <FormLayout className="mt-55 md:mt-140 h-full rounded-t-3xl lg:rounded-t-none relative xl:mt-0 xl:fixed xl:top-0 xl:right-0" />
      </div>
    </Layout>
  );
}

export default App;
