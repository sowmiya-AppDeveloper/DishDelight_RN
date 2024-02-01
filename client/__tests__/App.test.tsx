// /**
//  * @format
//  */

// import 'react-native';
// import React from 'react';
// import App from '../src/Screens/App/App';

// // Note: import explicitly to use the types shiped with jest.
// import {it} from '@jest/globals';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

// **
//  * @format
//  */

// import React from 'react';
// import 'react-native';

// // Note: import explicitly to use the types shiped with jest.
// import {it} from '@jest/globals';

// // Note: test renderer must be required after react-native.
// import {FlatList, Text} from 'react-native';
// import renderer from 'react-test-renderer';

// it('renders the Flatlist componenet', () => {
//   const home = renderer
//     .create(
//       <FlatList
//         data={['item!', 'item2', 'item3']}
//         keyExtractor={item => item}
//         renderItem={({item}) => <Text>{item}</Text>}
//       />,
//     )
//     .toJSON();

//   expect(home).toMatchSnapshot();
// });
