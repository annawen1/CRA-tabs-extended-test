import DDSTabsExtended from '@carbon/ibmdotcom-web-components/es/components-react/tabs-extended/tabs-extended';
import DDSTab from '@carbon/ibmdotcom-web-components/es/components-react/tabs-extended/tab';
import './App.css';

function App() {
  return (
    <DDSTabsExtended orientation="vertical">
    <DDSTab label="First Tab">
      <p>First tab paragraph text</p>
    </DDSTab>
    <DDSTab label="Second Tab">
      <p>Second tab paragraph text</p>
    </DDSTab>
  </DDSTabsExtended>
  );
}

export default App;
