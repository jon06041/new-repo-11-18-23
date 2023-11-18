
import {  Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import { List} from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options (see note 3)"  titleNumberOfLines={4}>
      <List.Accordion 
        title="RECOMMENDED REGIMEN" titleNumberOfLines={4}
        left={props => <List.Icon {...props}  icon={expandedone ? 'folder' : 'folder-open'}
        color={expandedone ? 'blue' : 'blue'}/>}
        onPress={handlePressone}
        >
         
        <List.Item  />
        <View>
          <Text style={styles.accordionText}>
          doxycycline 100 mg orally 2x/day for 7 days
          </Text>
        

        </View>
        
      </List.Accordion>

      <List.Accordion
        title="ALTERNATIVE REGIMEN" titleNumberOfLines={4}
        left={props => <List.Icon {...props}  icon={expandedtwo ? 'folder' : 'folder-open'}
        color={expandedtwo ? 'blue' : 'blue'} />}
        onPress={handlePresstwo}
        >
        <List.Item  />
        <View>
          <Text style={styles.accordionText}>

          azithromycin 1 gm orally in a single dose
          </Text>
        

        </View>
        
      </List.Accordion>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;








