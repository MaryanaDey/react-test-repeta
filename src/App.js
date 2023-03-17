
// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';

// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Allert from './components/Alert/Alert'
import Alert from './components/Alert/Alert';


// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default function App() {
  return (
    <div>

      <Alert text="шеф всё пропало" type="success" />
      <Alert text="шеф всё пропало" type="warning" />
      <Alert text="шеф всё пропало"type="error"  />
       <Alert   text="шеф всё пропало"  />
      {/* <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее"></Section>

      <ColorPicker options={ colorPickerOptions} /> */}

    </div>
  );
}