import * as React from 'react';
import {  Text, View, ScrollView} from 'react-native';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);
  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
      <List.Accordion
        title="Recommended Regimen" titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
        color={expandedone ? 'blue' : 'blue'}/>}
        onPress={handlePressone}
        >
        <List.Item  />
        <View>
<Text NumberOfLines={4} style={styles.accordionText}>
doxycycline 100 mg orally 2x/day for 21 days
</Text>

        </View>
      </List.Accordion>
      <List.Accordion
              title="Alternate Regimens" titleNumberOfLines={4}
              left={(props) => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
              color={expandedtwo ? 'blue' : 'blue'} />}
              onPress={handlePresstwo}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text NumberOfLines={4} style={styles.accordionText}> azithromycin 1 gm orally 1x/week for 3 weeks <Text style={{fontSize: 8, lineHeight: 8}}> 20</Text> OR</Text>
              </View>
              <List.Item NumberOfLines={4} />
              <View>
                <Text NumberOfLines={4} style={styles.accordionText}>erythromycin base 500 mg orally 4x/day for 21 days</Text>
              </View>
            </List.Accordion>
     
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;
