import { TreeView } from './components';
import './App.css';

const tree = [
  {
    label: 'Frontend',
    items: [
      {
        label: 'HTML',
        items: [
          
        ],
      },
      {
        label: 'CSS',
        items: [
          {
            label: 'Flex-box',
            items: [
              
            ],
          },
          {
            label: 'Grid',
            items: [
              
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Backend',
    items: [],
  }
]

function App() {
  return (
    <div className="App">
      <TreeView tree={tree} />
    </div>
  );
}

export default App;
