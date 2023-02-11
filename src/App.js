
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Your partner, Composite Taste Materials Scenarios provide longer-term"
        description="delivery, scaleup plan on minimize risks and uncertainties."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Your partner, Composite Taste Materials"
        description="we provide, the green iceberg lakehouse construction all the way"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="we provide what you need, You can easily get your app into material's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all materials while the second one shows the details of a specific delivery store."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>All good {" "}
        <span className="bold">internet.co</span>
        </p>
      </div>
    </>
  );
}

export default App;
