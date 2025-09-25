import { Layout, Header, Bonus, Hero } from '@/components/ui';
import { FormLayout } from '@widgets/form-layout';

function App() {
  return (
    <Layout>
      <Header />
      <Bonus />
      <div className="flex flex-col justify-end relative xl:flex-row flex-1">
        <Hero className="w-full absolute inset-0 bottom-40 top-auto md:bottom-0 xl:bottom-0 xl:top-auto -left-4 md:-left-80 xl:left-10 -z-10" />
        <FormLayout className="h-fit xl:h-full rounded-t-3xl lg:rounded-t-none relative xl:fixed xl:bottom-0 xl:right-0" />
      </div>
    </Layout>
  );
}

export default App;
